<template>
  <div class="message-header">
    <!--top-->
    <div class="ui grid top">
      <div class="row">
        <div class="three wide column"></div>
        <div class="five wide column top-picture-text">
          <!--top的左边图文-->
          <div class="ui steps image-text">
            <div class="completed step">
              <img src="/static/img/logo.png">&nbsp;&nbsp;
              <div class="content logo-picture">
                <div class="title">东方产金网</div>
                <!--<div class="description">&nbsp;Industrial Financial</div>-->
              </div>
            </div>
          </div>
        </div>
        <!--top右边的电话及搜索-->
        <div class="eight wide column phone-search">
          <div class="ui grid">
            <!--电话-->
            <div class="sixteen wide column phone-number">
              <div class="ui horizontal list">
                <div class="item phone-picture">
                  <img class="ui avatar image" src="/static/img/phone.png" >
                  <div class="content">
                    <div class="header">服务热线：021-58601233</div>
                    </div>
                </div>
              </div>
              <!--<span><img src="/static/img/phone.png"></span>-->
              <!--<span>客服热线：021-32328888</span>-->
            </div>
            <!--搜索-->
            <!--<div class="ten wide column search">-->
              <!--<div class="ui disabled icon input">-->
                <!--<i class="search icon"></i>-->
                <!--<input placeholder="请输入关键词" type="text">-->
              <!--</div>-->
            <!--</div>-->
          </div>
        </div>
      </div>
     </div>

    <!--header-->
    <div class="ui grid nav">
      <div class="row">
        <div class="three wide column"></div>
        <div class="ten wide column">
          <!--navigation-->
          <div class="navigation ui secondary menu">
            <div class="main-nav"><a v-link="{ path: '/home', activeClass: 'active' }" class="item">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首页</a></div>
            <!--<a v-link="{ path: '/jysdt', activeClass: 'active' }" class="item">交易所动态</a>-->
            <div class="ui compact menu nav">
              <div class="ui simple dropdown item">交易所动态
                <div class="menu sub-nav">
                <div class="item"><a v-link="{ path: '/dype-0'}">大圆普洱</a></div>
                <div class="item"><a href="#">九州产经</a></div>
                <div class="item"><a v-link="{ path: '/wdbj-0'}">纬德白酒</a></div>
                <div class="item"><a v-link="{ path: '/xsscp-0'}">湘商收藏品</a></div>
              </div>
              </div>
            </div>
            <!--<a v-link="{ path: '/cjdt', activeClass: 'active' }" class="item">产金动态</a>-->
            <div class="ui compact menu nav">
              <div class="ui simple dropdown item">产金动态
                <div class="menu sub-nav">
                  <div class="item"><a v-link="{ path: '/cjzc'}">产金政策</a></div>
                  <div class="item"><a v-link="{ path: '/cjxw'}">产金新闻</a></div>
                  <div class="item"><a href="#">新品发布</a></div>
                </div>
              </div>
            </div>
              <div class="main-nav"><a v-link="{ path: '/rjxz', activeClass: 'active' }" class="item">&nbsp;&nbsp;软件下载</a></div>
            <!--<a v-link="{ path: '/cpda', activeClass: 'active' }" class="item">产品档案</a>-->
            <div class="ui compact menu nav">
              <div class="ui simple dropdown item">产品档案
                <div class="menu sub-nav">
                  <div class="item"><a v-link="{ path: '/bj'}">白酒</a></div>
                  <div class="item"><a v-link="{ path: '/hj'}">红酒</a></div>
                  <div class="item"><a v-link="{ path: '/cy'}">茶业</a></div>
                </div>
              </div>
            </div>

                <div class="main-nav"><a v-link="{ path: '/lxwm', activeClass: 'active' }" class="item">&nbsp;&nbsp;联系我们</a></div>
          </div>
        </div>
        <div class="three wide column"></div>
      </div>
    </div>
    <!--轮播-->
    <!--<div id="jquery-script-menu"> </div>-->
    <!--<div class="slider">-->
      <!--<div class="slider-container">-->
        <!--<div class="slider-wrapper">-->
          <!--<div class="slide"> <img src="/static/img/home-img.png" alt="jQuery Slider with CSS Transitions"> </div>-->
          <!--<div class="slide"> <img src="/static/img/home-img-2.png" alt="jQuery Slider with CSS Transitions"> </div>-->
          <!--<div class="slide"> <img src="/static/img/home-img-3.png" alt="jQuery Slider with CSS Transitions"> </div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->

    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
      </ol>

      <!-- Wrapper for slides -->
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <img src="/static/img/home-img.png" style="width: 100%">
        </div>
        <div class="item">
          <img src="/static/img/home-img-3.png" style="width: 100%">
        </div>
        <div class="item">
          <img src="/static/img/home-img-2.png" style="width: 100%">
        </div>
      </div>
    </div>


  </div>
