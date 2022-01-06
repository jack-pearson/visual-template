<!--
 * @Author: your name
 * @Date: 2022-01-05 18:56:06
 * @LastEditTime: 2022-01-06 16:03:26
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="dv-border-box-8" :ref="ref">
    <svg class="dv-border-svg-container" :width="width" :height="height">
      <defs>
        <path :id="path" :d="pathD" fill="transparent" />
        <radialGradient :id="gradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#fff" stop-opacity="1" />
          <stop offset="100%" stop-color="#fff" stop-opacity="0" />
        </radialGradient>

        <mask :id="mask">
          <circle cx="0" cy="0" r="150" :fill="`url(#${gradient})`">
            <animateMotion
              :dur="`${dur}s`"
              :path="pathD"
              rotate="auto"
              repeatCount="indefinite"
            />
          </circle>
        </mask>
      </defs>

      <polygon
        :fill="backgroundColor"
        :points="`5, 5 ${width - 5}, 5 ${width - 5} ${height - 5} 5, ${
          height - 5
        }`"
      />

      <use :stroke="mergedColor[0]" stroke-width="1" :xlink:href="`#${path}`" />

      <use
        :stroke="mergedColor[1]"
        stroke-width="3"
        :xlink:href="`#${path}`"
        :mask="`url(#${mask})`"
      >
        <animate
          attributeName="stroke-dasharray"
          :from="`0, ${length}`"
          :to="`${length}, 0`"
          :dur="`${dur}s`"
          repeatCount="indefinite"
        />
      </use>
    </svg>

    <div class="border-box-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import autoResize from "../mixin/autoResize";

import { deepMerge, deepClone, uuid } from "../utils/index";

export default {
  name: "DvBorder8",
  mixins: [autoResize],
  props: {
    color: {
      type: Array,
      default: () => [],
    },
    dur: {
      type: Number,
      default: 3,
    },
    backgroundColor: {
      type: String,
      default: "transparent",
    },
    reverse: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    const id = uuid();
    return {
      ref: "border-box-8",
      path: `border-box-8-path-${id}`,
      gradient: `border-box-8-gradient-${id}`,
      mask: `border-box-8-mask-${id}`,

      defaultColor: ["#235fa7", "#4fd2dd"],

      mergedColor: [],
    };
  },
  computed: {
    length() {
      const { width, height } = this;

      return (width + height - 5) * 2;
    },
    pathD() {
      const { reverse, width, height } = this;

      if (reverse)
        return `M 2.5, 2.5 L 2.5, ${height - 2.5} L ${width - 2.5}, ${
          height - 2.5
        } L ${width - 2.5}, 2.5 L 2.5, 2.5`;

      return `M2.5, 2.5 L${width - 2.5}, 2.5 L${width - 2.5}, ${
        height - 2.5
      } L2.5, ${height - 2.5} L2.5, 2.5`;
    },
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
