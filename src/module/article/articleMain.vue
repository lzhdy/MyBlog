<template>

  <div class="article wrap">
    <div class="breadcrumb">
      <i class="iconfont icon-home"></i><span><a href="/">首页</a></span>
      <i class="iconfont icon-diantilianxikefuxiangyou"></i>
      <span><a href="#"><span>计算机科学</span></a></span>
      <i class="iconfont icon-diantilianxikefuxiangyou"></i>
      <span><a href="#"><span>证书</span></a></span>
      <i class="iconfont icon-diantilianxikefuxiangyou"></i>
      <span><a href="#"><span class="current">项目管理</span></a></span>
    </div>
    <hr>
    <div class="post block">
      <div class="body md">
        <div v-html="content">

        </div>

        <div class="tags">
          <a class="success" href="#"><i class="iconfont icon-icon-biaoqian"></i> PMP</a>
          <a class="success" href="#"><i class="iconfont icon-icon-biaoqian"></i> 项目管理</a>
        </div>
      </div>
      <footer>
        <div class="meta">
          <span class="item leancloud_visitors" data-flag-title="第 12 章 项目采购管理" title="阅读次数">
            <span class="icon"><i class="iconfont icon-yanjing1"></i></span><span class="text">阅读次数</span>
            <span class="leancloud-visitors-count">72</span> <span class="text">次</span>
          </span>
        </div>
        <div class="reward">
          <button @click="giveMoney"><i class="iconfont icon-dashang"></i> 赞赏</button>
          <p>请我喝[茶]~(￣▽￣)~*</p>
          <div id="qr" :style="{opacity:setOpacity, display: setDisplay }">
            <div><img alt="微信支付" src="#">
              <p><i class="iconfont icon-weixinzhifu"></i></p></div>
            <div><img alt="支付宝" src="#">
              <p><i class="iconfont icon-zhifubaozhifu"></i></p></div>
          </div>
          <div id="copyright">
            <ul>
              <li class="author"><strong>本文作者：</strong>Ruri Shimotsuki <i class="ic i-at"></i>優萌初華</li>
              <li class="link"><strong>本文链接：</strong>
                <a href="#" title="第 12 章 项目采购管理">https://shoka.lostyu.me/computer-science/certificate/pmp/chapter-12/</a>
              </li>
              <li class="license"><strong>版权声明：</strong>本站所有文章除特别声明外，均采用
                <a class="exturl" href="#" title="(CC)BY-NC-SA"><i class="ic i-creative-commons"><em>(CC)</em></i>BY-NC-SA</a>
                许可协议。转载请注明出处！
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  </div>

</template>

<script lang='ts' setup>
import {ref, reactive, nextTick} from 'vue'
import {useThemeStore} from "@/store";
import {storeToRefs} from "pinia";
import {marked} from "marked"

// 展示文章
const content = ref('')
const render = new marked.Renderer()

marked.setOptions({
  renderer: render, // 这是必填项
  gfm: true, // 启动类似于Github样式的Markdown语法
  pedantic: false, // 只解析符合Markdown定义的，不修正Markdown的错误
  sanitize: true // 原始输出，忽略HTML标签（关闭后，可直接渲染HTML标签）
})


const initContent = () => {
  content.value = marked('# hello\r\nworld!')
}
nextTick(() => {
  initContent()
})

// 展示付款码
const setOpacity = ref(0)
const setDisplay = ref("none")
const isShow = ref(true)
const giveMoney = () => {
  if (isShow.value) {
    setDisplay.value = "inline-flex"
    const setTime = setInterval(() => {
      setOpacity.value += 0.005
      if (setOpacity.value >= 1) {
        clearInterval(setTime)
      }
    }, 10)
  } else {
    const setTime = setInterval(() => {
      setOpacity.value -= 0.01
      if (setOpacity.value <= 0) {
        clearInterval(setTime)
      }
    }, 10)
    setTimeout(() => {
      setDisplay.value = "none"
    }, 900)

  }
  isShow.value = !isShow.value
}


const themeStore = useThemeStore();
const {
  grey3,
  grey5,
  body_bg_shadow,
  grey4,
  grey0,
  text_color,
  grey2,
  grey6,
  color_red_a1,
  primary_color,
  color_red_a3,
  success_note_bg,
  success_note_text
} = storeToRefs(themeStore)
</script>
<style lang="less" scoped>
.wrap {
  margin-bottom: 1.25rem;
  position: relative;
  padding: 1.25rem;

  .breadcrumb {
    display: inline-flex;
    font-size: .8125em;
    align-items: center;
    margin: 1.25rem 0;
    flex-wrap: wrap;

    .iconfont {
      margin: 0 .125rem;
      color: v-bind(grey4);
    }

    .iconfont:nth-child(1) {
      margin-left: 0;
      margin-right: .3125rem;
    }

    span {
      white-space: pre;
    }

    span.current {
      background-color: v-bind(color_red_a1);
      border-radius: 0.625rem;
      padding: 0.325rem 0.625rem;
      transition: all .2s ease-in-out 0s;
      color: v-bind(primary_color);
    }

    span.current:hover {
      background-color: v-bind(color_red_a3);
    }
  }

  .post.block {
    padding: 0 2rem;

    .md {
      font-family: Mulish, -apple-system, "PingFang SC", "Microsoft YaHei", sans-serif;
      overflow-wrap: break-word;
      word-wrap: break-word;

      a {
        color: v-bind(primary_color);
      }

      .tags {
        text-align: left;
        margin-top: .625rem;
        font-size: .75em;

        a {
          display: inline-block;
          position: relative;
          padding: 0 .3125rem;
          border-radius: .3125rem;
          background: v-bind(success_note_bg);
          color: v-bind(success_note_text);
        }

        a:before {
          content: '';
          position: absolute;
          bottom: 0;
          height: 100%;
          width: 0;
          right: 0;
          background: v-bind(color_red_a1);
          border-radius: .25rem;
          transition: all .2s ease-in-out 0s;
        }

        a:not(:last-child) {
          margin-right: .625rem;
        }

        a:hover {
          color: v-bind(primary_color);
        }

      }
    }

    .footer::before {
      content: "";
      width: 100%;
      height: .0625rem;
      background: v-bind(grey3);
      display: block;
      margin: 1.25rem auto 0;
    }

    .meta {
      color: v-bind(grey5);
      font-size: .75em;
      text-align: right;

      .item {
        display: inline-block;
        margin-right: .625rem;

        .icon {
          margin-right: .1875rem;
        }
      }
    }

    .reward {
      margin: 1.25rem auto;
      padding: .625rem 0;
      text-align: center;

      button {
        background: v-bind(primary_color);
        border: 0;
        border-radius: .3125rem;
        color: v-bind(grey0);
        cursor: pointer;
        line-height: 2;
        outline: 0;
        padding: 0 .9375rem;
        vertical-align: text-top;
        font-family: inherit;
        font-size: 100%;
        margin: 0;
        overflow: visible;
        text-transform: none;

        i {
          margin-right: .3125rem;
        }
      }

      p {
        font-size: .8125em;
        color: v-bind(grey5);
        margin: 0;
      }

      #qr {
        padding-top: 1.25rem;


        img {
          display: inline-block;
          max-width: 100%;
          margin-left: auto;
          margin-right: auto;
          border-style: none;

        }
      }

      #copyright {
        background: v-bind(grey2);
        padding: 1rem 2rem;
        position: relative;
        font-size: .75em;
        border-radius: .625rem;
        color: v-bind(grey6);
        text-align: left;

        strong {
          font-weight: bolder;
        }
      }
    }


  }
}

</style>