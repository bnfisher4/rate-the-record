var express = require('express');
var router = express.Router();
var usersCtrl = require('../controllers');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/users', usersCtrl.index);
router.post('/reviews', isLoggedIn, usersCtrl.addReview);


function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}


module.exports = router;
