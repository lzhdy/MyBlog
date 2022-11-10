<template>

  <nav id="nav" :class="{down:showDown}">
    <div class="inner">
      <div class="toggle">
        <div aria-label="切换导航栏" class="lines">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
      </div>
      <ul class="menu">
        <li class="item title">
          <a data-pjax-state="" href="#" rel="start">Yume Shoka</a>
        </li>
        <li class="item active">
          <a data-pjax-state="" href="#" rel="section"><i class="iconfont icon-home"></i>首页</a>
        </li>
        <li class="item dropdown">
          <a data-pjax-state="" href="#" rel="section"><i class="iconfont icon-man"></i>关于</a>
          <ul class="submenu">
            <li class="item"><a data-pjax-state="" href="#" rel="section"><i
                class="iconfont icon-cloud-full"></i>自设</a>
            </li>
          </ul>
        </li>
        <li class="item dropdown">
          <a data-pjax-state="" href="#"><i class="iconfont icon-ai-article"></i>文章</a>
          <ul class="submenu">
            <li class="item"><a data-pjax-state="" href="#" rel="section"><i class="iconfont icon-case-file-full"></i>归档</a>
            </li>
            <li class="item"><a data-pjax-state="" href="#" rel="section"><i class="iconfont icon-fenleiclassify"></i>分类</a>
            </li>
            <li class="item"><a data-pjax-state="" href="#" rel="section"><i class="iconfont icon-biaoqian"></i>标签</a>
            </li>
          </ul>
        </li>
        <li class="item dropdown">
          <a data-pjax-state="" href="#"><i class="iconfont icon-magic"></i>链环</a>
          <ul class="submenu">
            <li class="item"><a data-pjax-state="" href="#" rel="section"><i class="iconfont icon-paper-plane"></i>友達</a>
            </li>
            <li class="item"><a data-pjax-state="" href="#" rel="section"><i class="iconfont icon-wangzhi"></i>网址</a>
            </li>
          </ul>
        </li>
        <li class="item">
          <a class="exturl" href="#" target="_blank"
             title="开往"><i class="iconfont icon-paper-plane"></i>开往</a></li>
      </ul>
      <ul class="right">
        <li class="item theme" @click="change"><i class="iconfont icon-iconset0453"></i></li>
        <li class="item search"><i class="iconfont icon-sousuo"></i></li>
      </ul>
    </div>
  </nav>

</template>

<script lang='ts' setup>
import {ref, reactive, onMounted, onBeforeUnmount, inject, Ref} from 'vue'
import {useThemeStore} from "@/store";
import {storeToRefs} from "pinia";



// 判断页面滚动以改变顶部导航栏情况
const showDown = ref(false)


const onScroll = () => {
  const scrollTop = document.documentElement.scrollTop + document.body.scrollTop
  showDown.value = scrollTop >= window.innerHeight * 0.55;
}

onMounted(() => {
  document.addEventListener('scroll', onScroll)
});

onBeforeUnmount(() => {
  document.removeEventListener('scroll', onScroll)
})


// 切换主题模式
const themeChange = inject<Ref<Boolean>>("themeChange")
const opacityShow = inject<Ref<number>>("opacityShow")
const displayShow = inject<Ref<String>>("displayShow")
const change = () => {
  if (themeChange!.value) {
    themeStore.$reset()
  } else {
    themeStore.darkColor();
  }
  if (opacityShow!.value === 0 && displayShow!.value === "none") {
    opacityShow!.value = 1;
    displayShow!.value = "block";
    setTimeout(() => {
      themeChange!.value = !themeChange!.value
    }, 1000)
    setTimeout(() => {
      opacityShow!.value = 0;
      displayShow!.value = "none";
    }, 3000)
  }

};

const themeStore = useThemeStore();
const {header_text_color, grey9_a5, grey9_a1} = storeToRefs(themeStore)
</script>
<style lang="less" scoped>
#nav.down {
  transform: translateY(-100%);
}

#nav {
  position: fixed;
  z-index: 9;
  width: 100%;
  height: 3.125rem;
  transition: all .2s ease-in-out 0s;

  .inner {
    margin: 0 auto;
    width: 100%;
  }

  .inner {
    height: 100%;
    display: flex;
    width: calc(100% - 0.625rem);
    flex-wrap: nowrap;
  }

  .toggle {
    display: none;
    line-height: 0;
    cursor: pointer;

    .lines {
      padding: 1.25rem;
      width: 1.375rem;
      box-sizing: unset;

      .line {
        background: v-bind(header_text_color);
        display: inline-block;
        height: .125rem;
        left: 0;
        position: relative;
        border-radius: .0625rem;
        top: 0;
        transition: all .4s;
        vertical-align: top;
        width: 100%;
        box-shadow: 0 0 .5rem rgba(0, 0, 0, .5);
      }

      .line:not(:first-child) {
        margin-top: .1875rem;
      }
    }

  }

  .menu {
    padding: .625rem 0;
    margin: 0;
    width: 100%;

    .item {
      display: inline-block;
      position: relative;
      padding: 0 .625rem;
      letter-spacing: .0625rem;
      text-align: center;

      .iconfont {
        margin-right: .5rem;
      }

      .submenu {
        display: none;
        position: absolute;
        margin-top: .5rem;
        padding: 0;
        width: max-content;
        background-color: v-bind(grey9_a5);
        box-shadow: 0 .3125rem 1.25rem -.25rem v-bind(grey9_a1);
        border-radius: .625rem 0;
        -webkit-animation: slideUpIn .3s;
        animation: slideUpIn .3s;

        .item:last-child {
          border-radius: 0 0 .625rem 0;
        }

        .item:first-child {
          border-radius: .625rem 0 0 0;
        }

        .item {
          display: block;

          a {
            display: inline-block;
            padding: .3rem .7rem;
            width: 100%;
            text-shadow: none;
          }

          a::before {
            content: none;
          }

          .ic {
            margin-right: .5rem;
          }
        }

        .item:hover a {
          transform: translateX(0.3rem);
        }

        .item.active a,
        .item:hover a {
          opacity: 1;
        }
      }

      .submenu::before {
        position: absolute;
        top: -1.25rem;
        left: 0;
        width: 100%;
        height: 2.5rem;
        content: "";
      }


    }

    .item:not(.title) a {
      display: block;
      font-size: 1em;
    }

    .item:not(.title) a::before {
      content: "";
      position: absolute;
      width: 0;
      height: 0.1875rem;
      bottom: 0;
      border-radius: 0.125rem;
      left: 50%;
      transform: translateX(-50%);
      background-color: currentColor;
    }

    .item.active:not(.dropdown) a::before,
    .item:not(.dropdown):hover a::before {
      width: 70%;
    }

    .item.dropdown > a::after {
      content: "";
      display: inline-block;
      margin-left: .3rem;
      vertical-align: middle;
      border: .3rem solid transparent;
      border-top-color: currentColor;
      border-bottom: 0;
    }

    .item.dropdown:hover .submenu {
      display: block;
    }

    .submenu:hover {
      display: block;
    }
  }

  .right {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    .item {
      padding: 0.625rem 0.5rem;
      cursor: pointer;
    }

  }
}

@media (min-width: 1200px) {
  #nav .inner {
    width: 72.5rem;
  }
}

@media (min-width: 1600px) {
  #nav .inner {
    width: 73%;
  }
}
</style>