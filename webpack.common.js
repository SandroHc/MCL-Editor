const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { DefinePlugin } = require('webpack');
const { ProvidePlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = {
	entry: {
		app: './src/js/index.js',

		// assets: [ './src/js/assets/avatars.js', './src/js/assets/emotions.js', './src/js/assets/scenes.js' ],
		scenes:   [ './src/js/assets/scenes.js' ],
		avatars:  [ './src/js/assets/avatars.js' ],
		emotions: [ './src/js/assets/emotions.js' ],
	},
	plugins: [
		new HardSourceWebpackPlugin(),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			inject: true,
			template: './src/template.html',
		}),
		new CopyWebpackPlugin([
			{
				from: 'static',
				// ignore: [ 'assets/**/*' ],
			}
		]),
		new DefinePlugin({
			VERSION: JSON.stringify(require('./package.json').version),
			USE_GTAG: true
		}),
		// new ProvidePlugin({
		// 	__: path.resolve(__dirname, 'src/js/util/functions.js'),
		// }),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src/js/'),
			'@css': path.resolve(__dirname, 'src/styles/'),
			'@assets': path.resolve(__dirname, 'src/assets/'),
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ '@babel/preset-env' ]
					}
				}
			},
			{
				test: /\.(png|svg|jpe?g|gif)$/,
				loader: 'file-loader',
				options: {
					outputPath: 'assets',
					name: '[name].[hash:8].[ext]',
					esModule: false, // Workaround for: https://github.com/webpack-contrib/html-loader/issues/203
				},
			},
			{
				test: /\.(woff2?|eot|ttf|otf)$/,
				loader: 'file-loader',
				options: {
					outputPath: 'fonts',
					name: '[name].[hash:8].[ext]',
				},
			},
			{
				test: /\.html$/,
				loader: 'html-loader',
				options: {
					interpolate: true,
					esModule: true,
				}
			},
		],
	},
};
