<template>

  <div class="inner">
    <widgets></widgets>
    <status></status>
  </div>

</template>

<script lang='ts' setup>
import {ref, reactive} from 'vue'
import Widgets from "@/components/ending/widgets/widgets.vue";
import Status from "@/components/ending/status/status.vue";


</script>
<style scoped>
.inner {
  margin: 0 auto;
  width: calc(100% - 0.625rem);
  position: relative;
  padding-right: 16.25rem;
}

@media (min-width: 1200px) {
  .inner {
    width: 72.5rem;
  }
}

@media (min-width: 1600px) {
  .inner {
    width: 73%;
  }
}

@media (max-width: 991px) {
  .inner {
    padding-left: 0;
    padding-right: 0;
    width: auto;
  }
}

</style>