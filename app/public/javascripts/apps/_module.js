var reviewApp = angular.module('reviewApp', [
	'ngRoute',
	'reviewController',
	'reviewService',
	'reviewFilter',
	'ngAnimate',
	'angular-flash.service', 
	'angular-flash.flash-alert-directive',
	'mgcrea.ngStrap',
	'angularSpinner',
	'ngTable'
]);