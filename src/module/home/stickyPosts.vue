<template>

  <div class="segments sticky">
    <article v-for="topArticle in topArticleList.list" :key="topArticle.id" class="item show">
      <div class="cover">
        <a :title="topArticle.title" href="#">
          <img :src="topArticle.thumbnail" alt="文章配图" class="lozaded">
        </a>
      </div>
      <div class="info">
        <div class="meta">
          <span class="item" title="创建时间">
            <span class="icon"><i class="iconfont icon-rili"></i></span>
            <time :datetime="topArticle.createTime">{{ topArticle.createTime }}</time>
          </span>
          <span class="item" title="本文字数">
            <span class="icon"><i class="iconfont icon-yongyan"></i> </span>
            <span>{{ (topArticle.wordage - (topArticle.wordage % 1000)) / 1000 + "K" }}</span> <span
              class="text">字</span>
          </span>
          <span class="item" title="浏览次数">
            <span class="icon"><i class="iconfont icon-yanjing"></i> </span>
            <span>{{ topArticle.viewCount }}</span>
          </span>
        </div>
        <h3>
          <router-link :to="{ name: 'article', params: { id: topArticle.id } }">{{ topArticle.title }}</router-link>
        </h3>
        <div class="excerpt">{{ topArticle.summary }}</div>
        <div class="meta footer">
          <span><a href="#"><i class="iconfont icon-mubiao"></i>{{ topArticle.categoryName.at(-1) }}</a></span>
        </div>
        <a :title="topArticle.title" class="btn" href="#">more...</a>
      </div>
    </article>
  </div>

</template>

<script lang='ts' setup>
import {ref, reactive, onMounted} from 'vue'
import {useThemeStore} from "@/store";
import {storeToRefs} from "pinia";


// 获取置顶文章
import {getTopArticleList} from "@/apis/article";
import {useRoute, useRouter} from "vue-router";


const topArticleList = reactive({
  code: "",
  list: [],
  msg: "",

})
onMounted(() => {
  getTopArticleList().then((res) => {
    topArticleList.list = res.data.data
    topArticleList.code = res.data.code
    topArticleList.msg = res.data.msg
  })
})

const themeStore = useThemeStore();
const {box_bg_shadow, grey5, primary_color, grey0, color_pink, color_orange, color_pink_a3} = storeToRefs(themeStore)
</script>
<style lang="less" scoped>
.segments {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > .item {
    position: relative;
    color: inherit;
    height: 14rem;
    margin: 1rem;
    opacity: 1;
    display: flex;
    border-radius: 0.625rem;
    width: calc(100% - 2rem);
    min-width: calc(100% - 2rem);
    box-shadow: 0 0.625rem 1.875rem -0.9375rem v-bind(box_bg_shadow);
    transition: all 0.2s ease-in-out 0s;
  }

  > .item:nth-child(even) {
    flex-direction: row-reverse;
  }

  > .item:hover {
    box-shadow: 0 0 2rem v-bind(box_bg_shadow);

    .cover img {
      transform: scale(1.05) rotate(1deg);
    }
  }

  .cover {
    width: 50%;
    margin-right: 1.5rem;
    -webkit-clip-path: polygon(0 0, 92% 0, 100% 100%, 0 100%);
    clip-path: polygon(0 0, 92% 0, 100% 100%, 0 100%);
    border-radius: 0.625rem 0 0 0.625rem;
    overflow: hidden;

    img {
      -o-object-fit: cover;
      object-fit: cover;
      width: 100%;
      height: 100%;
      transition: all 0.2s ease-in-out 0s;
    }
  }

  > .item:nth-child(even) .cover {
    margin-right: auto;
    margin-left: 1.5rem;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 8% 100%);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 8% 100%);
    border-radius: 0 0.625rem 0.625rem 0;
  }

  .info {
    position: relative;
    width: 50%;
    padding: 1rem 1.5rem 3rem 0;
    perspective: 62.5rem;

    .meta {
      display: flex;
      justify-content: flex-end;
      margin: 0;
      font-size: .8125em;
      color: v-bind(grey5);

      .iconfont {
        margin-right: .0625rem;
      }

      .item + .item {
        margin-left: .625rem;
      }
    }

    h3 {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      margin: 0.625rem 0;
      color: v-bind(primary_color);
    }

    .excerpt {
      overflow: hidden;
      font-size: 0.875em;
      max-height: 5rem;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      text-overflow: ellipsis;
    }

    .meta.footer {
      position: absolute;
      bottom: .5rem;
      max-width: calc(100% - 7rem);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      justify-content: flex-start;

      span {
        margin-right: .5rem;
      }
    }

  }

  > .item:nth-child(even) .info {
    padding: 1rem 0 3rem 1.5rem;
  }

  > .item:nth-child(even) .info .meta {
    justify-content: flex-start;
  }

  .btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: .3rem 1rem;
    border-radius: 1rem 0;
    color: v-bind(grey0);
    background-image: linear-gradient(to right, v-bind(color_pink) 0, v-bind(color_orange) 100%);
  }

  .btn::before {
    position: absolute;
    display: block;
    content: '';
    height: calc(100% - 1rem);
    width: calc(100% - 1rem);
    border-radius: 5rem;
    left: .5rem;
    top: .8rem;
    box-shadow: 0 0 .6rem .6rem v-bind(color_pink_a3);
    background-color: v-bind(color_pink_a3);
  }

  .btn:hover {
    transform: translateZ(2.5rem);
  }

  .btn:hover::before {
    transform: translateZ(-2.5rem);
  }

  > .item:nth-child(even) .btn {
    left: 0;
    right: auto;
    border-radius: 0 1rem;
    background-image: linear-gradient(to right,
    v-bind(color_orange) 0,
    v-bind(color_pink) 100%);
  }

  > .item:nth-child(even) .meta.footer {
    right: 0.5rem;
    justify-content: flex-start;
  }

  > .item:nth-child(even):hover .cover img {
    transform: scale(1.05) rotate(-1deg);
  }
}

@media (max-width: 767px) {
  .segments > .item {
    width: calc(100% - 1rem) !important;
    min-width: calc(100% - 1rem) !important;
    margin: 1rem 0.5rem !important;
    flex-direction: column;
    height: fit-content;
    max-height: fit-content;
  }
}

@media (max-width: 767px) {
  .segments .cover {
    width: 100%;
    height: 14rem;
    margin: auto;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 92%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 92%, 0 100%);
    border-radius: 0.625rem 0.625rem 0 0;
  }
}

@media (max-width: 767px) {
  .segments .info {
    width: 100%;
    height: 14rem;
    padding: 0 1rem 3rem;
  }
}

@media (max-width: 767px) {
  .segments .info .meta .item:not(:first-child) {
    display: none;
  }
}

@media (max-width: 767px) {
  .segments > .item:nth-child(even) {
    flex-direction: column;
  }
}

@media (max-width: 767px) {
  .segments > .item:nth-child(even) .cover {
    width: 100%;
    margin: auto;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 92%);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 92%);
    border-radius: 0.625rem 0.625rem 0 0;
  }
}

@media (max-width: 767px) {
  .segments > .item:nth-child(even) .info {
    padding: 0 1rem 3rem;
  }
}
</style>