app.controller('bookController',['$scope',function (bookController) {
  $scope.bookTypes = [
    {id:'fairytale',name:'儿童',img:'',description:''},
    {id:'history',name:'历史',img:'',description:''},
    {id:'novel',name:'小说',img:'',description:''},
    {id:'art',name:'文艺',img:'',description:''},
    {id:'technology',name:'养生',img:'',description:''}
  ];
}]);
