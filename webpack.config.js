const HtmlWebpackPlugin = require('html-webpack-plugin');
pkg = require('./package.json');

module.exports = {
	entry: './src/index.coffee',
	module: {
		rules: [{
				test: /\.coffee$/,
				use: [{
					loader: 'coffee-loader',
					options: {
						transpile: {
							presets: ['@babel/preset-env', '@babel/preset-react']
						}
					}
				}]
			},
			{
				test: /\.pug$/,
				use: ['pug-loader']
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.pug',
			description: pkg.description
		})
	],
}
