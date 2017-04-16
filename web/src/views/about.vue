<template>
  <div class="ui container navigation">
    <div class="ui two column stackable grid">
      <menu-Component></menu-Component>
      <div class="eleven wide column">
        <div class="menu-right">
          <div class="article-title">
            公司简介
          </div>
          <div class="article-conter">
            和瑾（上海）资产管理有限公司、和瑾环球资产管理有限公司，由一批资深金融专业人士与国内知名企业家共同发起设立，于2015 年 12月正式成立运营。注册于上海自贸区，公司总部位于杭州，是一家以家族办公室和财富管理为主的专业资产财富管理机构。团队成员具有丰富的金融专业经验和金融从业资格。我们以“家族办公室”（Family Office）为核心，创新服务独立第三方财富管理和境外资产管理。服务涉及财富管理、投资管理、境内外家族信托、全权委托、全球资产配置，境内外保险保障方案及信托，境内外家族基金的设立及管理、移民及传承的税务筹划等为高净值客户提供一系列的家族财富管理服务。致力于可投资金融资产1亿元以上超高端人士家族资产管理，金融资产1000万以上私人银行高净值人士财富管理，团队成员长期管理私人银行客户境内外资产达规模80亿元以上。
          </div>
          <div class="article-conter">
            我们拥有中国证券基金业协会颁发的资产管理人牌照，专注服务私人银行高净值客户，从客观的角度提供全领域金融咨询及投资建议；不局限于一家金融机构，从全市场为客户筛选甄别不同类别的优质金融产品；不仅提供境内人民币的资产管理，还提供境外私人银行开户服务及美元资产投资建议及相关产品配置建议。我们专业专注，为实现私人银行高净值客户家族财富世代传承而努力。
          </div>
          <div class="article-conter-idea">
            <div>我们的目标：成为一家专注长远发展的国内领先的专业资产管理机构；</div>
            <div class="padding-right">打造百年家族办公室品牌；</div>
            <div class="padding-right">培养业内顶尖的私人财富管理顾问团队！</div>
          </div>
          <div class="article-conter-idea">
            <div> 我们的经营理念：谦和瑾慎，鉴往知来，</div>
            <div class="padding-right-idea">一脉相承，源远流长</div>
          </div>
          <div class="segment">
            <img class="ui fluid image" src="/static/img/about1.png">
            <p>公司内景图片1</p>
          </div>
          <div class="segment">
            <img class="ui fluid image" src="/static/img/about2.png">
            <p>公司内景图片2</p>
          </div>
          <div class="segment">
            <img class="ui fluid image" src="/static/img/about3.png">
            <p>公司内景图片3</p>
          </div>
          <div class="segment">
            <img class="ui fluid image" src="/static/img/about4.png">
            <p>公司内景图片4</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import menuComponent from './../components/menu.vue'
  export default {
    replace: false,
    data () {
      return {}
    },
    components: {menuComponent},
    methods: {}
  }
</script>
<style>
  .ui.container.navigation {
    padding-top: 50px;
    padding-bottom: 15px;
  }

  .ui.container.navigation > div > .eleven {
    background-color: #fafafa;
  }

  .ui.container.navigation > div > .eleven > div > .article-title {
    text-align: center;
    font-size: 20px;
    color: #9b0000;
  }

  .ui.container.navigation > div > .eleven > div > .article-conter {
    text-indent: 30px;
    font-size: 14px;
    line-height: 26px;
    padding: 15px 0 15px 0;
  }

  .ui.container.navigation > div > .eleven > div > .article-conter-idea {
    font-size: 14px;
    line-height: 26px;
    padding: 15px 0 15px 0;
  }

  .ui.container.navigation > div > .eleven > div > .article-conter-idea > .padding-right {
    padding-left: 84px;
  }

  .ui.container.navigation > div > .eleven > div > .article-conter-idea > .padding-right-idea {
    padding-left: 114px;
  }

  .ui.container.navigation > div > .eleven > div > .segment {
    text-align: center;
  }

  .ui.container.navigation > div > .eleven > div > .segment > img {
    width: 75%;
    margin: 0 auto;
  }

  .ui.container.navigation > div > .eleven > div > .segment > p {
    padding: 20px 0;
  }
</style>
