'use strict';

angular.module('bonobo_island.register', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/register', {
    templateUrl: 'register/register.html',
    controller: 'registerCtrl'
  });
}])

.controller('registerCtrl', ['$http', '$scope', function($http, $scope) {
	$http.post('api/src/AppBundle/Controller/MainController.php', {formType:'register'})
	.then(function (response) {
		$scope.register = response.data;
	}, function(response) {
		$scope.register = "Impossible d'accéder au serveur.";
	});
}]);