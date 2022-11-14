<template>

  <div class="widgets">
    <div class="rpost pjax"><h2>热门文章</h2>
      <ul>
        <li v-for="hotArticle in hotArticlesList.data" :key="hotArticle.id" class="item">
          <div class="breadcrumb">
            <div v-for="(category, index) in hotArticle.categoryName" :key="index">
              <a href="#">{{ category }}</a>
              <i class="iconfont icon-diantilianxikefuxiangyou"></i>
            </div>
          </div>
          <span>
            <a href="#">{{ hotArticle.title }}</a>
          </span>
        </li>
      </ul>
    </div>
    <div><h2>最新评论</h2>
      <ul class="leancloud-recent-comment loaded">
        <li v-for="com in newestComment.data" :key="com.id" class="item">
          <a href="#">
            <span class="breadcrumb">{{ com.userName + " @ " + getLongTime(new Date(com.createTime)) + "前" }}</span>
            <span>{{ com.content }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>

</template>

<script lang='ts' setup>
import {reactive, onMounted} from 'vue'
import {useThemeStore} from "@/store";
import {storeToRefs} from "pinia";
import {getHotArticles} from "@/apis/article";
import {getNewestComment} from "@/apis/comment";
import {HotArticles, NewestComment} from "@/store/type";

// 获取热门文章
const hotArticlesList = reactive({}) as HotArticles
const newestComment = reactive({}) as NewestComment
onMounted(() => {
  getHotArticles().then((res) => {
    hotArticlesList.code = res.data.code
    hotArticlesList.data = res.data.data
    hotArticlesList.msg = res.data.msg
  });
  getNewestComment().then((res) => {
    newestComment.code = res.data.code
    newestComment.data = res.data.data
    newestComment.msg = res.data.msg
  })
});

const getLongTime = (date: Date) => {
  const nowDate = new Date();
  const time = nowDate.getTime() - date.getTime()
  // 年
  if ((time / (12 * 30 * 24 * 60 * 60 * 1000)) < 1) {
    // 月
    if ((time / (30 * 24 * 60 * 60 * 1000)) < 1) {
      //日
      if ((time / (24 * 60 * 60 * 1000)) < 1) {
        // 小时
        if ((time / (60 * 60 * 1000)) < 1) {
          //分钟
          if ((time / (60 * 1000)) < 1) {
            return "1 分钟";
          } else {
            return Math.floor(time / (60 * 1000)) + " 分钟"
          }
        } else {
          return Math.floor(time / (60 * 60 * 1000)) + " 小时"
        }
      } else {
        return Math.floor(time / (24 * 60 * 60 * 1000)) + " 天"
      }
    } else {
      return Math.floor(time / (30 * 24 * 60 * 60 * 1000)) + " 个月"
    }

  } else {
    return Math.floor(time / (12 * 30 * 24 * 60 * 60 * 1000)) + " 年"
  }

}

const themeStore = useThemeStore();
const {body_bg_shadow, grey4} = storeToRefs(themeStore)
</script>
<style lang="less" scoped>
.widgets {
  display: flex;
  z-index: 1;
  background: v-bind(body_bg_shadow);
  justify-content: space-around;

  > div {
    width: calc(50% - 2rem);
    padding: 1rem;
  }

  ul {
    counter-reset: counter;

    .item {
      padding: 0.5rem 0 0.5rem 2rem;
      border-bottom: 0.0625rem dashed v-bind(grey4);
      position: relative;

      .breadcrumb,
      span {
        display: block;
        text-overflow: ellipsis;
        overflow: hidden;
        max-height: 2rem;
        white-space: nowrap;
      }

      .breadcrumb {
        margin: 0;
        display: flex;
        max-height: 1.2rem;
        font-size: 0.8125em;
        align-items: center;
        flex-wrap: wrap;

        .iconfont {
          font-size: 12px;
          margin: 0 0.125rem;
          color: v-bind(grey4);
        }
      }

    }

    .item::before {
      counter-increment: counter;
      content: counter(counter);
      position: absolute;
      left: 0;
      font-size: 1.5em;
      color: v-bind(grey4);
      line-height: 1.2;
      text-align: right;
      width: 1em;
    }
  }
}


@media (max-width: 767px) {
  .widgets {
    flex-direction: column-reverse;
  }

  .widgets > div {
    width: calc(100% - 1rem) !important;
  }
}


</style>