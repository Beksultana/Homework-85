const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const TrackHistorySchema = new Schema({

    artistsToken: {
        type: Schema.Types.ObjectId,
        ref: 'Artist',
        required: true
    },
    track: {
        type: Schema.Types.ObjectId,
        ref: "Track",
        required: true
    },


});

const TrackHistory = mongoose.model('TrackHistory', TrackHistorySchema);
module.exports = TrackHistory;