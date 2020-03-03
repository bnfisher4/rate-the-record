const Listener = require('../models/listener');
const Album = require('../models/album');

module.exports = {
  index,
  addReview
}

function index(req, res) {
    res.render('index', { 
        user: req.user 
    });
}

function addReview(req, res, next) {
    req.user.reviews.push(req.body);
    req.user.save(function(err) {
      res.redirect(`/albums/${album._id}`);
    });
}