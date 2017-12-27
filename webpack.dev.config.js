const merge = require('webpack-merge');
const path = require('path');

const commonConfig = require('./webpack.common.config.js');

const devConfig = {
    devtool: 'inline-source-map',
    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        /*这里本来应该是[chunkhash]的，但是由于[chunkhash]和react-hot-loader不兼容。只能妥协*/
        filename: '[name].[hash].js'
    },
    /*src文件夹下面的以.js结尾的文件，要使用babel解析*/
    /*cacheDirectory是用来缓存编译结果，下次编译加速*/
    module: {
        loaders: [{
            test: /\.css$/,
            loaders: ["style-loader", "css-loader", "postcss-loader"]
        }]
    },
    devServer: {
        port: 8081,
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        host: '0.0.0.0',
    }
};

module.exports = merge(commonConfig, devConfig);