var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: __dirname + "/app/main.js",
	output: {
		path: __dirname + "/public",
		filename: "bundle.js",
	},
	module: {
		loaders: [
			{
				test: /\.json$/,
				loader: "json"
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel"
			},
			// {
			// 	test: /\.css$/,
			// 	loader: ExtractTextPlugin.extract("style", "css?modules")
			// }
			{
				test: /\.less$/,
				loader: "style!css!less"
			}
		]
	},
	plugins: [
		new webpack.BannerPlugin("版权声明"),
		new HtmlWebpackPlugin({
			template: __dirname + "/app/index.html",
			filename: __dirname + "/web-info/view/index2.html",
			hash: true
		}),
		new ExtractTextPlugin("style.css"),
		new webpack.optimize.UglifyJsPlugin()
	]
}