const express = require('express');
const nanoid = require('nanoid');
const config = require('../config');
const multer = require('multer');
const AlbumSchema = require('../modules/Album');
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

    AlbumSchema.find()
        .then(result => res.send(result))
        .catch(() => res.sendStatus(500))

});

router.get('/:id', (req, res) => {
    AlbumSchema.find({artists: req.params.id}).populate('artists')
        .then(result => res.send(result))
        .catch(() => res.sendStatus(500))

});


module.exports = router;