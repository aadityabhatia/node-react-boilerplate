const HtmlWebpackPlugin = require('html-webpack-plugin')

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
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader',
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.pug'
		})
	],
}
