app.controller('mainController',['$scope','commonService',function ($scope,c_s) {
  c_s.getData('fairytale',function (res) {
    console.dir(res);
  });
  $scope.linkTo = function (index) {
    $scope.selectedIndex = index;
  };
}]);
