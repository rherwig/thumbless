import {optimize} from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import path from 'path';

export default {
    entry: {
        dethumb: path.join(__dirname, 'src', 'index'),
        content: path.join(__dirname, 'src', 'content')
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }]
    },
    devtool: '#source-map',
    plugins: [
        new optimize.UglifyJsPlugin(),
        new CopyWebpackPlugin([{
            from: path.join(__dirname, 'manifest.json'),
            to: path.join(__dirname, 'build')
        }])
    ]
};