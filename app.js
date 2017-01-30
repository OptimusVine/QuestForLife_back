console.log("***** FOR FUN *****")
console.log(" Set some stuff, let your adventurer do his thing")
console.log("***** ")

var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var path = require('path')

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development'
console.log(env + " Is our Environment")
var configDB = require('./config/database.js') 
mongoose.Promise = global.Promise;
mongoose.connect(configDB.url[env])


var models = require('./models/index')

var routes = require('./routes/index');

var controllers = require('./controllers/index.js')

var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser()); 


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,OPTIONS,POST,PUT'),
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

var game = require('./game.js')
