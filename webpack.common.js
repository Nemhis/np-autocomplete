const path = require('path');

module.exports = {
    output: {
        path: path.join(__dirname, `dist`),
        filename: `autocomplete.min.js`,
        library: 'autocomplete',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: {
        jquery: 'jquery'
    }
};
