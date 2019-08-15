// const express = require('express')
// var bodyParser = require('body-parser')
// const app = express()
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json({ type: 'application/vnd.api+json' }))
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })
 
// app.listen(3000)

var express=require("express");
var app=express();

const router = express.Router()

var morgan = require('morgan')
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8086;
var path = require('path'); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

var api = require("./api")(router)
app.use("/api_js", api)

app.use(morgan("dev"))

// mongoose.connect('mongodb://172.16.1.210/APIconnectivtytest', {useNewUrlParser: true},function(err,data){  
    
// if(err)console.log(err)
// else
//     console.log("Db connected")
// });

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://172.16.1.210/APIconnectivtytest', {useNewUrlParser: true}, (err) => {
if (err) {
console.log('Could NOT connect to database: ', err);
} else {
console.log('Connected to database: API');
}
});
app.listen(port, function () {
    console.log("running in " + port);
});

