const express = require('express');
const TrackSchema = require('../modules/Track');
const auth = require('../middleware/auth');
const permit = require('../middleware/Permit');

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
        res.send(track);
    } catch (e) {
        res.send({message: "ERROR"})
    }
});

router.post('/:id/toggle_published', [auth, permit('admin')], async (req, res) => {
    try {
        const track = await TrackSchema.findById(req.params.id);
        if (!track) {
            return res.sendStatus(500)
        }

        track.published = !track.published;

        await track.save();
        res.send(track);
    } catch (error) {
        return res.status(500).send(error)
    }
});

router.delete('/:id', [auth, permit('admin')], async (req, res) => {
    try {
        await TrackSchema.findByIdAndDelete({_id: req.params.id});
        res.send({message: "OK"});

    }catch (e) {
        res.status(400).send({error: "Track not found"});
    }

});

module.exports = router;