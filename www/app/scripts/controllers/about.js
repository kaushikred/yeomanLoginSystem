'use strict';

/**
 * @ngdoc function
 * @name wwwApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the wwwApp
 */
angular.module('wwwApp')
  .controller('AboutCtrl', function ($scope,$auth,$location) {
      $scope.logout=function(){
          $auth.logout();
          location.reload();
          $location.path('/');
      }
  });
