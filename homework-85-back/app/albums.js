const express = require('express');
const AlbumSchema = require('../modules/Album');
const router = express.Router();
const multer = require('multer');
const config = require('../config');
const nanoid = require('nanoid');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname))
    }
});

const upload = multer({storage});

router.get('/', (req, res) => {
    AlbumSchema.find()
        .then(result => res.send(result))
        .catch(error => res.send(error))
});

router.get('/:id', (req, res) => {
    AlbumSchema.find({artists: req.params.id}, null, {sort: {year: 1}}).populate('artists')
        .then(result => res.send(result))
        .catch(() => res.sendStatus(500))

});

router.post('/', upload.single('image'), (req, res) => {
    const albumData = req.body;
    if (req.file) {
        albumData.image = req.file.filename
    }

    const album = new AlbumSchema(albumData);
    album.save()
        .then(result => res.send(result))
        .catch(error => res.send(error))
});


module.exports = router;