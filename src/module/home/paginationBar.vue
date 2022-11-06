<template>

  <nav class="pagination">
    <div class="inner"><a class="extend prev" data-pjax-state="" href="/" rel="prev"><i aria-label="上一页"
                                                                                        class="ic i-angle-left"></i></a><a
        class="page-number" data-pjax-state="" href="/">1</a><span class="page-number current">2</span><a
        class="page-number" data-pjax-state="" href="/page/3/">3</a><span class="space">…</span><a class="page-number"
                                                                                                   data-pjax-state=""
                                                                                                   href="/page/26/">26</a><a
        class="extend next" data-pjax-state="" href="/page/3/" rel="next"><i aria-label="下一页"
                                                                             class="ic i-angle-right"></i></a></div>
  </nav>

</template>

<script lang='ts' setup>
import {ref, reactive} from 'vue'


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