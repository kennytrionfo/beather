/////////////////////////========MODULE=======\\\\\\\\\\\\\\\\\\\\\\\\\\\
var beatherApp = angular.module('beatherApp', ['ngRoute', 'ngResource']

);

/////////////////////////========CONTROLLERS=======\\\\\\\\\\\\\\\\\\\\\\\\\\\
beatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService){
	$scope.city = cityService.city;
	$scope.$watch('city', function(){
		cityService.city = $scope.city;
	});
}]);

beatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService){

	$scope.city = cityService.city;
	$scope.days = $routeParams.days || '2'; 				
	$scope.weatherApi = 
		$resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=d8f5102c89d08caf442ba64a6bcda871", 
			{
				callback: "JSON_CALLBACK" //this and the method below just says "it's ok to get this data. it's not a hack attempt."
			},
			{
				get: 
					{
						method: "JSONP"
					}
			}
		);
		$scope.weatherResult = $scope.weatherApi.get( 
			{
				q: $scope.city,
				cnt: $scope.days 
			});
		console.log($scope.weatherResult);

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
	.when('/forecast/:days', {
		templateUrl: 'pages/forecast.htm',
		controller: 'forecastController'
	});	
});

/////////////////////////========SERVICES=======\\\\\\\\\\\\\\\\\\\\\\\\\\\
beatherApp.service('cityService', function() {
	this.city = "Del Ray, FL";
});

/////////////////////////========DIRECTIVES=======\\\\\\\\\\\\\\\\\\\\\\\\\\\
beatherApp.directive("weatherReport", function() {
	return {
		restrict: 'E', 
		templateUrl: 'directives/weatherReport.html',
		replace: true,  
		// scope: {
		// 	weatherDay: "=", 
		// 	convertToStandard: "&",
		// 	convertToDate: "&",
		// 	dateFormat: "@"
		// }
	}
})

