"use strict";
angular.module('functionJunctionApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap'])
	.controller('MainCtrl', ['$scope', '$http', '$location', '$anchorScroll',  
		function($scope, $http, $location, $anchorScroll) {

		//Date for Copyright
		var date = new Date();
		
		//{int}
		$scope.year = date.getFullYear();

		//{string}
		$scope.currentLocation = $location.url();

		//Set listener to update if page change
		$scope.$on('$locationChangeSuccess', function(event) {
		  $scope.currentLocation = $location.url();

		  //Scroll to top of page
		  $anchorScroll();
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
	.controller('HomeCtrl', ['$scope', '$location', function($scope, $location) {
		
		$scope.myInterval = 5000;
		$scope.noWrapSlides = false;

		var currIndex = 0;

		$scope.slides = [
		/*{
			image: '//placekitten.com/600/300',
			title: 'Pediatric Specialty',
			text: 'Providing care for children and teens',
			id: currIndex++
		},
		*/
		{
			image: 'img/website/carousel/experienced-v2.jpg',
			title: '',
			text: '',
			id: currIndex++
		},
		{
			image: 'img/website/carousel/accepting-new-patients-v2.jpg',
			title: '',
			text: '',
			id: currIndex++
		},
		{
			image: 'img/website/carousel/office.jpg',
			title: '',
			text: '',
			id: currIndex++
		}
		];

		$scope.goToServices = function() {
			$location.url('/services');
		};

		$scope.goToStaff = function() {
			$location.url('/staff');
		};
	}])
	.controller('ServiceCtrl', ['$scope', function($scope) {

		//{Object with bool properties}
		$scope.showAdditionalDescription = {};

		//Shows additional description details
		//@param serviceName {string} - Name of profile to show 2nd description
		//@modifies $scope.showAdditionalDescription
		$scope.readmore = function(serviceName) {
			$scope.showAdditionalDescription[serviceName] = true;
		}
	}])
	.controller('InsuranceCtrl', ['$scope', function($scope) {

	}])
	.controller('StaffCtrl', ['$scope', function($scope) {

		//{Object with bool properties}
		$scope.showAdditionalDescription = {};

		//Shows additional description details
		//@param profileName {string} - Name of profile to show 2nd description
		//@modifies $scope.showAdditionalDescription
		$scope.readmore = function(profileName) {
			$scope.showAdditionalDescription[profileName] = true;
		}
	}])
	.config(['$routeProvider',
	  function($routeProvider) {
	    $routeProvider
	      .when('/home', {
	        templateUrl: 'home.html',
	        controller: 'HomeCtrl'
	      })
	      .when('/services', {
	        templateUrl: 'services.html',
	        controller: 'ServiceCtrl'
	      })
  	      .when('/insurance', {
	        templateUrl: 'insurance.html',
	        controller: 'InsuranceCtrl'
	      })
	      .when('/staff', {
	        templateUrl: 'staff.html',
	        controller: 'StaffCtrl'
	      })
	      .when('/location', {
	        templateUrl: 'location.html'
	      })
	      .otherwise({
	        templateUrl: 'home.html',
	        controller: 'HomeCtrl'
	      });
	}]);
