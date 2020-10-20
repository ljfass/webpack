const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    // entry: './src/index.js',
    entry: {
        index: './src/index.js',
        vendor: './src/vendor.js'
    },
    watch: true,
    devServer: {
        contentBase: './dist' // tell the dev server where to look for files
    },
    devtool: 'inline-source-map', // for track down javascript errors and warnings
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false })
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use:[
                    {
                        loader: 'babel-loader',
                        options: {
                          presets: ['@babel/preset-env']
                        }
                      }
                ]
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path].[hash].[ext]',
                        outputPath: 'images'
                    }
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            },
            {
                test: /\.(csv|tsv)$/,
                use: ['csv-loader']
            },
            {
                test: /\.xml$/,
                use: ['xml-loader']
            },
        ]
    }
}
