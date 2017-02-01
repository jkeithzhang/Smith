angular.module('reviewApp')
	.config(['flashProvider',
		function(flashProvider) {
			flashProvider.successClassnames.push('alert-success');
			flashProvider.infoClassnames.push('alert-info');
			flashProvider.warnClassnames.push('alert-warning');
			flashProvider.errorClassnames.push('alert-danger');
		}
	])
	.config(['$routeProvider', 
		function($routeProvider) {
			$routeProvider
				.when('/loadNodes/:filter', {
					templateUrl: '../partials/loadNode',
					controller: 'loadNode',
					public: true
				})
				.otherwise({ redirectTo: '/loadNodes/free'});
		}
	])