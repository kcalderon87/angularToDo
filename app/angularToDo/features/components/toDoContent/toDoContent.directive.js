angular
    .module('angularToDo.component.toDoContent')
    .directive('todocontent', toDoContent); 

function toDoContent() {
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

function ToDoCtrl() {
    //var vm = this;
}
