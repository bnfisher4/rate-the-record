const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artistSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    born: {
        type: Date,
    },
    hometown: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Artist', artistSchema);