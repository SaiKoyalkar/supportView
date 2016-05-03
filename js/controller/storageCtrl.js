'use strict';

app.controller('storageCtrl', function($scope, storageService){

storageService.get(function(response){
$scope.storage=response;
}, function(error){

	$scope.storage=error;

})


});