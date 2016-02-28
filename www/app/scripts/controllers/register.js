angular.module('wwwApp')
    .controller('RegisterCtrl', function ($scope,$auth,$location) {
        $scope.register={};

        $scope.register.name='';
        $scope.register.email='';
        $scope.register.password='';
        $scope.register1=function()  {
            console.log('hi');
            $auth.signup($scope.register).then(function (response) {
                console.log('hi');
                console.log(response);
                window.alert('You are successfully register');
                $location.path('/');
            }).catch(function (response) {
                console.log(response);
                window.alert('Error: Register failed');
            });
        };

    });















