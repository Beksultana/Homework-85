const express = require('express');
const AlbumSchema = require('../modules/Album');
const router = express.Router();

router.get('/:id', (req, res) => {
    AlbumSchema.find({artists: req.params.id}).populate('artists')
        .then(result => res.send(result))
        .catch(() => res.sendStatus(500))

});


module.exports = router;