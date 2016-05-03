'use strict';

app.factory('storageService', ['$resource',
  function ($resource) {
      var url = "http://coriolis-provisioning-dev.us-east-1.elasticbeanstalk.com/Coriolis/api/v1/supportview/device/details?realm=realm100&carrier=RAK&assetKey=50ddfbe8-44d5-478a-98be-274dc0fb2040";
      return $resource(url, {},{
          'get': {
              method: 'GET',
              withCredentials: true,
              transformResponse: function (data) {
                 return angular.fromJson(data);
              }
          }
      });
  }
]);  