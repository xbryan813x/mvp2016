var myApp = angular.module('myApp',[]);

myApp.controller('formCtrl',['$scope','$http', function($scope,$http){

  // $http.get('/customers').then(function(res){
  //   console.log('got the data requested', res)
  //   $scope.customers = res.data;
  // });
  $scope.addClient = function(){
    console.log($scope.contact)
    console.log("here")
    $http.post('/customers', $scope.contact).then(function(){
      console.log("here")
      $http.get('/customers').then(function(res){
        console.log("THIS IS THE GET DATA FROM CONTROLLER", res.data)
        $scope.customers = res.data;
      })
    })
  }

  $scope.remove = function(id){
    console.log(id)
    $http.delete('/customers/' + id).then(function(){
      console.log("here")
      $http.get('/customers').then(function(res){
        console.log("THIS IS THE GET DATA FROM CONTROLLER", res.data)
        $scope.customers = res.data;
      })
    }) // '/customers/31749123741920874'
  }


  $scope.edit = function(id){
    console.log(id)
    $http.get('/customers' + id).then(function(res){
      $scope.contact = res.data;
    })
  }
  // person1 = {
  //   name: "Sally Sue",
  //   isMilitary: "YES",
  //   phoneNumber: "(757) 597-6656"
  // };
  //
  // person2 = {
  //   name: "John Doe",
  //   isMilitary: "NO",
  //   phoneNumber: "(757) 597-6676"
  // };
  //
  // person3 = {
  //   name: "John Smith",
  //   isMilitary: "YES",
  //   phoneNumber: "(757) 546-8756"
  // };
  //
  // var customers = [person1,person2,person3];
  $http.get('/customers').then(function(res){
    console.log("THIS IS THE GET DATA FROM CONTROLLER", res.data)
    $scope.customers = res.data;
  })



}]);
