const express = require('express');
const AlbumSchema = require('../modules/Album');
const router = express.Router();

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


module.exports = router;