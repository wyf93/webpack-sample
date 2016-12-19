var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require("autoprefixer");

module.exports = {
	entry: {
		main: __dirname + "/app/main.js",
		vender: ['react', 'react-dom', 'iscroll/build/iscroll-probe', 'reqwest']
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
				loader: ExtractTextPlugin.extract('style', 'css!postcss!less')
			}
		]
	},
	postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
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
		new CleanWebpackPlugin([__dirname + "/build"])
	]
}