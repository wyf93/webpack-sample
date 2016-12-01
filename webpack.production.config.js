var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	//devtool: "eval-source-map",
	entry: {
		main: __dirname + "/app/main.js",
		vender: ['react', 'react-dom']
	},
	output: {
		path: __dirname + "/build",
		filename: "[name].[chunkhash].js",
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
				loader: ExtractTextPlugin.extract('style', 'css!less')
			}
		]
	},
	plugins: [
		new webpack.BannerPlugin("wyf"),
		new webpack.DefinePlugin({
			'process.env': {
			'NODE_ENV': '"production"'
			}
	    }),
		new HtmlWebpackPlugin({
			template: __dirname + "/app/index.html",
			filename: __dirname + "/build/index.html"
		}),
		new ExtractTextPlugin("style.[chunkhash].css"),
		new webpack.optimize.CommonsChunkPlugin({
            names: ['vender']
        }),
		new webpack.optimize.UglifyJsPlugin(),
		new CleanWebpackPlugin([__dirname + "/build"])
	]
}