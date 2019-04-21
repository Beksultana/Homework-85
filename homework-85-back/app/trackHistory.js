const express = require('express');
const router = express.Router();
const TrackHistorySchema = require('../modules/TrackHistory');

router.post('/', async (req, res) => {
    const trackHistory = await new TrackHistorySchema(req.body);

    try {
        await trackHistory.save();
        res.send(trackHistory)
    }catch (error) {
        return res.status(400).send({error: "TrackHistory not found"});
    }
});

module.exports = router;