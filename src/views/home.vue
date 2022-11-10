<template>
  <div class="inner">
    <div id="main" class="pjax">
      <div class="index wrap">
        <h2 v-show="pageNumber === 1" class="divider">置顶文章</h2>
        <sticky-posts v-show="pageNumber === 1"></sticky-posts>
        <h2 v-show="pageNumber === 1" class="divider">精选分类</h2>
        <article-classify v-show="pageNumber === 1"></article-classify>
        <h2 v-show="pageNumber === 1" class="divider">文章列表</h2>
        <article-list></article-list>
      </div>
      <pagination-bar></pagination-bar>
    </div>
    <sidebar></sidebar>
  </div>

</template>

<script lang='ts' setup>
import StickyPosts from "@/module/home/stickyPosts.vue";
import ArticleClassify from "@/module/home/articleClassify.vue";
import ArticleList from "@/module/home/articleList.vue";
import PaginationBar from "@/module/home/paginationBar.vue";
import Sidebar from "@/components/sideBar/sidebar.vue";

import {useThemeStore} from "@/store";
import {storeToRefs} from "pinia";
import {onMounted, provide, reactive, ref} from "vue";
import {Data} from "@/store/type";

const pageNumber = ref(1)
const pageSize = ref(5)

// 获取文章列表数据
const data = reactive({}) as Data


provide('pageNumber', pageNumber)
provide('pageSize', pageSize)
provide('data', data)


const themeStore = useThemeStore();
const {grey0, grey1, body_bg_shadow, grey4, text_color} = storeToRefs(themeStore)
</script>
<style lang="less" scoped>
.inner {
  width: calc(100% - 0.625rem);
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  color: v-bind(text_color);

  #main {
    background: linear-gradient(to top, v-bind(grey0) 0, v-bind(grey1) 20%) no-repeat top;
    box-shadow: 0 1.25rem 1rem 0.3125rem v-bind(body_bg_shadow);
    width: calc(100% - 15.75rem);
    min-height: 37.5rem;

    .wrap {
      position: relative;
      padding: 1.25rem;
    }

    .wrap:nth-child(1) {
      margin-bottom: 1.25rem;
    }

    .divider {
      margin: 1rem 0;
      line-height: 1;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05rem;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      color: v-bind(grey4);
      display: table;
      white-space: nowrap;
      height: auto;
      text-align: center;
    }

    .divider::after,
    .divider::before {
      content: "";
      display: table-cell;
      position: relative;
      top: 50%;
      width: 50%;
      background-repeat: no-repeat;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABaAAAAACCAYAAACuTHuKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1OThBRDY4OUNDMTYxMUU0OUE3NUVGOEJDMzMzMjE2NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1OThBRDY4QUNDMTYxMUU0OUE3NUVGOEJDMzMzMjE2NyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU5OEFENjg3Q0MxNjExRTQ5QTc1RUY4QkMzMzMyMTY3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU5OEFENjg4Q0MxNjExRTQ5QTc1RUY4QkMzMzMyMTY3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+VU513gAAADVJREFUeNrs0DENACAQBDBIWLGBJQby/mUcJn5sJXQmOQMAAAAAAJqt+2prAAAAAACg2xdgANk6BEVuJgyMAAAAAElFTkSuQmCC);
    }

    .divider::before {
      background-position: right 1rem top 50%;
    }

    .divider::after {
      background-position: left 1rem top 50%;
    }
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


@media (max-width: 991px) {
  #main {
    width: 100%;
  }

  #main .wrap {
    padding: 0.625rem;
  }
}

@media (max-width: 767px) {
  #main .wrap {
    padding: 0.5rem;
  }
}
</style>