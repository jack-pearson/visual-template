/*
 * @Author: your name
 * @Date: 2022-01-05 16:31:16
 * @LastEditTime: 2022-01-06 16:03:57
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export function init(screenRatioByDesign: number = 16 / 9) {
  let docEle = document.documentElement;
  function setHtmlFontSize() {
    var screenRatio = docEle.clientWidth / docEle.clientHeight;
    var fontSize =
      ((screenRatio > screenRatioByDesign
        ? screenRatioByDesign / screenRatio
        : 1) *
        docEle.clientWidth) /
      10;
    docEle.style.fontSize = fontSize.toFixed(3) + "px";
  }
  setHtmlFontSize();
  window.addEventListener("resize", setHtmlFontSize);
}
