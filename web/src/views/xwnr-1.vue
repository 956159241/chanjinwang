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
                <h2 class="ui header">宋清辉：“互联网+智库”将无所不能</h2>
                <img class="disabled medium ui image zcnr-img" src="/static/img/xwnr-1-img.png">
                <div class="ui segment section">
                  <p> 宋清辉，著名经济学家。《法治周末》、《证券日报》、《南方都市报》等多家媒体特约评论员，在新华网、信报月刊等海内外多家媒体开设有专栏，2015年曾获得证券时报社
                    “最具影响力财经观察员奖”。此外担任中国质量万里行社会质量监督员、中国50人独立经济学家论坛首位副主席、中信金融家论坛首席经济学家等职，主要研究领域为经济体制
                    与金融市场，著有《一本书读懂经济新常态》</p>
                </div>
                <div class="ui segment section1">
                  <h4>“互联网+智库”将无所不能</h4>
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;2015年10月25日，由民间资本发起筹建的互联网生态研究院在北京召开了首次专家学术研讨会。我本人以及招商银行前行长马蔚华、中国人民大学校长助
                    理吴晓求等多位人士一起参加了首次专家学术研讨会。我认为“互联网+智库”将无所不能，一流智库将超越诞生它的校园（或企业）等。“互联网+”的发展并不是对现有行业的颠
                    覆，而是通过互联网对各种行业实现转型升级换代，这有助于缩短、简化生产力和生产关系的沟通障碍，从而优化产业结构并改善消费者生活习惯，推动实体经济能够在信息对称的时
                    代中向上发展，继而反哺全产业的创新能力和生产力。</p>
                </div>
                <div class="ui segment section">
                  <p> 就单一互联网企业而言，需要看他对实体产业贡献，否则他本身很难产生有用的价值，所谓的价值都是资金、机构以及媒体给他们加上的。虽然说腾讯和阿里巴巴刚刚起步时很多人
                    都不懂、不看好，如今的成功让这群看不懂的人后悔莫及。实际上当初人们不懂、不看好的互联网企业在上世纪90年代也多如牛毛，当前还存活并壮大下来的企业却屈指可数，那些对
                    已经消失企业注资的投资人早就后悔莫及。看不懂的行业没有必要贸然投资，其壮大概率和中彩票头奖一样难。</p>
                </div>
                <div class="ui segment section">
                  <p> 必然有人会问我，腾讯实际上就是一个纯互联网企业，和实体经济并没有直接的联系，但其近万亿港元的价值推动腾讯成为了亚洲市值最大的互联网企业，市值秒杀了超过99.99%的国
                    内企业，怎么能说单一的互联网企业没有价值？没错，腾讯各种产品的出现完全是基于互联网平台，但我们要注意的是这家公司颠覆了传统的通讯系统，将人们的通讯习惯从以往电话、短
                    信及电报演变成了基于互联网和移动互联网上的即时通讯系统。</p>
                </div>
                <div class="ui segment section">
                  <p> 可以这么说，腾讯对绝大部分企业而言成为了交流通讯的供应商，潜移默化成为了人们生活工作习惯中实现“互联网+”的必须品，已经成为辅助实体经济发展的重要力量。这就是其价值的体现。</p>
                </div>
                <div class="ui segment section">
                  <p> 尽管“互联网+”非常重要，但是在社会发展中也没有必要将“互联网+”想象得过于万能，只是企业降低生产成本、扩展业务渠道、吸引消费者的重要工具。一家企业一旦能够利用好互联网
                    工具，就能够实现对生产方面各个环节的优化及溯源，更能够提升企业的生产效率。如果一家互联网企业通过互联网技术帮助实体产业大幅降低成本，那么这家互联网企业的价值是无法估量的。</p>
                </div>
                <div class="ui segment section">
                  <p> 相反，对于那些花边互联网企业，如仅仅实现头像美化、设计表情、美化图片、游戏娱乐等虚拟产业，只能获得市场的一时热捧，待开始实行收费后便渐渐隐退到消失，他们的价值就是从无到有，再从有到无。</p>
                </div>
                <div class="ui segment section">
                  <p> 由于不同行业具备不同的特性，互联网技术的应用也不能生搬硬套，而是要符合实际加以应用。购物中心设立WiFi设备推送商家信息能够帮助商铺和用户更好沟通，这是互联网的有效应用；公交车上设立移动WiFi
                    ，无论是网速还是效果都差强人意，但通过对公交车的定位通过手机告之待乘车的乘客，他们就能根据车辆到站时间做乘车计划以节省时间。</p>
                </div>
                <div class="ui segment section">
                  <p> 企业要实现全球化的发展，需要将互联网技术应用到符合全世界不同区域的客户体验用途当中，才能有针对性的打开各地市场，迎来发展机遇。在信息不对称问题逐渐淡化的背景下，企业产品的质量、
                    服务的态度必须有质的提升，否则即便是抓住了这互联网发展机遇，它也会残酷地将不合格企业甩下。</p>
                </div>
                <div class="ui segment section">
                  <p>最后，我谈一下民间资本设立“互联网生态研究院”的一些观点。因为习近平总书记2014年曾经强调，智力资源是一个国家、一个民族最宝贵的资源。在知识生产高度专业化的今天，未来“互联网生态研究院”
                    这所智库的影响力，一定会超越乐视本身的影响力，比如美国两家依托于高校建立的智库“胡佛战争、革命与和平研究所”、“战略与国家研究中心”，如今的影响力已经远远超越了见证他们诞生的大学校园。
                    前者是对于美国新保守主义具有重要影响的公共政策智库，后者是对于美国外交政策具有巨大影响力的跨党派智库。</p>
                </div>
                <div class="ui segment section">
                  <p> 但是，如果没有最初它们所在的高校或者说是发起者（企业等）最初在物资、人力等方面的鼎力支持，它们不可能如此成功。因此，乐视非常有必要明确自身的使命与定位，将资源优先集中于更具比较优势
                    的领域，形成一批高质量的观点与新证据，并通过组织结构与人事资源等方面的调整，然后与富有研究能力的业内顶级专家建立起紧密的联系，乐视“互联网生态研究院”才能够从根本上获得更持久的动力和活
                    力，才有可能打造成为互联网领域全球超一流的智库。</p>
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
