const express = require('express');
const TrackSchema = require('../modules/Track');
const router = express.Router();

router.get('/:id', async (req, res) => {
    try {
        const track = await TrackSchema.find({albums: req.params.id}, null ,{sort: {numberTrack: 1}});
        res.send(track);
    } catch (error) {
        res.status(400).send(error);
    }
});
module.exports = router;