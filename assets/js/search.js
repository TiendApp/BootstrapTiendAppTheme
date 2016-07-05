angular.module('search', ['angucomplete-alt'])
.controller('searchController', ['$scope' , function($scope) {
  $scope.searchInputChanged = function(str){
    $scope.products.query = str;
  }
  $scope.searchObjectSelected = function(obj){
    if(obj != undefined && obj != null)
      $scope.products.query = obj.title;
  }
}]);


var app = angular.module('tiendAppFrontend');
app.requires.push('search');
