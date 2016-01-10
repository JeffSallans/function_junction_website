"use strict";
angular.module('functionJunctionApp', ['ngRoute'])
	.config(['$routeProvider',
	  function($routeProvider) {
	    $routeProvider
	      .when('/home', {
	        templateUrl: 'home.html'
	      })
	      .when('/location', {
	        templateUrl: 'location.html'
	      })
	      .otherwise({
	        templateUrl: 'home.html'
	      });
	}])
	.controller('MainCtrl', ['$scope', '$http', '$location', 
		function($scope, $http, $location) {

		//Date for Copyright
		var date = new Date();
		
		//{int}
		$scope.year = date.getFullYear();

		//{string}
		$scope.currentLocation = $location.url();

		//Set listener to update if page change
		$scope.$on('$locationChangeSuccess', function(event) {
		  $scope.currentLocation = $location.url();
		});

		//{bool} - True if the element is moved over the window
		$scope.showStaticHeader = false;

		//Google Drive data variables
		/*$scope.driveRepo = new GoogleSheetsRepository($http, _);
		$scope.fileName = null;

		$scope.getData = function() {

			$scope.errorMessage = null;

			$scope.driveRepo.getFile($scope.googleDriveLink)
				//Success
				.then(function(file) {
					console.log("Google Link Data: ", file);

					$scope.fileName = file.filename.name.replace('-Sheet1', '');
					$scope.jeopardyCategories = _.toArray(_.groupBy(file.data, function(e) {
						return e.category;
					}));
				},
				//Fail
				function(error) {
					$scope.errorMessage = error.message;
					console.error(error);
				})
		};
		*/



	}]);
