/*jshint undef: false, unused: false, indent: 2*/
/*global angular: false */


'use strict';

// Declare app level module which depends on other modules
angular.module('demoApp', [
    'ngRoute',
    'as.sortable',
    'ui.bootstrap'
  ]).
  config(['$routeProvider', function ($routeProvider) {
    //$routeProvider.when('/', {templateUrl: 'views/kanban.html'});
    $routeProvider.when('/list', {templateUrl: 'views/list.html', controller: 'listController'});
    $routeProvider.otherwise({redirectTo: '/list'});
  }]).
  controller('DemoController', ['$scope', '$location', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
      var active = false;
      if ($location.$$path.lastIndexOf(viewLocation, 0) != -1) {
        active = true;
      }
      return active;
    };

  }]);
