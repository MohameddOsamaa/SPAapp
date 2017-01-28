(function(){

	angular.module('data')
	.component('items',{
		templetUrl: 'item-detail.template.html',
		controller: ItemsComponentController,
		binding:{
			items: '<'
		}
	});


	ItemsComponentController.$inject = ['$stateParams','items']
	function ItemsComponentController ($stateParams,items){
		var itemDetail = this;
		var item = items[$stateParams.itemId];
  		itemDetail.name = item.name;
  		itemDetail.quantity = item.quantity;
  		itemDetail.description = item.description;
	}
})();