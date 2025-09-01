const btnAddNode = document.getElementById('btnAdd')
const listNode = document.getElementById('list')

btnAddNode.addEventListener(`click`, () => {
	let task = prompt(`Название задачи`)

	listNode.innerHTML += `				<div class="bg-white flex justify-between rounded-lg shadow p-4">
							${task}
							<div class="btn-items">
								<button type="button" class="cursor-pointer mr-3">
									<img src="/todo_list/src/img/pen.svg" alt="pen" class="" />
								</button>
								<button type="button" class="cursor-pointer">
									<img
										src="/todo_list/src/img/deletesvg.svg"
										alt="pen"
										class=""
									/>
								</button>
							</div>
						</div>`
})
