# demos
some demos

# react-webpack-app

## 主要参考流程

关于webpack：

https://blog.csdn.net/weixin_43090018/article/details/113579896

https://blog.csdn.net/u011581852/article/details/115312695

## 坑

1. webpack-dev-server无法启动，报错**Error: Cannot find module ‘webpack-cli/bin/config-yargs‘**

   解决方案：更改webpack-cli版本

   来源 https://blog.csdn.net/cc18868876837/article/details/113901344

2. webpack5需要引入html-webpack-plugin插件才能正确显示页面

3. 使用mini-css-extract-plugin替换style-loader

  style-loader使用后css文件会直接打包为内联形式导入html

  mini-css-extract-plugin使用后文件会打包成一个main.css

  疑问：外联的方式会不会增加请求消耗？尤其会不会影响首屏加载的性能？

4. less配置好像有问题

5. resolve路径解析有无更好的方式

# koa-server

> 参考：https://github.com/caochangkui/demo/tree/koa2-learn

## 坑

1. 调试模式 --inspect

## 疑

1. 为什么每次请求页面，node后端都有两次请求记录

   观察浏览器network可以发现，第一次请求的是html，第二次请求的是favicon.ico

2. **module.exports和exports的区别**

## 记

1. koa-generator目录结构及文件分析

2. 如何进行登录验证