</template>

<style scoped>
  .message-header {
    background-color:#F2F2F2;
    border-bottom: 1px solid #eee;
    padding: 0px;
  }
  .ui.grid.top{background-color:#F2F2F2;}
  /*top图文部分*/
  .ui.steps.image-text{border:0px !important;box-shadow:0px 0px 0px 0 !important;border-radius: 0px !important;
    background-color:#F2F2F2 !important;}
  .image-text>.completed.step{border:0px !important;box-shadow:0px 0px 0px 0 !important;border-radius: 0px !important;
    background-color:#F2F2F2 !important;color: #323232;}
  .image-text>.completed.step>img{width:60px;margin-top: 5px;margin-left: 30px;}
  .five.wide.column.top-picture-text>div{height:60px;overflow:hidden;}
  .content.logo-picture>.title{font-size:20px;height:16px;}
  .content.logo-picture>.description{font-size:12px;height:14px;}

  /*top电话和搜索部分*/
  .phone-number{height:43px;overflow:hidden;padding-top:5px!important;padding-right:0px;padding-left: 200px!important;margin-bottom: 10px;}
  .phone-number>div{margin-left:0px;margin-top: -15px;}
  /*.phone-search>div{margin-top:5px;}*/
  .phone-number>div>div>img{border-radius:0px;}
  .list>.item>.content>.header{font-size: 14px;color: rgb(248,182,44)!important;}
  .item.phone-picture>img{border-radius:0px;width:20px;height:20px;}
  .ten.wide.column.search{padding:0px;margin-top:5px!important;}
  .eight.wide.column.phone-search{padding-top:35px;}
  .ten.wide.column.search{margin-top:0px;position:relative;height:38px;width:200px;}
  .ui.container{margin: 0px;padding:0px;}
  /*导航*/
  .ui.grid.nav{background-color:rgb(223,223,223);height:60px;float:none!important;margin: 0px;}
  .ui.grid.nav>.row{background-color:rgb(223,223,223);height:60px;float:none!important;display: block;padding:0px;margin:0px;border-bottom: solid 4px rgb(179,179,179);}
  .navigation.ui.secondary.menu{margin-left: 20px; height:60px;text-align: center;}
  .navigation.ui.secondary.menu>div{width:120px;margin-right:50px;}
  /*.navigation.ui.secondary.menu>div:nth-child(1){margin-right:50px;}*/
  /*.navigation.ui.secondary.menu>div:nth-child(2){margin-right:50px;}*/
  /*.navigation.ui.secondary.menu>div:nth-child(3){margin-right: 30px;}*/
  /*.navigation.ui.secondary.menu>div:nth-child(5){margin-right: 30px;}*/
  .navigation.ui.secondary.menu>.main-nav>a{font-size: 16px;color:#323232;height:58px;margin-bottom: 5px;position: relative;margin-right: 40px;}
  .navigation.ui.secondary.menu>.main-nav>a:nth-child(1){width:110px;}
  .navigation.ui.secondary.menu>.main-nav>a.active{background-color:rgb(248,182,44);border-radius: 0px;color:white;text-align: center;}
  .navigation.ui.secondary.menu>.main-nav>a:hover{background-color:rgb(248,182,44);border-radius: 0px;color: white;}
  /*下拉导航*/
  .ui.compact.menu.nav{padding:0px;border-radius:0 0 0px;border: 0px;background-color: rgb(223,223,223);height:56px;box-shadow:0 0 0px;}
  .ui.compact.menu.nav>div{border-radius: 0px;border: 0px!important;box-shadow:0 0 0px!important;background-color: rgb(223,223,223);margin: 0px!important;height:56px;font-size: 16px;}
  .ui.compact.menu.nav>div:hover{background-color: rgb(248,182,44);color: white;}
  /*.ui.compact.menu.nav>div>a{margin-right: 40px;}*/
  .ui.compact.menu.nav>div>div{opacity: 0.8;margin: 0px!important;border-radius:0px!important;}
  .sub-nav>div>a{color: black;font-size: 14px;}
  .sub-nav>div>a:hover{text-decoration:none;color: rgb(248,182,44);background:white 80%;}
  .ui.simple.dropdown.item{width: 110px;}
  .ui.simple.dropdown.item>.menu.sub-nav>.item{text-align: center;}
  /*图片轮播*/


  @media screen and (max-width:900px) {
    .eight.wide.column.phone-search{display: none;}
  }
  @media screen and (max-width:1495px) {
    .six.wide.column.phone-number{display: none;}
  }
</style>
