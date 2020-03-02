const Album = require('../models/album');

module.exports = {
    index,
    new: newAlbum,
    create,
    show
};

function index(req, res) {
    Album.find({}, function(err, albums) {
        res.render('albums/index', { title: 'Albums', albums });
    });
}

function show(req, res) {

}

function create(req, res) {
    if(!req.body.releaseDate) delete req.body.releaseDate;
    const album = new Album(req.body);
    album.save(function(err) {
        if (err) return res.redirect('/albums/new');
        res.redirect('/albums');
    });
}

function newAlbum(req, res) {
    res.render('albums/new', {title: 'Add An Album'});
}
