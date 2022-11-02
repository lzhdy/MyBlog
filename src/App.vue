<template>
  <div class="pace-done loaded">
    <div v-show="loadShow" class="loading">
      <loading></loading>
    </div>
    <div>
      1212121
    </div>
  </div>
</template>

<script lang='ts' setup>
import {useThemeStore} from "@/store";
import {onMounted, ref} from "vue";
import {storeToRefs} from "pinia";
//设置加载页面
const loadShow = ref(true)
document.body.style.overflow = "hidden"

onMounted(() => {
  setTimeout(() => {
    document.body.style.overflow = ""
    loadShow.value = false
  }, 3000)
})
// 切换主题模式
const isDark = ref(false)
const themeStore = useThemeStore();
const change = () => {
  if (isDark.value) {
    themeStore.$reset()
  } else {
    themeStore.darkColor();
  }
  isDark.value = !isDark.value
};
const {body_bg_shadow, grey1, text_color} = storeToRefs(themeStore)
</script>
<style lang='less'>

.pace-done {
  background: linear-gradient(to top, v-bind(body_bg_shadow) 0, v-bind(grey1) 20%) no-repeat bottom;
  color: v-bind(text_color);
  font-family: Mulish, -apple-system, "PingFang SC", "Microsoft YaHei", sans-serif;
  font-size: 1em;
  line-height: 2;
  -webkit-font-smoothing: antialiased;

  .loading {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #151320;
  }
}


</style>