require('dotenv').config();
require('./config/database');

const Artist = require('./models/artist');
const data = require('./data');

Artist.deleteMany({})
.then(function(results) {
    console.log(results);
    return Artist.create(data.artists);
})
.then(function(artists) {
    console.log(artists);
    process.exit();
})
.catch(function(err) {
    console.log(err);
});
