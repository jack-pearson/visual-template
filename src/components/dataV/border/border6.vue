<!--
 * @Author: your name
 * @Date: 2022-01-05 18:53:39
 * @LastEditTime: 2022-01-06 16:03:21
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="dv-border-box-6" :ref="ref">
    <svg class="dv-border-svg-container" :width="width" :height="height">
      <polygon
        :fill="backgroundColor"
        :points="`
        9, 7 ${width - 9}, 7 ${width - 9}, ${height - 7} 9, ${height - 7}
      `"
      />

      <circle :fill="mergedColor[1]" cx="5" cy="5" r="2" />
      <circle :fill="mergedColor[1]" :cx="width - 5" cy="5" r="2" />
      <circle :fill="mergedColor[1]" :cx="width - 5" :cy="height - 5" r="2" />
      <circle :fill="mergedColor[1]" cx="5" :cy="height - 5" r="2" />
      <polyline :stroke="mergedColor[0]" :points="`10, 4 ${width - 10}, 4`" />
      <polyline
        :stroke="mergedColor[0]"
        :points="`10, ${height - 4} ${width - 10}, ${height - 4}`"
      />
      <polyline :stroke="mergedColor[0]" :points="`5, 70 5, ${height - 70}`" />
      <polyline
        :stroke="mergedColor[0]"
        :points="`${width - 5}, 70 ${width - 5}, ${height - 70}`"
      />
      <polyline :stroke="mergedColor[0]" :points="`3, 10, 3, 50`" />
      <polyline :stroke="mergedColor[0]" :points="`7, 30 7, 80`" />
      <polyline
        :stroke="mergedColor[0]"
        :points="`${width - 3}, 10 ${width - 3}, 50`"
      />
      <polyline
        :stroke="mergedColor[0]"
        :points="`${width - 7}, 30 ${width - 7}, 80`"
      />
      <polyline
        :stroke="mergedColor[0]"
        :points="`3, ${height - 10} 3, ${height - 50}`"
      />
      <polyline
        :stroke="mergedColor[0]"
        :points="`7, ${height - 30} 7, ${height - 80}`"
      />
      <polyline
        :stroke="mergedColor[0]"
        :points="`${width - 3}, ${height - 10} ${width - 3}, ${height - 50}`"
      />
      <polyline
        :stroke="mergedColor[0]"
        :points="`${width - 7}, ${height - 30} ${width - 7}, ${height - 80}`"
      />
    </svg>

    <div class="border-box-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import autoResize from "../mixin/autoResize";

import { deepMerge, deepClone } from "../utils/index";

export default {
  name: "DvBorder6",
  mixins: [autoResize],
  props: {
    color: {
      type: Array,
      default: () => [],
    },
    backgroundColor: {
      type: String,
      default: "transparent",
    },
  },
  data() {
    return {
      ref: "border-box-6",

      defaultColor: ["rgba(255, 255, 255, 0.35)", "gray"],

      mergedColor: [],
    };
  },
  watch: {
    color() {
      const { mergeColor } = this;

      mergeColor();
    },
  },
  methods: {
    mergeColor() {
      const { color, defaultColor } = this;

      this.mergedColor = deepMerge(deepClone(defaultColor, true), color || []);
    },
  },
  mounted() {
    const { mergeColor } = this;

    mergeColor();
  },
};
</script>
