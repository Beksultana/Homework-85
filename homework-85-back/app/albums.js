const express = require('express');
const AlbumSchema = require('../modules/Album');
const router = express.Router();
const multer = require('multer');
const config = require('../config');
const nanoid = require('nanoid');
const path = require('path');
const auth = require('../middleware/auth')
const permit = require('../middleware/Permit')

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
    AlbumSchema.find({artists: req.params.id}).populate('artists').sort({year: 0})
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

router.post('/:id/toggle_published', [auth, permit('admin')], async (req, res) => {
    try {
        const album = await AlbumSchema.findById(req.params.id);
        if (!album) {
            return res.sendStatus(500)
        }

        album.published = !album.published;

        await album.save();
        res.send(album);
    } catch (error) {
        return res.status(500).send(error)
    }
});

router.delete('/:id', [auth, permit('admin')], async (req, res) => {
    try {
        await AlbumSchema.findByIdAndDelete({_id: req.params.id});
        res.send({message: "OK"});

    }catch (e) {
        res.status(400).send({error: "Album not found"});
    }

});

module.exports = router;