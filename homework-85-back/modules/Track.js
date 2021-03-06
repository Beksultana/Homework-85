const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const TrackSchema = new Schema({
    trackName: {
        type: String, required: true
    },
    albums: {
        type: Schema.Types.ObjectId,
        ref: 'Album',
        required: true
    },
    duration: {
        type: String, required: true
    },
    number: {
        type: Number,
        required: true
    },
    published: {
        type: Boolean,
        default: false
    }
});
const Track = mongoose.model("Track", TrackSchema);
module.exports = Track;