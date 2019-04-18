const express = require('express');

const router = express.Router();
const User = require('../modules/User');
const TrackHistorySchema = require('../modules/TrackHistory');

router.post('/', async (req, res) => {

    const token = req.get("Authorization");
    if (!token) {
        return res.sendStatus(401);
    }
    const user = await User.findOne({token});
    if (!user){
        return res.sendStatus(401);
    }

    const TrackHistory = new TrackHistorySchema({
        user: user._id,
        track: req.body.track,
        dateTime: new Date().toISOString()
    });

    try {
        await  TrackHistory.save();
        console.log(TrackHistory);
        res.send(TrackHistory)
    } catch (error) {
        res.status(500).send(error)
    }
});

module.exports = router;