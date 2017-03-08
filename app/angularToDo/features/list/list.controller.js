angular
    .module('angularToDo.list') 
    .controller('ListCtrl', ListCtrl);

function ListCtrl($http) {
     $http.get('/api/todos').then(function(data){
       console.log(data);
     });
}

  angular
  	.module('checkboxExample', [])
    .controller('ExampleController', ['$scope', function($scope) {
      $scope.checkboxModel = {
       value1 : true,
       value2 : 'YES'
     };
    }]);