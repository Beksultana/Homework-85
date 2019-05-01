const express = require('express');
const TrackSchema = require('../modules/Track');
const multer = require('multer');
const config = require('../config');
const nanoid = require('nanoid');
const path = require('path');

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname))
    }
});

const upload = multer({storage});

router.get('/:id', async (req, res) => {
    try {
        const track = await TrackSchema.find({albums: req.params.id}, null ,{sort: {numberTrack: 1}}).populate('albums');
        const number = track.length;
        res.send({tracks: track, number: number});
    } catch (error) {
        res.status(400).send(error);
    }
});

router.post('/', upload.single('image'), (req, res) => {
    const trackData = req.body;
    if (req.file) {
        trackData.image = req.file.fieldname;
    }

    const track = new TrackSchema(trackData);

    track.save()
        .then(result => res.send(result))
        .catch(error => res.send(error))
});

module.exports = router;