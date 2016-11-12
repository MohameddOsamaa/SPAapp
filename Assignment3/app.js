(function () {
'use strict';

angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController',NarrowItDownController) //will wrap your search textbox and button as well as the list of found items.
.service('MenuSearchService',MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', foundItems);

function foundItems() {
  var ddo = {
    templateUrl: 'itemsloaderindicator.html',
    scope: {
      founditem: '<',
      onRemove: '&'
    },
    controller: foundItemsDirectiveController,
    controllerAs: 'foundItem',
    bindToController: true
  };

  return ddo;
}


function foundItemsDirectiveController() {
  var foundItemctrl = this;
  
}


NarrowItDownController.$inject=['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
	var NIDCtrl = this;
  NIDCtrl.itemName = "";
  NIDCtrl.show = "";
  NIDCtrl.foundItems = [];

	NIDCtrl.matchitem = function(itemName){
    if(!NIDCtrl.itemName){
      NIDCtrl.show = "Nothing found";
      return;
    }
		var promise = MenuSearchService.getMatchedMenuItems();


    promise.then(function (response) {
      var menuItemList = response.data.menu_items;
      if(searchTerm){
        for(var i=0 ; i < menuItemList.length ; i++){
          if(menuItemList[i].descreption.indexOf(searchItem.toLowerCase()) !== -1){
            NIDCtrl.foundItems.push(menuItemList[i]);
          }
        }
      }
    })
	};

  NIDCtrl.removeItem = function (itemIndex) {
    foundItems.removeItem(itemIndex);
  };

}



MenuSearchService.$inject=['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath){
	var service = this;

  

	service.getMatchedMenuItems = function(){
	    var response =  $http({
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


// .then (function(response){
//           var menuItemList = response.data.menu_items;

//           var foundItems = [];
//           if(searchTerm){
//             for(var i=0 ; i < menuItemList.length ; i++){
//               if(menuItemList[i].descreption.indexOf(searchItem.toLowerCase()) !== -1){
//                 foundItems.push(menuItemList[i]);
//               }
//             }
//           }

//           return foundItems;
//       })