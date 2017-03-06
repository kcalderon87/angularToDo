angular
    .module('angularToDo.create')
    .controller('CreateCtrl', CreateCtrl);

function CreateCtrl($scope, createdToDo) {
    var vm = this;
    resetView();

function resetView () {
	    vm.create = {
        toDo: '',
        completeby: ''
    };
}

vm.addToDo = function() {
        createdToDo.addToDo(vm.create);
        resetView();

    }
}