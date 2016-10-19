app.factory('commonService',['$http',function ($http) {
  var service ={};
  
  service.getData = function (type ,callBack) {
    $http({
      url:'../../data/'+type+'.json',
      method:'get'
    })
    .then(function (res) {
      callBack(res);
    },function(err){
      console.dir(err);
    });
  };
}]);
