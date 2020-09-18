let path = require('path');

module.exports = {
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
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-proposal-object-rest-spread']
        }
      }
    }
  ]
}
}