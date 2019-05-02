const express = require('express');
const ArtistSchema = require('../modules/Artist');
const multer = require('multer');
const config = require('../config');
const nanoid = require('nanoid');
const path = require('path');
const permit = require('../middleware/Permit');
const auth = require('../middleware/auth');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname))
    }
});

const upload = multer({storage});

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const artists = await ArtistSchema.find();
        return res.send(artists);
    }catch (e) {
        return res.status(500).send(e)
    }
});

router.post('/', upload.single('image'), (req, res) => {
    const artistData = req.body;

    if (req.file) {
        artistData.image = req.file.filename;
    }

    const artist = new ArtistSchema(artistData);
    artist.save()
        .then(result => res.send(result))
        .catch(error => res.send(error))
});

module.exports = router;