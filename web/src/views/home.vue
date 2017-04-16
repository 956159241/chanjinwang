<template>
  <div class="content">
    <div class="index-img">
      <div class="ui grid news">
        <!--<div class="six wide column"></div>-->
        <div class="sixteen wide column">
          <marquee class="marquee">
            <a href="#"　target=_blank class="loop1">关于银行签约、出入金和资金调拨时间调整的通知&nbsp;&nbsp;&nbsp;&nbsp;</a>
            <a href="#" target=_blank class="loop2">经纪会员对公银商签约须知</a>
          </marquee>
          <!--列表-->
          <!--<div class="ui horizontal bulleted list">-->
            <!--<a class="item"></a>-->
            <!--<a class="item">关于银行签约、出入金和资金调拨时间调整的通知</a>-->
            <!--<a class="item">经纪会员对公银商签约须知</a>-->
          <!--</div>-->
        </div>
      </div>
    </div>
    <!--主要内容-->
    <div class="news-list">
      <div class="ui grid">
        <div class="row">
          <div class="three wide column"></div>
          <div class="ten wide column hang">
            <!--第一行简介-->
            <div class="ui grid hang-1">
              <div class="row">
                <div class="six wide column hang-1-1">
                  <!--<img src="/static/img/news-1.png">-->
                  <!--<p>发展文化旅游&nbsp;&nbsp;加快智慧旅游步伐</p>-->
                  <!--HDP-->
                  <!--<div id="slider">-->
                    <a v-link="{ path: '/cynr'}" class="little-news-1"><img src="/static/img/news-list-1.jpg" alt="普洱" title="普洱拍出高价 张国立都震惊了" /></a>
                    <a v-link="{ path: '/cynr-3'}" class="little-news-2"><img src="/static/img/news-list-3.png" alt="普洱" title="天价老班章普洱茶为何如此贵？" /></a>
                    <a v-link="{ path: '/xwnr-8'}" class="little-news-3"><img src="/static/img/news-list-3.jpg" alt="普洱" title="新投资者斥资入年份茶市场" /></a>
                  <!--</div>-->
                  <!--HDPOvER-->
                  <!--幻灯片-->

                  <!--幻灯片结束-->
                </div>
                <div class="six wide column hang-1-2">
                  <!--<div class="news-loop" @onMouseOver="bux" v-el:addd>-->
                  <div class="news-loop1" v-on:mouseOver="mouseO">
                  <h4 class="ui header"><a v-link="{ path: '/cynr'}">拍卖会上天价茶：普洱拍出高价 张国立都震惊了</a></h4>
                    <p>【茶也能收藏】中国历史上有很长的饮茶记录，多个证据表明饮茶的习惯也是从中国传向世界……</p><br/>
                  </div>
                  <div class="news-loop2" v-on:mouseOver="mouseT">
                  <h4 class="ui header"><a v-link="{ path: '/cynr-3'}">天价老班章普洱茶为何如此贵？</a></h4>
                  <p>2016年普洱茶春茶收购在整体毛茶行情下行的大背景下，“名山古树”茶毛料因为资源的稀缺的优势...</p><br/>
                    </div>
                  <div class="news-loop3" v-on:mouseOver="mouseTr">
                  <h4 class="ui header"><a v-link="{ path: '/xwnr-6'}">【产金头条】雷军豪掷亿金进军茶叶市场</a></h4>
                  <p> 早在今年初，雷军就预言：小米的下一个风口在互联网农业。继2015年初领衔顺为资本在茶产业砸.....</p>
                    </div>
                </div>

                <div class="four wide column hang-1-3">
                  <!--相关列表-->
                  <div class="ui inverted segment">
                    <div class="ui inverted relaxed divided list list1">
                      <div class="item">
                        <img src="/static/img/hang-1-1.png">
                        <p><a v-link="{ path: '/hj'}">产品展示</a></p>
                      </div>
                    </div>
                  </div>
                  <!--相关列表-->
                  <div class="ui inverted segment">
                    <div class="ui inverted relaxed divided list list2">
                      <div class="item">
                        <img src="/static/img/hang-1-2.png">
                        <p><a v-link="{ path: '/rjxz'}">相关下载</a></p>
                      </div>
                    </div>
                  </div>
                  <!--相关列表-->
                  <div class="ui inverted segment">
                    <div class="ui inverted relaxed divided list list3">
                      <div class="item">
                        <img src="/static/img/hang-1-3.png">
                        <p><a v-link="{ path: '/cjzc'}">政策咨询</a></p>
                      </div>
                    </div>
                  </div>
                  <!--相关列表-->
                  <div class="ui inverted segment">
                    <div class="ui inverted relaxed divided list list4">
                      <div class="item">
                        <img src="/static/img/hang-1-4.png">
                        <p><a v-link="{ path: '/cjxw'}">最新新闻</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--第二行简介-->
            <div class="ui grid hang-2">
              <div class="row">
                <!--第二行第一列-->
                <div class="six wide column hang-2-1">
                  <div class="ui clearing segment">
                    <h3 class="ui left floated header">&nbsp;&nbsp;中心动态</h3>
                    <h3 class="ui right floated header"><a v-link="{ path: '/dype-0'}">更多>></a></h3>
                  </div>
                  <div class="ui list">
                    <div class="item"><a v-link="{ path: '/zcnr'}">证监会：资本市场以服务实体经济为宗旨</a></div>
                    <div class="item"><a v-link="{ path: '/xwnr-1'}">宋清辉：“互联网+智库”将无所不能</a></div>
                    <div class="item"><a v-link="{ path: '/xwnr-2'}">商品世界没有真的短缺与过剩 只是投资需求快慢的问题</a></div>
                    <div class="item"><a v-link="{ path: '/xwnr-3'}">湘商所发售模式的优势所在</a></div>
                    <div class="item"><a v-link="{ path: '/xwnr'}">湘商商品交易中心现货商品连售模式解析（一）</a></div>
                    <div class="item"><a href="#">东方产金网亮相青岛茶博会</a></div>
                  </div>
                </div>
                <!--第二行第二列-->
                <div class="six wide column hang-2-1">
                  <div class="ui clearing segment">
                    <h3 class="ui left floated header">&nbsp;&nbsp;产品</h3>
                    <h3 class="ui right floated header"><a v-link="{ path: '/bj'}">更多>></a></h3>
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
                <div class="four wide column hang-2-3">
                  <img src="/static/img/hang-2-1.png">
                </div>
              </div>
            </div>
            <!--第三行简介-->
            <div class="ui grid hang-2">
              <div class="row">
                <!--第三行第一列-->
                <div class="six wide column hang-2-1">
                  <div class="ui clearing segment">
                    <h3 class="ui left floated header">&nbsp;&nbsp;行业信息</h3>
                    <h3 class="ui right floated header"><a v-link="{ path: '/cjxw'}">更多>></a></h3>
                  </div>
                  <div class="ui list">
                    <div class="item"><a href="#">2016让你闻着茶香把钱赚了</a></div>
                    <div class="item"><a href="#">普洱当股票一样交易？东方产金网交易平台隆重.</a></div>
                    <div class="item"><a href="#">云南茶山的普洱茶产量有多少？</a></div>
                    <div class="item"><a href="#">柴为春茶头桩事，臻味号做茶选“柴”有讲究</a></div>
                    <div class="item"><a href="#">2016年欧盟茶叶农残新规将影响我国茶叶出口</a></div>
                    <div class="item"><a href="#">互联网+什么才正点？</a></div>
                  </div>
                </div>
                <!--第三行第二列-->
                <div class="six wide column hang-2-1">
                  <div class="ui clearing segment">
                    <h3 class="ui left floated header">&nbsp;&nbsp;相关政策</h3>
                    <h3 class="ui right floated header"><a v-link="{ path: '/cjzc'}">更多>></a></h3>
                  </div>
                  <div class="ui list">
                    <div class="item"><a href="#">536经纪商江苏中轩文化投资发展有限公司推荐.</a></div>
                    <div class="item"><a href="#">欢乐六月 粽情端午 你交易 我买单</a></div>
                    <div class="item"><a href="#">盐城817经纪商老带新开户送好礼活动</a></div>
                    <div class="item"><a href="#">5089经纪商无锡满仓红签约交易送礼活动</a></div>
                    <div class="item"><a href="#">957经纪商海南德艺投资推荐开户送礼活动</a></div>
                    <div class="item"><a href="#">507经纪商温州合顺推荐开户有礼活动</a></div>
                  </div>
                </div>
                <div class="four wide column hang-2-3">
                  <img src="/static/img/hang-3.png">
                </div>
              </div>
            </div>
            <!--第四行简介-->
            <div class="ui grid hang-4">
              <!--此处写hang-2为借用第二行的样式表-->
              <div class="twelve wide column hang-2">
                <div class="ui grid">
                  <div class="sixteen wide column hang-4-1">
                    <img src="/static/img/hang-4-1.png">
                  </div>
                  <div class="eight wide column hang-2-1 hang-4-2-1">
                    <!--第四行第一列-->
                      <div class="ui clearing segment">
                        <h3 class="ui left floated header">&nbsp;&nbsp;金融信息</h3>
                        <h3 class="ui right floated header"><a v-link="{ path: '/cjxw'}">更多>></a></h3>
                      </div>
                      <div class="ui list">
                        <div class="item"><a href="#">高顶班盆2016</a></div>
                        <div class="item"><a href="#">合和昌坝卡囡2016</a></div>
                        <div class="item"><a href="#">岁月知味刮风寨2016</a></div>
                        <div class="item"><a href="#">普秀困鹿山2016</a></div>
                        <div class="item"><a href="#">下关无量山2016</a></div>
                        <div class="item"><a href="#">祥源昔归2016</a></div>
                      </div>
                  </div>
                  <!--第四行第二列-->
                  <div class="eight wide column hang-2-1">
                    <div class="ui clearing segment">
                      <h3 class="ui left floated header">&nbsp;&nbsp;产品档案</h3>
                      <h3 class="ui right floated header"><a v-link="{ path: '/cy'}">更多>></a></h3>
                    </div>
                    <div class="ui list">
                      <div class="item"><a href="#">陈升号布朗——大树茶味 上品珍藏</a></div>
                      <div class="item"><a href="#">下关勐库——实力藏品 勐库茶香</a></div>
                      <div class="item"><a href="#">下关乔木老料 —— 十年茶 十年香</a></div>
                      <div class="item"><a href="#">景迈时光——遗忘了时光 化作了茶香</a></div>
                      <div class="item"><a href="#">松鹤延年——松鹤不老 百年不易其志</a></div>
                      <div class="item"><a href="#">普秀皇茶古韵——古树新茶 香韵幽长</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="four wide column hang-4-2">
                <div class="ui clearing segment">
                  <h3 class="ui left floated header">&nbsp;&nbsp;新闻消息</h3>
                  <h3 class="ui right floated header"><a v-link="{ path: '/cjxw'}">更多>></a></h3>
                </div>
                <div class="ui list">
                  <div class="item"><a v-link="{ path: '/xwnr-7'}">当普洱茶成为理财产品</a></div>
                  <div class="item"><a v-link="{ path: '/xwnr-8'}">新投资者斥资入年份茶市场</a></div>
                  <div class="item"><a v-link="{ path: '/xwnr-4'}">【南方都市报】茶市低迷……</a></div>
                  <div class="item"><a v-link="{ path: '/xwnr-5'}">绿色金融产业被视为“朝阳产业”</a></div>
                  <div class="item"><a v-link="{ path: '/xwnr-6'}">雷军豪掷亿金进军茶叶市场……</a></div>
                  <div class="item"><a v-link="{ path: '/xwnr'}">湘商商品交易中心现货商品……</a></div>
                  <div class="item"><a v-link="{ path: '/xwnr-1'}">宋清辉：“互联网+智库”……</a></div>
                  <div class="item"><a v-link="{ path: '/xwnr-2'}">商品世界没有真的短缺与过剩</a></div>
                </div>
                </div>
            </div>
            <!--第五行简介-->
            <div class="ui grid hang-5">
              <div class="sixteen wide column">
                <h4 class="ui header">&nbsp;&nbsp;产品目录</h4>
                <div class="ui grid hang-5-list">
                  <div class="doubling seven column row">
                    <div class="column"><img src="/static/img/hang-5-1.png"></div>
                    <div class="column"><img src="/static/img/hang-5-2.png"></div>
                    <div class="column"><img src="/static/img/hang-5-3.png"></div>
                    <div class="column"><img src="/static/img/hang-5-4.png"></div>
                    <div class="column"><img src="/static/img/hang-5-5.png"></div>
                    <div class="column"><img src="/static/img/hang-5-6.png"></div>
                    <div class="column"><img src="/static/img/hang-5-7.png"></div>
                  </div>
                </div>

            </div>
          </div>
            <!--第六行简介-->
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

  </div>
