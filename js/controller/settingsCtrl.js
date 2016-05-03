'use strict';

app.controller('settingsCtrl', function($scope, settigsService){

	settingsService.get(function(response){
	$scope.settings=response;
	}, function(error){

		$scope.settings=error;

	})


});