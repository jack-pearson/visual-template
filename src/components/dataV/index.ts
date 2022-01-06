/*
 * @Author: your name
 * @Date: 2022-01-05 18:26:44
 * @LastEditTime: 2022-01-06 16:03:08
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import "./border/main.css";
import "./decoration/main.css";

import borderBox1 from "./border/border1.vue";
import borderBox2 from "./border/border2.vue";
import borderBox3 from "./border/border3.vue";
import borderBox4 from "./border/border4.vue";
import borderBox5 from "./border/border5.vue";
import borderBox6 from "./border/border6.vue";
import borderBox7 from "./border/border7.vue";
import borderBox8 from "./border/border8.vue";
import borderBox9 from "./border/border9.vue";
import borderBox10 from "./border/border10.vue";
import borderBox11 from "./border/border11.vue";
import borderBox12 from "./border/border12.vue";
import borderBox13 from "./border/border13.vue";
import decoration1 from "./decoration/decoration1.vue";
import decoration2 from "./decoration/decoration2.vue";
import decoration3 from "./decoration/decoration3.vue";
import decoration4 from "./decoration/decoration4.vue";
import decoration5 from "./decoration/decoration5.vue";
import decoration6 from "./decoration/decoration6.vue";
import decoration7 from "./decoration/decoration7.vue";
import decoration8 from "./decoration/decoration8.vue";
import decoration9 from "./decoration/decoration9.vue";
import decoration10 from "./decoration/decoration10.vue";
import decoration11 from "./decoration/decoration11.vue";
import dvLoading from "./loading/index.vue";
export {
  borderBox1,
  borderBox2,
  borderBox3,
  borderBox4,
  borderBox5,
  borderBox6,
  borderBox7,
  borderBox8,
  borderBox9,
  borderBox10,
  borderBox11,
  borderBox12,
  borderBox13,
  decoration1,
  decoration2,
  decoration3,
  decoration4,
  decoration5,
  decoration6,
  decoration7,
  decoration8,
  decoration9,
  decoration10,
  decoration11,
  dvLoading,
};

export default (Vue: any) => {
  Vue.component(borderBox1.name, borderBox1);
  Vue.component(borderBox2.name, borderBox2);
  Vue.component(borderBox3.name, borderBox3);
  Vue.component(borderBox4.name, borderBox4);
  Vue.component(borderBox5.name, borderBox5);
  Vue.component(borderBox6.name, borderBox6);
  Vue.component(borderBox7.name, borderBox7);
  Vue.component(borderBox8.name, borderBox8);
  Vue.component(borderBox9.name, borderBox9);
  Vue.component(borderBox10.name, borderBox10);
  Vue.component(borderBox11.name, borderBox11);
  Vue.component(borderBox12.name, borderBox12);
  Vue.component(borderBox13.name, borderBox13);
  Vue.component(decoration1.name, decoration1);
  Vue.component(decoration2.name, decoration2);
  Vue.component(decoration3.name, decoration3);
  Vue.component(decoration4.name, decoration4);
  Vue.component(decoration5.name, decoration5);
  Vue.component(decoration6.name, decoration6);
  Vue.component(decoration7.name, decoration7);
  Vue.component(decoration8.name, decoration8);
  Vue.component(decoration9.name, decoration9);
  Vue.component(decoration10.name, decoration10);
  Vue.component(decoration11.name, decoration11);
  Vue.component(dvLoading.name, dvLoading);
};
