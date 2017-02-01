angular.module('reviewController')
	.controller('navCtrl', ['$scope', '$location',
		function($scope, $location) {
			$scope.isActive = function(route) {
				$scope.updateSubNavClass();
				return route === $location.path();
			}
			$scope.updateSubNavClass = function() {
				var res = $location.path().match(/\/loadNodes\/(\S+)/)
				if (res) {
					$scope.subNavClass = res[1];
				}

				var res = $location.path().match(/\/labMap\/(\S+)/)
				if (res) {
					$scope.subNavClass = res[1];
				}

				var res = $location.path().match(/\/parts/)
				if (res) {
					$scope.subNavClass = 'parts';
				}
			}
			$scope.updateSubNavClass();
		}
	])
	
