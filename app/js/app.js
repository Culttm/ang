(function(){


	var app = angular.module('app', []);

		var data =[
			{
				name : 'Супер-героический JavaScript',
				id : 102,
				val : 5,
				disable : true,
				icon:'images/icons/like10.png',
				description : 'Первая и вторая линия обороны на восточной границе Украины готовы на 80 процентов. Об этом заявил президент Украины Петр Порошенко во время посещения полигона сухопутных войск ВСУ в Житомирской области. По его словам, на границе успешно идет строительство блиндажей и фортикационных сооружений'
			},
			{
				name : 'Супер-героический CSS3',
				id : 120,
				val : 3,
				observable : false,
				icon:'images/icons/like2.png',				
				description : 'Первая и вторая линия обороны на восточной границе Украины готовы на 80 процентов. Об этом заявил президент Украины Петр Порошенко во время посещения полигона сухопутных войск ВСУ в Житомирской области. По его словам, на границе успешно идет строительство блиндажей и фортикационных сооружений'				

			},
			{
				name : 'Супер-героический Html5',
				id : 102,
				val : 4,
				disable : false,
				icon:'images/icons/like7.png',				
				description : 'Первая и вторая линия обороны на восточной границе Украины готовы на 80 процентов. Об этом заявил президент Украины Петр Порошенко во время посещения полигона сухопутных войск ВСУ в Житомирской области. По его словам, на границе успешно идет строительство блиндажей и фортикационных сооружений'				
			},
			{
				name : 'Супер-героический Json',
				id : 120,
				val : 1,
				observable : true,
				icon:'images/icons/like9.png',				
				description : 'Первая и вторая линия обороны на восточной границе Украины готовы на 80 процентов. Об этом заявил президент Украины Петр Порошенко во время посещения полигона сухопутных войск ВСУ в Житомирской области. По его словам, на границе успешно идет строительство блиндажей и фортикационных сооружений'				

			}
		] 


		app.controller('StoreController', function(){
			this.elements = data;
		})




})();