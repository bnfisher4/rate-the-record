const Album = require('../models/album');

module.exports = {
  create
};

function create(req, res) {
  Album.findById(req.params.id, function(err, album) {
    req.body.userName = req.user.name;
    album.reviews.push(req.body);
    album.save(function(err) {
      res.redirect(`/albums/${album._id}`);
    });
  });
}
