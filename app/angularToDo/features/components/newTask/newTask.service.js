angular
	.module('angularToDo.component.newTask')
	.service('newtask', NewTaskService);

function NewTaskService($http) {
	var task = [];

    $http({
        method: 'GET',
        url: 'http://localhost:3000/newtask'
    }).then(function(response) {
        response.data.forEach(function(item) {
            task.push(item);
        });
    });

    function addNewTask(newtaskData) {
        task.push(newtaskData);
        $http({
            method: 'POST',
            url: 'http://localhost:3000/newtask',
            data: newtaskData
        }).then(function(response) {
            
        });
    }

	return {
		task: task,
        addNewTask: addNewTask
	}
}