const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const AutoPrefixer = require('autoprefixer')
const PostcssNested = require('autoprefixer')

// 创建插件实例
const HtmlPlugin = new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: 'index.html'
})
const MiniCssPlugin = new MiniCssExtractPlugin()

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
        HtmlPlugin,
        MiniCssPlugin,
    ],
    module: {  // 配置所有第三方模块的加载器
        rules: [
            // 配置处理 .css文件的第三方loader规则
            {
                test: /\.less$/,
                use: [
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'less-loader'
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        AutoPrefixer,
                                        PostcssNested,
                                    ],
                                ],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.js|jsx$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/react'],
                            plugins: []
                        },
                    },
                ],
                exclude: /node_modules/
            },
            {
                test: /\.ttf|woff|woff2|eot|svg|png|jpg|gif$/, use: 'url-loader'
            },
        ],
    },
    resolve: {
        alias: {
            "@": [
                path.resolve(__dirname, "./src"),
                path.resolve(__dirname, "./src/css"),
                path.resolve(__dirname, "./src/components"),
            ]
        },
        extensions: [".jsx", ".js"],
    },
}