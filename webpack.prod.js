const path = require('path');
const merge = require('webpack-merge');
const MinifyPlugin = require("babel-minify-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'production',
	devtool: 'source-map',
	output: {
		filename: '[name].[contenthash:8].js',
		path: path.resolve(__dirname, 'dist'),
	},
	optimization: {
		runtimeChunk: 'single',
		splitChunks: {
			chunks: 'all',
		},
	},
	plugins: [
		new MinifyPlugin({
			// https://github.com/babel/minify/tree/master/packages/babel-preset-minify#options
		}, {
			// https://github.com/webpack-contrib/babel-minify-webpack-plugin#pluginopts
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[hash:8].css'
		}),
	],
	module: {
		rules: [
			// {
			// 	test: /\.scss$/,
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
				test: /\.s?css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							esModule: true,
						}
					},
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							sourceMap: true,
							esModule: true,
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: () => [
								require('autoprefixer')
							],
							sourceMap: true
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}
				]
			},
		],
	},
});
