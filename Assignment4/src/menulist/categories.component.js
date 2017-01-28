(function(){

	angular.module('data')
	.component('categories',{
		templetUrl: 'categories.template.html',
		controller: CategoriesComponentController,
		binding:{
			categories: '<'
		}
	});


	CategoriesComponentController.$inject = ['MenuDataService','categories']
	function CategoriesComponentController (MenuDataService,categories){

		var categories = this;
		category.categories = categories;

	}

})();