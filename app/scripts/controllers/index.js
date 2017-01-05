'use strict';

angular.module('eparty')
  .controller('IndexCtrl', function ($scope,$timeout,$rootScope) {
  	 // setTimeout(function() {
  	 // 	.....
    // }, 2000);


  	 if(!$rootScope.showTimes){
  	 	$timeout(function() {
  	 		// angular.element(".load-flash").fadeOut();
         $rootScope.showTimes = 1;
        }, 2000);
  	}else{
  		// angular.element(".load-flash").hide();
  	}
    
  });
