module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  module : {
      loaders : [
        {text : /\.jsx$/, loader : 'jsx-loader'},
        { test: /\.css$/, loader: 'style-loader!css-loader' }    
      ]
  },
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.json', '.jsx', '.css'] 
  }
};
