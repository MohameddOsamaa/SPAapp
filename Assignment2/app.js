(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);




ToBuyController.$inject=['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
    var Buy = this;

    Buy.buylist = ShoppingListCheckOffService.getItems();

    Buy.buylis = function(itemid){
    	ShoppingListCheckOffService.buylis(itemid);
    };

}

AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    var Bought = this;

    Bought.itemName = "";
    Bought.quantity = "";

    Bought.boughtlist = ShoppingListCheckOffService.getboughtlist();
   
}

function ShoppingListCheckOffService(){
	var service = this;
	var buylist = [
		{itemName: "cookies", quantity :10},
		{itemName: "icecream", quantity :10},
		{itemName: "chocolate", quantity :10},
		{itemName: "cake", quantity :10},
		{itemName: "chocolatecake", quantity :10},
		{itemName: "chocolatecookies", quantity :10},
	];
	var boughtlist = [];

	service.buylis = function(buyIndex){
		boughtlist.push(buylist[buyIndex]);
		buylist.splice(buyIndex, 1);
	};


	service.getItems = function () {
    	return buylist;
    	};
	
	service.getboughtlist = function () {
    	return boughtlist;
    	};

}



})();
