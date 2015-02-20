'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',

    'myApp.view1',
    'myApp.view2',
    'myApp.version'
]).
config(['$routeProvider', function($rp) {
    // var $rp = $routeProvider;
    $rp.otherwise({redirectTo: '/front'});
    // $rp.when("/front",function(){
    //     templateUrl: 'front.html',
    //     controller: 'FrontCtrl'
    // });
}]);
