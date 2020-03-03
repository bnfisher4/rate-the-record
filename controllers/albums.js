const Album = require('../models/album');

module.exports = {
    index,
    show
};

function index(req, res) {
    Album.find({}, function(err, albums) {
        res.render('albums/index', { title: 'Albums', albums });
    });
}

function show(req, res) {
    Album.findById(req.params.id, function(err, album) {
            res.render('albums/show', { title: 'Album Detail', album });
    });
}


//use node repl