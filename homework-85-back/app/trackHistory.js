const express = require('express');
const router = express.Router();
const TrackHistorySchema = require('../modules/TrackHistory');
const auth = require('../middleware/auth');

router.post('/', auth, async (req, res) => {
    const track = ({user: req.user._id, tracks: req.body.tracks, dateTime: new Date().toISOString()});
    const trackHistory = await new TrackHistorySchema(track);

    try {
        await trackHistory.save();
        res.send(trackHistory)
    }catch (error) {
        return res.status(400).send({error: "TrackHistory not found"});
    }
});

router.get('/', auth, (req, res) => {
    TrackHistorySchema.findOne({user: req.user._id}).populate('tracks')
        .then(result => res.send(result))
        .catch(error => res.send(error))
});

module.exports = router;