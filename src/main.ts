/*
 * @Author: your name
 * @Date: 2022-01-05 16:24:42
 * @LastEditTime: 2022-01-06 16:03:05
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from "vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import "virtual:windi.css";
import dataV from "@/components/dataV";
import { init } from "@/utils";
import App from "@/App.vue";
import "@/style/reset.css";
init();
const app = createApp(App);
dataV(app);
app.use(Antd);
app.mount("#app");
