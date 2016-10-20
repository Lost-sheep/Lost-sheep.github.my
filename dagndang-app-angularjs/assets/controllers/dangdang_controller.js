app.controller('bookController',['$scope',function ($scope,bookController) {
  $scope.bookTypes = [
    {id:'fairytale',name:'儿童',img:'http://img3x8.ddimg.cn/92/12/24012938-1_l_8.jpg',description:'《太空猫：物理大爆炸》'},
    {id:'history',name:'历史',img:'http://img3x8.ddimg.cn/1/20/24027598-1_l_1.jpg',description:'《中国史纲》'},
    {id:'novel',name:'小说',img:'http://img3x4.ddimg.cn/73/26/23978764-1_l_22.jpg',description:'《行者玄奘》'},
    {id:'art',name:'文艺',img:'http://img3x4.ddimg.cn/37/20/24031594-1_l_5.jpg',description:'《白纸味儿的书》'},
    {id:'technology',name:'养生',img:'http://img3x5.ddimg.cn/26/1/24014555-1_l_6.jpg',description:'《肾好命就长》'}
  ];
}]);
