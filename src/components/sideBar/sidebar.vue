<template>

  <div id="sidebar" :class="{fixed:fixedSidebar}">
    <div class="inner">
      <ul v-show="isHome" class="tab">
        <li class="contents item"><i class="iconfont icon-mulucaiji"></i><span>文章目录</span></li>
        <li class="related item"><i class="iconfont icon-buzhoulianxian"></i><span>系列文章</span></li>
        <li class="overview item active"><i class="iconfont icon-chengbao"></i><span>站点概览</span></li>
      </ul>
      <div class="panels">
        <div class="inner">
          <div class="contents panel pjax" data-title="文章目录">
            <ol class="toc">
              <li class="toc-item toc-level-1 active current"><a class="toc-link"
                                                                 data-pjax-state=""
                                                                 href="#%E9%A1%B9%E7%9B%AE%E6%B2%9F%E9%80%9A%E7%AE%A1%E7%90%86%E7%9A%84%E6%A0%B8%E5%BF%83%E6%A6%82%E5%BF%B5"><span
                  class="toc-number">1.</span>
                <span class="toc-text">项目沟通管理的核心概念</span></a>
                <ol class="toc-child">
                  <li class="toc-item toc-level-2"><a class="toc-link"
                                                      data-pjax-state=""
                                                      href="#%E6%A2%85%E6%8B%89%E5%AE%BE%E6%B3%95%E5%88%997-38-55-%E8%A7%84%E5%BE%8B"><span
                      class="toc-number">1.1.</span> <span
                      class="toc-text">梅拉宾法则（7%-38%-55% 规律	）</span></a></li>
                  <li class="toc-item toc-level-2"><a class="toc-link"
                                                      data-pjax-state=""
                                                      href="#%E6%B2%9F%E9%80%9A%E7%9A%84%E5%88%92%E5%88%86%E7%BB%B4%E5%BA%A6"><span
                      class="toc-number">1.2.</span> <span
                      class="toc-text">沟通的划分维度</span></a></li>
                  <li class="toc-item toc-level-2"><a class="toc-link" data-pjax-state=""
                                                      href="#%E6%B2%9F%E9%80%9A"><span class="toc-number">1.3.</span>
                    <span
                        class="toc-text">沟通</span></a></li>
                  <li class="toc-item toc-level-2"><a class="toc-link"
                                                      data-pjax-state=""
                                                      href="#%E4%BC%A0%E7%BB%9F%E4%B9%A6%E9%9D%A2%E6%B2%9F%E9%80%9A%E7%9A%845c%E5%8E%9F%E5%88%99"><span
                      class="toc-number">1.4.</span> <span
                      class="toc-text">传统书面沟通的 5C 原则</span></a></li>
                  <li class="toc-item toc-level-2"><a class="toc-link"
                                                      data-pjax-state=""
                                                      href="#%E9%A1%B9%E7%9B%AE%E6%B2%9F%E9%80%9A%E7%AE%A1%E7%90%86%E7%9A%84%E8%B6%8B%E5%8A%BF%E5%92%8C%E6%96%B0%E5%85%B4%E5%AE%9E%E8%B7%B5"><span
                      class="toc-number">1.5.</span> <span
                      class="toc-text">项目沟通管理的趋势和新兴实践</span></a>
                    <ol class="toc-child">
                      <li class="toc-item toc-level-3"><a class="toc-link"
                                                          data-pjax-state=""
                                                          href="#%E9%A1%B9%E7%9B%AE%E7%AE%A1%E7%90%86%E9%A3%8E%E6%A0%BC%E7%9A%84%E5%8F%98%E5%8C%96"><span
                          class="toc-number">1.5.1.</span>
                        <span class="toc-text">项目管理风格的变化</span></a></li>
                      <li class="toc-item toc-level-3"><a class="toc-link"
                                                          data-pjax-state=""
                                                          href="#%E5%9C%A8%E6%95%8F%E6%8D%B7%E6%88%96%E9%80%82%E5%BA%94%E5%9E%8B%E7%8E%AF%E5%A2%83%E4%B8%AD%E9%9C%80%E8%80%83%E8%99%91%E7%9A%84%E5%9B%A0%E7%B4%A0"><span
                          class="toc-number">1.5.2.</span>
                        <span class="toc-text">在敏捷或适应型环境中需考虑的因素</span></a></li>
                    </ol>
                  </li>
                </ol>
              </li>
              <li class="toc-item toc-level-1"><a class="toc-link"
                                                  data-pjax-state=""
                                                  href="#%E8%A7%84%E5%88%92-%E8%A7%84%E5%88%92%E6%B2%9F%E9%80%9A%E7%AE%A1%E7%90%86"><span
                  class="toc-number">2.</span> <span
                  class="toc-text">规划 规划沟通管理</span></a>
                <ol class="toc-child">
                  <li class="toc-item toc-level-2"><a class="toc-link" data-pjax-state=""
                                                      href="#%E8%BE%93%E5%85%A5"><span class="toc-number">2.1.</span>
                    <span
                        class="toc-text">输入</span></a>
                    <ol class="toc-child">
                      <li class="toc-item toc-level-3"><a class="toc-link"
                                                          data-pjax-state=""
                                                          href="#1%EF%B8%8F%E2%83%A3-%E9%A1%B9%E7%9B%AE%E6%96%87%E4%BB%B6"><span
                          class="toc-number">2.1.1.</span>
                        <span class="toc-text">1️⃣ 项目文件</span></a></li>
                    </ol>
                  </li>
                  <li class="toc-item toc-level-2"><a class="toc-link"
                                                      data-pjax-state=""
                                                      href="#%E5%B7%A5%E5%85%B7%E4%B8%8E%E6%8A%80%E6%9C%AF"><span
                      class="toc-number">2.2.</span> <span
                      class="toc-text">工具与技术</span></a>
                    <ol class="toc-child">
                      <li class="toc-item toc-level-3"><a class="toc-link"
                                                          data-pjax-state=""
                                                          href="#1%EF%B8%8F%E2%83%A3-%E6%B2%9F%E9%80%9A%E9%9C%80%E6%B1%82%E5%88%86%E6%9E%90"><span
                          class="toc-number">2.2.1.</span>
                        <span class="toc-text">1️⃣ 沟通需求分析</span></a></li>
                      <li class="toc-item toc-level-3"><a class="toc-link"
                                                          data-pjax-state=""
                                                          href="#2%EF%B8%8F%E2%83%A3-%E6%B2%9F%E9%80%9A%E6%8A%80%E6%9C%AF"><span
                          class="toc-number">2.2.2.</span>
                        <span class="toc-text">2️⃣ 沟通技术</span></a></li>
                      <li class="toc-item toc-level-3"><a class="toc-link"
                                                          data-pjax-state=""
                                                          href="#3%EF%B8%8F%E2%83%A3-%E6%B2%9F%E9%80%9A%E6%A8%A1%E5%9E%8B"><span
                          class="toc-number">2.2.3.</span>
                        <span class="toc-text">3️⃣ 沟通模型</span></a></li>
                      <li class="toc-item toc-level-3"><a class="toc-link"
                                                          data-pjax-state=""
                                                          href="#4%EF%B8%8F%E2%83%A3-%E6%B2%9F%E9%80%9A%E6%96%B9%E6%B3%95"><span
                          class="toc-number">2.2.4.</span>
                        <span class="toc-text">4️⃣ 沟通方法</span></a></li>
                      <li class="toc-item toc-level-3"><a class="toc-link"
                                                          data-pjax-state=""
                                                          href="#5%EF%B8%8F%E2%83%A3-%E4%BA%BA%E9%99%85%E5%85%B3%E7%B3%BB%E4%B8%8E%E5%9B%A2%E9%98%9F%E6%8A%80%E8%83%BD"><span
                          class="toc-number">2.2.5.</span>
                        <span class="toc-text">5️⃣ 人际关系与团队技能</span></a></li>
                    </ol>
                  </li>
                  <li class="toc-item toc-level-2"><a class="toc-link" data-pjax-state=""
                                                      href="#%E8%BE%93%E5%87%BA"><span class="toc-number">2.3.</span>
                    <span
                        class="toc-text">输出</span></a>
                    <ol class="toc-child">
                      <li class="toc-item toc-level-3"><a class="toc-link"
                                                          data-pjax-state=""
                                                          href="#1%EF%B8%8F%E2%83%A3-%E6%B2%9F%E9%80%9A%E7%AE%A1%E7%90%86%E8%AE%A1%E5%88%92"><span
                          class="toc-number">2.3.1.</span>
                        <span class="toc-text">1️⃣ 沟通管理计划</span></a></li>
                    </ol>
                  </li>
                </ol>
              </li>
              <li class="toc-item toc-level-1"><a class="toc-link"
                                                  data-pjax-state=""
                                                  href="#%E6%89%A7%E8%A1%8C-%E7%AE%A1%E7%90%86%E6%B2%9F%E9%80%9A"><span
                  class="toc-number">3.</span> <span
                  class="toc-text">执行 管理沟通</span></a>
                <ol class="toc-child">
                  <li class="toc-item toc-level-2"><a class="toc-link" data-pjax-state=""
                                                      href="#%E8%BE%93%E5%85%A5-2"><span class="toc-number">3.1.</span>
                    <span
                        class="toc-text">输入</span></a>
                    <ol class="toc-child">
                      <li class="toc-item toc-level-3"><a class="toc-link"
                                                          data-pjax-state=""
                                                          href="#1%EF%B8%8F%E2%83%A3-%E5%B7%A5%E4%BD%9C%E7%BB%A9%E6%95%88%E6%8A%A5%E5%91%8A"><span
                          class="toc-number">3.1.1.</span>
                        <span class="toc-text">1️⃣ 工作绩效报告</span></a></li>
                    </ol>
                  </li>
                  <li class="toc-item toc-level-2"><a class="toc-link"
                                                      data-pjax-state=""
                                                      href="#%E5%B7%A5%E5%85%B7%E4%B8%8E%E6%8A%80%E6%9C%AF-2"><span
                      class="toc-number">3.2.</span> <span
                      class="toc-text">工具与技术</span></a>
                    <ol class="toc-child">
                      <li class="toc-item toc-level-3"><a class="toc-link"
                                                          data-pjax-state=""
                                                          href="#2%EF%B8%8F%E2%83%A3-%E9%A1%B9%E7%9B%AE%E6%8A%A5%E5%91%8A%E5%8F%91%E5%B8%83"><span
                          class="toc-number">3.2.1.</span>
                        <span class="toc-text">2️⃣ 项目报告发布</span></a></li>
                    </ol>
                  </li>
                  <li class="toc-item toc-level-2"><a class="toc-link" data-pjax-state=""
                                                      href="#%E8%BE%93%E5%87%BA-2"><span class="toc-number">3.3.</span>
                    <span
                        class="toc-text">输出</span></a>
                    <ol class="toc-child">
                      <li class="toc-item toc-level-3"><a class="toc-link"
                                                          data-pjax-state=""
                                                          href="#%E9%A1%B9%E7%9B%AE%E6%B2%9F%E9%80%9A%E8%AE%B0%E5%BD%95"><span
                          class="toc-number">3.3.1.</span>
                        <span class="toc-text">项目沟通记录</span></a></li>
                    </ol>
                  </li>
                </ol>
              </li>
              <li class="toc-item toc-level-1"><a class="toc-link"
                                                  data-pjax-state=""
                                                  href="#%E7%9B%91%E6%8E%A7-%E7%9B%91%E7%9D%A3%E6%B2%9F%E9%80%9A"><span
                  class="toc-number">4.</span> <span
                  class="toc-text">监控 监督沟通</span></a>
                <ol class="toc-child">
                  <li class="toc-item toc-level-2"><a class="toc-link"
                                                      data-pjax-state=""
                                                      href="#%E5%B7%A5%E5%85%B7%E4%B8%8E%E6%8A%80%E6%9C%AF-3"><span
                      class="toc-number">4.1.</span> <span
                      class="toc-text">工具与技术</span></a>
                    <ol class="toc-child">
                      <li class="toc-item toc-level-3"><a class="toc-link"
                                                          data-pjax-state=""
                                                          href="#1%EF%B8%8F%E2%83%A3-%E4%BA%BA%E9%99%85%E5%85%B3%E7%B3%BB%E4%B8%8E%E5%9B%A2%E9%98%9F%E6%8A%80%E8%83%BD"><span
                          class="toc-number">4.1.1.</span>
                        <span class="toc-text">1️⃣ 人际关系与团队技能</span></a></li>
                    </ol>
                  </li>
                  <li class="toc-item toc-level-2"><a class="toc-link" data-pjax-state=""
                                                      href="#%E8%BE%93%E5%87%BA-3"><span class="toc-number">4.2.</span>
                    <span
                        class="toc-text">输出</span></a>
                    <ol class="toc-child">
                      <li class="toc-item toc-level-3"><a class="toc-link"
                                                          data-pjax-state=""
                                                          href="#1%EF%B8%8F%E2%83%A3-%E5%8F%98%E6%9B%B4%E8%AF%B7%E6%B1%82"><span
                          class="toc-number">4.2.1.</span>
                        <span class="toc-text">1️⃣ 变更请求</span></a></li>
                    </ol>
                  </li>
                </ol>
              </li>
              <li class="toc-item toc-level-1"><a class="toc-link" data-pjax-state="" href="#%E9%87%8D%E7%82%B9"><span
                  class="toc-number">5.</span> <span class="toc-text">重点</span></a></li>
            </ol>
          </div>
          <div class="related panel pjax" data-title="系列文章">
            <ul>
              <li><a data-pjax-state="" href="/computer-science/certificate/pmp/chapter-1/" rel="bookmark"
                     title="第1章 引论">第1章 引论</a></li>
              <li><a data-pjax-state="" href="/computer-science/certificate/pmp/chapter-2-3/"
                     rel="bookmark" title="第2章 项目运行环境 &amp; 第3章 项目经理的角色">第2章 项目运行环境 &amp;
                第3章 项目经理的角色</a></li>
              <li><a data-pjax-state="" href="/computer-science/certificate/pmp/week-1/" rel="bookmark"
                     title="第1周 第1-3章 练习题">第1周 第1-3章 练习题</a></li>
              <li><a data-pjax-state="" href="/computer-science/certificate/pmp/chapter-4/" rel="bookmark"
                     title="第4章 项目整合管理">第4章 项目整合管理</a></li>
              <li><a data-pjax-state="" href="/computer-science/certificate/pmp/week-2/" rel="bookmark"
                     title="第2周 第4章 练习题">第2周 第4章 练习题</a></li>
              <li><a data-pjax-state="" href="/computer-science/certificate/pmp/chapter-5/" rel="bookmark"
                     title="第5章 项目范围管理">第5章 项目范围管理</a></li>
              <li><a data-pjax-state="" href="/computer-science/certificate/pmp/chapter-6/" rel="bookmark"
                     title="第6章 项目进度管理">第6章 项目进度管理</a></li>
              <li><a data-pjax-state="" href="/computer-science/certificate/pmp/scrum-1/" rel="bookmark"
                     title="敏捷介绍">敏捷介绍</a></li>
              <li><a data-pjax-state="" href="/computer-science/certificate/pmp/chapter-7/" rel="bookmark"
                     title="第7章 项目成本管理">第7章 项目成本管理</a></li>
              <li><a data-pjax-state="" href="/computer-science/certificate/pmp/chapter-8/" rel="bookmark"
                     title="第8章 项目质量管理">第8章 项目质量管理</a></li>
              <li><a data-pjax-state="" href="/computer-science/certificate/pmp/chapter-9/" rel="bookmark"
                     title="第9章 项目资源管理">第9章 项目资源管理</a></li>
              <li><a data-pjax-state="" href="/computer-science/certificate/pmp/chapter-13/" rel="bookmark"
                     title="第13章 项目相关方管理">第13章 项目相关方管理</a></li>
              <li class="active"><a data-pjax-state="" href="/computer-science/certificate/pmp/chapter-10/"
                                    rel="bookmark" title="第10章 项目沟通管理">第10章 项目沟通管理</a></li>
              <li><a data-pjax-state="" href="/computer-science/certificate/pmp/chapter-11/" rel="bookmark"
                     title="第11章 项目风险管理">第11章 项目风险管理</a></li>
              <li><a data-pjax-state="" href="/computer-science/certificate/pmp/chapter-12/" rel="bookmark"
                     title="第12章 项目采购管理">第12章 项目采购管理</a></li>
            </ul>
          </div>
          <div class="overview panel active" data-title="站点概览">
            <div class="about">
              <div class="my-about">
                <div class="head">
                  <div class="head-image">
                    <img alt="lzh"
                         src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fe48c791a85501f86eb069f66b372e6bed7f75e86.jpg&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669771133&t=da704cc8a1fda1b0722c74f502f2fe61">
                  </div>
                  <p class="name">Ruri Shimotsuki</p>
                  <div class="description">琉璃的医学 &amp; 编程笔记</div>
                  <nav class="state">
                    <div class="item posts">
                      <a href="#"><span class="name">文章</span><span class="count">255</span></a>
                    </div>
                    <div class="item categories">
                      <a href="#"><span class="name">分类</span><span class="count">52</span></a>
                    </div>
                    <div class="item tags">
                      <a href="#"><span class="name">标签</span><span class="count">71</span></a>
                    </div>
                  </nav>
                  <div class="social">
                    <a class="item github" href="#" title="https://github.com/amehime"><i
                        class="iconfont icon-github"></i></a>
                    <a class="item QQ" href="#" title="https://twitter.com/amehime"><i
                        class="iconfont icon-QQ1"></i></a>
                    <a class="item weixin" href="#" title="https://www.zhihu.com/people/amehime"><i
                        class="iconfont icon-weixin1"></i></a>
                    <a class="item email" href="#" title="https://music.163.com/#/user/home?id=12886823"><i
                        class="iconfont icon-xinlangweibo"></i></a>
                    <a class="item my" href="#" title="https://t.me/amehime"><i class="iconfont icon-man"></i></a>
                  </div>
                </div>
                <div class="notice">
                  <h2 class="title">
                    <i class="iconfont icon-xiajiantou"></i>公告
                  </h2>
                  <div class="content">
                    <p>
                      具体内容,具体内容,具体内容,具体内容,具体内容,具体内容,具体内容,具体内容
                      具体内容,具体内容,具体内容,具体内容,具体内容,具体内容,具体内容,具体内容
                    </p>
                  </div>
                </div>
                <div class="information">
                  <div id="time">
                    <div class="circle" style="--clr:#ff2972">
                      <div class="dots sec_dot"></div>
                      <svg>
                        <circle id="ss" cx="120" cy="120" r="120"></circle>
                      </svg>
                    </div>
                    <div class="circle" style="--clr:#fee800">
                      <div class="dots min_dot"></div>
                      <svg>
                        <circle id="mm" cx="100" cy="100" r="100"></circle>
                      </svg>
                    </div>
                    <div class="circle" style="--clr:#04fc43">
                      <div class="dots hr_dot"></div>
                      <svg>
                        <circle id="hh" cx="80" cy="80" r="80"></circle>
                      </svg>
                    </div>
                    <div class="time-box">
                      <div id="hours" style="--c:#04fc43">00</div>
                      <div id="minutes" style="--c:#fee800">00</div>
                      <div id="seconds" style="--c:#ff2972">00</div>
                      <div class="ap">
                        <div id="ampm">AM</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <ul id="quick">

        <li class="up" @click="toTop"><i class="iconfont icon-fanhuidingbu"></i></li>
        <li class="down" @click="toDown"><i class="iconfont icon-fj_jiangla_b"></i></li>

        <li :style="{width: distance}" class="percent"></li>

      </ul>
    </div>
  </div>

