<template>
  <div id="home">
    <div class="model" @click="ifOpenItems =false" :class="ifOpenItems?'modelClose':''">
    </div>
      <div id="menu" :class="ifOpenItems?'itemsOpen':''">
        <div v-for="(item,index) in menus" :key="item.id" :data-menuanchor="'page'+item.id" :class="isIndex === index ? 'isActive' : ''" @click.stop="$refs.fullpage.api.moveTo(item.id)">
          <a href="javascript:;">{{item.value}}</a>
        </div>
      </div>
    
    <div class="fa" @click="transformationX" :class="ifOpenItems?'faChangeX':''">
        <div class="icon"></div>
      </div>
    <div class="tellUs" @click="tellUs" :class="tellUsShow ? 'tellUsShow':''">
      <div class="iconBox">
        <div class="phone">
          <a href="tel:+6398-0399-992" @click.stop>
          <img src="../image/mobile-phone.png" alt="">
          <span>+63 980399992</span>
          </a>
        </div>
        <div class="skype" >
          <a href="skype:pilika666@163.com?chat" @click.stop>
            <img src="../image/skype.png" alt="">
            <span>pilika666@163.com</span>
          </a>
        </div>
        <p><span v-show="tellUsShow">X</span>联系我们</p>
       
      </div>
    </div>
    
    <full-page :options="options1" id="fullpage" ref="fullpage">
      <div class="page pageBox1 section">
      <div class="center">
        <video muted autoplay name="media" ref="myVideo" >
          <source src="../assets/video.mp4" type="video/mp4">
          您的浏览器不支持 video 标签。
        </video>
        <div class="clickTo pointer" @click="clickTo">
          <img src="../image/down.png" alt="">
        </div>
      </div>
    </div>
    <div class="page pageBox2 section">
      <div class="center textCen">
      <p class="pageBox2Title bold">
        合作伙伴
      </p>
      <div class="pageBox2Main">
        <p>每个人都有梦想，但不同的是，有的人只梦，有的人敢想，</p>
        <p>夜以继日，只为儿时的篮球梦，</p>
        <p>挥洒汗水，只为点亮心中的足球梦，</p>
        <p>越浪而出，冲破梦里的浪花，</p>
        <p>不畏险阻，勇攀理想的高峰，</p>
        <p>放下包袱，不在乎别人的眼光，藐视所有的困难，</p>
        <p>全力以赴，突破极限，超越自己，</p>
        <p>通过奋斗去实现了自己的梦想，我们都将成为人生的大赢家。</p>
      </div>
      <div class="pageBox2Content">
        <div class="pageBox2Item" v-for="(item,index) in lists" :key="index">
          <div class="pageBox2ImgBox">
            <img :src="item.imgUrl" alt="">
          </div>
          <div class="pageBox2ContentTitle">
            {{item.title}}
          </div>
          <div class="pageBox2ContentMain">
            <p>{{item.text1}}</p>
            <p>{{item.text2}}</p>
            <p>{{item.text3}}</p>
          </div>
        </div>
      </div>
      </div>
      
    </div>
    <div class="page pageBox3 section">
      <div class="center">
        <p class="pageBox3Title bold textCen">
          合作计划
        </p>
        <div class="pageBox3Main">
          <div class="pageBox3Item" v-for="(item,index) in items" :key="index">
            <div class="pageBox3Header" :style="'backgroundImage:url('+item.headerBg+')'"
            @click="taglles(index)"
            >
            
              <div class="imgBox">
                <img :src="item.icon" alt="">
              </div>
              <div>{{item.title}}</div>
            
              
            </div>
            <div 
            class="PageBox3Content" 
            :style="'backgroundImage:url('+item.contentBg+')'"
            :class="accordionIndex ===index ? 'accordion':''"
            >
              <p>{{item.text}}</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    <div class="page pageBox4 section">
      <div class="center">
        <p class="pageBox4Title bold textCen">
          客户至上·信誉为本
        </p>
        <div class="pageBox4Main">
          <p>我们致力于给每一位客户提供最佳的产品体验和最优质服务，这是给你日夜不停息辛苦寻找客户的最好回报。</p>
          <p>我们的产品不断追求卓越和创新，不断吸收客户反馈建议, 完成升级再升级, 只为让每一位客户用的方便。</p>
          <p>我们的品牌以诚信为本, 以信誉著称, 让每一位客户都放心, 安心, 舒心地享受跟我们一起度过的分分秒秒。</p>
          <p>我们的服务追求人性化, 个性化, 因为每一位客户的体验都是用心的, 所以我们会更用心！</p>
        </div>
        <div class="swiperBox">
        <swiper class="gallery-top" :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide class="list slide1">
              <div class="slide1Img">
                <img :src="list[gameIndex].url" alt="">
              </div>
              <div class="slide1Main">
                <div>
                  <p class="slide1Title">{{list[gameIndex].title}}</p>
                  <p class="slide1MainContent">
                    {{list[gameIndex].value}}
                  </p>
                  <div class="btn">
                    <span @click="changeBtn(0)" :class="gameIndex===0? 'btnActive':''">万博体育</span>
                    <div class="lineBtn"></div>
                    <span @click="changeBtn(1)" :class="gameIndex===1? 'btnActive':''">九大真人</span>
                    <div class="lineBtn"></div>
                    <span @click="changeBtn(2)" :class="gameIndex===2? 'btnActive':''">五大电子</span>
                    <div class="lineBtn"></div>
                    <span @click="changeBtn(3)" :class="gameIndex===3? 'btnActive':''">三大彩票</span>
                  </div>
                </div>
                
              </div>
            </swiper-slide>
             <swiper-slide class="list slide2">
              <div class="slide2Center">
                <div class="slide2Text"><p>最新的优惠，日常的优惠，</p>
                <p>VIP成长应有尽有！万博助您愉快体验。</p></div>
                
              </div>
             </swiper-slide>
              <swiper-slide class="list slide3">
                <div class="slide3Box">
                  <div class="slideLine"><img src="../image/line.png" alt=""></div>
                  
                  <div class="slide3Text">
                    <p>随时随地  充提无忧</p>
                    <p>最安全便捷的充值渠道</p>
                    <p>最优质快速的出款渠道</p>
                    <p>7*24小时全天候服务</p>
                  </div>
                  <div class="slide3ImgBox"><img src="../image/card.png" alt=""></div>
                  
                </div>
              </swiper-slide>
               <swiper-slide class="list slide4">
                 <div class="slide4MediaBox">
                    <video controls name="media1" ref="myVideo1" class="myVideo1">
                      <source src="../assets/moive1.mp4" type="video/mp4">
                      您的浏览器不支持 video 标签。
                    </video>
                 </div>
               </swiper-slide>
            <!-- Optional controls -->
            
            
          </swiper>
         
          <div class="paginationBox">
            <div class="swiper-pagination swiper-pagination"  slot="pagination"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="page pageBox5 section">
      <div class="pageBox5ItemBox">
        <div class="pageBox5ItemList">
          <div class="pageBox5ItemChild">
            <div class="pageBox5ItemBoxImg">
              <img src="../image/image_01.png" alt="">
            </div>
            <div class="pageBox5ItemBoxText">
              <div><p class="ft30">皇 家 马 德 里</p>
              <p class="ft30">官方合作伙伴</p></div>
              
            </div>
          </div>
          <div class="pageBox5Line">
            <img src="../image/line_01.png" alt="">
          </div>
          <div class="pageBox5ItemChild">
            <div class="pageBox5ItemBoxImg">
              <img src="../image/image_02.png" alt="">
            </div>
            <div class="pageBox5ItemBoxText">
              <div ><p class="ft30 letter1">英超水晶宫</p>
              <p  class="ft30 letter1">球衣赞助商</p></div>
              
            </div>
          </div>
        </div>
      </div>
      <div class="pageBox5ItemBox">
        <div class="pageBox5ItemList">
          <div class="pageBox5ItemChild">
            <div class="pageBox5ItemBoxImg pageBox5Img3">
              <img src="../image/image_03.png" alt="">
            </div>
            <div class="pageBox5ItemBoxText">
              <div> <p class="ft30 letter2">西甲官方</p>
              <p class="ft20">亚洲首家唯一合作伙伴</p></div>
             
            </div>
          </div>
          <div class="pageBox5Line">
            <img src="../image/line_01.png" alt="">
          </div>
          <div class="pageBox5ItemChild">
            <div class="pageBox5ItemBoxImg pageBox5Img4">
              <img src="../image/image_04.png" alt="">
            </div>
            <div class="pageBox5ItemBoxText">
              <div><p  class="ft30 letter2">意甲官方</p>
              <p  class="ft22 letter3">冠名赞助商</p></div>
              
            </div>
          </div>
        </div>
      </div>
      <div class="horizontal">
        <img src="../image/line_02.png" alt="">
      </div>
      <div class="pageBox5ItemBox flb">
        <div  class="pageBox5ItemList">
          <div  class="pageBox5ItemChild">
            <div class="pageBox5ItemBoxImg  pageBox5Img5">
              <img src="../image/image_05.png" alt="">
            </div>
            <div class="pageBox5ItemBoxText">
              <div><p  class="ft26">菲律宾娱乐游戏公司</p>
              <p  class="ft20">PAGCOR</p></div>
              
            </div>
          </div>
          <div class="pageBox5Line">
            <img src="../image/line_01.png" alt="">
          </div>
          <div  class="pageBox5ItemChild">
            <div class="pageBox5ItemBoxImg pageBox5Img5">
              <img src="../image/image_06.png" alt="">
            </div>
            <div class="pageBox5ItemBoxText">
              <div><p  class="ft30">GICC牌照</p></div>
            </div>
          </div>
        </div>
      </div>
      <div class="pageBox5ItemBox engImg">
        <div  class="pageBox5ItemList">
          <div  class="pageBox5ItemChild1">
            <div class="pageBox5ItemBoxImg">
              <img src="../image/image_07.png" alt="">
            </div>
            <div class="pageBox5ItemBoxText">
              <div>  <p class="ft20">英国博彩牌照</p>
              <p class="ft20">Gambling Commission</p></div>
            
            </div>
          </div>
         
        </div>
      </div>
      <div class="ft20 footerbanquan">ManBetX 万博 版权所有 Copyright  @2018 MBX Technology Co.Ltd. All Rights reserved</div>
    </div>
    </full-page>
  </div>
