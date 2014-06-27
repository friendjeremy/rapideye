'use strict';

// declare top-level module which depends on filters,and services
var myApp = angular.module('myApp',
    [   'myApp.filters',
        'myApp.directives', // custom directives
        'ngGrid', // angular grid
        'ui', // angular ui
        'ngSanitize', // for html-bind in ckeditor
        'ui.ace', // ace code editor
        'ui.bootstrap', // jquery ui bootstrap
        '$strap.directives' // angular strap
    ]);


var filters = angular.module('myApp.filters', []);
var directives = angular.module('myApp.directives', []);

// bootstrap angular
myApp.config(['$routeProvider', '$locationProvider', '$httpProvider', function ($routeProvider, $locationProvider, $httpProvider) {

    // TODO use html5 *no hash) where possible
    // $locationProvider.html5Mode(true);

    $routeProvider.when('/', {
        templateUrl:'partials/home.html'
    });
    $routeProvider.when('/fs2', {
        templateUrl:'partials/fs2/fs2.html',
        controller: 'FS2Controller'
    });
    $routeProvider.when('/contact', {
        templateUrl:'partials/contact.html'
    });
    $routeProvider.when('/about', {
        templateUrl:'partials/about.html'
    });
    $routeProvider.when('/donate', {
        templateUrl:'partials/donate.html'
    });
    $routeProvider.when('/events', {
        templateUrl:'partials/events.html'
    });
    $routeProvider.when('/mission', {
        templateUrl:'partials/mission.html'
    })

    // by default, redirect to site root
    $routeProvider.otherwise({
        redirectTo:'/'
    });

}]);

// this is run after angular is instantiated and bootstrapped
myApp.run(function ($rootScope, $location, $http, $timeout, AuthService, RESTService) {

    // *****
    // Eager load some data using simple REST client
    // *****

    $rootScope.restService = RESTService;

    // async load constants
    $rootScope.constants = [];
    $rootScope.restService.get('data/constants.json', function (data) {
            $rootScope.constants = data[0];
        }
    );

    // async load data do be used in table (playgound grid widget)
    $rootScope.listData = [];
    $rootScope.restService.get('data/generic-list.json', function (data) {
            $rootScope.listData = data;
        }
    );

    // TODO move this out to a more appropriate place
    $rootScope.faq = [
        {key: "What is Angular-Enterprise-Seed?", value: "A starting point for server-agnostic, REST based or static/mashup UI."},
        {key: "What are the pre-requisites for running the seed?", value: "Just an HTTP server.  Add your own backend."},
        {key: "How do I change styling (css)?", value:  "Change Bootstrap LESS and rebuild with the build.sh script.  This will update the appropriate css/image/font files."}
    ];


});