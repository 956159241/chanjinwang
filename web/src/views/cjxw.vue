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
            <span>所在位置：<a class="item" v-link="{ path: '/home'}">首页</a>&nbsp;>&nbsp;产经新闻</span>
          </div>
          <!--<div class="ui horizontal bulleted list">-->
            <!--<a class="item"></a>-->
            <!--<a class="item">所在位置：首页&nbsp;>&nbsp;产金动态&nbsp;>&nbsp;产金新闻</a>-->
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
              <div class="ui list">
                <div class="item"><a v-link="{ path: '/xwnr-7'}">当普洱茶成为理财产品</a><span>2016-07-18</span></div>
                <div class="item"><a v-link="{ path: '/xwnr-8'}">新投资者斥资入年份茶市场</a><span>2016-07-18</span></div>
                <div class="item"><a v-link="{ path: '/xwnr-4'}">【南方都市报】茶市低迷，茶叶金融加速“证券化”</a><span>2016-07-18</span></div>
                <div class="item"><a v-link="{ path: '/xwnr-5'}">绿色金融产业被视为“朝阳产业”</a><span>2016-07-11</span></div>
                <div class="item"><a v-link="{ path: '/xwnr-6'}">【产金头条】雷军豪掷亿金进军茶叶市场 未来普洱或迎“最牛市”</a><span>2016-07-10</span></div>
                <div class="item"><a v-link="{ path: '/xwnr'}">湘商商品交易中心现货商品连售模式解析（一）</a><span>2016-06-29</span></div>
                <div class="item"><a v-link="{ path: '/xwnr-1'}">宋清辉：“互联网+智库”将无所不能</a><span>2016-06-27</span></div>
                <div class="item"><a v-link="{ path: '/xwnr-2'}">商品世界没有真的短缺与过剩 只是投资需求快慢的问题</a><span>2016-06-25</span></div>
                <div class="item"><a v-link="{ path: '/xwnr-3'}">湘商所发售模式的优势所在</a><span>2016-06-24</span></div>
              </div>
              <div class="ui grid page" >
                <div class="sixteen wide column">
                  <div class="ui pagination menu page">
                    <a class="icon item"><i class="left chevron icon"></i></a>
                    <a class="item">1</a>
                    <!--<a class="item">2</a>-->
                    <!--<a class="item">3</a>-->
                    <a class="icon item">
                      <i class="right chevron icon"></i>
                    </a>
                  </div>
                </div>
              </div>

            </div>
            <div class="three wide column right-list">
              <div class="right-list1">
                <div class="ui clearing segment">
                  <h3 class="ui left floated header">&nbsp;&nbsp;产品</h3>
                  <h3 class="ui right floated header">更多>></h3>
                </div>
                <div class="ui list">
                  <div class="item">岁月知味金刚2016</div>
                  <div class="item">中茶西半山2016</div>
                  <div class="item">中茶东半山2016</div>
                  <div class="item">郎河巴卡龙2016</div>
                  <div class="item">老同志老曼峨2016</div>
                  <div class="item">郎河巴卡龙2016</div>
                </div>
              </div>
              <div class="right-list1">
                <div class="ui clearing segment">
                  <h3 class="ui left floated header">&nbsp;&nbsp;产品</h3>
                  <h3 class="ui right floated header">更多>></h3>
                </div>
                <div class="ui list">
                  <div class="item">岁月知味金刚2016</div>
                  <div class="item">中茶西半山2016</div>
                  <div class="item">中茶东半山2016</div>
                  <div class="item">郎河巴卡龙2016</div>
                  <div class="item">老同志老曼峨2016</div>
                  <div class="item">郎河巴卡龙2016</div>
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
  /*左侧列表*/
  .left-list>div:nth-child(1){padding-left: 40px;padding-right:40px;height:720px;overflow: hidden;background-color: white;padding-top:10px;}
  .left-list>div>div.item{height: 50px;line-height: 50px;border-bottom: 1px solid rgb(225,225,225);font-size: 16px;font-family: "Microsoft YaHei UI";}
  .left-list>div>div.item>a{font-size: 16px;color:#323232;}
  .left-list>div>div.item>span{font-size: 14px;color: #646464;}
  .left-list>div>div.item:before{float: left;content: "";width: 4px;height:4px;background-color:#f08216;margin-top: 23px;margin-right: 10px;}
  .left-list>div>div>span{margin-right: 0px;float: right;}
  /*广告*/
  .ad>div>h3{font-size: 18px;border-left:2px solid #f08216;color: #f08216;}
  .ad>div>div{background-color: white;margin-bottom: 20px;}
  /*分页*/
  .ui.grid.page{text-align: center;margin-top: -150px;}
  .ui.grid.page>div{text-align: center;border: 0px;box-shadow: transparent;border-radius: 0px;}
  .ui.grid.page>div>div{text-align: center;border: 0px;border-radius: 0px;    box-shadow: 0 1px 2px 0 transparent;}
  .ui.grid.page>div>div>a{text-align: center;border: 0px;border-radius: 0px;box-shadow: 0 1px 2px 0 rgba(34,36,38,.15);}
  .ui.pagination.menu.page>a{border:0px;border-radius: 0px;box-shadow: 0px;margin-right: 10px;color:#909090;}
  .ui.pagination.menu.page>a:nth-child(2){background-color: #f08216;color: white;}
  .ui.pagination.menu.page>a:first-child{background-color: #f08216;color: white;margin-right: 20px;}
  .ui.pagination.menu.page>a:last-child{background-color: #f08216;color: white;margin-left: 10px;margin-right: 0px;}
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
