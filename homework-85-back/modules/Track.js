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
    }
});
const Track = mongoose.model("Track", TrackSchema);
module.exports = Track;