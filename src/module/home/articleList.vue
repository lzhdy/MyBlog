<template>

  <div class="segments posts">
    <article v-for="articleVo in data.articleVoList" :key="articleVo.id" class="items show">
      <div class="cover"><a :title="articleVo.title" href="#">
        <img :src="articleVo.thumbnail" alt=""></a></div>
      <div class="info">
        <div class="meta">
          <span class="items" title="创建时间">
            <span class="icon"><i class="iconfont icon-rili"></i> </span>
            <time :datetime="articleVo.createTime">{{ articleVo.createTime }}</time>
          </span>
          <span class="items" title="本文字数">
            <span class="icon"><i class="iconfont icon-yongyan"></i></span>
            <span>{{ (articleVo.wordage - (articleVo.wordage % 1000)) / 1000 + "K" }}</span><span class="text">字</span>
          </span>
          <span class="items" title="浏览次数">
            <span class="icon"><i class="iconfont icon-yanjing"></i> </span><span>{{ articleVo.viewCount }}</span>
          </span>
        </div>
        <h3><a href="#">{{ articleVo.title }}</a></h3>
        <div class="excerpt">{{ articleVo.summary }}
        </div>
        <div class="meta footer"><span><a href="#"><i
            class="iconfont icon-mubiao"></i>{{ articleVo.categoryName[0] }}</a></span></div>
        <a :title="articleVo.title" class="btn" href="#">more...</a>
      </div>
    </article>
  </div>

</template>

<script lang='ts' setup>
import {ref, Ref, reactive, onMounted, inject, onBeforeMount} from 'vue'
import {useThemeStore} from "@/store";
import {storeToRefs} from "pinia";
import {Data} from "@/store/type";

const data = inject('data') as Data

const themeStore = useThemeStore();
const {box_bg_shadow, grey5, primary_color, grey0, color_pink, color_orange, color_pink_a3} = storeToRefs(themeStore)
</script>
<style lang="less" scoped>
.segments.posts {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > .items {
    position: relative;
    color: inherit;
    width: calc(50% - 2rem);
    min-width: calc(50% - 2rem);
    height: 14rem;
    margin: 1rem;
    opacity: 0;
  }

  > .items {
    display: flex;
    border-radius: 0.625rem;
    width: calc(100% - 2rem);
    min-width: calc(100% - 2rem);
    box-shadow: 0 0.625rem 1.875rem -0.9375rem v-bind(box_bg_shadow);
    transition: all 0.2s ease-in-out 0s;
  }

  > .items.show {
    opacity: 1;
  }

  > .items:nth-child(even) {
    flex-direction: row-reverse;
  }

  > .items:hover {
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

  > .items:nth-child(even) .cover {
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
        margin-right: 0.0625rem;
      }

      .items + .items {
        margin-left: 0.625rem;
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
      bottom: 0.5rem;
      max-width: calc(100% - 7rem);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      justify-content: flex-start;

      span {
        margin-right: 0.5rem;
      }
    }


  }

  > .items:nth-child(even) .info {
    padding: 1rem 0 3rem 1.5rem;
  }

  > .items:nth-child(even) .info .meta {
    justify-content: flex-start;
  }

  .btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.3rem 1rem;
    border-radius: 1rem 0;
    color: v-bind(grey0);
    background-image: linear-gradient(to right,
    v-bind(color_pink) 0,
    v-bind(color_orange) 100%);
  }

  .btn::before {
    position: absolute;
    display: block;
    content: "";
    height: calc(100% - 1rem);
    width: calc(100% - 1rem);
    border-radius: 5rem;
    left: 0.5rem;
    top: 0.8rem;
    box-shadow: 0 0 0.6rem 0.6rem v-bind(color_pink_a3);
    background-color: v-bind(color_pink_a3);
  }

  .btn:hover {
    transform: translateZ(2.5rem);
  }

  .btn:hover::before {
    transform: translateZ(-2.5rem);
  }

  //.active .btn {
  //  transform-style: preserve-3d;
  //  transform: translateZ(2rem);
  //  -webkit-backface-visibility: hidden;
  //  backface-visibility: hidden;
  //}
  //.active .btn::before {
  //  transform-style: preserve-3d;
  //  transform: translateZ(-2rem);
  //  -webkit-backface-visibility: hidden;
  //  backface-visibility: hidden;
  //}
  > .items:nth-child(even) .btn {
    left: 0;
    right: auto;
    border-radius: 0 1rem;
    background-image: linear-gradient(to right,
    v-bind(color_orange) 0,
    v-bind(color_pink) 100%);
  }

  > .items:nth-child(even) .meta.footer {
    right: 0.5rem;
    justify-content: flex-start;
  }

  > .items:nth-child(even):hover .cover img {
    transform: scale(1.05) rotate(-1deg);
  }
}

@media (max-width: 767px) {
  .segments > .items {
    width: calc(100% - 1rem) !important;
    min-width: calc(100% - 1rem) !important;
    margin: 1rem 0.5rem !important;
  }
}

@media (max-width: 767px) {
  .segments > .item {
    flex-direction: column;
    height: fit-content;
    max-height: fit-content;
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
  .segments .info .meta .items:not(:first-child) {
    display: none;
  }
}

@media (max-width: 767px) {
  .segments > .items:nth-child(even) {
    flex-direction: column;
  }
}

@media (max-width: 767px) {
  .segments > .items:nth-child(even) .cover {
    width: 100%;
    margin: auto;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 92%);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 92%);
    border-radius: 0.625rem 0.625rem 0 0;
  }
}

@media (max-width: 767px) {
  .segments > .items:nth-child(even) .info {
    padding: 0 1rem 3rem;
  }
}
</style>