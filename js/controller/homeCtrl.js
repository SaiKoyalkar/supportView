'use strict';

app.controller('homeCtrl', function($scope, homeService){
	homeService.get(function(response){
	$scope.deviceDetails=response;

	}, function(error){

		alert(error);

	//	$scope.home=error;
})

});