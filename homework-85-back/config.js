const path = require('path');

const rootPath = __dirname;

module.exports = {
    rootPath,
    uploadPath: path.join(rootPath, 'public/uploads'),
    artistsDb: 'mongodb://localhost/lastFM',
    mongoOptions: {
        useCreateIndex: true,
        useNewUrlParser: true
    }
};