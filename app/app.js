const btnAddNode = document.getElementById('btnAdd')
const listNode = document.getElementById('list')

// target click
listNode.addEventListener('click', e => {
	const target = e.target

	// edit task
	if (target.closest('.btn-edit')) {
		const parent = target.closest('.task-item')
		const currentName = parent.querySelector('.task-name').textContent
		const task = prompt('Название задачи', currentName)
		if (task !== null) {
			parent.querySelector('.task-name').textContent = task
		}
	}

	// delete task
	if (target.closest('.btn-delete')) {
		const item = target.closest('.task-item')
		if (item) item.remove()
	}
})

// add task
btnAddNode.addEventListener('click', () => {
	const task = prompt('Название задачи')
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
})
