'use strict';

angular.module('eparty')
  .controller('TestCtrl', function ($scope) {

  	$scope.testRand = function(){
		var randNum1 = Math.floor(Math.random()*100+1);
	  	var randNum2 = Math.floor(Math.random()*100+1);

	  	var temp;
	  	if(randNum1 < randNum2){
	  		temp = randNum2;
	  		randNum2 = randNum1;
	  		randNum1 = temp;
	  	}
	  	// alert(randNum1+":"+randNum2);
	  	var columnHeight1 = randNum1/100*270; 
	  	var columnHeight2 = randNum2/100*270;
	  	// alert(columnHeight1);

	  	var topHeight1 = 270 - columnHeight1;
	  	var topHeight2 = 270 - columnHeight2;
	  	$("#secondColumn").css("height",columnHeight1).css("top",topHeight1);
	  	$("#thirdColumn").css("height",columnHeight2).css("top",topHeight2);
  	}
  

  });
