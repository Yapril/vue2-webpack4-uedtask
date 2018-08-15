const path = require('path')
const VueLoader = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const SpritesmithPlugin = require('webpack-spritesmith')

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.png$/,
				loader: 'file-loader?name=i/[hash].[ext]'
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.(css|scss)$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'postcss-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	},
	plugins: [
		new VueLoader(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: true
		}),
		new SpritesmithPlugin({
			src: {
				cwd: path.resolve(__dirname, 'src/assets/sprite'),  //准备合并成sprit的图片存放文件夹
				glob: '*.png'  //哪类图片
			},
			target: {
				image: path.resolve(__dirname, 'src/assets/images/sprite.png'),  // sprite图片保存路径
				css: path.resolve(__dirname, 'src/assets/css/_sprite.scss')  // 生成的sass保存在哪里
			},
			apiOptions: {
				cssImageRef: '~sprite.png', //css根据该指引找到sprite图
			},
			spritesmithOptions: {
				padding: 4
			}
		})
	],
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.js'
		},
		modules: [
			'node_modules',
			'assets/images'
		]
	},
	devServer: {
		contentBase: 'dist',
		stats: {colors: true},
		historyApiFallback: true,
		inline: true
	}
}
