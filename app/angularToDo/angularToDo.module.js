angular
    .module('angularToDo', [

        // Global Dependencies
        'ui.router',

        // Features
        'angularToDo.list',
        'angularToDo.create'
        //'angularToDo.completed'
    ])
    .config(appConfig);

function appConfig($urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
}