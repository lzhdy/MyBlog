<template>

  <nav class="pagination">
    <div class="inner">
      <a v-show="pageNumber > 1" class="extend prev" href="#" rel="prev" @click="toPrev"><i aria-label="上一页"
                                                                                            class="iconfont icon-xiangzuo"></i></a>
      <a v-show="pageNumber >= 3" class="page-number" href="#" @click="toFirst">1</a>
      <span v-show="pageNumber > 3" class="space">…</span>
      <a v-show="pageNumber > 1" class="page-number" href="#" @click="toPrev">{{ pageNumber - 1 }}</a>
      <span class="page-number current">{{ pageNumber }}</span>
      <a v-show="Math.ceil(data.total/pageSize) > 1 && Math.ceil(data.total/pageSize) > pageNumber" class="page-number"
         href="#" @click="toNext">{{ pageNumber + 1 }}</a>
      <span v-show="Math.ceil(data.total/pageSize) - pageNumber > 2" class="space">…</span>
      <a v-show="Math.ceil(data.total/pageSize) - pageNumber > 1" class="page-number" href="#"
         @click="toLast">{{ Math.ceil(data.total / pageSize) }}</a>
      <a v-show="pageNumber < Math.ceil(data.total/pageSize)" class="extend next" data-pjax-state="" href="#" rel="next"
         @click="toNext"><i aria-label="下一页" class="iconfont icon-xiangyou2"></i></a>
    </div>
  </nav>

</template>

<script lang='ts' setup>
import {ref, reactive, inject, Ref, onMounted} from 'vue'
import {Data} from "@/store/type";
import {getArticleList} from "@/apis/article";

const pageNumber = inject<Ref<number>>('pageNumber')
const pageSize = inject<Ref<number>>('pageSize')
const data = inject('data') as Data

const toPrev = () => {
  pageNumber!.value = pageNumber!.value - 1
  getPageData()
}
const toFirst = () => {
  pageNumber!.value = 1
  getPageData()
}
const toNext = () => {
  pageNumber!.value = pageNumber!.value + 1
  getPageData()
}
const toLast = () => {
  pageNumber!.value = Math.ceil(data.total / pageSize!.value)
  getPageData()
}
const getPageData = () => {
  getArticleList({pageNumber: pageNumber!.value, pageSize: pageSize!.value}).then((res) => {
    data.articleVoList = res.data.data.articleVoList
    data.total = res.data.data.total
  })
}

onMounted(() => {
  getPageData()
})


</script>
<style lang="less" scoped>
.pagination {
  width: 100%;
  padding: 1.25rem 3.125rem;
  text-align: center;
  display: inline-block;
  color: var(--grey-5);

  .inner {
    width: auto;
    border-radius: 0.9375rem;
    margin: 0 auto;

    .prev {
      margin-left: 0;
    }

    .space {
      margin: 0;
      padding: 0;
    }

    .next {
      margin-right: 0;
    }
  }
}

.pagination .next,
.pagination .page-number,
.pagination .prev {
  transition: all 0.2s ease-in-out 0s;
}


.pagination .next,
.pagination .page-number,
.pagination .prev,
.pagination .space {
  display: inline-block;
  margin: 0 0.5rem;
  padding: 0 0.75rem;
  position: relative;
  border-radius: 0.3125rem;
}

@media (max-width: 767px) {
  .pagination {
    padding: 1.25rem 0.625rem;
  }
}

@media (max-width: 767px) {
  .pagination .next,
  .pagination .page-number,
  .pagination .prev,
  .pagination .space {
    margin: 0 0.3125rem;
  }
}
</style>