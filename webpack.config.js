var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

// module.exports = {
//     entry: './src/index.js',
//     output: {
//         filename: 'main.js',
//         path: path.resolve(__dirname, 'dist')
//     },
//     module: {
//       rules: [
//           {
//               test:/\.(sc|c)ss$/,
//               use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader','sass-loader']
//           }
//       ]
//     },
//     plugins: [
//         new HtmlWebpackPlugin(),
//         new MiniCssExtractPlugin({
//             filename: "main.css"
//         })
//     ]
// };


module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
              test: /\.(js)$/,
                exclude: /node_modules/,
              use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", 'postcss-loader', "sass-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "main.css"
        })
    ]
};