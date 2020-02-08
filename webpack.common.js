const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { DefinePlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = {
	entry: {
		app: './src/js/index.js',
		assets: [ './src/js/assets/avatars.js', './src/js/assets/emotions.js', './src/js/assets/scenes.js' ],
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
				// ignore: [ 'img/**/*' ],
			}
		]),
		new DefinePlugin({
			VERSION: JSON.stringify(require('./package.json').version)
		})
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src/js/'),
			'@css': path.resolve(__dirname, 'src/styles/'),
			'@img': path.resolve(__dirname, 'src/img/'),
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
					outputPath: 'img',
					name: '[name].[hash:8].[ext]',
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
				loader: 'raw-loader',
				// loader: 'html-loader',
				// options: {
				// 	interpolate: false,
				// 	attributes: false,
				// 	esModule: true,
				// }
			},
		],
	},
};
