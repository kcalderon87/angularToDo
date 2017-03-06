angular
    .module('angularToDo', [

        // Global Dependencies
        'ui.router',

        // Features
        'angularToDo.list'
        //'createAHero.home',
        //'createAHero.story'
    ])
    .config(appConfig);

function appConfig($urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
}