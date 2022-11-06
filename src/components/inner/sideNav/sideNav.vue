<template>

  <div ref="navigation" class="navigation">
    <div ref="menuToggle" class="menuToggle" @click="active"></div>
    <ul ref="item">
      <li class="list active" style="--clr:#f44336;">
        <a>
          <span class="icon"><i class="iconfont icon-home"></i></span>
          <span class="menu-text">home</span>
        </a>
      </li>
      <li class="list" style="--clr:#ffa117;">
        <a>
          <span class="icon"><i class="iconfont icon-Iron-Man"></i></span>
          <span class="menu-text">about</span>
        </a>
      </li>
      <li class="list" style="--clr:#0fc70f;">
        <a>
          <span class="icon"><i class="iconfont icon-ai-article"></i></span>
          <span class="menu-text">article</span>
        </a>
      </li>
      <li class="list" style="--clr:#2196f3;">
        <a>
          <span class="icon"><i class="iconfont icon-C-20"></i></span>
          <span class="menu-text">classify</span>
        </a>
      </li>
      <li class="list" style="--clr:#b451e9;">
        <a>
          <span class="icon"><i class="iconfont icon-biaoqian"></i></span>
          <span class="menu-text">label</span>
        </a>
      </li>
      <li class="list" style="--clr:#ff7979;">
        <a>
          <span class="icon"><i class="iconfont icon-aixin"></i></span>
          <span class="menu-text">Friendly</span>
        </a>
      </li>
      <li class="list" style="--clr:#8cc540;">
        <a>
          <span class="icon"><i class="iconfont icon-chain"></i></span>
          <span class="menu-text">chain</span>
        </a>
      </li>
      <li class="list" style="--clr:#81ecec;">
        <a>
          <span class="icon"><i class="iconfont icon-wangzhi"></i></span>
          <span class="menu-text">goto</span>
        </a>
      </li>
    </ul>
  </div>


</template>

<script lang='ts' setup>
import {ref, reactive, onMounted, onBeforeUnmount} from 'vue'

const navigation = ref<HTMLElement | null>(null)
const menuToggle = ref<HTMLElement | null>(null)
const item = ref<HTMLElement | null>(null)

const showSide = () => {
  const scrollTop =
      document.documentElement.scrollTop + document.body.scrollTop
  const headerDom = navigation.value

  if (scrollTop >= window.innerHeight * 0.55) {

    if (!headerDom!.classList.contains("on-side")) {
      headerDom!.classList.add("on-side") // 添加类名 css里设置动画
    }
  } else {
    headerDom!.classList.remove("on-side")
    headerDom?.classList.remove("open")
  }
}

onMounted(() => {
  document.addEventListener('scroll', showSide);

  const list = document.querySelectorAll('.list')

  function activeLink(this: any) {
    list.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add('active');
  }

  list.forEach((item) => item.addEventListener('click', activeLink));

});
onBeforeUnmount(() => {
  document.removeEventListener('scroll', showSide)
});

const active = () => {
  navigation.value?.classList.toggle('open');
};


</script>
<style lang="less" scoped>

.navigation {
  position: fixed;
  inset: 3.5rem 0 3.5rem 3rem;
  width: 75px;
  height: 800px;
  background: -webkit-linear-gradient(top, #74b9ff, #fd79a8);
  z-index: 998;
  transition: all 0.5s;
  display: flex;
  opacity: 0;
  transform: translate(-80px, 0);
  justify-content: center;
  align-items: center;
  box-shadow: -10px -5px 20px rgb(185, 155, 213);
  border-radius: 0.625rem;

  .menuToggle {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.35);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 22.5px;
  }

  .menuToggle::before {
    content: '';
    position: absolute;
    width: 30px;
    height: 2px;
    background: #333;
    transform: translateY(-8px);
    transition: 0.5s;
  }

  .menuToggle::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 2px;
    background: #333;
    transform: translateY(8px);
    transition: 0.5s;
    box-shadow: 0 -8px 0 #333;
  }


  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;

    li {
      list-style: none;
      position: relative;
      width: 100%;
      height: 60px;
      padding: 0 10px;
      transition: 0.5s;

      a {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100px;
        text-align: center;
        text-decoration: none;

        .icon {
          position: relative;
          display: block;
          min-width: 55px;
          height: 55px;
          line-height: 55px;
          transition: 0.5s;
          border-radius: 12px;
          color: #222;

          .iconfont {
            font-size: 1.75em;
            position: relative;
          }
        }

        .icon::before {
          content: '';
          position: absolute;
          top: 10px;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--clr);
          filter: blur(8px);
          opacity: 0;
          transition: 0.5s;
        }


        .menu-text {
          position: relative;
          padding: 0 15px;
          height: 60px;
          display: flex;
          align-items: center;
          color: #333;
          opacity: 0;
          visibility: hidden;
          transition: 0.5s;
        }


      }
    }

    li.active {
      transform: translateX(30px);

      a {
        .icon {
          color: #fff;
          background: var(--clr);
        }

        .menu-text {
          color: var(--clr);
        }
      }
    }

    li.active a .icon::before {
      opacity: 0.8;
    }


  }


}

.on-side {
  opacity: 1;
  transform: translate(0, 0);
}

.navigation.open {
  width: 180px;

  ul {

    li.active {
      transform: translateX(15px);
    }

    li a .menu-text {
      opacity: 1;
      visibility: visible;
    }
  }
}

.navigation.open .menuToggle::before {
  transform: translateY(0px) rotate(45deg);
}

.navigation.open .menuToggle::after {
  transform: translateY(0px) rotate(-45deg);
  box-shadow: 0 0 0 #333;
}

@keyframes hideIndex {
  0% {
    transform: translate(-80px, 0)
  }

  100% {

    transform: translate(0, 0)
  }
}

</style>