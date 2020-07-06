const path = require('path');

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
    mode,
    entry: ['./src/index.js'],
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'app.js',
        publicPath: '/js/',
    },
    resolve: {
        modules: ['node_modules', '.'],
        extensions: [".js"],
    },
    module: {
        rules: [],
    },
};
