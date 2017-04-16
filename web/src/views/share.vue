<template>
  <div class="menu-right">
    <div class="article-title">
      “和瑾﹒家族财富”2016二季度投资策略分享会
    </div>
    <div class="share-content">
      经历了股票市场在这近一年的多次千股涨停,千股跌停,千股停牌,相信投资人也变得更为理性,如何获得一个长期稳定、优异的投资回报一定是当前投资人最关注的话题,从前两年开始我们在客户的投资组合中就逐步增加了对冲基金这一投资品种,特别是在股灾期间，量化对冲类由于本身的低波动、稳健收益也得到了越来越多投资人的认可。但从去年9月以来，因股指期货的长期贴水和中金所对于股指期货交易规则的修改，使得绝大多数原先发展较好的量化对冲基金停滞不前。在量化对冲遭遇困难时，市场上凸显了另一种类型的低风险、稳健性的基金——多策略量化对冲基金。我们从今年一季度市场上多策略类型私募基金的收益情况可以看出，在对冲受限的情况下，多策略基金却可以通过策略多样性获取不错的收益。特邀风禾的首席运营官及全球宏观对冲专家孙砾孙总，和大家一起分享“穿越牛熊的利器-多策略对冲新机遇”。
    </div>
    <div class="share-img">
      <span><img :src="activity1"></span>
      <span><img :src="activity2"></span>
    </div>
    <div class="share-content">
      近期股市债市均表现较弱，特别是股票二级市场的表现让高净值客户越来越把关注重点放在一级市场及一级半市场。也使得一级市场股权类投资和一级半市场的定向增发空前火热，并购重组似乎经常被大家挂在嘴边。但是，需要提醒的是，大家在被一级市场和一级半市场的高收益吸引的同时请注意：这个市场是一个专业要求尤其高的市场，目前市场上产品良莠不齐，需要注意投资风险。我们特邀这个行业的专家君创资本副总裁沈飞先生给大家带来“股权并购热潮下的投资机会”。君创资本凭借丰富的TMT行业资源及卓越的资源整合能力，获得多个标的企业和上市公司的高度认同，并长期保持良好合作关系。
    </div>
    <div class="share-img">
      <span><img :src="activity3"></span>
      <span><img :src="activity4"></span>
    </div>
    <div class="next-title">
      <a v-link="'/service/talk'">下一篇：“和瑾，家族财富”2016春季投资策略报告会</a>
    </div>
  </div>
</template>
<script>
  export default {
    replace: false,
    data: function () {
      return {
        activity1: '/static/img/activity1.png',
        activity2: '/static/img/activity2.png',
        activity3: '/static/img/activity3.png',
        activity4: '/static/img/activity4.png'
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
