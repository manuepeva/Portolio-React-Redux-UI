const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')


module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'PorfolioBuild.js',
        path: path.resolve(__dirname, 'portfolioBuild'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
            favicon: './public/mpv.png'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
            },
            {
                test: /\.html$/i,
                use: [{
                    loader: 'html-loader',
                }]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },

            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: require.resolve('file-loader'),
                        options: {
                            limit: 10000,
                            mimetype: 'image/png'
                        }
                    },
                ]
            },
        ]
    }
}