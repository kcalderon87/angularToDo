angular
    .module('angularToDo.component.toDoContent')
    .directive('todocontent', ToDoContent); 

function ToDoContent() {
    return {
        restrict: 'E',
        scope: {
            todocontentData: '='
        },
        templateUrl: '/angularToDo/features/components/toDoContent/toDoContent.html', 
        controller: ToDoContentCtrl, 
        controllerAs: 'ToDoContentVM', 
        bindToController: true 
    };
}

function ToDoContentCtrl() {
    //var vm = this;
}
