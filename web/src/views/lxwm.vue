<template>
  <div class="content">
    <div class="index-img">
      <!--<img src="/static/img/home-img.png">-->
      <!--news-->
      <!--<div class="ui grid news">-->
        <!--<div class="three wide column"></div>-->
        <!--<div class="thirteen wide column">-->
          <!--&lt;!&ndash;列表&ndash;&gt;-->
          <!--<div class="ui horizontal bulleted list">-->
            <!--<a class="item"></a>-->
            <!--<a class="item"> </a>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    </div>
    <!--软件下载-->
    <div class="rjxz-list">
      <div class="ui grid">
        <div class="three wide column"></div>
        <!--主题列表部分-->
        <div class="ten wide column">
          <!--商标电话部分-->
          <div class="ui grid logo">
          <div class="eight wide column">
            <div class="ui steps image-text">
              <div class="completed step">
                <img src="/static/img/logo.png">&nbsp;&nbsp;
                <div class="content logo-picture">
                  <div class="title">东方产金网</div>
                  <div class="description">Industrial Financial</div>
                </div>
              </div>
            </div>
          </div>
          <div class="eight wide column">
            <div class="ui segment p">
              <p>智慧东方 融汇未来</p>
            </div>
          </div>
        </div>
          <div class="ui grid e-mail">
            <div class="eight wide column">
              <h2 class="ui header"><img src="/static/img/little-phone.png" class="ui circular image email">电话</h2>
              <h5 class="ui header">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;021-58601233</h5>
            </div>
            <div class="eight wide column">
              <h2 class="ui header"><img src="/static/img/little-addr.png" class="ui circular image email">地址</h2>
              <h5 class="ui header">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上海市虹口区东大名路588号美特斯邦威大厦302室</h5>
            </div>
          </div>
          <!--广告部分-->
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
  /*广告*/
  .ad>div>h3{font-size: 18px;border-left:2px solid #f08216;color: #f08216;}
  .ad>div>div{background-color: white;margin-bottom: 20px;}
  /*logo*/
  .ui.grid.logo{border-bottom: 1px solid rgb(225,225,225);}
  .ui.grid.logo>div:nth-child(1){text-align: right;}
  .ui.grid.logo>div:nth-child(2){text-align: left;}
  .image-text,.image-text>div{border:0px;box-shadow: 0px;border-radius: 0px;background-color:rgb(202,202,202)!important;}
  .logo-picture{margin-top:5px;}
  .logo-picture>div.title{font-size:25px!important;}
  .logo-picture>div.description{font-size: 14px!important;}
  .ui.segment.p{border:0px;box-shadow:0 0 0px;border-radius: 0px;background-color:rgb(202,202,202)!important;margin-top: 20px;}
  .ui.segment.p>p{  font-size: 20px;font-family: "Microsoft YaHei";color: rgb(0, 33, 74);}
  .ui.grid.e-mail{padding-top: 30px!important;}
  .ui.grid.e-mail>div:nth-child(1){text-align: right;padding-right:100px;}
  .ui.grid.e-mail>div:nth-child(2){text-align: left;padding-left: 30px;}
  .ui.circular.image.email{width:30px;height:20px;border-radius: 0px;}
  .ui.grid.e-mail>div>h2.header{margin-right:75px;padding-bottom: 0px;margin-bottom: 0px;font-size: 20px;font-family: "Microsoft YaHei";color:#323232;}
  .ui.grid.e-mail>div>h5.header{padding-top: 10px;margin-top: 0px;font-size: 16px;font-family: "Microsoft YaHei";color:#909090;}
  /*合作伙伴*/
  .hang-5{padding-right:40px;padding-top: 20px;}
  .ui.grid.hang-6{margin-right: 50px;}
  /*.ui.grid.hang-6>.sixteen.wide.column{padding-left: 0px;}*/
  .hang-5>div>h4,.hang-6>div>h4{border-left: 2px solid rgb(238, 122, 1);color:rgb(238, 122, 1);font-size: 18px;margin-left: 30px;}
  .hang-6>div>div{background-color: white;margin-bottom: 30px;margin-top: 10px;}
  .ui.grid.hang-6-list{padding-left: 20px;}
  .hang-6-list>div:nth-child(1){padding-bottom:0px;margin-bottom:0px;}
  .hang-6-list>div:nth-child(2){padding-top: 0px;margin-top: 0px;}
</style>
