var sLoc = __filename.substring(process.cwd().length,__filename.length);
console.log("Calling : " + sLoc)

var express = require('express');
var router = express.Router();
 
var mongoose = require('mongoose')


router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;