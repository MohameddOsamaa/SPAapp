(function(){


	angular.module('MenuApp')
	.controller('ItemCtrl', ItemsCtrl)

	ItemsCtrl.$inject = ['$stateParams','items'];
	function ItemsCtrl ($stateParams,items){
		var itemDetail = this;
		var item = items[$stateParams.itemId];
  		itemDetail.name = item.name;
  		itemDetail.quantity = item.quantity;
  		itemDetail.description = item.description;
  	}
})();