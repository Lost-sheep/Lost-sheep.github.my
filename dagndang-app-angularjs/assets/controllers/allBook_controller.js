app.controller('booklistController',['$scope','commonService',function ($scope,commonService) {
  commonService.getData($routeParams.id ,function(res) {
      $scope.bookData=res.data;
    });
}]);
