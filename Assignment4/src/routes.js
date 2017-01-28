(function(){

	angular.module('MenuApp')
	.config(RoutesConfig);


	RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];
	function RoutesConfig($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise('/');

		$stateProvider

		//homepage
		.state('home',{
			url:'/',
			templeteUrl: 'src/menulist/templates/home.template.html'
		})

		//categories
		.state('categories',{
			url: '/categories',
			templeteUrl: 'src/menulist/templates/categories.template.html',
			controller: 'CategoriesComponentController as categories',
			resolve: {
				categories: ['MenuDataService', function (MenuDataService) {
        		return MenuDataService.getAllCategories();
				}]
			}
		})


		//itemlist
		.state('items',{
			url: '/items',
			templeteUrl: 'src/menulist/templates/item-detail.template.html',
			controller: 'ItemsComponentController as itemDetail',
			resolve: {
				items: ['MenuDataService', function (MenuDataService) {
        		return MenuDataService.getItemsForCategory();
				}]
			}

		})
	}

})();