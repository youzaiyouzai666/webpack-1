const HelloCompilationPlugin = require('./plugins/HelloCompilationPlugin.js');
const FileListPlugin = require('./plugins/FileListPlugin');
const SealPlugin = require('./plugins/SealPlugin');
const watchPlugin = require('./plugins/watchPlugin')
module.exports = {
	module: {
		loaders: [
			{ test: /\.css$/, loader: "css-loader" }
		]
	},
	plugins: [
		new HelloCompilationPlugin({options: true}),
		new FileListPlugin(),
		new SealPlugin(),
		new watchPlugin()
	  ]
};
