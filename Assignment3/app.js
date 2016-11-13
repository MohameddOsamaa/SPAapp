(function () {
'use strict';

angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController',NarrowItDownController) //will wrap your search textbox and button as well as the list of found items.
.service('MenuSearchService',MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItems);

function FoundItems() {
  var ddo = {
    templateUrl: 'itemsloader.html',
    scope: {
      items: '<',
      onRemove: '&'
    }
  };

  return ddo;
}



NarrowItDownController.$inject=['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
	var list = this;
  list.itemName = "";
  list.items = [];
  


	list.matchitem = function(){
    list.items = [];
    if(!list.itemName){
      list.show = "Nothing found";
      return;
    }
		var promise = MenuSearchService.getMatchedMenuItems(list.itemName);

    promise.then(function(items) {
      list.items = items;
   
      list.show = "";
    })
    .catch(function(error) {
      list.show = "Nothing found";
    });
	}

  list.removeItem = function (itemIndex) {
    list.items.splice(itemIndex,1);
  };

}



MenuSearchService.$inject=['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath){
	var service = this;

  

	service.getMatchedMenuItems = function(itemName){
    var service = this;
    var foundItems = [];
	    return  $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json"),
      }).then(function (response) {
        var show = "";
          var menuItemList = response.data.menu_items;
          var foundItems = [];
          for(var i=0; i < menuItemList.length; i++){

            if(menuItemList[i].description.indexOf(itemName) !== -1){

              foundItems.push(menuItemList[i]);

              console.log("matched   i=" + i);
            }
          };
          return foundItems;

          if (foundItems.length <= 0) {
            show = "Nothing found";
          }
      });
  };


  service.removeitem = function (itemIndex) {
    foundItems.splice(itemIndex,1);
  };

}

})();