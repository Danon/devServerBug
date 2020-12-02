const HtmlWebpackPlugin = require('html-webpack-plugin');

let path;

path = __dirname + 'bundle' // works
path = __dirname + '/bundle' // works
path = __dirname + '../bundle' // works
path = __dirname + '/../bundle' // doesn't work

module.exports = {
    entry: './index.jsx',
    output: {
        publicPath: '/',
        path,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Properly built application',
            template: "index.html"
        }),
    ],
    devServer: {
        contentBase: './'
    },
};
