var myApp = angular.module('myApp',[]);

myApp.controller('formCtrl',['$scope','$http', function($scope,$http){
  var person1 = {
    name: 'John Doe',
    isMilitary: 'yes',
    phoneNumber: '(111) 111 - 1111'
  };

  var person2 = {
    name: 'Michael Smith',
    isMilitary: 'no',
    phoneNumber: '(222) 222-2222'
  };

  var person3 = {
    name: 'Jhonny Cash',
    isMilitary: 'yes',
    phoneNumber: '(333) 333-3333'
  };

  var customers = [person1, person2, person3];
  $scope.customers = customers;
}]);
