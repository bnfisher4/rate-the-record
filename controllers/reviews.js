const Album = require('../models/album');

module.exports = {
  create,
  edit,
  update,
  delete: deleteReview
};

function deleteReview(req, res) {
  Album.findById(req.params.albumid, function(err, album) {
    const rev = album.reviews.id(req.params.reviewid);
    if(!rev.createdBy.equals(req.user && req.user.id)) return res.redirect(`/albums/${album._id}`);
    rev.remove();
    album.save(function(err) {
      res.redirect(`/albums/${album._id}`)
    });
  });
}

function edit(req, res) {
  Album.findById(req.params.albumid, function(err, album) {
    const rev = album.reviews.id(req.params.reviewid);
    if(!rev.createdBy.equals(req.user && req.user.id)) return res.redirect(`/albums/${album._id}`);
    res.render('reviews/edit', {
      albumId: req.params.albumid,
      rev,
      user: req.user 
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
    req.body.createdBy = req.user._id;
    req.body.userName = req.user.name;
    album.reviews.push(req.body);
    album.save(function(err) {
      res.redirect(`/albums/${album._id}`);
    });
  });
}

