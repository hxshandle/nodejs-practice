var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('login', { title: 'Login' });
});

router.post('/', function(req, res) {
  req.session.userid="abc";
  if(req.query.fromUrl){
    res.redirect(req.query.fromUrl);
  }else{
    res.redirect('/');
  }

});


module.exports = router;