</template>
<script>
//import { Group, Cell } from 'vux'
import { swiper, swiperSlide } from "vue-awesome-swiper"
export default {
  data(){
    return {
      tellUsShow:false,
      accordionIndex:0,
      ifOpenItems:false,
      isIndex:0,
      options1:{
        licenseKey:"OPEN-SOURCE-GPLV3-LICENSE",
        afterLoad: this.afterLoad,
        scrollBar: false,
        menu: '#menu',
      },
      menus:[
        {
          id:1,
          value:"首页"
        },
        {
          id:2,
          value:"合作伙伴"
        },
        {
          id:3,
          value:"合作计划"
        },
        {
          id:4,
          value:"客户至上"
        },
      ],
      lists:[
        {
          imgUrl:require("../image/earnings.png"),
          title:"收益优势",
          text1:" 高达55%佣金比例 ",
          text2:"全行业最高", 
          text3:"最大让利给合作伙伴 ",
        },{
          imgUrl:require("../image/brand.png"),
          title:"品牌优势",
          text1:"英超 意甲 西甲",
          text2:"倾情赞助三大顶级联赛", 
          text3:"皇家马德里 尤文图斯官方合作伙伴",
        },{
          imgUrl:require("../image/product.png"),
           title:'产品优势',
          text1:'全球首家',
          text2:'免费海量体育赛事直播',
          text3:'最全面的游戏平台'
        },{
          imgUrl:require("../image/service.png"),
          title:'服务优势',
          text1:'专属咨询服务',
          text2:'最专业营销辅导团队',
          text3:'全方位扶持奖励'
        },
      ],
      items:[
        {
          icon:require("../image/icon_01.png"),
          headerBg:require("../image/header_01.png"),
          title:"合作宗旨",
          text:"ManBetX万博专注于提供业内最有竞争力的产品，只需介绍用户来到ManBetX万博进行娱乐游戏，即可获得我们的净赢利回报。借助我们专业的营销辅导团队与强大市场营销工具，你的合营事业必将在最短时间内能取得成功!",
          contentBg:require("../image/hand1.jpg")
        },
        {
          icon:require("../image/icon_02.png"),
          headerBg:require("../image/header_02.png"),
          title:"佣金模式",
          text:"ManBetX万博为广大合营伙伴提供最大让利回报，基础起步佣金 30%，高出同行业平均水平；最高达55%的回报，全行业之最。",
          contentBg:require("../image/hand1.jpg")
        },
        {
          icon:require("../image/icon_03.png"),
          headerBg:require("../image/header_04.png"),
          title:"VIP合作伙伴奖励",
          text:"ManBetX万博的合作伙伴拥有VIP尊贵专享服务，高端推广工具、会员专属存款通道、专属电话回访维护、VIP尊享优惠活动、每月额外推广发展奖金，境内外旅游套餐、年终奖金分红。",
          contentBg:require("../image/hand1.jpg")
        },
        {
          icon:require("../image/icon_04.png"),
          headerBg:require("../image/header_03.png"),
          title:"合作伙伴扶持和奖励",
          text:"ManBetX万博针对于不同级别的合作伙伴提供不同的扶持和鼓励！没有推广经验，没关系，我们陪你从零开始，到获得第一桶金，直抵成功！推广经验丰富，恭喜你，明智的你选择了如此优秀强大的合作伙伴，让你在最短的时间内事业登上新的高峰！",
          contentBg:require("../image/hand1.jpg")
        },
      ],
      swiperOption: {
          pagination:{
            el: '.swiper-pagination',
            autoplay: true,
            clickable: true,
            init:false,
            renderBullet: function (index, className) {
              let text = ""
              let url = require("../image/sanjiao.png")
              switch(index){
                case 0:text='顶尖游戏';break;
                case 1:text='人气优惠';break;
                case 2:text='充提迅速';break;
                case 3:text='全站APP';break;
              }
           return `
           <span class="${className}">
            ${text}
            <i class="sanjiao">
              <img src=${url} alt="">
            </i>
           </span>;
           `
		    	},
          },
        },
        gameIndex:0,
        list:[
          {
            value:"每周数万场足球、篮球、网球、电竞等精彩赛事， 最佳赔率，最便捷的完美体验。更内置高清免费视频/动画直播，英超、西甲、意甲、德甲等除五大联赛外的200多个国家大中小型足球赛事，更有篮球、网球、斯诺克等精彩体育直播，应有尽有。",
            url:require("../image/Interface.png"),
            title:"万博体育"
          },
          {
            value:"AG、OG、欧博、沙龙、GD、BBIN、MG、PT、万博九大真人平台，保证满足您的所有会员",
            url:require("../image/Interface2.png"),
            title:"九大真人"
          },
          {
            value:"PP、MG、AG、PT、PG五大电子游艺平台，保证您在老虎机的旋转之中同样收获满盆金钵。",
            url:require("../image/Interface3.png"),
            title:"五大电子"
          },
          {
            value:`双赢彩票（六合彩、北京赛车、国内外时时彩、快乐农场、11选5）；
            KG彩票（快乐彩、时时彩、六合彩）；
            VR彩票。`,
            url:require("../image/Interface4.png"),
            title:"三大彩票"
          },
        ]
    }
  },
  computed:{
    myVideo(){
      return this.$refs.myVideo
    },
    mySwiper(){
     
      return this.$refs.mySwiper
    }

  },
  mounted() {
    //this.$refs.fullpage.api.setAllowScrolling(false,'down')
    this.myVideo.play()
  },
  methods:{
    taglles(index){
      this.accordionIndex = index
    },
    clickTo(){
      this.$refs.fullpage.api.moveTo(2)
    },
    tellUs(){
      this.tellUsShow = this.tellUsShow ? false:true
    },
     afterLoad(origin,destination,direction){
      this.isIndex = destination.index
      if(this.isIndex===0){
        if(this.myVideo.paused){
          this.myVideo.play()
        }
      }else if (this.isIndex===3) {
        //console.log(this.$refs.mySwiper)
        

      }
    },
    transformationX(){
      this.ifOpenItems = this.ifOpenItems?false :true
    },
    changeBtn(index){
      this.gameIndex = index
      
    },
  },
  components: {
   swiper,
    swiperSlide,
   
  }
}
</script>
<style lang="stylus" scoped>

