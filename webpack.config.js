const path=require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

//htmlPlugin的配置信息
let htmlPluginOptions = {}
htmlPluginOptions.title = '由HtmlWebpackPlugin生成的网页';
htmlPluginOptions.template = "./src/template.html";
htmlPluginOptions.info = '自定义信息';

module.exports={
    mode: 'development',
    
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000,
      open: true
    },
    
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          },
          // bootstrap-icons的css中有字体的引入
          {
            test: /(\.woff2$)|(\.woff$)/,
            loader: 'url-loader',
            options: {
                limit: 50000,
                name: "./fonts/[name].[ext]" //当大于50K启用file-loader时，指定输出目录及文件名称（否则将产生随机名称）
            }
        }
        ]
      },
      plugins: [new HtmlWebpackPlugin(htmlPluginOptions)]
      
}