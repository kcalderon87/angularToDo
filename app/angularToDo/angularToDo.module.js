angular
    .module('angularToDo', [

        // Global Dependencies
        'ui.router',

        // Features
        'angularToDo.completed',
        'angularToDo.create',
        'angularToDo.list'
    ])
    .config(appConfig);

function appConfig($urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
}