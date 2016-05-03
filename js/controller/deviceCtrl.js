'use strict';

app.controller('deviceCtrl', function($scope, deviceService){

deviceService.get(function(response){
$scope.device=response;
}, function(error){

})

});