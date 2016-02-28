'use strict';

/**
 * @ngdoc function
 * @name wwwApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wwwApp
 */
angular.module('wwwApp')
  .controller('MainCtrl', function ($scope,$auth,$location) {
    $scope.loginForm={};
    $scope.loginForm.email='';
    $scope.loginForm.password='';
      $scope.isAuthenticated = function() {
          return $auth.isAuthenticated();
      };
      $scope.logout=function(){
          $auth.logout();
          location.reload();
      }
      $scope.login=function()  {
        $auth.login($scope.loginForm).then(
            function(response){
               location.reload();
                $location.path('/dashboard');

            },
            function(error){
                console.log(error)
            }
        )
    }

  });
