'use strict';

/**
 * @ngdoc function
 * @name wwwApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wwwApp
 */
angular.module('wwwApp')
  .controller('MainCtrl', function ($scope,$auth,$location,$rootScope,$http) {
    $scope.loginForm={};
    $scope.loginForm.email='';
    $scope.loginForm.password='';
      $scope.isAuthenticated = function() {
          return $auth.isAuthenticated();
      };
      $scope.logout=function(){

          $auth.logout();
          localStorage.removeItem('user');
          $rootScope.authenticated = false;
          $rootScope.currentUser = null;
         location.reload();
      }
      $scope.login=function()  {
        $auth.login($scope.loginForm).then(
            function() {


            //    location.reload();
             //  $location.path('/dashboard');
                console.log('hii1');

                return $http.get('http://localhost:8000/api/v1/auth/user');
            }, function(error){
                $scope.loginError = true;
                $scope.loginErrorText = error.data.error;
            }).then(function(response){
              console.log('hii2');
              var user = JSON.stringify(response.data.user);
              localStorage.setItem('user', user);
              $rootScope.authenticated = true;
              $rootScope.currentUser = response.data.user;


              //  $location.path('/dashboard');

            }
        )
    }

  });
