const Artist = require('../models/artist');

module.exports = {
    index
};

function index(req, res) {
    res.render('artists/index');
}