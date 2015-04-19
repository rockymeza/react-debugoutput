var path = require('path');
var webpack = require('webpack');


var src = path.join(__dirname, 'src');


module.exports = {
  entry: [
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/only-dev-server",
    "./src/index.jsx"
  ],
  output: {
    filename: "bundle.js",
    path: src,
    publicPath: "/scripts/"
  },
  module: {
    loaders: [
      {test: /\.jsx?$/, loaders: ["react-hot", "babel"], include: src}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ["node_modules"]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
