const express = require('express');
const nanoid = require('nanoid');
const config = require('../config');
const multer = require('multer');
const ArtistSchema = require('../modules/Artist');
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname));
    }
});

const upload = multer({storage});

router.get('/', (req, res) => {
    ArtistSchema.find()
       .then(result => res.send(result))
       .catch(() => res.sendStatus(500))
});

router.post('/', (req, res) => {
    const artistData = req.body;
    artistData.id = nanoid();

    if (req.file) {
        artistData.image = req.file.filename;
    }

    const Artist = new ArtistSchema(artistData);

    Artist.save()
        .then(result => res.send(result))
        .catch(error => res.status(400).send(error))
});

module.exports = router;