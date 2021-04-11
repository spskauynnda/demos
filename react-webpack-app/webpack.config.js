const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 创建插件实例
const HtmlPlugin = new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: 'index.html'
})

module.exports = {
    mode: 'development',  // 开发环境
    entry: {  // 打包的入口文件
        main: './main.js'
    },
    output: {  // 打包的输入文件及地址
        path: path.resolve(__dirname, 'dist')
    },
    devServer: { // 这是配置 dev-server 命令参数的第二种形式，相对来说，这种方式麻烦一些
    },
    plugins: [  // 配置插件
        HtmlPlugin
    ],
    module: {  // 配置所有第三方模块得加载器
        rules: [
            // 配置处理 .css文件得第三方loader规则
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    }
}