</template>

<script lang='ts' setup>
import {ref, reactive, onMounted, onBeforeUnmount} from 'vue'
import {useThemeStore} from "@/store";
import {storeToRefs} from "pinia";


const isHome = ref(true)
const distance = ref("0%")


const fixedSidebar = ref(false)

const sidebar = () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  // 页面的总高度
  let pageHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
  // 浏览器视口高度
  let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
  // 可滚动的高度
  let scrollAvail = pageHeight - windowHeight;
  distance.value = (scrollTop / scrollAvail) * 100 + '%';
  fixedSidebar.value = scrollTop >= window.innerHeight * 0.72;
}


const toTop = () => {
  let top = document.documentElement.scrollTop || document.body.scrollTop;
  // 实现滚动效果
  const timeTop = setInterval(() => {
    document.body.scrollTop = document.documentElement.scrollTop = top -= 50
    if (top <= 0) {
      clearInterval(timeTop)
    }
  }, 10)
}

const toDown = () => {
  let down = document.documentElement.scrollTop || document.body.scrollTop;
  const height = document.body.scrollHeight;
  // 实现滚动效果
  const timeDown = setInterval(() => {
    document.body.scrollTop = document.documentElement.scrollTop = down += 50
    if (down >= height - 10) {
      clearInterval(timeDown)
    }
  }, 10)
}

