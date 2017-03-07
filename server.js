var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

mongoose.connect('mongodb://mvp2017:mvp123@ds025439.mlab.com:25439/newcustomerdatabase');



var customersSchema = new Schema({name: String,
                          isMilitary: String,
                          phoneNumber: String})

var Customer = mongoose.model('Customer', customersSchema)

// var newCustomer = new Customer({
//   name: "Bryan",
//   isMilitary: "Yes",
//   phoneNumber: "(111) 111-1111"
// })
//
// newCustomer.save(function(err){
//   if (err) throw err;
//   console.log("new customer saved")
// });

app.post('/customers',function(req,res){
  console.log('this is the express POST==>',req.body)
  var newCustomer = new Customer({
    name: req.body.Name,
    isMilitary: req.body.isMilitary,
    phoneNumber: req.body.phoneNumber
  })
  newCustomer.save(function(err){
    if (err) throw err;
    console.log('new customer saved')
  })
  res.status(200).send()
})

app.get('/customers',function(req,res){
  Customer.find({},function(err, customers){
    if (err) throw err;
    res.json(customers)
    //$scope.customers = customers;
  })
})


// app.post('/customers',function(req,res){
//   console.log(req.body);
// })

app.listen(3000);
console.log("we are up and running")
