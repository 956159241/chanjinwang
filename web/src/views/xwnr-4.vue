<template>
  <div class="content">
    <div class="index-img">
      <!--<img src="/static/img/home-img.png">-->
      <!--news-->
      <div class="ui grid news">
        <div class="three wide column"></div>
        <div class="thirteen wide column">
          <!--列表-->
          <div class="little-list">
            <span>所在位置：<a class="item" v-link="{ path: '/home'}">首页</a>&nbsp;>&nbsp;<a class="item" v-link="{ path: '/cjxw'}">产经新闻</a>&nbsp;>&nbsp;新闻内容</span>
          </div>
          <!--<div class="ui horizontal bulleted list">-->
            <!--<a class="item"></a>-->
            <!--<a class="item">所在位置：首页&nbsp;>&nbsp;产金动态&nbsp;>&nbsp;产金新闻&nbsp;>&nbsp;新闻内容</a>-->
          <!--</div>-->
        </div>
      </div>
    </div>
    <!--软件下载-->
    <div class="rjxz-list">
      <div class="ui grid">
        <div class="three wide column"></div>
        <!--主题列表部分-->
        <div class="ten wide column">
          <div class="ui grid">
            <div class="thirteen wide column left-list">
              <div class="essay">
                <h2 class="ui header">【南方都市报】茶市低迷，茶叶金融加速“证券化”</h2>
                <div class="ui segment section">
                  <h4>商业思维</h4>
                  <p> 近期全国多地举行茶博会，茶产业转型成为热议话题。南都记者走访发现，茶金融是目前行业探索的主要路径之
                    一，不少茶企尝试和茶金融平台合作，作为推广品牌、解决资金需求的一种方式。</p>
                </div>
                <div class="ui segment section">
                  <h4>茶金融激活茶企</h4>
                  <p>在销售不景气以及租金、人工成本持续上升的大环境下，茶行业正面临着加速洗牌。自去年以来，茶企关店潮一
                    浪接一浪，以素有中国茶叶行业百强企业之称的九峰茗茶为例，一夜之间关闭了福州所有门店。广东省茶叶流通协
                    会会长李勇刚认为，今年茶叶市场依然处于寒冬期，消费端需求不旺、供给端产能过剩的现状仍没有得到改善。</p>
                  <p> 对此，六大茶山公司董事长阮殿蓉告诉南都记者，茶行业门槛过低，市场上良莠不齐的茶企非常多，而消费者又
                    难以甄别；对于品牌茶企来说，无论在稳定品质还是保证库存上都需要投入大量成本，造成流动资金占压，在利润
                    上难以和小企业竞争。</p>
                </div>
                <div class="ui segment section">
                  <h4>如何破解这个痛点呢？</h4>
                  <p> 近年兴起的“茶产业+互联网+金融”模式吸引了阮殿蓉的注意，即把茶叶证券化，成为一种投资产品。她决定，
                    尝试和茶金融平台合作上线产品，作为推广品牌的一种方式。“这种模式一定程度上解决了茶企的资金需求，对于
                    投资者来说，也有了盘面的指导价。”</p>
                </div>
                <div class="ui segment section">
                  <h4>间接培育茶叶消费</h4>
                  <p> 据了解，目前国内茶金融平台并不多，在10家左右。大圆普洱交易中心首席市场官黄大炜告诉南都记者，他们的
                    运作模式涉及多个环节：首先上线的产品均为优质产地的大叶种晒青毛茶，挂牌企业通过与品牌茶企合作，把原材
                    料进行制作加工，经过茶行业专家的检测、品评、认证以后，由金融办的直管部门审批，然后才入库。普洱茶的仓
                    储的入库十分严格，线上有多少产品交易，就有多少茶叶通过审批入库。此外，通过“登记、交易、结算”分离模
                    式来保证投资人的资金安全。</p>
                  <p>“我们去年年底才上线，目前上线产品总价值接近70亿，平均每天的交易额在5亿-8个亿之间，有20多万投资者在
                    上面投资。”黄大炜分析，当人们投资普洱茶的时候，一定会先去了解这个产品，换言之，这个模式间接提高了老
                    百姓对普洱茶的认知，培育茶叶消费市场，同时也帮助了茶企去库存，以应对大环境对实体经济的影响。</p>
                  <p>“其实茶金融平台跟合作茶企就相当于一种特殊经销商的关系。”阮殿蓉说，对于茶企来说，关心的还是产品能
                    否流向市场，希望通过投资载体进入更广泛的市场。此外，她之前一直担心投资活跃也会导致把茶叶价格炒得太高
                    ，影响品牌稳定。但从目前的交易情况来看，整个盘面比较稳定，让她有信心继续这种模式。</p>
                  <br/><br/><br/>
                </div>


              </div>

            </div>
            <div class="three wide column right-list">
              <div class="right-list1">
                <div class="ui clearing segment">
                  <h3 class="ui left floated header">&nbsp;&nbsp;产品消息</h3>
                  <h3 class="ui right floated header">更多>></h3>
                </div>
                <div class="ui list">
                  <div class="item"><a href="#">岁月知味金刚2016</a></div>
                  <div class="item"><a href="#">中茶西半山2016</a></div>
                  <div class="item"><a href="#">中茶东半山2016</a></div>
                  <div class="item"><a href="#">郎河巴卡龙2016</a></div>
                  <div class="item"><a href="#">老同志老曼峨2016</a></div>
                  <div class="item"><a href="#">郎河巴卡龙2016</a></div>
                </div>
              </div>
              <div class="right-list1">
                <div class="ui clearing segment">
                  <h3 class="ui left floated header">&nbsp;&nbsp;新闻消息</h3>
                  <h3 class="ui right floated header">更多>></h3>
                </div>
                <div class="ui list">
                  <div class="item"><a href="#">2016让你闻着茶香把钱赚.</a></div>
                  <div class="item"><a href="#">普洱当股票一样交易？</a></div>
                  <div class="item"><a href="#">云南茶山的普洱茶产量有...</a></div>
                  <div class="item"><a href="#">柴为春茶头桩事，臻味号...</a></div>
                  <div class="item"><a href="#">互联网+什么才正点？ </a></div>
                  <div class="item"><a href="#">中国茶业十年</a></div>
                </div>
              </div>
            </div>
          </div>
          <div class="ui grid hang-6">
            <div class="sixteen wide column">
              <h4 class="ui header">&nbsp;&nbsp;合作伙伴</h4>
              <div class="ui grid hang-6-list">
                <div class="eight column row">
                  <div class="column"><img src="/static/img/hang-6-1.png"></div>
                  <div class="column"><img src="/static/img/hang-6-2.png"></div>
                  <div class="column"><img src="/static/img/hang-6-3.png"></div>
                  <div class="column"><img src="/static/img/hang-6-4.png"></div>
                  <div class="column"><img src="/static/img/hang-6-5.png"></div>
                  <div class="column"><img src="/static/img/hang-6-6.png"></div>
                  <div class="column"><img src="/static/img/hang-6-7.png"></div>
                  <div class="column"><img src="/static/img/hang-6-8.png"></div>
                </div>
                <div class="eight column row">
                  <div class="column"><img src="/static/img/hang-6-9.png"></div>
                  <div class="column"><img src="/static/img/hang-6-10.png"></div>
                  <div class="column"></div>
                  <div class="column"></div>
                  <div class="column"></div>
                  <div class="column"></div>
                  <div class="column"></div>
                  <div class="column"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="three wide column"></div>
      </div>

    </div>


  </div>
