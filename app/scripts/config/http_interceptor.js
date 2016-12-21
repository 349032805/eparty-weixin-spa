  'use strict';

  angular.module('eparty').factory('httpInterceptor', [ '$q', '$injector',function($q, $injector) { 
    var httpInterceptor = {
      'responseError' : function(response) {
        var tipMsg ="";
        if (response.status == 401) { 
          var rootScope = $injector.get('$rootScope'); 
          var state = $injector.get('$rootScope').$state.current.name; 
          rootScope.stateBeforLogin = state; 
          rootScope.$state.go("login"); 

          tipMsg = "请重新登录";

        } else if (response.status == 404) {
           tipMsg = "请求错误";

        } else if (response.status == 400 || response.status == 500) {
          tipMsg = "服务器出错";

        } else if (response.status == 409) {
          tipMsg = response.statusText;
        }

        angular.element('#tipBubble').show();
        angular.element('#tipBubble').text(tipMsg);
        setTimeout(hideError,2000);

        return $q.reject(response); 
      }, 
      'response' : function(response) { 
        return response; 
      }
    };
    return httpInterceptor; 

    function hideError(){
       angular.element('#tipBubble').fadeOut();
    }

  }

]);

  angular.module('eparty').config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('httpInterceptor');
}]);

