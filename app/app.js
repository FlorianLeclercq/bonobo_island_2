'use strict';

angular.module('bonobo_island', [
  'ngRoute',
  'bonobo_island.connection',
  'bonobo_island.register',
  'bonobo_island.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/connection'});
}]);