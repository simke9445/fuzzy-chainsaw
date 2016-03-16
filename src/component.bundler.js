var webpack = require('webpack');

var compiler = webpack({
  entry: [
    __dirname + '/components/component-exports.jsx'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/../dist',
    publicPath: '/',
    filename: 'component.bundle.js',
    libraryTarget: "commonjs"
  },
  target: 'node'
});

compiler.run(function(err, stats) {
  if (err != null) err;
  
  console.log('\nReact component compilation complete!\n'); 
});