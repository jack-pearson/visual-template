<!--
 * @Author: your name
 * @Date: 2022-01-05 16:24:42
 * @LastEditTime: 2022-01-06 15:58:57
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

# Vue 3 + Typescript + Vite + dataV 的可视化模板

## 计算单位

utils 中 init 函数,是设置 html 的 font-size 值用的

## 将项目中 px 单位转换为 rem 单位

`@njleonzhang/postcss-px-to-rem and postcss-pxtorem` 使用这两个包可以将项目中的 px 转换为 rem 单位.

再 项目的主目录下面 增加一个 `.postcssrc.js` 文件.

文件的具体内容自己看吧.

## dataV

因为 **vue3**  调整了 template 语法,导致现在 的 dataV 不能使用.

我看了下 **dataV** 的源码发现, 我们可以直接拷贝过来使用.

目前`拷贝` 的组件有. 

- loading
- border 系列
- decoration 系列(没有 12----不需要这个)

其余的可以按照我的方式一点点拷贝就可以.

## WindiCSS

从使用过 `WindiCSS` 以后,就爱上了, 每个项目都用它, 用它就对了.

## sass

因为 `node-sass` 安装失败的问题, 我的项目基本上都是用的 `sass` 包.加上 `vite` 和 `webpack` 不一样, 所以 `sass-loader` 也不用了. 省了很多心了.

我的 node 版本为: v16.5.0

## ant-design-vue

这个随意. 不用都行.