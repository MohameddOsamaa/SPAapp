(function() {

angular.module('data')
.service('MenuDataService',MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


MenuDataService.$inject=['$http', 'ApiBasePath'];
function MenuDataService($http, ApiBasePath) {

  	var service = this;

  	service.getAllCategories = function(){
      var service = this;
      var foundItems = [];
      return  $http({
        method: "GET",
        url: (ApiBasePath + "/categories.json"),
      }).then(function (response) {
        var show = "";
          var menuItemList = response.data.menu_items;
          var foundItems = [];
          for(var i=0; i < menuItemList.length; i++){

            if(menuItemList[i].description !== -1){

              foundItems.push(menuItemList[i]);

              console.log("matched   i=" + i);
            }
          };
          return foundItems;

          if (foundItems.length <= 0) {
            show = "Nothing found";
          }
      });
  		// var allcategories = [];
  		// return $http({
  		// 	method: "GET"
  		// 	url: (ApiBasePath + "/categories.json"),
  		// }).then(function(response){
  		// 	var categories = "";
  		// 	var allcategories = response.data.categories;
  		// 	var getAllCategories = [];
  		// 	for(var i=0; i< getAllCategories; i++){
  		// 		if(allcategories[i].description !== -1){
  		// 			getAllCategories.push(getAllCategories[i]);
  		// 		}
  		// 	};
  		// 	return getAllCategories;
  		// 	if(getAllCategories.length<=0){
  		// 		categories = "Nothing found";
  		// 	}
  		// });
	};

  	 service.getItemsForCategory = function(categoryShortName){
        var service = this;
        var foundItems = [];
      return  $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json?category="),
      }).then(function (response) {
        var show = "";
          var menuItemList = response.data.menu_items;
          var foundItems = [];
          for(var i=0; i < menuItemList.length; i++){

            if(menuItemList[i].description.indexOf(categoryShortName) !== -1){

              foundItems.push(menuItemList[i]);

              console.log("matched   i=" + i);
            }
          };
          return foundItems;

          if (foundItems.length <= 0) {
            show = "Nothing found";
          }
      });

  	// 	var categoryname = [];
  	// 	return $http({
  	// 		method: "GET"
  	// 		// url: (ApiBasePath + "/menu_items.json?category="),
  	// 	}).then(function(response){
  	// 		var show = "";
  	// 		var categoryname = response.data.menu_items;
  	// 		var getcategory = [];
	  //       for(var i=0; i < getcategory.length; i++){

	  //           if(categoryname[i].description.indexOf(categoryShortName) !== -1){

	  //             getcategory.push(getcategory[i]);
	  //           }
	  //       };
	  //       return getcategory;

	  //         if (getcategory.length <= 0) {
	  //           show = "Nothing found";
	  //       }
   //    });

  	}
  }
})(); 


