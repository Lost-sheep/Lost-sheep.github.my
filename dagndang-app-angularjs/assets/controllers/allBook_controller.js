app.controller('booklistController',['$scope','commonService','$routeParams',function ($scope,commonService,$routeParams) {
   console.log($routeParams.id);
  commonService.getData($routeParams.id ,function(res) {
      $scope.bookData=res.data;
    });
}]);
