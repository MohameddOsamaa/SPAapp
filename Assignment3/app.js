(function () {
'use strict';

angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController',NarrowItDownController) //will wrap your search textbox and button as well as the list of found items.
.service('MenuSearchService',MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', foundItems);

function foundItems() {
  var ddo = {
    templateUrl: '',
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


function foundItemsDirectiveController() {
  var list = this;
  
}


NarrowItDownController.$inject=['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
	var list = this;
  list.itemName = "";

	list.matchitem = function(searchTerm){
		var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

    promise.then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
	};

  list.removeItem = function (itemIndex) {
    foundItems.removeItem(itemIndex);
  };

}



MenuSearchService.$inject=['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath){
	var service = this;

  var found = [];

	service.getMatchedMenuItems = function(searchTerm){
	    var response = $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json"),
        params: {category: searchTerm}
      });

      return response;

	};

  service.removeitem = function (itemIndex) {

    found.splice(Index,1);

  };

}

})();