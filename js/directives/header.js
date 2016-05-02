'use strict';

app.directive("supportViewHeader", function(){
	return {
		link: function(scope, ele, attrs){

		},
		restrict:'C',
		replace:false,
		templateUrl: 'views/shared/header.html'
	}
});