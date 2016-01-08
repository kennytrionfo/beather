/////////////////////////========MODULE=======\\\\\\\\\\\\\\\\\\\\\\\\\\\
var beatherApp = angular.module('beatherApp', ['ngRoute', 'ngResource']

);

/////////////////////////========CONTROLLERS=======\\\\\\\\\\\\\\\\\\\\\\\\\\\
beatherApp.controller('homeController', ['$scope', function($scope){

}]);

beatherApp.controller('forecastController', ['$scope', function($scope){

}]);

/////////////////////////========ROUTES=======\\\\\\\\\\\\\\\\\\\\\\\\\\\
beatherApp.config(function ($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'pages/home.htm',
		controller: 'homeController'
	})
	.when('/forecast', {
		templateUrl: 'pages/forecast.htm',
		controller: 'forecastController'
	})

})


