angular
    .module('angularToDo.list')
    .controller('ListCtrl', ListCtrl);

function ListCtrl(completedToDo) {
    var vm = this;

    console.log("list.controller.js");
}
