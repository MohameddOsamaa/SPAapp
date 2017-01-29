(function(){


	angular.module('MenuApp')
	.controller('ItemCtrl', ItemsCtrl)

	ItemsCtrl.$inject = ['items'];
	function ItemsCtrl (items){
		var itemDetail = this;
		itemDetail.items = items;
  	}
})();