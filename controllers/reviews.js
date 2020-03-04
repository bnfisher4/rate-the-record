const Album = require('../models/album');

module.exports = {
  create,
  edit,
  update,
  delete: deleteReview
};

function deleteReview(req, res) {
  Album.findById(req.params.albumid, function(err, album) {
    console.log(album);
    const rev = album.reviews.id(req.params.reviewid);
    rev.remove();
    album.save(function(err) {
      res.redirect(`/albums/${album._id}`)
    });
  });
}

function edit(req, res) {
  Album.findById(req.params.albumid, function(err, album) {
    const rev = album.reviews.id(req.params.reviewid);
    res.render('reviews/edit', {
      albumId: req.params.albumid,
      rev
    })
  });
}

// TODO write updateReview Function
function update(req, res) {
  Album.findById(req.params.albumid, function(err, album) {
    const rev = album.reviews.id(req.params.reviewid);
    console.log(rev);
    rev.set(req.body);
    album.save(function(err) {
      res.redirect(`/albums/${album._id}`);
    });
  });
}


function create(req, res) {
  Album.findById(req.params.id, function(err, album) {
    req.body.userName = req.user.name;
    album.reviews.push(req.body);
    album.save(function(err) {
      res.redirect(`/albums/${album._id}`);
    });
  });
}

