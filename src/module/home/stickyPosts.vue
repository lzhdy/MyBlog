<template>

  <div class="segments sticky">
    <article class="item show">
      <div class="cover"><a data-pjax-state="" href="/computer-science/note/theme-shoka-doc/"
                            itemprop="url" title="Hexo主题Shoka &amp; multi-markdown-it渲染器使用说明"><img
          alt="文章配图"
          class="lozaded" data-loaded="true"
          data-src="https://tva2.sinaimg.cn/mw690/6833939bly1gipeubcbajj20zk0m8h1h.jpg"
          src="https://tva2.sinaimg.cn/mw690/6833939bly1gipeubcbajj20zk0m8h1h.jpg"></a></div>
      <div class="info">
        <div class="meta"><span class="item" title="创建时间：2020-08-13 20:45:48"><span class="icon"><i
            class="ic i-calendar"></i> </span><time datetime="2020-08-13T20:45:48+08:00"
                                                    itemprop="dateCreated datePublished">2020-08-13</time> </span><span
            class="item" title="本文字数"><span class="icon"><i
            class="ic i-pen"></i> </span><span>2.2k</span> <span class="text">字</span> </span><span class="item"
                                                                                                     title="阅读时长"><span
            class="icon"><i class="ic i-clock"></i> </span><span>2 分钟</span></span></div>
        <h3><a data-pjax-state="" href="/computer-science/note/theme-shoka-doc/"
               itemprop="url" title="Hexo主题Shoka &amp; multi-markdown-it渲染器使用说明">Hexo主题Shoka &amp;
          multi-markdown-it渲染器使用说明</a></h3>
        <div class="excerpt">跳票 N 久终于更新的简单的使用说明 hexo-theme-shoka ：本博客自用的主题
          hexo-renderer-multi-markdown-it：配套的 markdown 渲染器 已经支持 hexo 5。
          因博主被学业和工作掏空，本项目已停滞更新大半年，问题也无法及时回复大家，这个悲惨状态可能还要持续半年的样子。
          有很多热心小伙伴在评论区或者项目 issue 帮忙回答问题，非常非常感谢！ 本项目是完全开源的，也有做一些
          example...
        </div>
        <div class="meta footer"><span><a data-pjax-state="" href="/categories/computer-science/note/theme-shoka-doc/"
                                          itemprop="url" title="Theme Shoka Documentation"><i
            class="ic i-flag"></i>Theme Shoka Documentation</a></span></div>
        <a class="btn" data-pjax-state=""
           href="/computer-science/note/theme-shoka-doc/" itemprop="url"
           title="Hexo主题Shoka &amp; multi-markdown-it渲染器使用说明">more...</a>
      </div>
    </article>
  </div>

</template>

<script lang='ts' setup>
import {ref, reactive} from 'vue'
import {useThemeStore} from "@/store";
import {storeToRefs} from "pinia";

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

      .ic {
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
</style>