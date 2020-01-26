const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const dotenv = require('dotenv');
const fs = require('fs'); 

getEnvKeys = (env) => {
  console.log("webpack code")
  console.log(env)
  const currentPath = path.join(__dirname);        
  const basePath = currentPath + '/.env';      
  const envPath = basePath + '.' + env.ENVIRONMENT;      
  const finalPath = fs.existsSync(envPath) ? envPath : basePath;      
  const fileEnv = dotenv.config({ path: finalPath }).parsed;    
  return envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});
}

module.exports = {
  entry: {
    main: ["./ClientApp/src/index.js"]
  },
  devServer: {
    historyApiFallback: true,
},
  mode: "development", // "production" | "development" | "none"
  output: {
    path: path.resolve(__dirname, "./public"), // string
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    filename: "bundle.js" // the filename template for entry chunks
    
    // the url to the output directory resolved relative to the HTML page
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: ["react-hot-loader/babel"]
          }
        }
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",      
      filename: "./index.html"
    }) ,
    new webpack.DefinePlugin(getEnvKeys('development'))  
  ],  
  devtool: 'source-map'
  
};
