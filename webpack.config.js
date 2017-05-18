module.exports = {
  entry: './app/assets/javascripts/task_list.coffee',
  output: {
    filename: 'dist/task_list.js',
    libraryTarget: 'var',
    library: 'TaskList',
  },
  module: {
    loaders: [
      {
        test: /\.coffee$/,
        loader: 'coffee-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.coffee', '.js']
  }
}
