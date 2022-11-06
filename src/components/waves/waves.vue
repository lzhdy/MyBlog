<template>

  <div id="waves">
    <svg class="waves" preserveAspectRatio="none" shape-rendering="auto"
         viewBox="0 24 150 28" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
      </defs>
      <g class="parallax">
        <use x="48" xlink:href="#gentle-wave" y="0"></use>
        <use x="48" xlink:href="#gentle-wave" y="3"></use>
        <use x="48" xlink:href="#gentle-wave" y="5"></use>
        <use x="48" xlink:href="#gentle-wave" y="7"></use>
      </g>
    </svg>
  </div>

</template>

<script lang='ts' setup>
import {ref, reactive} from 'vue'
import {useThemeStore} from "@/store";
import {storeToRefs} from "pinia";

const themeStore = useThemeStore();
const {grey1_a7, grey1_a5, grey1_a3, grey1, body_bg_shadow} = storeToRefs(themeStore)
</script>
<style lang="less" scoped>

.waves {
  width: 100%;
  height: 15vh;
  //margin-bottom: -0.6875rem;
  min-height: 3.125rem;
  max-height: 9.375rem;
  position: absolute;
  bottom: 0;
}

@media (max-width: 767px) {
  .waves {
    height: 10vh;
  }
}

.parallax > use {
  -webkit-animation: wave 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
  animation: wave 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}

.parallax > use:nth-child(1) {
  -webkit-animation-delay: -2s;
  animation-delay: -2s;
  -webkit-animation-duration: 7s;
  animation-duration: 7s;
  fill: v-bind(grey1_a7);
}

.parallax > use:nth-child(2) {
  -webkit-animation-delay: -3s;
  animation-delay: -3s;
  -webkit-animation-duration: 10s;
  animation-duration: 10s;
  fill: v-bind(grey1_a5);
}

.parallax > use:nth-child(3) {
  -webkit-animation-delay: -4s;
  animation-delay: -4s;
  -webkit-animation-duration: 13s;
  animation-duration: 13s;
  fill: v-bind(grey1_a3);
}

.parallax > use:nth-child(4) {
  -webkit-animation-delay: -5s;
  animation-delay: -5s;
  -webkit-animation-duration: 20s;
  animation-duration: 20s;
  fill: v-bind(grey1);
}

@-webkit-keyframes wave {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}

@keyframes wave {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}
</style>