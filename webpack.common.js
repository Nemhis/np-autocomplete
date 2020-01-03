const path = require('path');

module.exports = {
    output: {
        path: path.join(__dirname, `dist`),
        filename: `type-dist-filename-here.min.js`,
        library: 'type-library-name-here',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: {
        jquery: 'jquery'
    }
};
