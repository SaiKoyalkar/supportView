'use strict';

app.factory('settingService', ['$resource',
  function ($resource) {
      var url = "http://coriolis-provisioning-dev.us-east-1.elasticbeanstalk.com/Coriolis/api/v1/supportview/device/settings?realm=realm100";
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