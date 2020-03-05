const Artist = require('../models/artist');

module.exports = {
    index
};

function index(req, res) {
    Artist.find({}, function(err, artists) {
        res.render('artists/index', {artists, user:req.user});
    });
}