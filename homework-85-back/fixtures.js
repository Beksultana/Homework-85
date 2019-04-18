const mongoose = require('mongoose');
const config = require('./config');

const Artist = require('./modules/Artist');
const Album = require('./modules/Album');
const Track = require('./modules/Track');
const TrackHistory = require('./modules/TrackHistory');

const run = async () => {
    await mongoose.connect(config.artistsDb, config.mongooseOptions);
    const connection = mongoose.connection;
    const collections = await connection.db.collections();

    for(let collection of collections){
        await collection.drop();
    }

    const artists = await Artist.create(
        {artists: 'Ketsa', description: "It's Roxy", image: 'Ketsa.jpg'},
        {artists: 'Daniel Birch', description: "Rising Bells", image: 'danil.jpg'},
        {artists: "Chad Crouch", description: "Appreciation" ,image: 'Chad.jpg'},
        {artists: "Blue Dot Sessions ", description:  "An Oddly Formal Dance"  ,image: 'Aeronaut.jpg'},
        {artists: "Small Colin ", description: "Mutations"  ,image: 'small.jpeg'},
        {artists: "Robin Grey", description: "Every Waking Hour (Instrumental)",image: 'robin.jpg'},
    );

    const albums = await Album.create(
        {
            albumName: 'Different Angles',
            year: "2012",
            artists: artists[0]._id,
            image: 'Ketsa.jpg'
        },
        {
            albumName: 'Ambient Bells',
            year: "2015",
            artists: artists[1]._id,
            image: 'daniel.jpg'
        },
        {
            albumName: 'Love you',
            year: "2016",
            artists: artists[0]._id,
            image: 'Ketsa.jpg'
        },
        {
            albumName: 'The Nearest Door',
            year: "2007",
            artists: artists[5]._id,
            image: 'robinAlbum.jpg'
        },
        {
            albumName: 'Strangers With Shoes',
            year: "2007",
            artists: artists[5]._id,
            image: 'robinAlbum2.jpg'
        },
        {
            albumName: 'Warmed Up',
            year: "2010",
            artists: artists[4]._id,
            image: 'smallAlbum.jpg'
        },
        {
            albumName: 'Future You ',
            year: "2001",
            artists: artists[2]._id,
            image: 'chadAlbum.jpeg'
        },
        {
            albumName: 'The Zeppelin ',
            year: "2005",
            artists: artists[3]._id,
            image: 'Aeronaut.jpg'
        },
);

    await Track.create(
        {trackName: 'Its Roxy', albums: albums[0]._id, duration: '05:20'},
        {trackName: 'Rising Bells', albums: albums[1]._id, duration: '03:20'},
        {trackName: 'Love', albums: albums[0]._id, duration: '04:34'},
        {trackName: 'Every Waking Hour (Instrumental) ', albums: albums[0]._id, duration: '04:20'},
        {trackName: 'The Nearest Door ', albums: albums[5]._id, duration: '02:22'},
        {trackName: 'Strangers With Shoes ', albums: albums[5]._id, duration: '02:26'},
        {trackName: 'The Zeppelin', albums: albums[3]._id, duration: '02:20'},
        {trackName: 'Surly Bonds', albums: albums[3]._id, duration: '03:49'},
        {trackName: 'Surly Bonds', albums: albums[3]._id, duration: '03:49'},
        {trackName: 'Vittoro', albums: albums[3]._id, duration: '03:49'},
        {trackName: 'Warmed Up', albums: albums[4]._id, duration: '03:49'},
        {trackName: 'All On Me ', albums: albums[4]._id, duration: '04:58'},
    );

    await TrackHistory.create(
        {trackName: 'Its Roxy', albums: albums[0]._id, duration: now()},
    );
    await  connection.close()
};

run().catch(error => {
    console.log('Something went wrong', error);
});