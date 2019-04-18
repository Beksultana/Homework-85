const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const AlbumSchema = new Schema({
    albumName: {
        type: String, required: true
    },
    year: {
        type: String, required: true
    },
    image: {
        type: String
    },
    artists: {
        type: Schema.Types.ObjectId,
        ref: 'Artist',
        required: true
    }

});
const Album = mongoose.model('Album', AlbumSchema);
module.exports = Album;