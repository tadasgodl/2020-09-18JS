let path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	plugins: [
		new MiniCssExtractPlugin(),
	],
	entry: __dirname + "/src/app.js",
	output: {
		path: __dirname + "/public/",
		filename: 'app.js'
	},
	devServer: {
		contentBase: path.join(__dirname, '/public'),
		compress: true,
		port: 9001
	},
	watch: true,
	watchOptions: {
		ignored: /node_modules/
	},
	module: {
  	rules: [
  	{
  		test: /\.s[ac]ss$/i,
  		use : [
  		{
  			loader: MiniCssExtractPlugin.loader,
  		},
    		'css-loader',
    		'postcss-loader',
    		'sass-loader'
  		],
	},
    {
    	test: /\.m?js$/,
    	exclude: /(node_modules|bower_components)/,
    	use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: [
            '@babel/plugin-proposal-object-rest-spread',
            '@babel/plugin-proposal-class-properties'
          ],
        }
      }
    }
  ]
}
}