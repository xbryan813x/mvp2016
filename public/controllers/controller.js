var myApp = angular.module('myApp',[]);

myApp.controller('formCtrl',['$scope','$http', function($scope,$http){

  $http.get('/customers').then(function(res){
    console.log('got the data requested', res)
    $scope.customers = res.data;
  });



}]);
