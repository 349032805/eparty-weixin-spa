'use strict';

angular.module('eparty')
  .controller('TestCtrl', function ($scope,$http,$location,$interval,$state,urlService) {

	 $scope.goPage = function ($event) {
        $scope.page = $event.target.getAttribute('data');
        // $scope.page = $event.target.innerText;
        // $scope.page = $event.target.innerHTML;
        alert($scope.page);
    }

    $scope.getModelValue = function () {
     var hello = $scope.hello;
     alert(hello);
   }

     $scope.getValue = function () {

     var targetEle = angular.element("#targetEle").val();
     var targetEle2 = angular.element("#targetEle2").text();
     alert(targetEle);
     alert(targetEle2);
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

    //js跳转页面
     $scope.gotoPage = function () {
         $state.go('index');
         // window.location.href="#/index";
         // $location.path('/index')
    }

    //短信验证码倒计时
    $scope.getSmsCode = function() {
      $scope.smsCodeCountDown = 10;
      var countDown = $interval(function() {
        $scope.smsCodeCountDown--;
        if ($scope.smsCodeCountDown <= 0) {
          $interval.cancel(countDown);
        }
      }, 1000);
    }



  });
