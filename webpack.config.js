var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var __DEV__ = process.env.NODE_ENV === 'development'

module.exports = {
    entry: [
        __DEV__ && 'src/index.js',
        './index.js'
    ].filter(Boolean),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/',
    },
    module: {
       rules: [
           {test : /\.(js)$/, use: 'babel-loader'},
           {test : /\.css$/, use: ['style-loader', 'css-loader']}
       ] 
    },
    devServer: {
      historyApiFallback: true,
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin ({
            template: 'public/index.html'
        })
    ],
    resolve: {
        extensions: [
            ".ts",".tsx",".js",".jsx",".json"
        ]
    }
}
