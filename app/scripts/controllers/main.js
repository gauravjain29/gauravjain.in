'use strict';

/**
 * @ngdoc function
 * @name webappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webappApp
 */
angular.module('webappApp')
  .controller('MainCtrl', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.messageState = 0;
    $scope.sendEmail = function()
    {
    	$scope.messageState = 2;
		var postData = JSON.stringify({senderName: $scope.name, senderEmail: $scope.email, msg: $scope.msg});

		var settings = {
			"async": true,
			"crossDomain": true,
			"url": "https://nodejs-sendgrid-api.herokuapp.com/sendEmail",
			"method": "POST",
			"headers": {
			"content-type": "application/json"
			},
			"processData": false,
			data: postData
		}

		$.ajax(settings).done(function (response) {
		  console.log(response);
		  if(response == 'SUCCESS')
		  {
		  	$scope.messageState = 1;
		  }
		  else
		  {
		  	$scope.messageState = -1;
		  }
		  $scope.$digest();
		});
    }

  });
