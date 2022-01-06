/*
 * @Author: your name
 * @Date: 2021-11-25 14:35:04
 * @LastEditTime: 2022-01-06 15:59:15
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  plugins: {
    "@njleonzhang/postcss-px-to-rem": {
      unitToConvert: "px",
      widthOfDesignLayout: 1920, // 设计稿的宽度
      unitPrecision: 5, // 十进制的单位.
      selectorBlackList: [".ignore", ".hairlines"], // 过滤那些不用转换的class
      minPixelValue: 1, // 设置要替换的最小像素值.
      mediaQuery: false, // 允许在媒体查询中转换px
    },
  },
};
