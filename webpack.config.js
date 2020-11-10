const path = require('path')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        maim: './index.js',
        analytics: './analytics.js',
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    }
}     