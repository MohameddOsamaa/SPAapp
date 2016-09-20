(function () {
'use strict';

angular.module('LunchCheckapp', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject=['$scope'];
function LunchCheckController($scope) {
  $scope.dishes = [];
  $scope.Nodishes = $scope.dishes.length;

  $scope.check = function () {
    if ($scope.Nodishes == 1 || $scope.Nodishes == 3) {
    	$scope.message = "Enjoy!";
    }
    else if ($scope.Nodishes > 3) {
    	$scope.message = "Too much!";
    }
    else if($scope.Nodishes === 0 ) {
    	$scope.message = "Please enter data first";
    }
  };
}

})();
