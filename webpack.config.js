const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: {
        bundle: ["./index.js"]
    },
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/build/",
        filename: "[name].js"
    },
    module: {
        loaders: [
            // Extract css files
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
            },
            // Extract sass
            {
                test: /\.sass$/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' })
            },
            // Just forward fonts
            {
                test: /\.(ttf|otf)$/,
                loader: "file-loader?publicPath=../&name=fonts/[hash].[ext]"
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("css/[name].css")
    ],
    devServer: {
        proxy: {
            '/api/**': {
                target: 'http://localhost:5000/',
                secure: false
            }
        },
        inline: true
    }
};