onMounted(() => {
  document.addEventListener('scroll', sidebar)

  setInterval(() => {
    const hh = document.getElementById('hh'),
        mm = document.getElementById('mm'),
        ss = document.getElementById('ss'),
        sec_dot = document.querySelector('.sec_dot') as HTMLElement,
        min_dot = document.querySelector('.min_dot') as HTMLElement,
        hr_dot = document.querySelector('.hr_dot') as HTMLElement,
        hours = document.getElementById('hours'),
        minutes = document.getElementById('minutes'),
        seconds = document.getElementById('seconds'),
        ampm = document.getElementById('ampm');


    let h = new Date().getHours(),
        m = new Date().getMinutes(),
        s = new Date().getSeconds();
    let am = h >= 12 ? 'PM' : 'AM';
    // 24小时 转换为 12小时
    if (h > 12) {
      h = h - 12
    }
    // 个位数 前面加 0
    let H = h < 10 ? '0' + h : '' + h
    let M = m < 10 ? '0' + m : '' + m
    let S = s < 10 ? '0' + s : '' + s
    hours!.innerHTML = H
    minutes!.innerHTML = M
    seconds!.innerHTML = S
    ampm!.innerHTML = am
    hh!.style.strokeDashoffset = (510 - (510 * h) / 12) + '';
    // 12 hrs clock
    mm!.style.strokeDashoffset = (630 - (630 * m) / 60) + '';
    // 60 minutes
    ss!.style.strokeDashoffset = (760 - (760 * s) / 60) + '';
    sec_dot.style.transform = `rotateZ(${s * 6}deg)`
    // 360/ 60秒 = 6
    min_dot.style.transform = `rotateZ(${m * 6}deg)`
    // 360/ 60分钟 = 6
    hr_dot.style.transform = `rotateZ(${h * 30}deg)`
    // 360/ 12小时 = 30
  })
});

