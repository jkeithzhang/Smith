angular.module('reviewService')
	.factory('Load', ['$http',
		function($http) {
			return {
				get: function(filter, me, sort) {
					return $http({
						url: '/api/loadNodes', 
						method: 'GET',
						params: {filter: filter, me: me, sort: sort}
					});
				}
			}
		}
	])
	.factory('Review', ['$http',
		function($http) {
			return {
				add: function(node) {
					return $http({
						url: '/api/addNode',
						method: 'POST',
						params: {node: node}
					});
				},
				remove: function(node) {
					return $http({
						url: '/api/removeNode',
						method: 'POST',
						params: {node: node}
					});
				}
			}
		}
	])