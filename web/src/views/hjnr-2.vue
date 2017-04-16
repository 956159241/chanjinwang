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
                <h2 class="ui header">如何品尝享受红葡萄酒</h2>
                <div class="ui segment section">
                  <h4>一、葡萄酒与酒杯的搭配</h4>
                  <p>葡萄酒文化中对酒具的要求可以说是很奢华，很隆重的，不同的葡萄酒要用不同的酒具，不同的饮用方式中酒具
                    的要求也不尽相同。</p>
                  <p>1、红葡萄酒：郁金香型高脚杯 </p>
                  <p>郁金香型的理由：杯身容量大则葡萄酒可以自由呼吸，杯口略收窄则酒液晃动时不会溅出来且香味可以集中到杯
                    口。 </p>
                  <p>高脚杯的理由：持杯时，可以用姆指、食指和中指捏住杯茎，手不会碰到杯身，避免手的温度影响葡萄酒的最佳
                    饮用温度。</p>
                  <p>2、白葡萄酒：小号郁金香型高脚杯 </p>
                  <p>郁金香型和高脚的理由：与红葡萄酒杯一致 </p>
                  <p>小杯的理由：白葡萄酒饮用的温度要低，一旦从冷藏的酒瓶中倒入酒杯，其温度会迅速小升。为了保持低温，每次
                    倒入杯中的酒要少，斟酒次数要多。</p>
                  <p>3、香槟（气泡葡萄酒）：杯身纤长的直身杯或敞口杯 </p>
                  <p>杯型理由：为了让酒中金黄色的美丽气泡上升过程更长，从杯体下部升腾至杯顶的线条更长，让人欣赏和遐想。
                  </p>
                </div>
                <div class="ui segment section">
                  <h4>二、品尝葡萄酒的四大步骤： </h4>
                  <p>1、观（sight）：最好在白色背景下观色。手握杯茎以观察葡萄酒的颜色，包括色调和颜色的深浅，有助于判断
                    葡萄酒的醇厚度、酒龄和成熟状况等。从酒杯正上方看，看酒是否清澈，如果浑浊就不好了。 </p>
                  <p>2、摇（swirl）：摇动酒杯，看酒从杯壁均匀流下的速度以观察酒体的甘醇度。把酒杯侧斜45度，此时，酒与杯
                    壁结合部有一层水状体，它越宽则表明酒的酒精度越高。在水状体与酒体结合部，能出不同的颜色，从而显示出酒
                    的酒龄：蓝色和淡紫色=3~5年酒龄     红砖色=5~6年    琥珀色=8~10年 橘红色说明已过期了。 </p>
                  <p>3、闻（smell）：把杯子倾斜45度角，鼻尖探入杯内闻酒的原始气味。偏嫩的酒闻起来尚有果味，藏酿酒有复合
                    的香味。摇动酒杯使酒呈圆周运动，转动过程中酒的香气会挥发出来，此时迅速闻酒中释放的气味，看它和原始气
                    味比是否稳定。 4、品（sip）：喝一小口，在口中打转，同时注意感觉。如果酒中单宁含量高，口中会有干涩的
                    感觉，因为单宁有收敛作用，这说明葡萄酒还没完全成熟。最好的口感是酸-甜-苦-咸达到平衡。吐出或咽下后，关
                    注味道的变化和消散速度，这个叫做葡萄酒的“余味时间”。上好的葡萄酒的“余味时间”可以超过1分钟或更长
                    时间。（葡萄酒的口感：柔顺、圆润、丰厚、架构十足、粗糙、芳醇、活泼、辛烈、未成熟等）</p>
                </div>
                <div class="ui segment section">
                  <h4>三、葡萄酒的享用 </h4>
                  <p>葡萄酒的侍酒方式：当在用餐时侍酒，每一种葡萄酒都有理想的侍酒温度，以便适饮： 香槟和白葡萄酒的侍酒温
                    度为4-8度，过于低温会抑制酒香的散发。 玫瑰红酒也应稍为冷冻，在6-12度之间，过高的温度会使它们失去新鲜
                    感。 红酒，圆润且带有果香味，最适宜在12-16度之间品尝。</p>
                  <p>饮葡萄酒的规则：葡萄酒，一般是在餐桌上饮用，故常称为佐餐酒（Table wines）。如有多种葡萄酒，哪种先上
                    ，哪种后上，有几条国际通用规则： 先上白葡萄酒，后上红葡萄酒。先上新酒，后上陈酒。先上淡酒，后上醇酒。
                    先上干酒，后上甜酒。</p>
                  <p>葡萄酒与餐食搭配： 红葡萄酒配红肉类食物，包括中餐中加酱油的食物。 白葡萄酒配海鲜及白肉类食物。</p>
                </div>
                <div class="ui segment section">
                  <h4>四、饮用葡萄酒的几大益处 </h4>
                  <p>葡萄酒应该算是酒精类饮料中最具营养价值的一种了。葡萄酒，特别是纯汁酿造的干性葡萄酒具有很高的营养价
                    值。经科学检测证明，葡萄酒中大约含有五百多种化合物，其中包括糖类、矿物质、维生素、氨基酸等营养成分和
                    醇类、酯类、酸类、醛类、酮类、酚类等复杂的化合物。虽然它们的含量有的甚微，但混在一起的相互作用却使得
                    葡萄酒的物质结构变得十分复杂，因而具有较高的医疗保健价值。 </p>
                  <p>1.葡萄酒是唯一碱性的酒精性饮品，可以中和现代人每天吃下的大鱼大肉以及米麦类的酸性物质。</p>
                  <p>2.葡萄酒可以降低血中胆固醇含量：美国医学方面的专家证实，葡萄酒含有丰富的维生素及矿物质，可以补血、
                    降低血中的胆固醇；尤其矿物质钾和钠，含量约为10比1，能预防心脏病和高血压。</p>
                  <p>3.红葡萄酒可以抑制低密度脂蛋白（LDL）氧化，提升血中高密度脂蛋白（HDL）,促进血液循环，预防冠心病。</p>
                  <p>4.红葡萄酒中含有Flavonids的抗氧化成分，可抗癌、抗衰老及预防血小板凝结成血管阻塞。</p>
                  <p>5.人类的生活环境中和人体内到处都有氧基，它是破坏细胞的进攻性物质，这种进攻性的微粒会氧化LDL，使之变
                    得特别容易附着在血管壁上，是动脉硬化的基础。红葡萄酒中含有丰富的酚类化合物（葡萄色素中的芳香化合物）
                    ，可中和这些氧基，从而改善血液循环，防止动脉硬化并维持血管的渗透性。</p>
                  <p>6.红葡萄酒中含有丰富的单宁酸，可预防蛀牙防止辐射伤害。</p>
                  <p>7.葡萄酒能防止心肌梗塞：适量、经常地饮用葡萄酒不仅能降低胆固醇，而且能防止血块的形成，甚至能化解血
                    块，医学上称之为加强纤维蛋白溶解活动。喝葡萄酒的人体内血小板不太容易粘在一起，因而不容易得血栓。根据
                    英国的一项研究报告，经常适量饮葡萄酒可使患心肌梗塞的风险减少25%到45%，这是通过吃药和戒烟所达不到的效
                    果。 </p>
                  <p>8.葡萄酒能防止骨质疏松：葡萄酒像体内的雌激素一样可以增加造骨细胞的活动，可以减少得骨质疏松病的风险。 </p>
                  <p>9.葡萄酒能防止肌体老化：葡萄酒引起的血管扩张会增加新陈代谢，从而改善体温的调节，使皮肤供血得到改善，从而变得更有抵抗力。</p>
                  <p>10.葡萄酒能防止肾结石：美国的一项研究表明：每天喝四分之一升葡萄酒可使肾结石的风险减少近40%。 </p>
                  <p>11.葡萄酒具有消毒和清痰作用：葡萄酒可使肾和肝的供血增加。肾可以提高排泄能力，冲走过多的毒素;肝可以加强新陈代谢，起更大的消毒作用。</p>
                  <p>12.每天饮用2-3杯葡萄酒，可大幅度降低血管病变的发生率。</p>
                  <p>13.饮用葡萄酒对有轻微贫血的女性可养气活血、养颜美容，使皮肤有弹性，并且能使菜肴中的油质消失，促进胃的消化能力。</p>
                  <p>14.葡萄酒可以美容护肤：葡萄酒内含有抗氧化功能的多酚，右延缓皮肤的老化。红葡萄酒内所含的乳酸可以治疗
                    皮肤的脱皮症，而白葡萄酒内所含的氨基酸可使皮肤保持一定的水份。据专家研究证实，洗葡萄酒浴的确可以营养皮肤，强身健体。 </p>
                  <p>15.常喝葡萄酒的老年人较少得阿尔茨海默氏病（老年痴呆）：葡萄酒特有的多酚能扩张血管，使血管壁保持弹性
                    ，提高毛细血管的抵抗力，杀死沙门氏菌、葡萄球菌、疱疹病毒、柯萨奇病毒等细菌和病毒，或者至少可以遏制它
                    们的生长，进而有效地阻止氧基引发的一些疾病，如风湿病、癌症、糖尿病和老年痴呆等。</p>
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
