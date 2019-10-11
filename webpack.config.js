const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, 'dist')
  },
  mode: "development",
  devServer: {
    contentBase: './dist',
    hot: true,
    hotOnly: true,
    open: true,
    before: function (app) {
      app.get('/api/test', function(req, res) {
        res.json({ custom: 'response' });
      });
      app.post('/api/post', function(req,res){
        res.json(req.IncomingMessage)
      })
    }
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
       /**当前只配置ts转换，并未配置es6转es5 */
        use: ['ts-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin()
  ]
}