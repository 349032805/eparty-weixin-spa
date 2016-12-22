'use strict';

angular.module('eparty')
  .controller('WaiterRankingCtrl', function ($scope) {

  	var list = [
   {
     "name": "张三",
     "score": 80,
     "num": 40
   },
   {
     "name": "尼古拉斯赵四",
     "score": 99,
     "num": 88
   },
   {
     "name": "王五",
     "score": 76,
     "num": 30
   },
    {
     "name": "田七",
     "score": 77,
     "num": 40
   }
  ];

  $scope.list = list;
  $scope.helloWorld = "你好,世界";

  });
