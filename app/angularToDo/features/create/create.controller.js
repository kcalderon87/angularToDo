angular
    .module('angularToDo.create')
    .controller('CreateCtrl', CreateCtrl);

function CreateCtrl($scope, $http) {
  var vm = this;

  vm.data = {
    text: '',
    date: ''
  };

    vm.createdata = function(){
    var entry = {
      actualTodo: vm.data.text,
      dueBy: vm.data.date
    };
    $http.post('/api/todos', entry)
    .then(function(data){
      console.log(data);
    });
  };

  // $http({
  //       method: 'GET',
  //       url: 'http://localhost:3000/create'
  //   }).then(function(response) {
  //       vm.data.text = response.data.results[0].actualTodo;
  //       vm.data.date = response.data.results[0].dueBy;
  //   });

}