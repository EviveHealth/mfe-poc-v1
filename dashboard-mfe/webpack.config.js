const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")

const path = require('path');

const deps = require("./package.json").dependencies;
module.exports = (env) => ({
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'bundle.[contenthash].js',
		chunkFilename: '[contenthash].js',
		path: path.resolve(
			__dirname, 'dist',
		),
		publicPath: "auto",
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
		new ModuleFederationPlugin({
			name: 'Dashboard',
			filename: "remoteEntry.js",
			exposes: {
				'./dashboard': './src/Dashboard.js'
			},
			remotes: {
				CalloutsRemote: 'Callouts@http://localhost:8082/remoteEntry.js',
				BenefitsRemote: 'Benefits@http://localhost:8083/remoteEntry.js',
				CurrentStatusRemote: 'CurrentStatus@http://localhost:8084/remoteEntry.js',
			},
			shared: {
				react: {
					singleton: true,
					requiredVersion: deps.react,
				},
				"react-dom": {
					singleton: true,
					requiredVersion: deps["react-dom"],
				},
				"@evive/ui-kit": {
					singleton: true,
					requiredVersion: deps["@evive/ui-kit"],
				},
			},
		}),
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
		open: false,
		port: 8081,
		proxy: {
			'/planchoice/api': {
				target: 'https://pc.dev.myevive.me',
				secure: true,
				changeOrigin: false,
				headers: {
					Connection: 'keep-alive',
					Host: 'pc.dev.myevive.me',
				},
				bypass(
					req, res, proxyOptions,
				) {
					console.log(
						'PROXY', req.method, req.url,
					);
					// if (req.headers.accept.indexOf('html') !== -1) {
					//   console.log('Skipping proxy for browser request.');
					//   return '/index.html';
					// }
				},
			},
			hot: true,
		},
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
