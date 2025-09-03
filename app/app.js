const btnAddNode = document.getElementById('btnAdd')
const listNode = document.getElementById('list')

// Ключ в LocalStorage, используемый для хранения списка задач
const STORAGE_KEY = 'todo_list_tasks'

// Загружаем сохранённый список при загрузке страницы
function loadFromStorage() {
	try {
		const raw = localStorage.getItem(STORAGE_KEY)
		if (!raw) return
		const tasks = JSON.parse(raw)

		// Очищаем текущий список и восстанавливаем из сохранённого
		listNode.innerHTML = ''
		tasks.forEach(task => {
			listNode.insertAdjacentHTML(
				'beforeend',
				`<div class="bg-white flex justify-between rounded-lg shadow p-4 task-item">
          <span class="task-name">${task.name}</span>
          <div class="btn-items">
            <button type="button" class="btn-edit cursor-pointer mr-3" title="Редактировать">
              <img src="/todo_list/src/img/pen.svg" alt="pen" />
            </button>
            <button type="button" class="btn-delete cursor-pointer" title="Удалить">
              <img src="/todo_list/src/img/deletesvg.svg" alt="удалить" />
            </button>
          </div>
        </div>`
			)
		})
	} catch (e) {
		console.error('Ошибка загрузки из LocalStorage', e)
	}
}

// Сохранение текущего списка в LocalStorage
function saveToStorage() {
	// Собираем массив задач из DOM
	const items = Array.from(listNode.querySelectorAll('.task-item'))
	const tasks = items.map(item => ({
		name: item.querySelector('.task-name')?.textContent ?? '',
	}))

	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
	} catch (e) {
		console.error('Не удалось сохранить в LocalStorage', e)
	}
}

// Обработчик редактирования
listNode.addEventListener(`click`, function (evt) {
	const target = evt.target

	if (target.closest('.btn-edit')) {
		const parent = target.closest(`.task-item`)
		const currentName = parent.querySelector('.task-name').textContent
		const task = prompt('task name', currentName)
		if (task !== null) {
			parent.querySelector('.task-name').textContent = task
			saveToStorage()
		}
	}

	// удаление
	if (target.closest('.btn-delete')) {
		const item = target.closest(`.task-item`)
		if (item) {
			item.remove()
			saveToStorage()
		}
	}
})

// Обработчик добавления
btnAddNode.addEventListener(`click`, function () {
	const task = prompt(`name task`)
	if (!task) return

	listNode.insertAdjacentHTML(
		'beforeend',
		`<div class="bg-white flex justify-between rounded-lg shadow p-4 task-item">
      <span class="task-name">${task}</span>
      <div class="btn-items">
        <button type="button" class="btn-edit cursor-pointer mr-3" title="Редактировать">
          <img src="/todo_list/src/img/pen.svg" alt="pen" />
        </button>
        <button type="button" class="btn-delete cursor-pointer" title="Удалить">
          <img src="/todo_list/src/img/deletesvg.svg" alt="удалить" />
        </button>
      </div>
    </div>`
	)
	saveToStorage()
})

// Инициализация при загрузке страницы
loadFromStorage()
