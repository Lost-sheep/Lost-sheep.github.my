app.controller('booklistController',['$scope','commonService',function ($scope,commonService) {
   console.log($routeParams.id);
  commonService.getData($routeParams.id ,function(res) {
      $scope.bookData=res.data;
    });
}]);
