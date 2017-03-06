var express = require('express');
var app = express();

// app.get('/',function(req,res){
//   res.send('Hello World')
// })

app.use(express.static(__dirname + "/public"));

app.get('/customers', function(req,res){
  console.log("helloooooo")

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
  res.json(customers);
})

app.listen(3000);
console.log("we are up and running")
