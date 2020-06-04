const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
	entry: "./src/app.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						// Adds CSS to the DOM by injecting a `<style>` tag
						loader: "style-loader"
					},
					{
						// Interprets `@import` and `url()` like `import/require()` and will resolve them
						loader: "css-loader"
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: "index.html"
		}),
		new CopyWebpackPlugin([
			{
				from: path.resolve(__dirname, "src/images"),
				to: path.resolve(__dirname, "dist/images")
			}
		])
	]
};
