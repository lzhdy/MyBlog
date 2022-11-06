<template>

  <div id="brand" :class="{affix:showDown}">
    <div class="pjax">
      <a class="logo" data-pjax-state="" href="#" rel="start">
        <p class="artboard">Yume Shoka</p>
        <h1 class="title" itemprop="name headline">優萌初華</h1>
      </a>
      <p class="meta" itemprop="description">= 有夢書架 =</p>
    </div>
  </div>

</template>

<script lang='ts' setup>
import {ref, reactive, onMounted, onBeforeUnmount} from 'vue'

const showDown = ref(false)
const brandShow = () => {
  const scrollTop = document.documentElement.scrollTop + document.body.scrollTop
  showDown.value = scrollTop >= window.innerHeight * 0.1;
}

onMounted(() => {
  document.addEventListener('scroll', brandShow)
});

onBeforeUnmount(() => {
  document.removeEventListener('scroll', brandShow)
})

</script>
<style lang="less" scoped>
#brand.affix {
  z-index: -1;
}

#brand {
  position: fixed;
  padding: 3rem 5rem 0;
  text-align: center;
  width: 100%;
  height: 50vh;
  min-height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  .pjax {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    -webkit-animation: slideDownIn .3s;
    animation: slideDownIn .3s;

    .artboard {
      font-family: 'Fredericka the Great', Mulish, -apple-system, "PingFang SC", "Microsoft YaHei", sans-serif;
      font-size: 3.5em;
      line-height: 1.2;

      + h1 {
        margin: .625rem 0;
      }

    }

    h1 {
      font-size: 2.5em;
      letter-spacing: .125rem;
    }

  }

  #brand .meta {
    display: flex;
    font-size: .875em;
    margin: 0;
  }


}


</style>