#home
  font-size 0.2rem
  position relative
  .model
    width 100vh
    height 100vh
    position fixed
    left 0
    top 0
    z-index 100
    display none
    &.modelClose
      display block
  #menu
    position fixed
    left 0
    top 0
    z-index 100
    padding 1.25rem 0 0 0.5rem
    width 2.9rem
    height 100vh
    background-color rgba(0,0,0,.8)
    transform translateX(-100%)
    transition all 0.3s ease
    >div
      font-size 0.3rem
      a
        color #ffffff
        display inline-block
        padding 0.25rem 0
        border-bottom 1px solid #3a3a3a
    &.itemsOpen
      transform translateX(0)
  .fa
    cursor: pointer;
    width: 0.50rem;
    height: 0.50rem;
    transition: .3s ease;
    position fixed
    top 0.5rem
    left 0.5rem
    z-index 200
    
    .icon
      width: 0.50rem;
      height: 0.50rem;
      padding: 0.10rem 0;
      border-top: 0.10rem solid #FFF;
      border-bottom: 0.10rem solid #FFF;
      background-color: #FFF;
      background-clip: content-box;
      &:before
        position: absolute;
        content: "";
        width: 0.60rem;
        height: 0.60rem;
        transition: .3s ease;
        -webkit-transition: .3s ease;
        opacity: 0;
        top: -0.05rem;
        border-bottom: 0.1rem solid #FFF;
      &:after
        position: absolute;
        content: "";
        width: 0.60rem;
        height: 0.60rem;
        transition: .3s ease;
        -webkit-transition: .3s ease;
        opacity: 0;
        top: 0.15rem;
        border-top: 0.1rem solid #FFF;
    &.faChangeX
      .icon
        border: 0;
        background: none;
        &:before
          opacity: 1;
          transform: rotate(135deg) translateX(0.05rem) translateY(-0.25rem);
          -webkit-transform: rotate(135deg) translateX(0.05rem) translateY(-0.25rem);
        &:after
          opacity: 1;
          transform: rotate(-135deg) translateX(0.2rem) translateY(0.39rem);
          -webkit-transform: rotate(-135deg) translateX(0.2rem) translateY(0.39rem);
  .tellUs
    position absolute
    top 0
    right 0.3rem
    z-index 100
    background-color #E49A33
    border-bottom-right-radius 0.36rem
    border-bottom-left-radius  0.36rem
    min-width 1.9rem
    padding 0 0.2rem
    min-height 2rem
    line-height 0.6rem
    z-index 102
    font-size 0.22rem
    display flex
    align-items center
    justify-content center
    transition all 0.3s ease
    transform translateY(-1.2rem)
    color #000000
    .phone
      img
        width 0.36rem
        height 0.36rem
        vertical-align middle
      span
        padding-left 0.1rem
    .skype
      a
        color #000000
        img
          width 0.36rem
          height 0.36rem
          vertical-align middle
        span
          padding-left 0.1rem
    p
      font-size 0.3rem
      text-align center
      position relative
      color #fff
      span
        position absolute
        left 0.1rem
        
    &.tellUsShow
      transform translateY(0)
  #fullpage
    .pageBox1
      position relative
      .center
        width 100%
        height 100%
        overflow hidden
        display flex 
        align-items center
        justify-content center
        background-color #000
        video
          //max-width 100%
          height 100%
        .clickTo
          width 0.42rem
          height 0.42rem
          position absolute
          left 50%
          bottom 0.4rem
          margin-left -0.21rem
          animation mymove 0.5s linear infinite
          z-index 100
          img
            width 100%
            height 100%
    .pageBox2
      background url("../image/itemBg.png") no-repeat
      background-size cover
      padding-top 1.20rem
      .pageBox2Title
        font-size 0.7rem
        color #ffbd5e
        padding-bottom 0.5rem  
      .pageBox2Main
        padding-bottom 0.4rem
        p
          color #cccccc
          line-height 0.36rem
          font-size 0.2rem
      .pageBox2Content
        .pageBox2Item
          min-width 50%
          display inline-block
          padding-bottom 0.7rem
          .pageBox2ImgBox
            width 100%
            height 0.76rem
            display flex
            justify-content center
            align-items flex-end
            margin-bottom 0.32rem
            img
              max-width 100%
              max-height 100%
          .pageBox2ContentTitle
            font-size 0.34rem
            color #ffbd5e
            padding-bottom 0.1rem
          .pageBox2ContentMain
            p
              color #ffbd5e
              line-height 0.32rem
    .pageBox3
      background url("../image/itemBg.png") no-repeat
      background-size cover
      padding-top 1.20rem
      .pageBox3Title
        font-size 0.7rem
        color #ffbd5e
        padding-bottom 0.2rem     
      .pageBox3Main
        .pageBox3Item
          .pageBox3Header
            height 1.9rem
            transition all 0.5s ease
            display flex
            justify-content flex-start
            align-items center
            padding-left 0.9rem
            font-size 0.36rem
            background-repeat no-repeat
            background-position 50%
            background-size cover
            >div
              color #ffbd5e
            .imgBox
              width 0.48rem
              height 0.56rem
              display flex
              align-items flex-end
              margin-right 0.2rem
              img
                max-height 0.56rem
                max-width 0.48rem
          .PageBox3Content
            height 0
            overflow hidden
            transition all 0.5s ease
            padding 0 1rem 0 1rem
            p
              padding-top 0.3rem
              font-size 0.16rem
              line-height 0.38rem
              color #ffbd5e
            &.accordion
              height 2.4rem
              // animation myHeight 5s ease
              // animation-fill-mode forwards 
    .pageBox4
      background url("../image/itemBg.png") no-repeat
      background-size cover
      padding-top 1.20rem
      overflow hidden
      .pageBox4Title
        font-size 0.7rem
        color #ffbd5e
        padding-bottom 0.3rem   
      .pageBox4Main
        padding 0 0.8rem
        p
          line-height 0.3rem
          font-size 0.2rem
          text-align center
          padding-bottom 0.2rem
          color #ccc

      .swiperBox
        .gallery-top
          .slide1
            .slide1Img
              text-align center
              height 2.6rem
              
              img
                max-height 100%
            .slide1Main
              margin-top 0.1rem
              padding 0 0.4rem
              >div
                color #ffbd5e
                .slide1Title
                  font-size 0.3rem
                  margin-bottom 0.3rem
                .slide1MainContent
                  font-size 0.2rem
                  line-height 0.36rem
                  text-align justify
                  height 1.6rem
                .btn
                  display flex 
                  justify-content flex-start
                  align-content center
                  padding-top 0.1rem
                  span 
                    color #ffbd5e
                    width 1.20rem
                    height 0.4rem
                    line-height 0.4rem
                    font-size 0.2rem
                    border 1px solid #ffbd5e
                    border-radius 0.4rem
                    text-align center
                    cursor pointer
                  .btnActive
                    background-color #ffbd5e
                    color #000
                  .lineBtn
                    width 0.40rem
                    height 2px
                    background-color #6a502a
                    margin-top 0.16rem
          .list
            min-height 5rem
          .slide2
            display flex 
            justify-content center
            .slide2Center
              width 100%
              font-size 0.28rem
              color #ffbd5e
              line-height 0.5rem
              background url("../image/component.png") no-repeat
              background-position top right 
              background-size 100% auto
              display flex 
              align-items flex-end
              justify-content center
              padding-bottom 0.4rem
              .slide2Text
                //padding-right 0.6rem
                text-align center
          .slide3
            display flex 
            justify-content center
            align-items center
            padding 0 0.3rem 0 0.1rem
            .slide3Box
              display flex
              justify-content flex-start
              width 100%
              .slide3Text
                width 3.4rem
                padding-left 0.3rem
                padding-right 0.5rem
                padding-top 0.2rem
                p
                  color #ffbd5e
                  font-size 0.2rem
                  margin-bottom 0.28rem
                  text-align start
                  &:first-of-type
                    font-size 0.28rem
              .slide3ImgBox
                width 3.6rem
                img
                  max-height 100%
                  max-width 100%
              .slideLine
                width 0.14rem
                padding-top 0.2rem
                img
                  max-width 100%
                  max-height 100%
          .slide4
            display flex 
            justify-content center
            align-items center
            padding 0 0.4rem
            .slide4MediaBox
              height 3.8rem
              .myVideo1
                width 100%
    .pageBox5
      height 7.5rem !important
      background url("../image/footerBg.jpg") no-repeat
      background-size 100% 100%
      padding .5rem 0 0 .2rem
      color #fff
      .ft30
        font-size 0.3rem
      .ft26
        font-size 0.26rem
      .ft22
        font-size 0.22rem
      .ft20
        font-size 0.2rem
      .letter1
       letter-spacing 0.1rem
      .letter2
        letter-spacing 0.2rem
      .letter3
        letter-spacing 0.16rem
      .horizontal
        height 0.02rem
        display flex
        justify-content center

        margin 0.3rem 0 0.3rem -0.1rem

        img
          height 100%
          width auto
      .pageBox5ItemBox
        display flex
        justify-content center
        padding-bottom 0.4rem
        .pageBox5ItemList
          display flex
          justify-content space-around
          .pageBox5ItemChild
            display flex
            justify-content flex-start
            width 3.3rem
            .pageBox5ItemBoxImg
              display flex
              align-items center
              justify-content center
              width 0.7rem
              img
                max-height 1rem
                width auto
      
            .pageBox5Img3
              img 
                max-height 0.64rem
            .pageBox5Img4
              img 
                max-height 0.9rem
            .pageBox5Img5
              img 
                max-height 0.68rem
            .pageBox5Img6
              img 
                max-height 0.9rem
            .pageBox5ItemBoxText
              padding-left 0.2rem
              display flex
              justify-content center
              align-items center
              >div
                p:first-of-type
                  padding-bottom 0.12rem
          .pageBox5Line
            margin 0 0.3rem 0 0.2rem
            display flex
            justify-content center
            align-items center
            img
              max-height 1rem
              width 0.02rem
        &.engImg
          padding-top 0.05rem
          .pageBox5ItemList
            .pageBox5ItemChild1
              display flex
              justify-content flex-start
              margin-left -0.1rem
              .pageBox5ItemBoxImg
                display flex
                align-items center
                justify-content center
                margin-right 0.4rem
                img
                  max-height 0.46rem
        // &.flb
        //   .pageBox5ItemList
        //      color #ccc
    .footerbanquan
      padding 0.3rem 0.4rem 0 0.2rem
      text-align center
      line-height 0.32rem
             
                

@keyframes mymove
  from 
    transform :translateY(3px) 
  to 
    transform :translateY(0) 

  
</style>

<style lang="stylus">

#home
  .paginationBox
    display flex
    justify-content center
    padding-top 0.4rem
    .swiper-pagination
      width 100%
      .swiper-pagination-bullet
        width 1.72rem
        height 0.24rem
        display inline-block
        border-radius 0
        color #ffbd5e
        font-size 0.2rem
        background-color #362916
        line-height 1.2rem
        margin 0
        outline 0
        .sanjiao
          display none
      .swiper-pagination-bullet-active
        font-size 0.24rem
        background-color #ffbd5e
        outline 0
        position relative
        .sanjiao
          display block
          width 0.44rem
          height 0.22rem
          position absolute
          top -0.60rem
          left 50%
          margin-left -0.22rem
          img 
            width 100%
            height 100%
  .section
    overflow hidden
    position relative
</style>