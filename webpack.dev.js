const path = require('path');
const merge = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
		hot: true,
	},
	output: {
		filename: '[name].[hash:8].js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.s?css$/,
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
		],
	},
});
