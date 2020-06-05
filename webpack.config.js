const path = require('path');
const webpack = require('webpack');
const nesting = require('postcss-nesting');
const autoprefixer = require('autoprefixer');
const csso = require('postcss-csso');

module.exports = {
	mode: 'development',

	entry: {
		main: './src/main.js'
	},

	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'js/[name].js'
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(?:node_modules|bower_components)/,
				loader: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/react'],
						plugins: [
							['@babel/plugin-proposal-decorators', { legacy: true }],
							['@babel/plugin-proposal-class-properties', { loose: true }]
						]
					}
				}
			},
			{
				test: /\.css$/,
				loader: [
					'simple-css-loader',
					{
						loader: 'postcss-loader',
						options: {
							plugins: [
								nesting(),
								autoprefixer({ overrideBrowserslist: ['last 3 versions'] }),
								csso({ restructure: false })
							]
						}
					}
				]
			}
		]
	},

	devtool: false,

	watch: true,

	node: {
		console: false,
		global: false,
		process: false,
		__filename: false,
		__dirname: false,
		Buffer: false,
		setImmediate: false
	}
};
