const express = require('express');
const ArtistSchema = require('../modules/Artist');
const multer = require('multer');
const config = require('../config');
const nanoid = require('nanoid');
const path = require('path');

const permit = require('../middleware/Permit');
const auth = require('../middleware/auth');
const tryAuth = require('../middleware/tryAuth');

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

router.get('/', tryAuth, async (req, res) => {
    try {
        let criteria = {published: true};
        if (req.user){
            criteria = {$or: [
                    {published: true},
                    {user: req.user._id}
            ]}
        }
        const artists = await ArtistSchema.find(criteria);
        return res.send(artists);
    }catch (e) {
        return res.status(500).send(e)
    }
});

router.post('/', [auth, upload.single('image')], (req, res) => {
    const artistData = req.body;

    if (req.file) {
        artistData.image = req.file.filename;
    }

    artistData.user = req.user._id;

    const artist = new ArtistSchema(artistData);

    artist.save()
        .then(result => res.send(result))
        .catch(error => res.send(error))
});


router.post('/:id/toggle_published', [auth, permit('admin')], async (req, res) => {
   try {
       const artist = await ArtistSchema.findById(req.params.id);
       if (!artist) {
           return res.sendStatus(500)
       }

       artist.published = !artist.published;

       await artist.save();
       res.send(artist);
   } catch (error) {
       return res.status(500).send(error)
   }
});
module.exports = router;