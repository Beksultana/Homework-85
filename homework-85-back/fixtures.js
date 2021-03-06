const mongoose = require('mongoose');
const config = require('./config');
const nanoid = require('nanoid');

const Artist = require('./modules/Artist');
const Album = require('./modules/Album');
const Track = require('./modules/Track');
const User = require('./modules/User');

const run = async () => {
    await mongoose.connect(config.artistsDb, config.mongoOptions);
    const connection = mongoose.connection;
    const collections = await connection.db.collections();

    for(let collection of collections){
        await collection.drop();
    }

     const user = await User.create(
        {
            username: 'user',
            role: 'user',
            password: '123',
            token: nanoid()
        },
        {
            username: 'admin',
            role: 'admin',
            password: '123',
            token: nanoid()
        }
    );

    const artists = await Artist.create(
        {artists: 'Ketsa', description: "It's Roxy", image: 'Ketsa.jpg', user: user[0]._id},
        {artists: 'Daniel Birch', description: "Rising Bells", image: 'danil.jpg', user: user[0]._id},
        {artists: "Chad Crouch", description: "Appreciation" ,image: 'Chad.jpg', user: user[1]._id},
        {artists: "Blue Dot Sessions ", description:  "An Oddly Formal Dance"  ,image: 'Aeronaut.jpg', user: user[1]._id},
        {artists: "Small Colin ", description: "Mutations"  ,image: 'small.jpeg', user: user[0]._id},
        {artists: "Robin Grey", description: "Every Waking Hour (Instrumental)",image: 'robin.jpg', user: user[0]._id},
    );

    const albums = await Album.create(
        {
            albumName: 'Different Angles',
            year: "2012",
            artists: artists[0]._id,
            image: 'Ketsa.jpg'
        },
        {
            albumName: ' Moon Rise ',
            year: "2012",
            artists: artists[0]._id,
            image: 'KetsaAlbum1.jpeg'
        },
        {
            albumName: 'Ambient Bells',
            year: "2015",
            artists: artists[1]._id,
            image: 'danilAlbum.jpeg'
        },
        {
            albumName: 'Love you',
            year: "2016",
            artists: artists[0]._id,
            image: 'KetsaAlbum2.jpg'
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
        {trackName: 'Its Roxy', albums: albums[0]._id, duration: '05:20', number: 1},
        {trackName: 'Moon Rise', albums: albums[0]._id, duration: '03:50', number: 2},
        {trackName: 'Eastern Midnights', albums: albums[0]._id, duration: '03:50', number: 3},
        {trackName: 'Love', albums: albums[0]._id, duration: '04:34', number: 4},
        {trackName: 'Every Waking Hour (Instrumental) ', albums: albums[0]._id, duration: '04:20', number: 5},

        {trackName: 'Intermittent ', albums: albums[2]._id, duration: '04:00', number: 1},
        {trackName: 'Duplicates  ', albums: albums[2]._id, duration: '03:08', number: 2},
        {trackName: 'Night Flying  ', albums: albums[2]._id, duration: '04:26', number: 3},
        {trackName: 'Vintage Beat  ', albums: albums[2]._id, duration: '02:25', number: 4},
        {trackName: 'The Return  ', albums: albums[2]._id, duration: '01:32', number: 5},
        {trackName: 'Reflective  ', albums: albums[2]._id, duration: '03:43', number: 6},

        {trackName: 'Rising Bells', albums: albums[1]._id, duration: '03:20', number: 1},

        {trackName: 'The Nearest Door ', albums: albums[5]._id, duration: '02:22', number: 1},
        {trackName: 'Strangers With Shoes ', albums: albums[5]._id, duration: '02:26', number: 2},

        {trackName: 'The Zeppelin', albums: albums[3]._id, duration: '02:20', number: 1},
        {trackName: 'Surly Bonds', albums: albums[3]._id, duration: '03:49', number: 2},
        {trackName: 'Surly Bonds', albums: albums[3]._id, duration: '03:49', number: 3},
        {trackName: 'Vittoro', albums: albums[3]._id, duration: '03:49', number: 4},

        {trackName: 'Warmed Up', albums: albums[4]._id, duration: '03:49', number: 1},
        {trackName: 'All On Me ', albums: albums[4]._id, duration: '04:58', number: 2},
    );

    await  connection.close()
};

run().catch(error => {
    console.log('Something went wrong', error);
});