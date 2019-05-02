const express = require('express');
const TrackSchema = require('../modules/Track');
const multer = require('multer');
const config = require('../config');
const nanoid = require('nanoid');
const path = require('path');

const router = express.Router();

router.get('/:id', async (req, res) => {
    try {
        const track = await TrackSchema.find(
            {albums: req.params.id})
            .populate('albums')
            .sort({number: 0});

        const number = track.length;
        res.send({tracks: track, number: number});
    } catch (error) {
        res.status(400).send(error);
    }
});

router.post('/', async (req, res) => {
    try {
        const trackData = req.body;
        const tracks = await TrackSchema.find({albums: req.body.albums});
        const track = new TrackSchema(trackData);

        track.number = tracks.length + 1;

        await track.save();
        res.send(track)
    } catch (e) {
        res.send({message: "ERROR"})
    }
});

module.exports = router;