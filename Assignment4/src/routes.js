(function(){

	angular.module('MenuApp')
	.config(RoutesConfig);


	RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];
	function RoutesConfig($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise('/');

		$stateProvider

		//homepage
		.state('home', {
			url:'/',
			templateUrl: 'src/menulist/templates/home.template.html'
		})

		// categories
		.state('categories',{
			url: '/categories',
			templateUrl: 'src/menulist/templates/categories.template.html',
			controller: 'CategoriesController as categories',
			resolve: {
				categories: ['MenuDataService', function (MenuDataService) {
        		return MenuDataService.getAllCategories();
				}]
			}
		})


		// itemlist
		// .state('items',{
		// 	url: '/items',
		// 	templateUrl: 'src/menulist/templates/item-detail.template.html',
		// 	controller: 'ItemCtrl as itemDetail',
		// 	resolve: {
		// 		items: ['MenuDataService', function (MenuDataService) {
  //       		return MenuDataService.getItemsForCategory();
		// 		}]
		// 	}

		// })
	}

})();