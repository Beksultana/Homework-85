const express = require('express');
const TrackSchema = require('../modules/Track');
const AlbumSchema = require('../modules/Album');
const router = express.Router();

router.get('/', (req, res) => {
    if (req.query.albums){
        TrackSchema.find({albums: req.query.albums})
            .then(result => res.send(result))
            .catch(() => res.sendStatus(500))
    }
    else if (req.query.artists) {
        AlbumSchema.find({artists: req.query.artists})
            .then(result => res.send(result))
            .catch(() => res.sendStatus(500))
    }
    else {
        TrackSchema.find()
            .then(result => res.send(result))
            .catch(() => res.sendStatus(500))
    }
});
module.exports = router;