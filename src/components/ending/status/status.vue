<template>

  <div class="status">
    <div class="copyright">© 2010 – <span itemprop="copyrightYear">2022</span> <span class="with-love"><i
        class="ic i-sakura rotate"></i> </span><span class="author" itemprop="copyrightHolder">Ruri Shimotsuki @ Yume Shoka</span>
    </div>
    <div class="count"><span class="post-meta-item-icon"><i class="ic i-chart-area"></i> </span><span
        title="站点总字数">2.3m 字</span> <span class="post-meta-divider">|</span> <span class="post-meta-item-icon"><i
        class="ic i-coffee"></i> </span><span title="站点阅读时长">34:41</span></div>
    <div class="powered-by">基于 <a class="exturl" href="https://hexo.io" rel="noopener external nofollow noreferrer"
                                    target="_blank" title="Hexo">Hexo</a> &amp; Theme.<a
        class="exturl" href="https://github.com/amehime/hexo-theme-shoka" rel="noopener external nofollow noreferrer"
        target="_blank" title="Shoka">Shoka</a></div>
  </div>

</template>

<script lang='ts' setup>
import {ref, reactive} from 'vue'


</script>
<style lang="less" scoped>
.status {
  width: 100%;
  text-align: center;
  margin-top: 2rem;

  .with-love {
    color: pink;
    display: inline-block;
    margin: 0 .3125rem 0 .125rem;
  }

  .powered-by {
    display: inline-block;
    margin-bottom: .625rem;
  }
}

</style>