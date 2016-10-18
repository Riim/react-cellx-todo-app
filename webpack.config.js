var path = require('path');
var webpack = require('webpack');
var nesting = require('postcss-nesting');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(env) {
	if (!env) {
		env = {};
	}

	var plugins = [
		new webpack.LoaderOptionsPlugin({
			options: {
				context: __dirname,

				babel: {
					presets: ['es2015', 'react'],
					plugins: [
						'transform-decorators-legacy',
						'transform-object-rest-spread',
						'transform-class-properties'
					]
				},

				postcss: [
					nesting(),
					autoprefixer({ browsers: ['last 3 versions'] })
				]
			}
		}),

		new ExtractTextPlugin('css/[name].css'),

		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		})
	];

	return {
		entry: {
			main: path.join(__dirname, 'src/main.js')
		},

		output: {
			path: path.join(__dirname, 'dist'),
			filename: 'js/[name].js'
		},

		module: {
			loaders: [
				{
					test: /\.js$/,
					exclude: /(?:node_modules|bower_components)/,
					loader: 'babel'
				},
				{
					test: /\.css$/,
					loader: ExtractTextPlugin.extract('raw!postcss')
				}
			]
		},

		watch: env.dev,

		node: {
			console: false,
			global: false,
			process: false,
			Buffer: false,
			__filename: false,
			__dirname: false,
			setImmediate: false
		},

		plugins: plugins
	};
};
