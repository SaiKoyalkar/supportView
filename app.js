'use strict';

var app = angular.module('viewsSupport', ['ui.bootstrap', 'ui.router']);
app.config(function(){



});

app.config(['$stateProvider', '$urlRouterProvider', function (stateProvider, urlRouterProvider) {

      /////////////////////////////
      // Redirects and Otherwise //
      /////////////////////////////

      // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
      urlRouterProvider

        // The `when` method says if the url is ever the 1st param, then redirect to the 2nd param
        // Here we are just setting up some convenience urls.
        /*.when('/c?id', '/contacts/:id')
        .when('/user/:id', '/contacts/:id')
*/

     //   .when('/home', '/home');

        // If the url is ever invalid, e.g. '/asdf', then redirect to '/' aka the home state
        .otherwise('/home');

      //////////////////////////
      // State Configurations //
      //////////////////////////

      // Use $stateProvider to configure your states.
      stateProvider

        .state("index", {
          abstract : true,
          templateUrl: 'views/home.html'
        })
		.state("home", {
            parent: 'index',
            url:"/home",
        		views:{
        		
          	}
    	   })

        .state('about', {
          url: '/about',
          templateUrl: 'views/about.html'
        })

        }]);
