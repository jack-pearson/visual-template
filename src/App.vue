<!--
 * @Author: your name
 * @Date: 2022-01-05 16:24:42
 * @LastEditTime: 2022-01-06 16:04:58
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>
  <div class="app-container absolute top-0 left-0 right-0 bottom-0 bg-black">
    <div class="main-container w-full h-full" v-if="isReady">
      <a-modal v-model:visible="isOpen" title="Basic Modal">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </a-modal>
    </div>
    <div class="loading-container w-full h-full" v-else>
      <dv-loading></dv-loading>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
const isReady = ref(false);
const isOpen = ref(false);
onMounted(() => {
  setTimeout(() => {
    isOpen.value = true;
    isReady.value = true;
  }, 2000);
});
</script>

<style lang="scss"></style>
