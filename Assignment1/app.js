(function () {
'use strict';

angular.module('LunchCheckapp', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject=['$scope'];
function LunchCheckController($scope) {
    $scope.item = "";
    $scope.Nodishes = $scope.item;

    $scope.check = function () {
	    if($scope.Nodishes == 0  || $scope.Nodishes == "") {
	    	$scope.message = "Please enter data first";
	    }
	    else if ($scope.Nodishes.split(",").length <= 3) {
	    	$scope.message = "Enjoy!";
	    }
	    else {
	    	$scope.message = "Too much!";
	    }

    };
}

})();
