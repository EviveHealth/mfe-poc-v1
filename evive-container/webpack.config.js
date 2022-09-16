const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

module.exports = (env) => ({
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'bundle.[contenthash].js',
		chunkFilename: '[contenthash].js',
		path: path.resolve(
			__dirname, 'dist',
		),
		publicPath: '/',
		clean: true,
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
		// Required to tun UIkit locally
		// alias: {
		//   react: path.resolve('./node_modules/react'),
		// },
	},
	// if ui-kit is linked locally
	// watchOptions: {
	//   ignored: [
	//     '/node_modules/@evive/ui-kit',
	//   ],
	// },
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(
				__dirname, 'public', 'index.html',
			),
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css',
			chunkFilename: '[id].[contenthash].css',
		}),
		// new webpack.DefinePlugin({
		// 	USE_MOCK_DATA: JSON.stringify(env.USE_MOCK_DATA === 'true'),
		// }),
		// new CopyWebpackPlugin({
		// 	patterns: [{
		// 		from: 'public/assets',
		// 		to: 'assets',
		// 	}],
		// }),
	],
	devServer: {
		host: 'localhost',
		historyApiFallback: true,
		open: true,
		port: 8080,
		// proxy: {
		// 	'/irhythm/api': {
		// 		target: 'https://irhythm.dev.myevive.me',
		// 		secure: true,
		// 		changeOrigin: false,
		// 		headers: {
		// 			Connection: 'keep-alive',
		// 			Host: 'irhythm.dev.myevive.me',
		// 		},
		// 		bypass(
		// 			req, res, proxyOptions,
		// 		) {
		// 			console.log(
		// 				'PROXY', req.method, req.url,
		// 			);
		// 			// if (req.headers.accept.indexOf('html') !== -1) {
		// 			//   console.log('Skipping proxy for browser request.');
		// 			//   return '/index.html';
		// 			// }
		// 		},
		// 	},
		// },
	},
	// optimization: {
	// 	minimize: true, // To turn on CSS optimizer in dev
	// 	minimizer: [
	// 		'...',
	// 		new TerserPlugin({
	// 			test: /\.js(\?.*)?$/i,
	// 			minify: TerserPlugin.uglifyJsMinify,
	// 			parallel: true,
	// 		}),
	// 	],
	// },
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					},
				},
			},
			{
				test: /\.(css)$/,
				use: [
					'style-loader',
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							esModule: false,
						},
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
						},
					},
				],
			},
		],
	},
});
