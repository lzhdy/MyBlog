<template>

  <div class="inner">
    <brand></brand>
    <top-nav></top-nav>
  </div>

</template>

<script lang='ts' setup>
import brand from "./brand/brand.vue"


import {ref, reactive} from 'vue'
import Brand from "@/components/inner/brand/brand.vue";
import TopNav from "@/components/inner/topNav/topNav.vue";
import SideNav from "@/components/inner/sideNav/sideNav.vue";


</script>
<style lang="less" scoped>
.inner {
  margin: 0 auto;
  width: 100%;
}


</style>