const Album = require('../models/album');

module.exports = {
    index
};

function index(req, res) {
    res.render('albums/index');

}