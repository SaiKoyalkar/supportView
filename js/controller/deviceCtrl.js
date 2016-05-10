'use strict';

app.controller('deviceCtrl', function($scope, deviceService){

deviceService.get(function(response){
$scope.device=response;
}, function(error){

	$scope.device=error;

})

$scope.connectScreen = false;
$scope.connect = function(){
	$scope.connectScreen = true;

}

});