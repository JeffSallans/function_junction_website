"use strict";
angular.module('functionJunctionApp', ['ngRoute', 'ui.bootstrap'])
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



	}])
	.controller('HomeCtrl', ['$scope', function($scope) {
		$scope.myInterval = 5000;
		$scope.noWrapSlides = false;
		$scope.slides = [
		{
			image: '//placekitten.com/600/300',
			title: 'Pediatric Specialty',
			text: 'Providing care for children and teens',
			id: currIndex++
		},
		{
			image: 'img/website/carousel/building.jpeg',
			title: 'Now Open!',
			text: 'January 14th',
			id: currIndex++
		},
		{
			image: 'img/website/carousel/sign.jpg',
			title: 'Located on M-24',
			text: '',
			id: currIndex++
		}
		];
		var currIndex = 0;

		$scope.addSlide = function() {
			var newWidth = 600 + $scope.slides.length + 1;
			$scope.slides.push({
				image: '//placekitten.com/' + newWidth + '/300',
				text: ['More','Extra','Lots of','Surplus'][$scope.slides.length % 4] + ' ' +
				['Cats', 'Kittys', 'Felines', 'Cutes'][$scope.slides.length % 4],
				id: currIndex++
			});
		};
	}])
	.config(['$routeProvider',
	  function($routeProvider) {
	    $routeProvider
	      .when('/home', {
	        templateUrl: 'home.html',
	        controller: 'HomeCtrl'
	      })
	      .when('/location', {
	        templateUrl: 'location.html'
	      })
	      .otherwise({
	        templateUrl: 'home.html'
	      });
	}]);
