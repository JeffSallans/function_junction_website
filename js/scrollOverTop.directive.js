angular.module('functionJunctionApp')
	.directive('scrollOverTop', function($window){

		//Returns element top and left properties relative to the window
		//@param element {dom element} - element to get the top of
		//@returns {object}
		//  @prop top {int} - number of pixels from top
		//  @prop left {int} - number of pixels from left
		function getElementOffset(element)
		{
			var de = document.documentElement;
			var box = element.getBoundingClientRect();
			return box;
		}

	    return {

	        restrict: 'A',
	        link: function(scope, elem, attrs) {

	            angular.element($window).bind('scroll', function(evt) {

	               var elementOffset = getElementOffset(elem[0]);

	               //Determine if it scrolled past the window
	               scope.showStaticHeader = (elementOffset.top < -123);

	               scope.$apply();
	            });
	        }

	    }

	});