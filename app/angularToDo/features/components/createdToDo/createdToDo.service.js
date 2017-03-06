angular
	.module('angularToDo.component.createdToDo')
	.service('createdToDo', CreatedToDoService);

function CreatedToDoService() {
	var toDo = [
	        {
	            todo: 'Plan out homework',
	            date: 3/4/17
	        },

	    ]

	  function addToDo(toDoData) {
	  	toDo.push(todoData);
	  }

	return {
		toDo: toDo,
		addToDo: addToDo
	}
}