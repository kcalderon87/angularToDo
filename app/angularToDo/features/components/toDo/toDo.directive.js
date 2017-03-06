angular
    .module('angularToDo.component.toDo')
    .directive('todo', ToDo); 

function ToDo() {
    return {
        restrict: 'E',
        scope: {
            todoData: '='
        },
        templateUrl: '/angularToDo/features/components/toDo/toDo.html', 
        controller: ToDoCtrl, 
        controllerAs: 'ToDoVM', 
        bindToController: true 
    };
}

function ToDoCtrl() {
    var vm = this;
}
