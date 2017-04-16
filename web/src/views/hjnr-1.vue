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
            <span>所在位置：<a class="item" v-link="{ path: '/home'}">首页</a>&nbsp;>&nbsp;<a class="item" v-link="{ path: '/hj'}">红酒</a>&nbsp;>&nbsp;红酒内容</span>
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
                <h2 class="ui header">红酒的储存与酿制</h2>
                <div class="ui segment section">
                  <h4>一、红酒的酿制 </h4>
                  <p>用来酿酒的葡萄品种很多，和我们平时食用的葡萄有着很大的区别，酿酒的葡萄皮很厚，果肉很少，汁多，并且
                    颗粒小，基本不适合食用。</p>
                  <p>种植酿酒葡萄的地理条件：</p>
                  <p>1、气候：葡萄适合在南北纬38~53度的温带地区生长。太冷，葡萄无法成熟，太热，则葡萄成熟过快，只会酿成
                    平淡无味的酒。</p>
                  <p>2、土壤：无须肥沃的土地，反而贫瘠的土壤特别适合酿酒葡萄和种植。土壤所含的矿物质、排水性、酸碱度、表
                    土颜色都深深地影响葡萄的品质和特色。</p>
                  <p>3、日照：日照越充足，葡萄的成熟度越好，酿造的酒的品质就越高。在葡萄的收割期尤为重要。 </p>
                  <p>4、水份：水对葡萄也很重要。春季葡萄发芽时水要充足，成熟时要干燥，以免影响葡萄的含糖度。 </p>
                  <p>红酒的酒精形成：红酒含酒精，酒精含量一般是10~15度。这些酒精不是在酿酒的时候加进去的，而是由葡萄发酵
                    而产生的，葡萄中的糖分和葡萄皮上的酵母菌在一定的温度下便可发酵成酒精，这是酿制葡萄酒的一个重要过程。
                    该过程实际上是一个化学方程式：果糖+酵母+氧气=酒精+二氧化碳+热量 </p>
                  <p>红酒的形成离不开橡木桶，几乎全世界所有著名的优质红葡萄酒都必须在橡木桶中储存一至两年。橡木桶通常是
                    用法国和美国橡木制造的。橡木亦含单宁，而且通常粗糙、收敛性强，融入酒中会让酒变得很涩，难以入口。所以
                    制造过程中，橡木块必须经长时间（三年以上）的天然干燥，让单宁稍微柔化而不至于影响酒的品质。 橡木桶对
                    葡萄酒最大的影响在于使葡萄酒透过适度的氧化使酒的结构稳定。橡木桶壁的木质细胞具有透气功能，可以让极少
                    量的空气穿过桶壁，渗到桶中使葡萄酒产生适度的氧化作用，缓慢渗入桶中的微量氧气可以柔化单宁，让酒更圆熟
                    ，除了提供一个适度的氧化环境外，橡木桶原本内含的香味也会融入葡萄酒中。 储存一段时间后，葡萄酒也会穿
                    过桶壁蒸发到空气中，因此，每隔一段间就必须添入葡萄酒到橡木桶中填满，如此经过一两年之后，葡萄酒因蒸发
                    浓缩变得更浓郁。 不是所有的葡萄酒都适合在橡木桶中培养。如适合年轻时即饮用的和口感清淡、酒香不够浓郁
                    的葡萄酒，经橡木桶培养反而会失去原有怡人的清新鲜果香，而且还可能因此破坏口味的均衡感，遮盖了酒的原味
                    。 </p>
                </div>
                <div class="ui segment section">
                  <h4>二、红酒的储存</h4>
                  <p>好酒酿造出来了，但并非就此万事大吉，适宜的贮存环境和完善的贮存方法也是决定葡萄酒品质的一个极其关键
                    的要素。妥善的贮存，能使好酒锦上添花，反之，则会破坏葡萄酒的品质，让珍贵的酒变得如同鸡肋。红酒像人一
                    样会成熟和衰老，所以被形容为“活酒”。 红酒不像我们中国传统的粮食酒，并不是年代越久越好，它有其一定
                    的保存期限，在超长的保存之后，红酒会像人的年龄过大后老死一样地完结它精灵般的生命，所以如何贮存红酒，
                    使其保持生命的活力，就显得尤为重要了。</p>
                  <p>贮藏红酒的六大要素：</p>
                  <p> 1、温度：贮存温度超过20℃，红酒会在十年内达到顶峰开始衰老。如果维持在18℃以下，红酒会在十年后进入
                    佳境。如果将一瓶红酒放在30℃至35℃的室温下，不出三四个月，酒便会衰老，色泽明显变陈，味道混浊，酒精度
                    增加，令酒味变得平淡无奇。即使是18℃至20℃，也要保持恒温，如果贮存温度变化不定，红酒会很快衰老起来。
                  </p>
                  <p>2、湿度：湿度会影响软木塞的状态，它可以决定是否有空气渗入酒瓶进而破坏酒质。红酒贮存时酒瓶一定要平放
                    ，这样可以使酒接触软木瓶塞，让瓶塞不至于干燥收缩，但软木瓶塞暴露在瓶口外的部分还是要受环境湿度影响。
                    最佳的红酒贮存湿度是70%至75%，湿度过低或过高都会破坏红酒的品质，室内一定要通风透气性能好。</p>
                  <p>3、避光：因为紫外线会使酒早熟，光线会令酒产生变化，游动的光线为害尤甚。酒最好存放在黑暗的地方。 </p>
                  <p>4、摆放：以45度角倾斜摆放或水平放置，，保持软木塞湿润，防止空气进入。 </p>
                  <p>5、稳定性：震动会破坏红酒的均衡，对红酒的口味产生负面影响，这就是为什么在产地品尝的红酒比经过运输过
                    程的葡萄酒更美妙的原因。</p>
                  <p>6、防异味：如果在有异味的地方贮存红酒，其异味会渗过软木瓶塞侵入到酒里去，因此一定要避免室内有异味物
                    与红酒存放在一起，如：樟脑丸、机油、榴梿等气味浓烈的物品，这样会影响酒体的味道。 </p>
                  <p>通常情况下，红酒是不应该长时间存放在冰箱里的，冰箱的温度较低，这样会损害红酒的品质。</p>
                  <p>在家里怎样保存红酒： </p>
                  <p>1、喝剩的葡萄酒的保存：开过的酒应该将软木塞塞回，把酒瓶放入冰箱，直立摆放。通常，白葡萄酒开过后放冰
                    箱可以保存1星期，红葡萄酒可以保存2-3星期。 </p>
                  <p>2、家庭贮存葡萄酒：选择一个阴凉僻静的角落，一定要避免异味和过度的气温变化；也不要不时地拿着酒瓶欣赏
                    把玩，因葡萄酒最忌讳震动和光线照射。如果在家中长期贮存葡萄酒，酒瓶以平卧为好，这样可以最大限度保证瓶
                    塞的湿度，避免空气进入。值得注意的是，葡萄酒不是越陈越好，不宜存放过长时间，如果过了它陈年的高峰期，
                    品质就会逐渐降低。 </p>
                  <p></p>
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
