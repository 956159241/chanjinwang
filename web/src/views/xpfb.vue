<template>
  <div class="content">
    <div class="index-img">
      <img src="/static/img/top.png">
      <!--news-->
      <div class="ui grid news">
        <div class="three wide column"></div>
        <div class="thirteen wide column">
          <!--列表-->
          <div class="ui horizontal bulleted list">
            <a class="item"></a>
            <a class="item">所在位置：首页>产金动态>新品发布</a>
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
              <div class="ui list" style="background:white;">
                <div class="item">岁月知味金刚2016<span>2017-1-1</span></div>
                <div class="item">岁月知味金刚2016<span>2017-1-1</span></div>
                <div class="item">岁月知味金刚2016<span>2017-1-1</span></div>
                <div class="item">岁月知味金刚2016<span>2017-1-1</span></div>
                <div class="item">岁月知味金刚2016<span>2017-1-1</span></div>
                <div class="item">岁月知味金刚2016<span>2017-1-1</span></div>
                <div class="item">岁月知味金刚2016<span>2017-1-1</span></div>
                <div class="item">岁月知味金刚2016<span>2017-1-1</span></div>
                <div class="item">岁月知味金刚2016<span>2017-1-1</span></div>
                <div class="item">岁月知味金刚2016<span>2017-1-1</span></div>

                <div class="ui pagination menu page">
                  <a class="icon item"><i class="left chevron icon"></i></a>
                  <a class="item">1</a>
                  <a class="item">2</a>
                  <a class="item">3</a>
                  <a class="icon item">
                    <i class="right chevron icon"></i>
                  </a>
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
          <div class="ui grid ad">
            <div class="sixteen wide column">
              <h3 class="ui header">&nbsp;&nbsp;合作伙伴</h3>
            </div>
            <div class="sixteen wide column">
              <div class="ui grid">
                <div class="nine column row ad-list">
                  <div class="column"><img src="/static/img/hang-6-1.png"></div>
                  <div class="column"><img src="/static/img/hang-6-1.png"></div>
                  <div class="column"><img src="/static/img/hang-6-1.png"></div>
                  <div class="column"><img src="/static/img/hang-6-1.png"></div>
                  <div class="column"><img src="/static/img/hang-6-1.png"></div>
                  <div class="column"><img src="/static/img/hang-6-1.png"></div>
                  <div class="column"><img src="/static/img/hang-6-1.png"></div>
                  <div class="column"><img src="/static/img/hang-6-1.png"></div>
                  <div class="column"><img src="/static/img/hang-6-1.png"></div>
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
  .ui.horizontal.bulleted.list{height:20px;margin-bottom:5px;overflow:hidden;background-color:#cacaca;vertical-align: middle;margin-left:0px;}
  .ui.horizontal.bulleted.list>.item{ font-size: 16px;font-family: "Microsoft YaHei";color:#993233!important;}
  .ui.horizontal.bulleted.list>.item:before{float: left;content: ""; border-radius: 0; background-color:#993233; width: 0px;
    height: 0px;margin-top:7px;}
  .ui.horizontal.bulleted.list{list-style: none!important;}
  /*软件下载*/
  .rjxz-list{background-color: rgb(225,225,225);}
  .right-list1>div:nth-child(1){border: 0px;border-radius: 0px;background-color: rgb(207,207,207);margin-bottom: 0px;padding-bottom: 0px;}
  .right-list1>div>h3:nth-child(1){font-size: 18px;border-left:2px solid #f08216;color: #f08216;height:20px;overflow: hidden;}
  .right-list1>div>h3:nth-child(2){font-size: 14px;color: #f08216;}
  .right-list1>div:nth-child(2){border: 0px;border-radius: 0px;background-color:white;margin-top: 0px;padding-left: 20px;padding-right:12px;}
  .right-list1>div>div.item{height:50px;line-height: 50px;border-bottom: 1px solid rgb(225,225,225);overflow: hidden;}
  .right-list1>div>div.item:before{float: left;content:"";border-radius: 0px;width: 4px;height:4px;background-color: black;margin-right: 5px;margin-top: 23px;}
  .right-list1:nth-child(2){margin-top: 20px;}
  /*左侧列表*/
  .left-list>div{padding-left: 30px;padding-right:20px;height:720px;overflow: hidden;}
  .left-list>div>div.item{height: 50px;line-height: 50px;border-bottom: 1px solid rgb(225,225,225);font-size: 16px;font-family: "Microsoft YaHei UI";}
  .left-list>div>div.item:before{float: left;content: "";width: 4px;height:4px;background-color:#f08216;margin-top: 23px;margin-right: 5px;}
  .left-list>div>div>span{margin-right: 0px;float: right;}
  /*广告*/
  .ad>div>h3{font-size: 18px;border-left:2px solid #f08216;color: #f08216;}
  .ad>div>div{background-color: white;margin-bottom: 20px;}
  /*分页*/
  .ui.pagination.menu.page{height:20px;float:left;position:relative; margin-top:120px;margin-left:350px;border:0px;border-radius: 0px;box-shadow: 0px;}
  .ui.pagination.menu.page>a{border:0px;border-radius: 0px;box-shadow: 0px;margin-right: 10px;}
  .ui.pagination.menu.page>a:last-child,.ui.pagination.menu.page>a:first-child,.ui.pagination.menu.page>a:nth-child(2){background-color: #f08216;color: white;}



</style>
