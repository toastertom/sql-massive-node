var express = require('express');
var app = module.exports = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var password = require('./config').password;
var massive = require('massive');
// var controller = require('./controller.js');

var connectionString = 'postgres://postgres:'+ password +'@localhost:5433/sandbox';

app.use(bodyParser.json());
app.use(cors());

var massiveInstance = massive.connectSync({connectionString : connectionString});

app.listen('3737', function(){
  console.log("Successfully listening on : 3737")
})
