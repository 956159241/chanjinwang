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
                <h2 class="ui header">【产金头条】雷军豪掷亿金进军茶叶市场 未来普洱或迎“最牛市”</h2>
                <img class="disabled medium ui image zcnr-img" src="/static/img/xwnr-6-img-1.jpg">
                <div class="ui segment section">
                  <p> 早在今年初，雷军就预言：小米的下一个风口在互联网农业。继2015年初领衔顺为资本在茶产业砸下千万美金的
                    A轮资本领投后，今年六月又在B轮投资中快速跟进，雷军一掷亿金抢滩茶业市场，“小米模式+茶业”正在颠覆中
                    国茶叶市场。</p>
                  <p>在中国，雷军被数以亿计的米粉美称为“雷布斯”。从帮助金山软件上市到成为1.7亿米粉眼里的大神再到百万创
                    业者的天使投资人，雷军在践行时势造英雄的同时，更是带领着中国半壁初创团队勇闯互联网浪潮，成就了爱奇艺
                    、逻辑思维、今日头条等一批当下热门的互联网企业。2016年，雷军积极领投布局茶产业堪称茶叶市场的“一声惊
                    雷”，未来随着越来越多资本入驻茶叶市场，茶产业在资本的助力与加持下必将释放爆发式增长的重磅利好。</p>
                </div>
                <img class="disabled medium ui image zcnr-img" src="/static/img/xwnr-6-img-2.jpg">
                <div class="ui segment section">
                  <p>若说茶产业是互联网农业的风口，那么普洱则是当之无愧的“互联网+茶业”的主力军。众所周知，普洱茶与其他
                    茶类不同，它属于后发酵茶，其“越陈越香”“原生态”的特质只有通过岁月的磨砺，独有的色、香、味才能形成
                    ，品饮价值也就越高。作为一种可以喝的古董，普洱茶具有相当高的收藏价值和增值空间。</p>
                  <p>尤其是进入21世纪以来，随着普洱茶保健功能和文化内涵的不断丰富，以及政府支持力度加大和民间资本的助推
                    ，普洱茶出现南茶北进的趋势，“收藏普洱”、“茶饮普洱”成为时尚。财富掘金通过“互联网+普洱+金融”的商
                    品发售模式充分挖掘普洱茶的消费属性与金融属性，助力普洱茶市场一路向红，为第三次普洱产业浪潮提前开辟新
                    航道。</p>
                  <p>从单一的收藏炒作模式到“互联网+产业”“互联网+产业+金融”的资本助力，回顾普洱茶产业的发展历程亦是一
                    个在不断自我变革、调整与复兴中向前迈进的过程。此次雷军高调入驻茶产业，不仅将茶业市场置于聚光灯下产生
                    越来越多的品牌效应，更释放出积极的信号——未来，随着越来越多的资本进军茶产业，以“品质与资本”保驾护
                    航的普洱茶，必将迎来“最牛市”。</p>
                  <p>雷军曾言：“成功的必要条件，最关键的是在对的时候做对的事情。”——7月10日，普洱系列---“云南老班章
                    ”普洱生茶已经重磅来袭，敬请关注！</p>
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
