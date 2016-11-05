(function () {
'use strict';

angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController',NarrowItDownController) //will wrap your search textbox and button as well as the list of found items.
.service('MenuSearchService',MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/menu_items.json.")
.dirctive('foundItems', foundItems);

function foundItems() {
  var ddo = {
    templateUrl: 'loader/itemsloaderindicator.template.html',
    scope: {
      items: '<',
      foundItems: '@title',
      onRemove: '&'
    },
    controller: foundItemsDirectiveController,
    controllerAs: 'foundItem',
    bindToController: true
  };

  return ddo;
}



NarrowItDownController.$inject=['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
	var menu = this;

	menu.matchitem = function(searchTerm){
		MenuSearchService.getMatchedMenuItems(searchTerm);
	};

}



MenuSearchService.$inject=['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath){
	var service = this;

	service.getMatchedMenuItems = function(searchTerm){
	    return $http({method: "GET", url: (ApiBasePath)}, params: {category: searchTerm})
	    .then(function (result) {
	        var foundItems = [];

	      // return processed items
	        return foundItems;
  	    });
	}

}













})();