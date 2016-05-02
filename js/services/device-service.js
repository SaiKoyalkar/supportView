'use strict';

app.factory('deviceService', ['$resource',
  function ($resource) {
      var url = "http://coriolis-provisioning2-dev.us-east-1.elasticbeanstalk.com/Coriolis/api/v1/supportview/device/details?realm=realm100";
      return $resource(url, {},{
          'get': {
              method: 'GET',
              withCredentials: true,
              transformResponse: function (data) {
                 return angular.fromJson(data).d;
              }
          }
      });
  }
]);