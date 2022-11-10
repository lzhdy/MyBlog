<template>

  <div id="neko" :class="{dark:themeChange}" :style="{opacity: opacityShow, display: displayShow}">
    <div class="planet">
      <div class="sun"></div>
      <div class="moon"></div>
    </div>
    <div class="body">
      <div class="face">
        <section class="eyes left"><span class="pupil"></span></section>
        <section class="eyes right"><span class="pupil"></span></section>
        <span class="nose"></span>
      </div>
    </div>
  </div>

</template>

<script lang='ts' setup>
import {ref, reactive, inject, Ref} from 'vue'

const opacityShow = inject<Ref<number>>("opacityShow")
const displayShow = inject<Ref<String>>("displayShow")
const themeChange = inject<Ref<Boolean>>("themeChange")


</script>
<style scoped>
#neko {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 9999;
}

#neko {
  display: none;
  background: linear-gradient(to top, #fddb92 0, #d1fdff 80%);
}

#neko .planet {
  position: fixed;
  left: -50%;
  top: -50%;
  width: 200%;
  height: 200%;
  -webkit-animation: rotate 2s cubic-bezier(0.7, 0, 0, 1);
  animation: rotate 2s cubic-bezier(0.7, 0, 0, 1);
  transform-origin: center bottom;
}

#neko:before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0;
  background: linear-gradient(to top, #30cfd0 0, #330867 100%);
  transition: 2s ease all;
}

#neko .moon,
#neko .sun {
  position: absolute;
  border-radius: 100%;
  left: 55%;
  top: 32%;
}

#neko .sun {
  height: 40px;
  width: 40px;
  background: #ffee94;
  box-shadow: 0 0 40px #ffee94;
  opacity: 1;
}

#neko .moon {
  height: 24px;
  width: 24px;
  background: #eee;
  box-shadow: 0 0 20px #fff;
  opacity: 0;
}

#neko .body {
  display: block;
  position: absolute;
  bottom: -20px;
  height: 140px;
  width: 135px;
  left: 50%;
  margin-left: -100px;
  background: #777;
  transition: all 0.25s ease-in-out;
  -webkit-animation: slideUpBigIn 1s;
  animation: slideUpBigIn 1s;
}

#neko .body:after,
#neko .body:before {
  position: absolute;
  content: "";
  width: 0;
  height: 0;
  border-bottom: 20px solid #777;
  top: -20px;
  transition: all 0.25s ease-in-out;
}

#neko .body:before {
  border-left: 0 solid transparent;
  border-right: 30px solid transparent;
  left: 0;
}

#neko .body:after {
  border-right: 0 solid transparent;
  border-left: 30px solid transparent;
  right: 0;
}

#neko .body .eyes {
  display: block;
  position: absolute;
  background: #ffee94;
  height: 40px;
  width: 40px;
  border-radius: 100%;
  bottom: 80px;
}

#neko .body .eyes.left {
  left: 12px;
}

#neko .body .eyes.right {
  right: 12px;
}

#neko .body .eyes .pupil,
#neko .body .nose {
  display: block;
  position: relative;
  background: #ffb399;
  border-radius: 100%;
  margin: 0 auto;
}

#neko .body .eyes .pupil {
  height: 100%;
  width: 5px;
  transition: width 1s 0.5s ease-in-out;
}

#neko .body .nose {
  top: 45px;
  height: 10px;
  width: 10px;
}

#neko.dark:before {
  opacity: 1;
}

#neko.dark .sun {
  opacity: 0;
}

#neko.dark .moon {
  opacity: 1;
}

#neko.dark .body {
  background: #444;
}

#neko.dark .body:before {
  border-bottom: 20px solid #444;
}

#neko.dark .body:after {
  border-bottom: 20px solid #444;
}

#neko.dark .body .eyes .pupil {
  height: 90%;
  width: 34px;
  margin: 5% auto;
}


</style>