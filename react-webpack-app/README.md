# Webpack+React配置过程记录

## 主要参考流程

关于webpack：

https://blog.csdn.net/weixin_43090018/article/details/113579896

https://blog.csdn.net/u011581852/article/details/115312695

## 坑

1. webpack-dev-server无法启动，报错**Error: Cannot find module ‘webpack-cli/bin/config-yargs‘**

   解决方案：更改webpack-cli版本

   来源 https://blog.csdn.net/cc18868876837/article/details/113901344

2. webpack5需要引入html-webpack-plugin插件才能正确显示页面

