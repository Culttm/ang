(function(){

	'use strict';
	
	var app = angular.module('appControllers', []);

	
	app.controller('ListController', ['$http', '$scope', function($http, $scope){

		$scope.elements = [];
		
		$http.get('data/data.json').success(function(data) {

	    	$scope.elements = data;

		});

	}]);


})();