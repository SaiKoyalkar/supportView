'use strict';

app.controller('homeCtrl', function($scope, homeService){
	homeService.get(function(response){
	$scope.home=response;
	}, function(error){

		$scope.home=error;
})

});