var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require("autoprefixer");

module.exports = {
	devtool: "eval-source-map",
	entry: __dirname + "/app/main.js",
	output: {
		//path: __dirname + "/public",
		filename: "main.js"
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
			// },
			{
				test: /\.less$/,
				loader: "style!css!postcss!less"
			}
		]
	},
	postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
	plugins: [
		new webpack.BannerPlugin("版权声明"),
		new HtmlWebpackPlugin({
			template: __dirname + "/app/index.html",
			//filename: __dirname + "/public/index.html"
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		//contentBase: "./public", //本地服务器目录
		colors: true, //终端输出结果为彩色
		inline: true, //实时刷新
		historyFallback: true, //不跳转
		port: "8880",
		hot: true
	}
}