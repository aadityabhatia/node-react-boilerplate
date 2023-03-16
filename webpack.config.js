const HtmlWebpackPlugin = require('html-webpack-plugin');
const pkg = require('./package.json');
const path = require('path');

module.exports = {
	entry: './src/index.tsx',
	module: {
		rules: [{
			test: /\.css$/,
			use: ["css-loader"],
			exclude: /node_modules/,
		}, {
			test: /\.(tsx|jsx|ts|js)?$/,
			use: "babel-loader",
			exclude: /node_modules/,
		}],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			description: pkg.description
		})
	],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devServer: {
		static: path.join(__dirname, "dist"),
		compress: true,
		port: 4000,
	},
}
