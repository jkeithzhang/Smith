angular.module('reviewController')
	.controller('loadNode', ['$scope', '$http', 'Load', '$location', '$routeParams', 'ngTableParams', '$filter',
		function($scope, $http, Load, $location, $routeParams, ngTableParams, $filter) {
			var filter = $routeParams.filter;
			
			$scope.isActive = function(route) {
				return route === $location.path();
			}
			$scope.loadNodeList = function() {
				$scope.structuredNodes = {};
				var structuredNodes = {};

				$scope.user = {"authorized":true,"authenticated":true};
				Load.get(filter, $scope.user, {})
					.success(function(data) {
						$scope.filter = filter;
						$scope.tableParams = new ngTableParams({
							page: 1,            // show first page
							count: 10,          // count per page
							sorting: {
								'row': 'asc'     // initial sorting
							}
						}, {
							total: data.length, // length of data
							getData: function($defer, params) {
								var filteredData = params.filter() ? $filter('filter')(data, params.filter()) : data;
								var orderedData = params.sorting() ? $filter('orderBy')(filteredData, params.orderBy()) : data;
								params.total(orderedData.length);
								$defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
							}
						});
					})
					.error(function(data) {
						console.log("ERROR : " + data);
					});
			}
			$scope.loadNodeList();
		}
	])
	.controller('nodeReviewCtrl', ['$scope', 'Review', 'flash', 'Load',
		function($scope, Review, flash, Load) {			
			$scope.addNode = function(node) {
				Review.add(node)
					.success(function(data) {
						if(data.error) {
							flash.error = 'Review: ' + node.name + ' exists already!';
						} else {
							flash.success = 'Review: ' + node.name + ' has been added!';
						}

					})
					.error(function(data) {
						console.log(data)
					})
			}

			$scope.removeNode = function(node) {
				Review.remove(node)
					.success(function(data) {
						if (data.error) {
							flash.error = data.error;
						} else {
							flash.success = 'Review: ' + node.name + ' is removed!';
						}
					})
					.error(function(data) {
						console.log(data)
					});
			}
		}
	])