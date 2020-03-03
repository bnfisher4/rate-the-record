const express = require('express');
const router = express.Router();
const indexCtrl = require('../controllers');


/* GET users listing. */


router.get('/listeners', indexCtrl.index);
router.post('/albums/:id', isLoggedIn, indexCtrl.addReview);


function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}


module.exports = router;
