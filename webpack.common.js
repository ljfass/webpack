const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    // entry: './src/index.js',
    entry: {
        index: './src/index.js',
        vendor: './src/vendor.js'
    },
    watch: true,
    mode: 'development',
    devServer: {
        contentBase: './dist' // tell the dev server where to look for files
    },
    devtool: 'inline-source-map', // for track down javascript errors and warnings
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: './'
    },
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve(__dirname, 'public/index.html')
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
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
                        esModule: false,
                        name: '[path].[hash].[ext]',
                        outputPath: 'assets'
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