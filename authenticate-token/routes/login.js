/**
 * Created by I073349 on 11/20/2014.
 */
var express = require('express');
var router = express.Router();
var authenticate = require("authenticate");

/* GET home page. */
router.all('/', function(req, res) {
  var token = "";
  if(req.params['user']){
    token = authenticate.serializeToken(client_id, user_id, extra_data);
  }
  res.render('login', { title: 'Login',token:token });
});

module.exports = router;
