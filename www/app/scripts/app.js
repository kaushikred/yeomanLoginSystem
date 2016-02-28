'use strict';

/**
 * @ngdoc overview
 * @name wwwApp
 * @description
 * # wwwApp
 *
 * Main module of the application.
 */
angular
  .module('wwwApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
      'satellizer',

  ])
  .config(function ($routeProvider,$authProvider) {
      $authProvider.loginUrl = 'http://localhost:8000/api/v1/auth/login';
      $authProvider.signupUrl = 'http://localhost:8000/api/v1/auth/register';
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.tpl.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.tpl.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
        .when('/register',{
           templateUrl:'views/register.tpl.html',
           controller:'RegisterCtrl',
           controllerAs:'register'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
