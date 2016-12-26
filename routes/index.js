var express = require('express');
var router = express.Router();
var connection  = require("../config/db")
var bodyParser = require('body-parser');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', { title: 'Express' });
});
router.post('/login',function(req,res){
  console.log("hee",req.body);
});
module.exports = router;
