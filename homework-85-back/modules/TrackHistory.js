const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const TrackHistorySchema = new Schema({

    artistsToken: {
        type: Schema.Types.ObjectId,
        ref: 'Artists',
        required: true
    },
    trackId: {
        type: String,
        required: true
    },


});

const TrackHistory = mongoose.model('TrackHistory', TrackHistorySchema);
module.exports = TrackHistory;