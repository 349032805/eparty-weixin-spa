'use strict';

angular.module('eparty')
  .controller('IndexCtrl', function ($scope,$timeout,$rootScope) {
  	 // setTimeout(function() {
  	 // 	angular.element(".load-flash").fadeOut();
    // }, 2000);


  	 if(!$rootScope.showTimes){
  	 	$timeout(function() {
  	 		angular.element(".load-flash").fadeOut();
        }, 2000);
        $rootScope.showTimes = 1;
  	}else{
  		angular.element(".load-flash").hide();
  	}
    
  });
