const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.m?jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        babelrc: false,
                        presets: [
                            "@babel/preset-react",
                            ["@babel/preset-env", {
                                "targets": {
                                    "chrome":70
                                },
                                "useBuiltIns": "usage",
                                "corejs": 3
                            }]
                        ]
                    }
                }
            }, {
                test: /\.(png|jpg|svg|gif)$/,
                use:"asset/inline"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:"./src/html/template.html",
            filename:"index.html"
        })    ]
}