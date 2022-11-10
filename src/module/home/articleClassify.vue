<template>

  <div class="cards">
    <section v-for="category in homeCategory.data" :key="category.id" class="item show"
             @mouseleave="removeActive($event)" @mouseover="addActive($event)">
      <div :style="{background: 'url('+ category.description +')'}" class="cover lozaded">
        <h2 class="title">{{ category.name }}</h2><span>{{ category.parentName }}</span></div>
      <div class="info">
        <div class="ribbon"><a href="#">{{ category.name }}</a></div>
        <div class="inner">
          <ul class="posts">
            <li v-for="children in category.children" :key="children.id"><a href="#">{{ children.name }}</a></li>
          </ul>
          <div class="meta footer">
            <span><a href="#" title="计算机科学"><i
                class="iconfont icon-mubiao"></i>{{ category.parentName }}</a> </span>
            <span><i class="iconfont icon-wenzhangfenlei"></i>{{ category.children.length }} 个子项，6 篇文章</span>
          </div>
          <a class="btn" href="#">more...</a></div>
      </div>
    </section>
  </div>

</template>

<script lang='ts' setup>
import {ref, reactive, onMounted, onBeforeUnmount} from 'vue'
import {useThemeStore} from "@/store";
import {storeToRefs} from "pinia";
import {getHomeCategory} from "@/apis/category";

const isActive = ref(false);

const addActive = ($event: any) => {
  $event.currentTarget.className = 'item show active'
}
const removeActive = ($event: any) => {
  $event.currentTarget.className = 'item show'
}
const homeCategory = reactive({
  code: "",
  data: [],
  msg: "",
})


onMounted(() => {

  // 获取分类信息
  getHomeCategory().then((res) => {
    homeCategory.data = res.data.data
    homeCategory.code = res.data.code
    homeCategory.msg = res.data.msg
  })


  // 实现鼠标放上去翻页
  const show = document.querySelectorAll('.item.show')

  function activeShow(this: any) {
    show.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add('active');
  }

  function activeRemove(this: any) {
    show.forEach((item) =>
        item.classList.remove('active'));
  }

  show.forEach((item) => item.addEventListener('mouseenter', activeShow));
  show.forEach((item) => item.addEventListener('mouseleave', activeRemove));
});

const themeStore = useThemeStore();
const {
  header_text_color,
  grey0,
  color_orange,
  color_pink,
  primary_color,
  grey5,
  color_pink_a3,
  box_bg_shadow
} = storeToRefs(themeStore)
</script>
<style lang="less" scoped>
.cards {
  display: flex;
  margin: 0 auto;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;

  .item.show {
    opacity: 1;
    display: block;
  }

  .item {
    perspective: 62.5rem;

    position: relative;
    color: inherit;
    width: calc(50% - 2rem);
    min-width: calc(50% - 2rem);
    height: 14rem;
    margin: 1rem;
    opacity: 0;

    .cover,
    .info {
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 0.625rem;
      height: 100%;
      width: 100%;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      transform-style: preserve-3d;
      transition: ease-in-out 0.6s;

    }

    .cover {
      background-position: center;
      background-size: cover;
      padding: 0.5rem 1rem;
      font-size: 1em;
      color: v-bind(header_text_color);
      overflow: hidden;
      transform: rotateY(0);

      .title {
        margin: 0;
        white-space: normal;
        text-align: center;
      }

      span {
        font-size: 0.75em;
        position: absolute;
        right: 0.9375rem;
        top: 0.625rem;
        padding: 0 0.3125rem;
        border-radius: 0.3125rem;
        box-shadow: 0 0 0.3125rem 0.0625rem rgba(0, 0, 0, 0.6);
        background: rgba(0, 0, 0, 0.5);
      }
    }

    .cover::before {
      position: absolute;
      display: block;
      content: "";
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: linear-gradient(135deg, #434343 0, #000 100%);
      opacity: 0.25;
      z-index: -1;
    }

    .info {
      background-color: v-bind(grey0);
      transform: rotateY(-180deg);
      padding: 1rem 1.5rem 4rem;
      justify-content: space-between;

      .ribbon {
        left: -2.5rem;
        margin-bottom: 0.8rem;
        max-width: calc(100% + 2rem);
        display: inline-block;
        align-self: flex-start;
        position: relative;
        padding: 0 1rem 0 2rem;
        border-radius: 0 0.3rem 0.3rem 0;
        background-image: linear-gradient(to right,
        v-bind(color_orange) 0,
        v-bind(color_pink) 100%);
        color: v-bind(grey0);

        a {
          display: block;
          margin: 0;
          text-align: center;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        a:hover {
          color: currentColor;
        }
      }

      .ribbon::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 0;
        width: 0;
        height: 0;
        background-color: transparent;
        border-style: solid;
        border-width: 0 1rem 1rem 0;
        border-color: transparent;
        border-right-color: v-bind(color_orange);
        filter: brightness(0.9);
      }


      .inner {
        margin: 0 auto;
        width: 100%;

        ul.posts {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-content: baseline;
          min-height: 5rem;
          overflow: hidden;

          li {
            width: 45%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            color: v-bind(primary_color);
          }
        }

        .meta {
          font-size: .8125em;
          color: v-bind(grey5);

          .iconfont {
            margin-right: 0.0625rem;
          }
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
      }

    }

    .info {
      --note-border: #8fa4dc;
      --note-bg: #f1f9ff;
      --note-text: #1d4974;
      --note-hover: #1d5fa0;
    }


  }

}

.cards .item {
  position: relative;
  color: inherit;
  width: calc(50% - 2rem);
  min-width: calc(50% - 2rem);
  height: 14rem;
  margin: 1rem;
  opacity: 0;
}

.cards .item.show {
  opacity: 1;
}

.cards .item:nth-child(even) .info {
  transform: rotateY(180deg);
}

.cards .item.active .cover {
  transform: rotateY(180deg);
}

.cards .item.active .info {
  transform: rotateY(0);
  box-shadow: 0 0 2rem v-bind(box_bg_shadow);
}

.cards .item:nth-child(even).active .cover {
  transform: rotateY(-180deg);
}

.cards .item .title .iconfont {
  font-size: 80%;
}

@media (max-width: 767px) {
  .cards .item {
    width: calc(100% - 1rem) !important;
    min-width: calc(100% - 1rem) !important;
    margin: 1rem 0.5rem !important;
  }
}

@media (max-width: 767px) {
  .cards .item .info {
    padding: 1rem 1rem 4rem;
  }
}

@media (max-width: 767px) {
  .cards .item .info .ribbon {
    left: -2rem;
  }
}
</style>