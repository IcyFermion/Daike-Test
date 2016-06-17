var webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './client/client.js'
    ],
    output: {
        path: require('path').resolve('./dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins:[
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015', 'react-hmre']
                }
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass'],
                // loader: 'style!css!sass?includePaths[]=' + require('path').resolve(__dirname, './node_modules/compass-mixins/lib'),
            },
        ],
        resolve: {
            extensions: ['', '.js', '.jsx', '.css'],
            modulesDirectories: [
              'node_modules'
            ]
        }
    },
    sassLoader: {
        includePaths: [require('path').resolve(__dirname, './node_modules/compass-mixins/lib')]
    }
};
