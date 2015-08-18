module.exports = {
  entry: './main.jsx',
  output: {
    filename: 'bundle.js'
  },
  module : {
      loaders : [
        {text : /\.jsx$/, loader : 'jsx-loader'}    
      ]
  },
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.json', '.jsx'] 
  }
};
