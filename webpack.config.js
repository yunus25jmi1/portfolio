const path = require('path');

module.exports = {
  // other configurations...
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/*')
    },
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [
      { test: /\.ts$/, exclude: /node_modules/, loader: 'ts-loader' },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
        exclude: /node_modules\/next\/dist\/shared\/lib\/utils\/warn-once\.js/
      }
    ]
  }
};
