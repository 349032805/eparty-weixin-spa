'use strict';

angular.module('eparty')
  .controller('TestCtrl', function ($scope,$http,$location,urlService) {
	 $scope.goPage = function ($event) {
        $scope.page = $event.target.getAttribute('data');
        alert($scope.page);
    }

     $http({
          method:'GET',
          url:urlService.getBaseUrl()+'/api/v1/stores/6'
          // params:'';
      }).then(function(resp){
      console.log(resp.statusText);
        }, function(resp){
        console.log("fail...");
      });

      //   $http({
      //     method:'POST',
      //     url:urlService.getBaseUrl()+'/annehttp/report/detail',
      //     // params:{},
      //     data:{
      //      "storeId":3,
      //       "startDate":"2016-11-01",
      //       "reportType":2
      //     },
      // }).then(function(resp){
      //    console.log(resp.statusText);
      //   }, function(resp){
      //    console.log("fail...");
      // });

      //获取参数
    $scope.getParams = function () {
      var id  = $location.search().id;
      var tableCode  = $location.search().tableCode;
      alert(id);
      alert(tableCode);
    }


  });
