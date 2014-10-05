(function(){

	'use strict';
	
	var app = angular.module('app', []);

	


		app.controller('ListController', function($scope, $http){

			$scope.elements = [];
			
			$http.get('data/data.json').success(function(data) {

			    $scope.elements = data;

 			});

		});


/*		app.controller('ThumbsController', function($scope, $http){
			$scope.index = 0;
			this.setSrc = function(i){
				if($scope.index !== i){
					$scope.index = i;
				};
			};			

			this.setCurrent = function(i){
				return $scope.index == i;
			};
		});*/

})();