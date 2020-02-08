const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		app: './src/js/index.js',
		assets: './src/js/assets.js',
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
		hot: true,
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
		])
	],
	output: {
		filename: '[name].bundle.js', // [contenthash] [hash]
		path: path.resolve(__dirname, 'dist'),
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
		runtimeChunk: true,
	},
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
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			},
			// {
			// 	test: /\.s[ac]ss$/,
			// 	use: [
			// 		'css-loader',
			// 		{
			// 			loader: 'fast-sass-loader',
			// 			options: {
			// 				includePaths: [
			// 					path.resolve(__dirname, 'src/styles'),
			// 				]
			// 			}
			// 		}
			// 	]
			// },
			{
				test: /\.s[ac]ss$/,
				loader: [
					'style-loader',
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}
				]
			},
			{
				test: /\.(png|svg|jpe?g|gif)$/,
				loader: 'file-loader',
				options: {
					outputPath: 'img',
					name: '[name].[hash].[ext]',
				},
			},
			{
				test: /\.(woff2?|eot|ttf|otf)$/,
				loader: 'file-loader',
				options: {
					outputPath: 'fonts',
					name: '[name].[hash].[ext]',
				},
			},
			{
				test: /\.html$/,
				loader: 'raw-loader',
				// loader: 'html-loader',
				// options: {
				// 	root: path.resolve(__dirname, 'src'),
				// 	interpolate: true,
				// 	esModule: true,
				// }
			},
		],
	},
};