</template>
<script>
  export default {
    replace: false,
    data () {
      return {

      }
    }
  }
</script>
<style scoped>
  .content{background:rgb(202,202,202);}
  .index-img > img { width: 100%;height:auto;}
  .ui.horizontal.bulleted.list{height:30px;margin-top:5px;overflow:hidden;background-color:#cacaca;vertical-align: middle;margin-left:0px;}
  .ui.horizontal.bulleted.list>.item{ font-size: 16px;font-family: "Microsoft YaHei";color:#993233!important;}
  .ui.horizontal.bulleted.list>.item:before{float: left;content: ""; border-radius: 0; background-color:#993233; width: 0px;
    height: 0px;margin-top:7px;}
  .ui.horizontal.bulleted.list{list-style: none!important;}
  /*软件下载*/
  .rjxz-list{background-color: rgb(225,225,225);padding-top:20px;}
  .right-list1>div:nth-child(1){border: 0px;border-radius: 0px;background-color: rgb(207,207,207);margin-bottom: 0px;padding-bottom: 0px;}
  .right-list1>div>h3:nth-child(1){font-size: 18px;border-left:2px solid #f08216;color: #f08216;height:20px;overflow: hidden;}
  .right-list1>div>h3:nth-child(2){font-size: 14px;color: #f08216;}
  .right-list1>div:nth-child(2){border: 0px;border-radius: 0px;background-color:white;margin-top: 0px;padding-left: 14px;padding-right:14px;}
  .right-list1>div>div.item{height:50px;line-height: 50px;border-bottom: 1px solid rgb(225,225,225);overflow: hidden;}
  .right-list1>div>div.item:before{float: left;content:"";border-radius: 0px;width: 4px;height:4px;background-color: black;margin-right: 7px;margin-top: 23px;}
  .right-list1:nth-child(2){margin-top: 20px;}
  .right-list1>div>div>a{color: rgb(50,50,50);}
  /*左侧列表*/
  /*广告*/
  .ad>div>h3{font-size: 18px;border-left:2px solid #f08216;color: #f08216;}
  .ad>div>div{background-color: white;margin-bottom: 20px;}
  /*文章*/
  .essay{text-align: center;background-color: white;}
  .essay>h2{padding:30px;}
  .ui.segment.section{text-align: left;text-indent: 2em;border: 0px!important;box-shadow: 0px;border-radius: 0px;box-shadow: 0 1px 2px 0 transparent!important;}
  .ui.segment.section>p{ font-size: 16px;font-family: "Microsoft YaHei";color: rgb(50, 50, 50);letter-spacing: 0.15em;}
  .disabled.medium.ui.image.zcnr-img{margin: 0 auto;border: 0px;box-shadow: 0px;border-radius: 0px;opacity:1;}
  .ui.segment.section1{text-align: left;border: 0px!important;box-shadow: 0px;border-radius: 0px;box-shadow: 0 1px 2px 0 transparent!important;}
  .ui.segment.section1>p{ font-size: 16px;font-family: "Microsoft YaHei";color: rgb(50, 50, 50);letter-spacing: 0.15em;}
  /*合作伙伴*/
  .hang-5{padding-right:40px;padding-top: 20px;}
  .ui.grid.hang-6{margin-right: 50px;}
  /*.ui.grid.hang-6>.sixteen.wide.column{padding-left: 0px;}*/
  .hang-5>div>h4,.hang-6>div>h4{border-left: 2px solid rgb(238, 122, 1);color:rgb(238, 122, 1);font-size: 18px;margin-left: 30px;}
  .hang-6>div>div{background-color: white;margin-bottom: 30px;margin-top: 10px;}
  .ui.grid.hang-6-list{padding-left: 20px;}
  .hang-6-list>div:nth-child(1){padding-bottom:0px;margin-bottom:0px;}
  .hang-6-list>div:nth-child(2){padding-top: 0px;margin-top: 0px;}
  /*修正*/
  .essay{padding-left: 30px;padding-right: 30px;}
  .left-list{margin-right: 0px!important;padding-right:0px!important;}
  .right-list1>div>h3:nth-child(2){font-size: 14px;color: #f08216;margin-top: 3px;}
  .ui.segment.section1>p{ font-size: 14px;font-family: "Microsoft YaHei";color:#646464;letter-spacing: 0.15em;}
  .ui.segment.section>p{ font-size: 14px;font-family: "Microsoft YaHei";color:#646464;letter-spacing: 0.15em;}
  .essay>h2{padding-top:60px;color: #323232;}
  .right-list1>div>div>a{color:#909090;}
  .right-list1>div>div.item:before{background-color:#f08216;}
  /*7.26改小新闻列表*/
  .little-list{height:30px;margin-top:5px;overflow:hidden;background-color:#cacaca;vertical-align: middle;margin-left:0px;}
  .little-list>span{ font-size: 16px;font-family: "Microsoft YaHei";color:#993233!important;}
  .little-list>span>a{text-decoration: none;font-family: "Microsoft YaHei";color:#993233!important;}




</style>
