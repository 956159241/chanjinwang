<template>
  <div class="menu-right">
    <div class="article-title">
      “家族办公室”超高端客户移民税务规划香港行
    </div>
    <div class="share-img">
      <div><img :src="plan1"></div>
    </div>
    <div class="share-content">
      移民一直是近年来国内超高端客人最热门的话题,但随之而来客人需要面临的不仅是移民国政策形势的不断变化,更重要的是需要提前安排好跨境税务及金融筹划方案。近日，和瑾家族办公室为几位已经成立全权委托的超高端客人安排了一场以“投资移民及跨境税务筹划”为主题的香港美食欢乐行，得到了客户的高度认可和赞赏。
    </div>
    <div class="share-content">
      专业靠谱的专家面谈为客人答疑解惑；
    </div>
    <div class="share-content">
      充满乐趣的迪斯尼之旅让孩子们流连忘返；
    </div>
    <div class="share-content">
      体贴到位的购物安排及服装定制让太太们意犹未尽；
    </div>
    <div class="share-content">
      精致美味的米其林大餐将成为大家对这次活动美好的回忆！
    </div>
    <div class="share-content">
      打造高端客户服务品牌，搭建特色鲜明、独具优势的金融服务一体化平台，和瑾家族办公室只为更好地满足客户需求。
    </div>
    <div class="share-img">
      <div><img :src="plan2"></div>
    </div>

    <div class="next-title">
      <a v-link="'/service/talk'">上一篇：“和瑾﹒家族财富”2016春季投资策略报告会</a>
    </div>
  </div>
</template>
<script>
  export default {
    replace: false,
    data: function () {
      return {
        plan1: '/static/img/plan1.png',
        plan2: '/static/img/plan2.png'
      }
    },
    methods: {}
  }
</script>
<style>
  .article-title {
    text-align: center;
    font-size: 20px;
    color: #9b0000;
  }

  .share-content {
    text-indent: 30px;
    font-size: 14px;
    line-height: 26px;
    padding: 20px 0 20px 0;
  }

  .share-img {
    text-align: center;
    padding: 25px 0;
  }
</style>
