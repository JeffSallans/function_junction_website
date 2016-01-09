"use strict";
angular.module('functionJunctionApp', [])
	.controller('TemplateController', ['$scope', '$http', function($scope, $http) {

		//Date for Copyright
		var date = new Date();
		$scope.year = date.getFullYear();

		//Google Drive data variables
		$scope.driveRepo = new GoogleSheetsRepository($http, _);
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

	}]);
