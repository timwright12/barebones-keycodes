import path from 'path';
import webpack from 'webpack';

let componentName = 'demo';

module.exports = {
	mode: process.env.NODE_ENV ? 'development' : 'production',
	entry: [
		'./src/demo.js'
	],
	output: {
		path: path.resolve( __dirname, './dist' ),
		filename: `${ componentName }.js`,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				enforce: 'pre',
				use: {
					loader: 'eslint-loader',
					options: {
						fix: true
					}
				}
			},
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	},
	devtool: 'source-map',
	stats: {
		colors: true
	},
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
	],
};