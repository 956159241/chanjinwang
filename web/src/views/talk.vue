<template>
  <div class="menu-right">
    <div class="article-title">
      “和瑾﹒家族财富”2016春季投资策略报告会
    </div>
    <div class="share-img">
      <div><img :src="share5"></div>
      <div><img :src="share6"></div>
    </div>
    <div class="share-content">
      报告会当天我们非常有幸请到了凯泰的合伙人徐皓先生和大家一起分享“生命科学行业海外股权投资机会”，徐皓先生在生物科技和精准医疗方面有非常丰富的投资经验和独到的眼光，给投资人带来了丰厚的回报。凯泰资本是一家以风险投资为核心方向的私募股权投资管理机构，专业从事VCPE阶段风险投资工作，致力于以创新投资、产业投资、并购重组推动中国经济的商业创新、产业升级和结构调整。凯泰资本受托管理的基金总规模为50亿元人民币，受托管理了多支私募股权基金，管理团队已投资和管理过近百个项目，已上市项目有航天动力、北纬通信、方正电机、海利得、兔宝宝等。首席合伙人徐永红先生在风险投资和创新投资领域具有十余年投资管理经验，并曾与阎焱、羊东等优秀风险投资人一起管理软银赛富亚洲基金。
    </div>
    <div class="share-img">
      <div><img :src="share7"></div>
    </div>
    <div class="share-content">
      自今年开年以来，熔断机制、注册制等等相关政策的变化也让很多投资人大呼“吃不准”。如何在不确定的市场中，获得长期的稳健的回报相信一定投资人最关注的话题。而这一目标就是或恪投资总经理王建立先生一直坚持的理念。王总有非常丰富的股票投资经验，曾担任中海基金投资总监，摩根士丹利华鑫基金投资总监。
    </div>
    <div class="share-img">
      <div><img :src="share8"></div>
    </div>
    <div class="next-title">
      <a v-link="'/service/share'">上一篇：“和瑾，家族财富”2016春季投资策略分享会</a>
    </div>
    <div class="next-title">
      <a v-link="'/service/plan'">下一篇：“家族办公室”超高端客户移民税务规划香港行</a>
    </div>
  </div>
</template>
<script>
  export default {
    replace: false,
    data: function () {
      return {
        share5: '/static/img/share5.png',
        share6: '/static/img/share6.png',
        share7: '/static/img/share7.png',
        share8: '/static/img/share8.png'
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
