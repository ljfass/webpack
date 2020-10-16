const express = require('express');
const { web } = require('webpack');
const webpack = require('webpack');
const webpackDevMiddle = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.common');
const compiler = webpack(config);

app.use(webpackDevMiddle(compiler, {
    publicPath: config.output.publicPath
}));

app.listen(3000, () => {
    console.log('Example app listening on port:3000!\n');
})