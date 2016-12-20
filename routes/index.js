var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', { title: 'Express' });
});
router.post('/login',function(req,res){
  res.json({email:"nirmal" , password :"pass"})
});
module.exports = router;
