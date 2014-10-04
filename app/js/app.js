(function(){


	var app = angular.module('app', []);

		var elem = {
			name : 'Супер-героический JavaScript',
			id : 102,
			price : 2.80
		}


		app.controller('StoreController', function(){
			this.element = elem;
		})




})();