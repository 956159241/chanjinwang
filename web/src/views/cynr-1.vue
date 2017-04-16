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
                <h2 class="ui header">百年古方&nbsp;&nbsp; 人文普洱</h2>
                <div class="section2"><h4>——如何品出别样滋味</h4></div>
                <div class="ui segment section">
                  <p> 一盏茶，可以穿透人生，让你看到生命素雅的本质；一缕香，亦能飘过百年长河，遇见茶方的无到有；品一杯茶
                    ，品出百态人生，体味其中各种滋味。在湘商商品平台上线的普洱茶，传承百年，在时光沉淀中凝练价值，为每一
                    位投资者增添更多的人文底蕴。</p>
                </div>

                <div class="ui segment section">
                  <p>姜洋说，目前，中国经济正处于发展的新常态，经济运行总体态势符合预期，新模式、新业态不断涌现，经济发展的新动能正呈多元上升之势，供给侧结构性改革正有序推进，一些领域旧产能逐渐出清，
                    但总体上固有矛盾还没有得到彻底缓解，结构性问题依然突出，总需求低迷和产能过剩并存，企业杠杆率高企，信用违约风险增加，经济下行压力仍然存在。经济新常态对资本市场的发展既是挑战，更是机遇。
                    中国证监会将按照融资功能完备、基础制度扎实、市场监管有效、投资者合法权益得到充分保护的目标，加快推进资本市场稳定健康发展，全面提升服务经济社会发展的能力。</p>
                </div>
                <div class="ui segment section">
                  <p> 一杯茶， 佛门看到的是禅，道家看到的是气，儒家看到的是礼，商家看到的是利。茶说：我就是一杯水，给你
                    的只是你的想像，你想什么，什么就是你。茶带给我们的价值远远超出你的想象，茶即心，心即茶！然而，品茶跟
                    人生一样，不同的时期有不一样的滋味，让你回味无穷！</p>
                </div>
                <div class="ui segment section">
                  <p>第一个品饮期：刚做出来三个月时间，比如当年刚压制好放置两三个月的春茶，这个时候的新茶，水汽初褪，茶性
                    重茶气强，锋利似棱角分明的少年，有种勇往直前的冲劲和犀利，滋味有青涩也有饱满，优缺点一目了然，香气高
                    亢四溢，这个时候的茶，适合于浅尝辄止，品新茶更像“尝鲜”，茶性太烈，伤胃，体质偏弱的茶友不宜多饮，更
                    适合于收藏一些，待岁月打磨几年后再品。</p>
                </div>
                <div class="ui segment section">
                  <p>第二个品饮期：一年以后，此时茶中水味褪尽，经过高温蒸压打乱的内质逐渐沉淀，口感趋于稳定，厚重感增强，
                    缺陷慢慢隐去，寒性稍褪，此时品，可品出一款茶的真性情，这个时期的茶，胃不好的人也不适宜多饮，可每周饮
                    一两次，饭后一小时饮较好，有降火助消化的功效。</p>
                </div>
                <div class="ui segment section">
                  <p>第三个品饮期：在七年后，经过七年陈期的生茶，陈味会慢慢出现，香气在岁月中转化出无限种可能，原本的花
                    香转化为果蜜香，或者原本香气较弱，现在有了馥郁花香，都有可能，存茶的乐趣就在于它会不定时给你惊喜，七
                    年以上的茶，茶性转温，养胃健胃功效明显，比如”南茗佳人”收藏的大益《绿大树》，陈期超过十年，现在品陈
                    香若隐若现，汤质饱满沉厚，稳定性好，韵味丰满，这样的老茶适合常饮。</p>
                </div>
                <div class="ui segment section">
                  <p>第四个品饮期：在二十年，这个阶段的茶，是真正的“可遇不可求”，二十年干仓的老茶，香气淳厚，可能有珍
                    贵的药香、樟香、参香等等，滋味醇浓顺滑，尤其保健功效无可比拟，具有一定药用价值，对于降三高和养胃健胃
                    等有较好功效，这样的老茶，能喝到就赶紧多喝点，这喝的都是岁月和时光啊，且喝且珍惜。此时的茶亦是最有价
                    值最值得品味的。</p>
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
  .rjxz-list{background-color: rgb(225,225,225);padding-top: 20px;}
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
  .section2{text-align: right;margin-right: 250px;}
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
