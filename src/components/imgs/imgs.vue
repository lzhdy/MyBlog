<template>

  <div id="imgs" class="pjax">
    <ul>
      <li :style="{ background: 'rgba(0, 0, 0, 0.2) url(' + urls[0] + ') no-repeat center /cover' }"
          class="item lozaded"></li>
      <li :style="{ background: 'rgba(0, 0, 0, 0.2) url(' + urls[1] + ') no-repeat center /cover' }"
          class="item lozaded"></li>
      <li :style="{ background: 'rgba(0, 0, 0, 0.2) url(' + urls[2] + ') no-repeat center /cover' }"
          class="item lozaded"></li>
      <li :style="{ background: 'rgba(0, 0, 0, 0.2) url(' + urls[3] + ') no-repeat center /cover' }"
          class="item lozaded"></li>
      <li :style="{ background: 'rgba(0, 0, 0, 0.2) url(' + urls[4] + ') no-repeat center /cover' }"
          class="item lozaded"></li>
      <li :style="{ background: 'rgba(0, 0, 0, 0.2) url(' + urls[5] + ') no-repeat center /cover' }"
          class="item lozaded"></li>
    </ul>

  </div>

</template>

<script lang='ts' setup>
import {ref, reactive} from 'vue'

const urls = reactive(
    [
      "https://tva3.sinaimg.cn/large/6833939bly1giclhnx9glj20zk0m8npd.jpg",
      "https://tva3.sinaimg.cn/large/6833939bly1gipeyonbf9j20zk0m8e81.jpg",
      "https://tva3.sinaimg.cn/large/6833939bly1gicit31ffoj20zk0m8naf.jpg",
      "https://tva3.sinaimg.cn/large/6833939bly1giclj61ylzj20zk0m8b29.jpg",
      "https://tva3.sinaimg.cn/large/6833939bly1gicliwyw55j20zk0m8hdt.jpg",
      "https://tva3.sinaimg.cn/large/6833939bly1giciundwu5j20zk0m8n9e.jpg"
    ]
)
</script>
<style lang="less" scoped>
#imgs {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70vh;
  min-height: 25rem;
  z-index: -9;
  background-color: #363636;

  .item {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    opacity: 0;
    z-index: 0;
    -webkit-animation: imageAnimation 36s linear infinite 0s;
    animation: imageAnimation 36s linear infinite 0s;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transform-style: preserve-3d;

  }

  .item:nth-child(2) {
    -webkit-animation-delay: 6s;
    animation-delay: 6s;
  }

  .item:nth-child(3) {
    -webkit-animation-delay: 12s;
    animation-delay: 12s;
  }

  .item:nth-child(4) {
    -webkit-animation-delay: 18s;
    animation-delay: 18s;
  }

  .item:nth-child(5) {
    -webkit-animation-delay: 24s;
    animation-delay: 24s;
  }

  .item:nth-child(6) {
    -webkit-animation-delay: 30s;
    animation-delay: 30s;
  }

  .item:nth-child(7) {
    -webkit-animation-delay: 36s;
    animation-delay: 36s;
  }
}

#imgs::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
  transition: all 0.2s ease-in-out 0s;
}

@-webkit-keyframes imageAnimation {
  0% {
    opacity: 0;
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  2% {
    opacity: 1;
  }
  8% {
    opacity: 1;
    transform: scale(1.05);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  17% {
    opacity: 1;
    transform: scale(1.1);
  }
  25% {
    opacity: 0;
    transform: scale(1.1);
  }
  100% {
    opacity: 0;
  }
}

@keyframes imageAnimation {
  0% {
    opacity: 0;
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  2% {
    opacity: 1;
  }
  8% {
    opacity: 1;
    transform: scale(1.05);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  17% {
    opacity: 1;
    transform: scale(1.1);
  }
  25% {
    opacity: 0;
    transform: scale(1.1);
  }
  100% {
    opacity: 0;
  }
}
</style>