angular
    .module('angularToDo.list')
    .controller('ListCtrl', ListCtrl);

function ListCtrl(createdToDo) {
    var vm = this;

    console.log("list.controller.js");
}
