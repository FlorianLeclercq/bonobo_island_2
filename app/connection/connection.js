'use strict';

angular.module('bonobo_island.connection', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/connection', {
    templateUrl: 'connection/connection.html',
    controller: 'connectionCtrl'
  });
}])

.controller('connectionCtrl', ['$http', '$scope', function($http, $scope) {
	$http.post('api/src/AppBundle/Controller/MainController.php', {formType:'connection'})
	.then(function (response) {
		$scope.connection = response.data;
	}, function(response) {
		$scope.connection = "Impossible d'accéder au serveur.";
	});
}]);


		
