<template>

  <div id="tool" class="audio">
    <div class="item player">
      <div class="play-pause btn"></div>
      <div class="music btn"></div>
      <audio></audio>
    </div>
    <div class="player-info">
      <div class="preview"></div>
      <div class="controller"></div>
      <div class="playlist"></div>
    </div>
    <div class="item contents" style="display: none;"><i class="ic i-list-ol"></i></div>
    <div class="item chat" style="display: none;"><i class="ic i-comments"></i></div>
    <div class="item back-to-top"><i class="ic i-arrow-up"></i><span>0%</span></div>
  </div>

</template>

<script lang='ts' setup>
import {ref, reactive} from 'vue'
import {useThemeStore} from "@/store";
import {storeToRefs} from "pinia";

// TODO: 网页放歌工具暂未完成
const themeStore = useThemeStore();
const {grey2, box_bg_shadow, grey1_a7, grey1_a3, primary_color} = storeToRefs(themeStore)
</script>
<style lang="less" scoped>
#tool {
  position: fixed;
  left: 1rem;
  top: 50vh;
  z-index: 9;

  .item {
    display: none;
    width: 1.875rem;
    height: 1.875rem;
    opacity: 0.5;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: all 0.2s ease-in-out 0s;
  }

  .item:hover {
    opacity: 0.9;
  }

  .player {
    display: inline-flex;
    flex-direction: row-reverse;
    font-size: 1.5em;
    width: auto;
    height: auto;

    > .btn {
      font-weight: 400;
      width: 1.875rem;
      text-align: center;
    }

    > .btn + .btn {
      margin-right: 0.625rem;
    }

    .music {
      display: none;
    }
  }

  .player-info {
    border-radius: 0.5rem;
    border: 0.0625rem solid v-bind(grey2);
    box-shadow: 0 0.625rem 1.875rem -0.9375rem v-bind(box_bg_shadow);
    background: v-bind(grey1_a7);
    -webkit-backdrop-filter: blur(0.625rem);
    backdrop-filter: blur(0.625rem);
    position: fixed;
    display: none;
    bottom: 0;
    overflow: hidden;
    left: 3.5rem;
    width: 50vw;
    z-index: 9;
    max-width: 25rem;

    .nav {
      font-size: 0.75em;
      height: 2.1875rem;
    }
  }

  .back-to-top span {
    font-size: 0.75em;
  }
}

#tool .player .play-pause::before {
  content: "\f07f";
}

@media (max-width: 991px) {
  #tool {
    right: 1rem;
    left: auto;
  }
}

@media (max-width: 767px) {
  #tool .player-info {
    right: 2.5rem;
  }
}


#tool.affix {
  text-shadow: none;
  top: auto;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  background: v-bind(grey1_a3);
  border-radius: 0.3125rem;
  left: 0;
  bottom: 0;

  .item {
    display: flex;
    color: v-bind(primary_color);
  }

  .player {
    font-size: 1em;
    flex-direction: column-reverse;
  }

  .player > .btn + .btn {
    margin-right: 0;
  }

  .player .music {
    display: block;
  }

  .player-info {
    left: 2.5rem;
  }

  .player-info.show {
    display: block;
  }

  .back-to-top {
    align-items: center;
    justify-content: center;
    height: auto;
    padding: 0.3125rem 0 0;
  }

  .contents {
    display: none;
  }
}

@media (min-width: 1200px) {
  #tool.affix .player-info {
    left: 3.5rem;
  }
}

@media (max-width: 991px) {
  #tool.affix .player-info {
    right: 2.5rem;
    left: auto;
  }
}

@media (max-width: 991px) {
  #tool.affix .player-info.show {
    -webkit-animation: slideRightIn 0.3s;
    animation: slideRightIn 0.3s;
  }
}

@media (max-width: 991px) {
  #tool.affix .contents {
    display: flex;
  }
}

@media (min-width: 1200px) {
  #tool.affix {
    left: 1rem;
    bottom: 1rem;
  }
}

@media (max-width: 991px) {
  #tool.affix {
    right: 0;
    bottom: 0;
    left: auto;
  }
}


</style>