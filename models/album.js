const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: String,
    rating: {type: Number, min: 1, max: 5, default: 5},
    userName: String,
    createdBy: {type: Schema.Types.ObjectId, ref: 'Listener'}
  }, {
    timestamps: true
  });

const albumSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    releaseDate: {
        type: Date
    },
    genre: {
        type: String,
    },
    explicit: {
        type: Boolean,
        default: false
    },
    reviews: {
     type: [reviewSchema]   
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Album', albumSchema);