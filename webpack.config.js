const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	devServer: {
    historyApiFallback: true,  
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/i,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.html$/i,
				use: [
					{
						loader: "html-loader"
					}
				]
			},
			{
				test: /\.(s*)css$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader 
					},
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(png|gif|jpg)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'assets/[hash].[ext]'
						}
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './public/index.html',
			filename: './index.html'
		}),
		new MiniCssExtractPlugin({
			filename: 'assets/[name].css'
		})
	]
}
