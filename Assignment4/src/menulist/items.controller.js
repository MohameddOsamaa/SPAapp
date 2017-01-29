(function(){


	angular.module('MenuApp')
	.controller('ItemsCtrl', ItemsCtrl)

	ItemsCtrl.$inject = ['items'];
	function ItemsCtrl (items){
		var itemsDetail = this;
		itemsDetail.items = items;
  	}
})();