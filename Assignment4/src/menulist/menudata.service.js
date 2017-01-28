(function() {

angular.module('data')
.service('MenuDataService',MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


MenuDataService.$inject=['$http', 'ApiBasePath'];
function MenuDataService($http, ApiBasePath) {

  	var service = this;

  	service.getAllCategories = function(){
      var service = this;
      var categories =  $http({
        method: "GET",
        url: (ApiBasePath + "/categories.json"),
      }).then(function (response) {
          return response.data;
      });

      return categories;
	  };

  	//  service.getItemsForCategory = function(categoryShortName){
   //      var service = this;
   //    var categoryname =  $http({
   //      method: "GET",
   //      url: (ApiBasePath + "/menu_items.json?category=" + categoryShortName),
   //    }).then(function (result) {
   //        return result.data.menu_items;

        
   //    });

   //    return categoryname;

  	// }
  }
})(); 


