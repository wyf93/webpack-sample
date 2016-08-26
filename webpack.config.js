var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	devtool: "eval-source-map",
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
			// },
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
		})
		//new ExtractTextPlugin("style.css")
	],
	devServer: {
		contentBase: "./public", //本地服务器目录
		colors: true, //终端输出结果为彩色
		inline: true, //实时刷新
		historyFallback: true, //不跳转
		port: "8888"
	}
}