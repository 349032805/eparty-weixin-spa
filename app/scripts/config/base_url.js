  'use strict';

  	//开发环境请求地址
  	var baseUrl = "";
    // var baseUrl = "http://192.168.132.102:8080";

  	//生产环境请求地址
  	// var baseUrl = "http://";

   angular.module('eparty').service('urlService',function() { 
    var urlService = {
        getBaseUrl:getBaseUrl
    };
    return urlService;

   	function getBaseUrl() {
   		return baseUrl;
    }

  }  
);

