'use strict';

app.controller('batteryCtrl', function($scope, batteryService){


batteryService.get(function(response){
$scope.battery=response;
}, function(error){

	$scope.battery=error;

})


});