(function(){

	angular.module('MenuApp')
	.component('categories',{
		templateUrl: 'src/menulist/templates/categories.template.html',
		bindings:{
			items: '<'
		}
	});
})();
