const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ArtistSchema = new Schema({
    artists: {
       type: String, required: true
   },
    image: {
       type: String
    },
    description: {
       type: String
    },
    published: {
        type: Boolean,
        default: false
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});
const Artist = mongoose.model('Artist', ArtistSchema);
module.exports = Artist;