<template>
  <!--加载页面-->
  <div v-show="loadShow" class="loading">
    <loading></loading>
  </div>
  <!--  主页面-->
  <div id="container">
    <header id="header">
      <inner></inner>
      <imgs></imgs>
      <side-nav></side-nav>
      <waves></waves>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer id="footer">
      <ending></ending>
    </footer>
  </div>
</template>

<script lang='ts' setup>
import Loading from "@/components/loading/loading.vue";
import Inner from "@/components/inner/inner.vue";
import Imgs from "@/components/imgs/imgs.vue";
import SideNav from "@/components/inner/sideNav/sideNav.vue";
import Waves from "@/components/waves/waves.vue";
import Ending from "@/components/ending/ending.vue";

import {useThemeStore} from "@/store";
import {onMounted, ref} from "vue";
import {storeToRefs} from "pinia";


//设置加载页面
// const loadShow = ref(true)
// document.body.style.overflow = "hidden"
//
// onMounted(() => {
//   setTimeout(() => {
//     document.body.classList.add("loaded")
//     document.body.style.overflow = ""
//     loadShow.value = false
//   }, 3000)
// })


const themeStore = useThemeStore();
const {
  body_bg_shadow,
  grey1,
  text_color,
  header_text_color,
  color_blue,
  grey3,
  grey4,
  grey0,
  color_pink,
  color_orange,
  grey5
} = storeToRefs(themeStore)
</script>
<style lang='less'>
.loading {
  display: flex;
  //display: none;
  align-items: center;
  justify-content: center;
  background: #151320;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999;
}

.container {
  background: linear-gradient(to top, v-bind(body_bg_shadow) 0, v-bind(grey1) 20%) no-repeat bottom;
  color: v-bind(text_color);
  font-family: Mulish, -apple-system, "PingFang SC", "Microsoft YaHei", sans-serif;
  font-size: 1em;
  line-height: 2;
  -webkit-font-smoothing: antialiased;

}

#container {
  color: v-bind(text_color);
  font-family: Mulish, -apple-system, "PingFang SC", "Microsoft YaHei", sans-serif;
  font-size: 1em;
  line-height: 2;
  -webkit-font-smoothing: antialiased;
  min-height: 100%;
  min-width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;

  #header {
    margin: 0 auto;
    position: relative;
    width: 100%;
    height: 70vh;
    text-shadow: 0 .2rem .3rem rgba(0, 0, 0, .5);
    color: v-bind(header_text_color);
    display: block;
  }
}

main {
  background: linear-gradient(to top,
  v-bind(body_bg_shadow) 0,
  v-bind(grey1) 20%) no-repeat bottom;
  display: block;
}

#footer {
  color: v-bind(grey5);
  font-size: .875em;
  background: v-bind(body_bg_shadow);
}


//通用样式
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: Mulish, "Noto Serif SC", "Noto Serif JP", Mulish, -apple-system,
  "PingFang SC", "Microsoft YaHei", sans-serif;
  font-weight: 700;
  line-height: 1.5;
  margin: 1.25rem 0 0.9375rem;
}

h1.title,
h2.title,
h3.title,
h4.title,
h5.title,
h6.title {
  font-family: Mulish, "Noto Serif JP", "Noto Serif SC", Mulish, -apple-system,
  "PingFang SC", "Microsoft YaHei", sans-serif;
}

a {
  border: none;
  color: currentColor;
  outline: 0;
  text-decoration: none;
  overflow-wrap: break-word;
  word-wrap: break-word;
  transition: all 0.2s ease-in-out 0s;
  cursor: pointer;
}

a:hover {
  border-bottom-color: v-bind(color_blue);
  color: v-bind(color_blue);
}

a::after,
a::before {
  transition: all 0.4s ease-in-out 0s;
}

a,
div,
li {
  -webkit-tap-highlight-color: transparent;
}

li {
  list-style: none;
}

hr {
  background-image: repeating-linear-gradient(-45deg,
  v-bind(grey3),
  v-bind(grey4) 0.25rem,
  transparent 0.25rem,
  transparent 0.5rem);
  border: none;
  height: 0.125rem;
  margin: 1.5rem 0;
}

#nav .menu .submenu .item.active,
#nav .menu .submenu .item:hover,
#search-pagination .current .page-number,
#sidebar .tab .item.active,
#sidebar .tab .item:hover,
.overview .menu .item.active,
.pagination .next:hover,
.pagination .page-number.current,
.pagination .page-number:hover,
.pagination .prev:hover {
  color: v-bind(grey0);
  background-image: linear-gradient(to right,
  v-bind(color_pink) 0,
  v-bind(color_orange) 100%);
  box-shadow: 0 0 0.75rem var(--color-pink-a3);
}

.blur,
.lozaded {
  -webkit-animation: blur 0.8s ease-in-out forwards;
  animation: blur 0.8s ease-in-out forwards;
}

#tool.affix .player-info.show.hide,
.fade-out,
.tip.hide {
  -webkit-animation: fadeOut 0.3s;
  animation: fadeOut 0.3s;
}

#tool.affix .player-info.show,
.slide-left-in {
  -webkit-animation: slideLeftIn 0.3s;
  animation: slideLeftIn 0.3s;
}

.cards .item.show,
.segments > .items.show,
.slide-up-big-in,
body.loaded #main .wrap,
body.loaded #sidebar .panel.active {
  -webkit-animation: slideUpBigIn 0.5s;
  animation: slideUpBigIn 0.5s;
}

.overview .author:hover .image,
.ribbon a:hover,
.shake {
  -webkit-animation: shake 1s;
  animation: shake 1s;
}

</style>