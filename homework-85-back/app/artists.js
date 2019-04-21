const express = require('express');
const ArtistSchema = require('../modules/Artist');
const router = express.Router();


router.get('/', (req, res) => {
    ArtistSchema.find()
       .then(result => res.send(result))
       .catch(() => res.sendStatus(500))
});


module.exports = router;