</template>
<script>
  let $ = require('jquery')
//  let Slider = require('slider')
  export default{
    replace: false,
    ready: function () {
      $('#slider').lateralSlider({
        captionPadding: '0',
        captionHeight: 45
      })
//      $(this.$els.addd).click(function () {
//        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
//      })方法一
      this.mouseO()
      this.mouseT()
      this.mouseTr()
    },
    data () {
      return {
        msg: 'footer'
      }
    },
    methods: {
      mouseO: function () {
        $('.little-news-1').css('display', 'block')
        $('.little-news-2').css('display', 'none')
        $('.little-news-3').css('display', 'none')
      },
      mouseT: function () {
        $('.little-news-1').css('display', 'none')
        $('.little-news-2').css('display', 'block')
        $('.little-news-3').css('display', 'none')
      },
      mouseTr: function () {
        $('.little-news-1').css('display', 'none')
        $('.little-news-2').css('display', 'none')
        $('.little-news-3').css('display', 'block')
      }
    }
  }
</script>
<style scoped>
  .content{background:rgb(202,202,202);}
  .ui.grid.news{height:55px;}
  /*.ui.grid.news>div{padding-top:0px;margin-top: 0px;}*/
  .ui.grid.news>div>.marquee>a{font-size: 16px;text-decoration: none;color: #993233;}
  .marquee{width: 90%;}
  .loop1:before{float: left; content: ""; border-radius: 0; background-color:#993233; width: 4px;height: 4px;margin-top:10px;margin-right: 4px;}
  /*新闻列表*/
  .ten.wide.column.hang{padding-left:0px;}
  /*第一行新闻列表*/
  /*幻灯片*/
  .hang-1-1{overflow: hidden;}
  .item.active>img{width: 100%;}
  .carousel-indicators{display: none;}
  .news-list{background-color: rgb(225,225,225);padding-top: 25px;}
  .hang-1-1{padding-right:0px!important;}
  .hang-1-1>img{height:386px;width:432px;}
  .hang-1-1>p{float:left;margin-left: 60px;position: relative;margin-top:-45px;color: white;font-size: 20px;height:30px;overflow: hidden;}
  .hang-1-2{height:386px;overflow: hidden;padding-top:20px;padding-left: 20px;}
  .hang-1-2>.news-loop>h4>a{text-decoration: none;color:#323232;font-family: "Microsoft YaHei";font-size: 16px;}
  .hang-1-2{padding:5px;}
  .hang-1-2>.news-loop1,.news-loop2,.news-loop3{padding-left: 30px;padding-top: 20px;}
  .news-loop3{height: 114px;}
  /*.news-loop1{padding-top:20px!important;}*/
  .hang-1-2>.news-loop1:hover,.hang-1-2>.news-loop2:hover,.hang-1-2>.news-loop3:hover{background: rgb(250,250,250);}
  .news-loop1>h4>a,.news-loop2>h4>a,.news-loop3>h4>a{text-decoration: none;color:#323232!important;font-size: 15px;}
  .news-loop1>h4>p,.news-loop2>h4>p,.news-loop3>h4>p{color:#909090;text-indent: 2em;}
  .little-news-1,.little-news-2,.little-news-3{-webkit-transition:all 5s ease-in-out;-moz-transition:all 5s ease-in-out}

  .hang-1-3{padding-bottom: 0px;}
  .ui.inverted.list .item a:not(.ui) {
    color:black!important;
  }
  .hang-1-3>.ui.inverted.segment{padding:0px;border: 2px solid #F08216;border-radius: 0px;height:70px;background-color: rgb(225,225,225);overflow: hidden;width:228px;}
  .list.list1,.list.list2,list.list3,list.list4{margin:0px;padding:0px;background-color: rgb(225,225,225);}
  .hang-1-3>div:nth-child(1),.hang-1-3>div:nth-child(2),.hang-1-3>div:nth-child(3){margin-bottom:25px;}
  .list>.item>img{margin-left:30px; margin-top:15px;position:relative;}
  .list>.item>p{float:right;height:30px;overflow:hidden;color:black;font-size: 20px;margin-right:60px;margin-top:17px;}
  /*第二行*/
  .hang-2{margin-top: 0px!important;padding-left: 0px;}
  .hang-2-1{height:386px;padding-right:5px!important;margin-right: 0px!important;}
  .ui.list>.item>a{font-family: "Microsoft YaHei";color: rgb(50, 50, 50);}
  .hang-2-1>div{background-color: white;padding-right:20px;}
  .hang-2-1>div:nth-child(1){padding-bottom: 0px;padding-top:30px;}
  .hang-2-1>div:nth-child(2){padding-left:25px!important;}
  .hang-2-1>div{background-color: rgb(255,255,255);border-radius:0px;box-shadow: none;height:70px;border:0px;margin-bottom: 0px;margin-top: 20px;overflow: hidden;}
  .hang-2-1>div>h3{font-size:18px;font-family: "Microsoft YaHei";color: rgb(238, 122, 1);border:0px;margin-top:34px;}
  .hang-2-1>div>h3:nth-child(1){border-left: 3px solid rgb(240,144,66);margin-left: 13px;}
  .hang-2-1>div>h3:nth-child(2){font-size: 14px;}
  .hang-2-1>div>h3:nth-child(2)>a{text-decoration: none;color: rgb(238,122,1);}
  .hang-2-1>.ui.list{margin-top: 0px;padding-left:14px;height:316px;}
  .hang-2-1>.ui.list>div{border-top:1px solid rgb(225,225,225);height:50px;line-height:50px;font-size:16px;font-family: "Microsoft YaHei";
    color: rgb(50, 50, 50);overflow: hidden;}
  .hang-2-1>.ui.list>div:nth-child(1):before,.hang-2-1>.ui.list>div:nth-child(2):before,
  .hang-2-1>.ui.list>div:nth-child(3):before,.hang-2-1>.ui.list>div:nth-child(4):before,
  .hang-2-1>.ui.list>div:nth-child(5):before,.hang-2-1>.ui.list>div:nth-child(6):before
  {float: left;content: ""; border-radius: 0; background-color:rgb(240,144,66); width: 4px;
    height: 4px;margin-top:21px;margin-right: 5px;}
  .four.wide.column.hang-2-3>img{height:386px;max-width: 230px !important;}
/*第四行*/
  .hang-4{margin-top: 0px!important;margin-right: 10px;}
  .sixteen.wide.column.hang-4-1>img{width:100%;height:auto;}
  .eight.wide.column.hang-2-1.hang-4-2-1{padding-left: 0px!important;}
  /*第四行新闻*/
  .sixteen.wide.column.hang-4-1{margin-bottom: 0px;padding-bottom: 0px;padding-right:4px!important;}
  /*.hang-4{height:446px;overflow: hidden;}*/
  .sixteen.wide.column.hang-4-1{padding-right:0px!important;padding-left:0px;}
  .hang-4-2{padding-bottom: 0px;}
  /*.four.wide.column.hang-4-2{height:386px;min-width: 230px !important;}*/
  .hang-4-2>div>div>a{font-size: 12px;font-family: "Microsoft YaHei";color:#909090;}
  .hang-4-2>div:nth-child(1){padding-bottom: 0px;padding-top:30px;margin-bottom: 0px;}
  .hang-4-2>div:nth-child(2){padding-top: 0px;margin-top: 0px;}
  .hang-4-2>div{background-color: white!important;width:228px!important;}
  .hang-4-2>div>div{width:230px!important;}
  .hang-4-2>.ui.clearing.segment{background-color: rgb(255,255,255);border-radius:0px;box-shadow: none;height:70px;border:0px;}
  .hang-4-2>div>h3{font-size:18px;font-family: "Microsoft YaHei";color: rgb(238, 122, 1);border:0px;}
  .hang-4-2>div>h3:nth-child(1){border-left: 2px solid rgb(240,144,66);margin-left: 7px;}
  .hang-4-2>div>h3:nth-child(2){font-size: 14px;}
  .hang-4-2>div>h3:nth-child(2)>a{text-decoration: none;color: rgb(238,122,1);}
  .hang-4-2>.ui.list{padding-left:14px;padding-right:14px;}
  .hang-4-2>.ui.list>div{border-top:1px solid rgb(225,225,225);height:50px;line-height:50px;font-size:13px;font-family: "Microsoft YaHei";
    color: rgb(50, 50, 50);}
  .hang-4-2>.ui.list>div.item{font-size: 12px;font-family: "Microsoft YaHei";color: rgb(144, 144, 144);}
  .hang-4-2>.ui.list>div:before{float: left;content: ""; border-radius: 0; background-color:rgb(240,144,66); width: 4px;height: 4px;margin-top:23px;margin-right: 7px;}

  /*第五行*/
  .hang-5{padding-right:40px;padding-top: 20px;}
  .ui.grid.hang-6{margin-right: 50px;}
  /*.ui.grid.hang-6>.sixteen.wide.column{padding-left: 0px;}*/
  .hang-5>div>h4,.hang-6>div>h4{border-left: 2px solid rgb(238, 122, 1);color:rgb(238, 122, 1);font-size: 18px;margin-left: 30px;}
  .hang-6>div>div{background-color: white;margin-bottom: 30px;margin-top: 10px;}
  .ui.grid.hang-6-list{padding-left: 20px;}
  .hang-6-list>div:nth-child(1){padding-bottom:0px;margin-bottom:0px;}
  .hang-6-list>div:nth-child(2){padding-top: 0px;margin-top: 0px;}
  /*第一行小图片播放效果*/


</style>
