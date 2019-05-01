const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const cors = require('cors');

const artists = require('./app/artists');
const albums = require('./app/albums');
const tracks = require('./app/tracks');
const users = require('./app/users');
const trackHistory = require('./app/trackHistory');

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(cors());

const port = 9000;

mongoose.connect(config.artistsDb, config.mongoOptions).then(() => {
    app.use('/artists', artists);
    app.use('/albums', albums);
    app.use('/tracks', tracks);
    app.use('/users', users);
    app.use('/users/sessions', users);
    app.use('/track/history', trackHistory);

    app.listen(port, () => {
        console.log(`Server started on ${port} port!`);
    });
});