var express = require('express');
var router = express.Router();
var indexCtrl = require('../controllers');


/* GET index listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/index', indexCtrl.index);
router.post('/albums/:id/reviews', isLoggedIn, indexCtrl.addReview);


function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}


module.exports = router;
