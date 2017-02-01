
angular.module('reviewService')
	.factory('_', function() {
		return window._;
	})
	.factory('mySharedService', ['$rootScope', 
		function($rootScope) {
			var sharedService = {};

		    sharedService.message = '';

		    sharedService.prepForBroadcast = function(msg) {
		        this.message = msg;
		        this.broadcastItem();
		    };

		    sharedService.broadcastItem = function() {
		    	console.log('broadcasting...')
		        $rootScope.$broadcast('handleBroadcast');
		    };

		    return sharedService;
		}
	])