onBeforeUnmount(() => {
  document.removeEventListener('scroll', sidebar)
})


const themeStore = useThemeStore();
const {
  grey6,
  grey5,
  color_pink,
  primary_color,
  grey1,
  color_red_a3,
  color_purple,
  box_bg_shadow,
  grey7,
  grey4,
  grey0,
  grey2,
  color_blue,
  grey9,
  color_green,
  color_red,
  color_orange
} = storeToRefs(themeStore)
</script>
<style lang="less" scoped>


#sidebar {
  position: static;
  width: 15rem;
  top: 0;
  bottom: 0;
  transition: all 0.2s ease-in-out 0s;

  > .inner {
    position: relative;
    width: 19rem;
    color: v-bind(grey6);
    text-align: center;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
    z-index: 1;
    margin: 0 auto;

    .tab {
      position: absolute;
      display: inline-flex;
      padding: 1.875rem 0 0.625rem;
      margin: 0;
      min-height: 1.875rem;

      .item {
        cursor: pointer;
        display: inline-flex;
        padding: 0.3125rem 0.9375rem;
        color: v-bind(grey1);
        border-radius: 0.625rem;
        text-align: center;
        text-decoration: none;
        background-color: rgba(0, 0, 0, 0.08);
        transition: all 0.2s ease-out 0s;

        span {
          display: none;
          word-break: keep-all;
        }
      }

      .item:hover {
        color: #26de81;
      }

      .item:nth-child(2) {
        margin: auto 0.625rem;
      }

      .item.active span {
        display: inherit;

      }

      .item.active:hover {
        box-shadow: 0 0 0.75rem v-bind(color_pink);
      }

      .item .iconfont {
        font-weight: 400;
      }

      .item.active .iconfont {
        margin-right: 0.3125rem;
      }
    }

    .panels {
      padding: 4.6875rem 0 2rem;
      width: 100%;
      max-height: 100vh;
      overflow: hidden;

      .inner {
        overflow-x: hidden;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        width: auto;
        height: 100%;
        margin: 0 auto;
      }

      .inner::-webkit-scrollbar {
        display: none;
      }

      .panel.pjax {
        display: none;
        padding: 0.875rem 0.9375rem 2rem;
      }

      .active {
        display: block;
      }

      .contents {
        ol {
          padding: 0 0.125rem 0.3125rem 0.625rem;
          text-align: left;
        }

        ol > ol {
          padding-left: 0;
        }

        .toc-item {
          font-size: 1em;
          line-height: 1.8;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .current > a {
          color: v-bind(primary_color);
        }
      }

      .related {
        font-size: .875em;

        ul {
          padding: 0 .125rem .3125rem 1.25rem;
          text-align: left;

          li {
            position: relative;
            line-height: 1.8;
            padding-bottom: .625rem;

            a {
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
              width: 100%;
              display: inline-block;
            }
          }

          li::before {
            content: "";
            width: .5rem;
            height: .5rem;
            background: v-bind(primary_color);
            box-sizing: unset;
            left: -1.25rem;
            top: .3125rem;
            border-radius: 100%;
            position: absolute;
            border: .1875rem solid v-bind(grey1);
            z-index: 1;
            transition: all .2s ease-in-out 0s;
          }

          li.active a {
            color: v-bind(primary_color);
          }

          li:not(:last-child)::after {
            content: "";
            height: 100%;
            width: .125rem;
            background: v-bind(color_red_a3);
            position: absolute;
            left: -.875rem;
            top: .5rem;
          }
        }
      }

      .overview {
        .about {
          position: sticky;
          top: 2vh;
          margin-top: 2vh;
          float: right;
          width: 18rem;
          transition: all .2s ease-in-out 0s;
          display: flex;
          text-align: center;
          justify-content: space-around;
          align-items: flex-start;
          flex-wrap: wrap;

          .my-about {
            width: 100%;
            padding: 0.875rem 0.9375rem 2rem;

            .head {
              background: v-bind(grey0);
              border-radius: 20px;
              box-shadow: 0 4px 8px 6px rgba(7, 17, 27, .06);
              padding: .625rem;

              .head-image {
                border: .0625rem solid v-bind(grey2);
                display: block;
                margin: 0 auto;
                width: 80px;
                height: 80px;
                padding: 0rem;
                box-shadow: 0 0 1rem .625rem v-bind(grey2);
                border-radius: 50%;
                overflow: hidden;

                img {
                  display: block;
                  margin-left: auto;
                  margin-right: auto;
                  height: 100%;
                  max-width: 100%;
                  transition: all 0.6s ease-in-out;
                }

              }

              p {
                text-align: center;
                font-weight: 400;
                color: v-bind(grey7);
                margin-top: 0.315rem;
              }

              .description {
                color: v-bind(grey5);
                text-align: center;
                font-size: 1rem;
                margin-top: 0.315rem;
              }

              .state {
                display: flex;
                justify-content: center;
                line-height: 1.4;
                margin-top: .625rem;
                overflow: hidden;
                text-align: center;
                white-space: nowrap;
                color: v-bind(grey6);

                .item {
                  padding: 0 0.9375rem;

                  .count {
                    display: block;
                    font-size: 1.25em;
                    font-weight: 600;
                    text-align: center;
                  }

                  .name {
                    color: inherit;
                    font-size: .875em;
                  }

                  a {
                    border-bottom: none;
                    color: v-bind(grey6);
                  }
                }

                .item:hover {
                  a {
                    color: v-bind(color_blue);
                  }
                }

                .item:not(:first-child) {
                  border-left: .0625rem solid v-bind(grey4);
                }
              }

              .social {
                margin-top: .9375rem;
                text-align: center;

                .item {
                  display: inline-block;
                  width: 1.875rem;
                  height: 1.875rem;
                  margin-right: 3px;
                  line-height: 1.875rem;
                  text-align: center;
                  position: relative;
                  overflow: hidden;
                  border-radius: 38%;

                  i {
                    font-size: 1.5em;
                    vertical-align: middle;
                    display: inline-block;
                    transform: scale(0.9);
                    text-align: center;


                  }
                }

                .item::before {
                  top: 90%;
                  left: -110%;
                  content: "";
                  width: 120%;
                  height: 120%;
                  position: absolute;
                  transform: rotate(45deg);
                }

                .item i,
                .item::before {
                  transition: all 0.35s cubic-bezier(0.31, -0.105, 0.43, 1.59) 0s;
                }

                .item:focus::before,
                .item:hover::before {
                  top: -10%;
                  left: -10%;
                }

                .item.github i {
                  color: v-bind(grey9);
                }

                .item.github::before {
                  background-color: v-bind(grey9);
                }

                .item.QQ i {
                  color: v-bind(color_blue);
                }

                .item.QQ::before {
                  background-color: v-bind(color_blue);
                }

                .item.weixin i {
                  color: v-bind(color_green);
                }

                .item.weixin::before {
                  background-color: v-bind(color_green);
                }

                .item.email i {
                  color: v-bind(color_red);
                }

                .item.email::before {
                  background-color: v-bind(color_red);
                }

                .item.my i {
                  color: v-bind(color_orange);
                }

                .item.my::before {
                  background-color: v-bind(color_orange);
                }

                .item:focus i,
                .item:hover i {
                  color: v-bind(grey0);
                  transform: scale(1);
                }
              }


            }

            .notice {
              background: v-bind(grey0);
              border-radius: 20px;
              box-shadow: 0 4px 8px 6px rgba(7, 17, 27, .06);
              padding: .625rem;
              margin-top: 0.9375rem;
              transition: all 0.4s linear;
              position: relative;
              font-size: 14px;

              .title {
                border-color: v-bind(color_blue);
                box-shadow: 0 2px 2px 0 v-bind(box_bg_shadow), 0 3px 1px -2px v-bind(box_bg_shadow), 0 1px 5px 0 v-bind(box_bg_shadow);
                //background-color:  v-bind(color_blue);
                background-image: linear-gradient(to right, v-bind(color_pink) 0, v-bind(color_orange) 100%);
                margin: 5px 0 0 2px;
                font-size: 16px;
                position: relative;
                left: -101px;
                border-radius: 0 4px 4px 0;
                padding: 3px 11.2px 3px 25px;
                display: inline-block;
                color: v-bind(grey0);
                cursor: pointer;

                .iconfont {
                  font-size: 14px;
                  margin-right: 8px;
                }
              }

              .title::after {
                position: absolute;
                content: '';
                top: 100%;
                left: 0;
                border-top: 0 solid transparent;
                border-right-width: 1em;
                border-right-color: v-bind(color_purple);
                border-right-style: solid;
                border-bottom: 1em solid transparent;
                border-left: 0 solid transparent;
                width: 0;
                height: 0;
              }
            }

            .information {
              background: v-bind(grey0);
              border-radius: 20px;
              margin-top: 0.9375rem;
              box-shadow: 0 4px 8px 6px rgba(7, 17, 27, .06);
              padding: 0 0 0 0.325rem;

              #time {
                position: relative;
                width: 250px;
                height: 250px;
                display: flex;
                align-items: center;
                justify-content: center;

                .circle {
                  position: absolute;
                  display: flex;
                  align-items: center;
                  justify-content: center;

                  svg {
                    position: relative;
                    transform: rotate(270deg);

                    circle {
                      width: 100%;
                      height: 100%;
                      fill: transparent;
                      stroke: var(--clr);
                      stroke-width: 5;
                      transform: translate(5px, 5px);
                      opacity: .5;
                    }
                  }
                }

                .circle:nth-child(1) svg {
                  width: 250px;
                  height: 250px;

                  circle {
                    stroke-dasharray: 760;
                    stroke-dashoffset: 760;
                  }
                }

                .circle:nth-child(2) svg {
                  width: 210px;
                  height: 210px;

                  circle {
                    stroke-dasharray: 630;
                    stroke-dashoffset: 630;
                  }
                }

                .circle:nth-child(3) svg {
                  width: 170px;
                  height: 170px;

                  circle {
                    stroke-dasharray: 510;
                    stroke-dashoffset: 510;
                  }
                }


                .dots {
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  display: flex;
                  justify-content: center;
                  align-items: flex-start;
                  z-index: 10;
                }

                .dots::before {
                  content: '';
                  position: absolute;
                  width: 15px;
                  height: 15px;
                  background-color: var(--clr);
                  border-radius: 100%;
                  top: -3px;
                  box-shadow: 0 0 20px var(--clr), 0 0 40px var(--clr), 0 0 60px var(--clr), 0 0 80px var(--clr);
                }

                .time-box {
                  position: absolute;
                  inset: 0;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  width: 100%;
                  color: v-bind(grey0);
                  gap: 15px;
                  font-weight: bold;
                  font-size: 1.5em;

                  .ap {
                    color: v-bind(grey9);
                  }
                }

                .time-box #hours::after,
                .time-box #minutes::after {
                  content: ':';
                  position: absolute;
                }

                .time-box div {
                  color: var(--c);
                  text-shadow: 0 0 10px var(--c), 0 0 20px var(--c);
                }

                .ap {
                  position: absolute;
                  transform: translateY(-15px);
                  font-size: 0.5em;
                  right: 56px;
                }
              }
            }
          }
        }
      }
    }

    #quick {
      display: none;
      align-items: center;
      flex-wrap: wrap;
      width: 15rem;
      margin: 0;
      padding: 0;
      position: fixed;
      bottom: 0.125rem;

      li {
        width: 50%;
        min-height: 1.875rem;
        transition: all 0.2s ease-in-out 0s;

        i {
          font-size: 1.5em;
          cursor: pointer;
        }

      }

      li.percent {
        display: block;
        background: v-bind(primary_color);
        width: 0;
        min-height: 0.125rem;
      }

      li:hover {
        color: v-bind(primary_color);
      }

    }
  }
}

#sidebar.fixed {
  > .inner {
    position: fixed;
    top: 0;
  }

  .panels {
    padding-top: 3.625rem;
    height: 100vh;
  }

  .tab {
    padding-top: 0.625rem;
  }

  #quick {
    display: flex;
  }
}

@media (max-width: 991px) {
  #sidebar {
    display: none;
    position: fixed;
    right: 0;
    background: v-bind(grey1);
    box-shadow: 0 0.375rem 0.9375rem 0.3125rem rgba(0, 0, 0, 0.2);
    z-index: 99;
  }
}
</style>