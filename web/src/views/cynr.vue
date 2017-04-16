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
            <span>所在位置：<a class="item" v-link="{ path: '/home'}">首页</a>&nbsp;>&nbsp;<a class="item" v-link="{ path: '/cy'}">茶叶</a>&nbsp;>&nbsp;茶叶内容</span>
          </div>
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
                <h2 class="ui header">拍卖会上的天价茶：普洱拍出高价 张国立都震惊了</h2>
                <img class="disabled medium ui image zcnr-img" src="/static/img/cynr-img-1.png">
                <div class="ui segment section">
                  <p> <span>【茶也能收藏】</span>中国历史上有很长的饮茶记录，多个证据表明饮茶的习惯也是从中国传向世界。追溯中国人饮茶
                    的起源，上古、于周、秦汉、三国、南北朝、唐代都被有理有据认定为茶起源时间。无论如何，在茶的历史上，中
                    国有着不可否认的地位，形成了属于自身的茶道，展现了茶的价值。今天《藏宝图》就为大家展示我国的天价茶，
                    感受我国的茶文化。</p>
                </div>
                <img class="disabled medium ui image zcnr-img" src="/static/img/cynr-img-2.png">
                <div class="ui segment section">
                  <p><span>【普洱茶】</span>说到天价茶，最容易想到的就是普洱。普洱茶主要产于云南省，茶文化历史悠久。普洱茶讲究冲泡技
                    巧和品饮艺术，饮用方法丰富，可清饮，可混饮；茶汤橙黄浓厚，香气高锐持久，香型独特，滋味浓醇，经久耐泡
                    ；可长时间储存并越陈越香。在茶收藏中，收到藏家的喜爱和追捧，被认为是“可以喝的古董”，具有历史价值的
                    普洱茶已经处于有价无市的状态。看，张国立都因为普洱茶在慈善拍卖会上的高价而吃惊。</p>
                </div>
                <img class="disabled medium ui image zcnr-img" src="/static/img/cynr-img-3.png">
                <div class="ui segment section">
                  <p><span>【普洱茶历史】</span>普洱茶历史非常悠久，早在三千多年前武王伐纣时期，云南种茶先民濮人就已经献茶给周武王。
                    邦崴过渡型古茶树是古代濮人栽培驯化茶树遗留下来的活化石。历史记载最早种植普洱茶的是唐吏樊绰，所著《蛮
                    书》卷七中“茶出银生城界诸山，散收无采造法。蒙舍蛮以椒姜桂和烹而饮之。”宋李石《续博物志》记载：“茶
                    出银生诸山，采无时，杂菽姜烹而饮之。”从茶文化历史的认知，茶兴于唐朝而盛于宋朝。元有地名“步日部”，
                    写汉字就成了“普耳”。普洱一词首见于此。清末以后进入现代普洱茶阶段获得较大的发展。
                  </p>
                </div>
                <img class="disabled medium ui image zcnr-img" src="/static/img/cynr-img-4.png">
                <div class="ui segment section">
                  <p><span>【万寿龙团：唯一能够验明正身的古董级贡茶】</span>目前，普洱茶中最富盛名的就是收藏于故宫博物馆的万寿龙团。
                    经过权威机构考证认定并登记在册，生产于清朝光绪年间。据说，在清理故宫的时候，发现“万寿龙团贡茶”任然
                    保存完好，其他的茶都已经成灰。150年的尊贵品质保留了他王者风范，也验证了普洱茶越陈越香，是“可以喝的
                    文物”、“会呼吸的古董”。历经一百多年的时间仍然保存完好，外观端庄，呈红褐色，表面光滑、条索匀整，还
                    可清晰地看到细嫩的芽头，是目前唯一能够验明正身的古董级贡茶。</p>
                </div>
                <img class="disabled medium ui image zcnr-img" src="/static/img/cynr-img-5.png">
                <div class="ui segment section">
                  <p><span>【金瓜贡茶：普洱茶的太上皇】</span>金瓜贡茶也称团茶、人头贡茶，是普洱茶独有的一种特殊紧压茶形式，因其形似
                    南瓜，茶芽长年陈放后色泽金黄，得名金瓜，早年的金瓜茶是专为上贡朝廷而制，故名“金瓜贡茶”。金瓜贡茶，
                    是现存的陈年普洱茶中的绝品，在港台茶界，被称之为“普洱茶太上皇”。金瓜贡茶的真品仅有两沱，分别保存于
                    杭州中国农业科学院茶叶研究所与北京故宫博物院。单单投保金额竟达到了1999万元。</p>
                </div>
                <img class="disabled medium ui image zcnr-img" src="/static/img/cynr-img-6.png">
                <div class="ui segment section">
                  <p><span>【普洱茶王：锦绣茶王】</span>在离凤庆七十多公里的香竹菁，有一株年纪起码有3200年的祖宗级茶树王。在70多公里
                    的尽头、香竹菁的最高处，便可以看到号称有3200年历史的茶王之母——锦绣茶王，它是凤庆栽培型古茶树的代表
                    ，也是世界上发现的最粗大古茶树，它的树干直径足有1.84米，8个人才勉强围得起来。以这棵古茶树树叶制作的4
                    99克茶饼，在2007年当时普洱茶文博会以25万元的起拍价被以40万元的天价拍出，每克800多元，价格接近当时黄
                    金价格四倍，创下当时新茶拍卖最高纪录。</p>
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
