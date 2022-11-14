<template>


  <div class="inner">
    <div id="main" class="pjax">
      <article-main></article-main>
      <post-nav></post-nav>
      <article-comment></article-comment>
    </div>
    <sidebar></sidebar>
    <div class="dimmer"></div>
  </div>


</template>

<script lang='ts' setup>
import {ref, reactive, onMounted} from 'vue'
import ArticleMain from "@/module/article/articleMain.vue";
import PostNav from "@/module/article/postNav.vue";
import {useThemeStore} from "@/store";
import {storeToRefs} from "pinia";
import ArticleComment from "@/module/article/articleComment.vue";
import Sidebar from "@/components/sideBar/sidebar.vue";
import {useRoute} from "vue-router";


const router = useRoute()
console.log(router)
console.log(router.params.id)
onMounted(() => {

})


const themeStore = useThemeStore();
const {grey0, grey1, body_bg_shadow, grey4, text_color} = storeToRefs(themeStore)
</script>
<style lang="less" scoped>

.inner {
  width: calc(100% - .625rem);
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  color: v-bind(text_color);

  #main {
    background: linear-gradient(to top, v-bind(grey0) 0, v-bind(grey1) 20%) no-repeat top;
    box-shadow: 0 1.25rem 1rem 0.3125rem v-bind(body_bg_shadow);
    width: calc(100% - 15.75rem);
    min-height: 37.5rem;
  }

  .dimmer {
    display: none;
  }
}

.inner {
  margin: 0 auto;
  width: 100%;
}

@media (min-width: 1200px) {
  .inner {
    width: 72.5rem;
  }
}

@media (min-width: 1600px) {
  .inner {
    width: 73%;
  }
}

</style>