(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"12a5":function(t,e,s){},"31c3":function(t,e,s){"use strict";var i=s("12a5"),a=s.n(i);a.a},"324d":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row justify-center",style:{paddingTop:t.$q.screen.lt.sm?t.top?t.top/2+"px":"60px":t.top?t.top+"px":"150px",paddingBottom:t.$q.screen.lt.sm?t.bottom?t.bottom/2+"px":"90px":t.bottom?t.bottom+"px":"180px"}},[s("div",{staticClass:"col-4",class:t.left?null:"text-center",staticStyle:{"font-size":"20px",width:"100%","padding-top":"30px"},style:{maxWidth:t.size?560-560*t.size+640+"px":"600px",paddingLeft:t.$q.screen.width>390?"20px":"5px",paddingRight:t.$q.screen.width>390?"20px":"5px"}},[s("div",{staticClass:"column justify-center",staticStyle:{height:"100%"}},[s("div",{staticStyle:{color:"#756f63"}},[t.title?s("span",{staticStyle:{color:"#534f47"},style:t.$q.screen.lt.sm?"font-size: 30px;":"font-size: 40px; line-height: 45px;"},[s("b",[t._v(t._s(t.title.toUpperCase()))])]):t._e(),t.subtitle?s("p",{staticStyle:{"font-size":"18px"},style:t.$q.screen.lt.sm?"padding-top: 10px;":"padding-top: 25px;"},[t._v(t._s(t.subtitle))]):t._e(),t.title||t.subtitle?s("q-separator",{staticStyle:{"margin-top":"25px","margin-bottom":"25px"},attrs:{color:"orange",inset:""}}):t._e(),s("p",[t._t("default")],2)],1)])]),s("div",{staticClass:"col-4",staticStyle:{width:"100%","padding-left":"20px","padding-right":"20px","padding-top":"30px"},style:t.size?"max-width: "+560*t.size+"px;":"max-width: 560px;"},[t._t("image",[s("img-extend",{attrs:{src:t.src,square:t.square,size:t.size}})])],2)])},a=[],l=s("ad97"),n={props:{src:String,title:String,subtitle:String,left:Boolean,square:Boolean,size:Number,top:Number,bottom:Number},components:{ImgExtend:l["a"]}},r=n,o=s("2877"),c=s("eb85"),p=s("eebe"),d=s.n(p),u=Object(o["a"])(r,i,a,!1,null,null,null);e["a"]=u.exports;d()(u,"components",{QSeparator:c["a"]})},"9e6d":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticStyle:{width:"100%"},style:t.$q.screen.lt.sm?"padding-top: 150px;":"padding-top: 70px;"}),s("full-carousel",{attrs:{imgs:t.carouselData}}),s("div",{staticStyle:{width:"100%"},style:t.$q.screen.lt.sm?"padding-top: 50px;":"padding-top: 90px;"}),s("div",{staticClass:"text-center",staticStyle:{color:"#534f47"},style:t.$q.screen.lt.sm?"font-size: 30px; line-height: 35px;":"font-size: 40px; line-height: 45px;"},[t._v(t._s(t.set.title))]),s("div",{staticStyle:{width:"300px","margin-left":"calc(50% - 150px)"}},[s("q-separator",{staticStyle:{"margin-top":"25px","margin-bottom":"25px"},attrs:{color:"orange",inset:""}})],1),t.set.subtitle&&t.set.list?s("div",{staticClass:"row justify-center"},[s("div",{staticClass:"col",staticStyle:{"font-size":"20px",color:"#756f63",width:"100%","max-width":"1200px","padding-left":"20px","padding-right":"20px"}},[t.set.subtitle?s("div",{staticStyle:{color:"#5c574d","margin-bottom":"25px"},style:t.$q.screen.lt.sm?"font-size: 25px; line-height: 27px;":"font-size: 30px; line-height: 32px;"},[t._v(t._s(t.set.subtitle))]):t._e(),t.set.list?t._l(t.set.list,(function(e,i){return s("div",{key:i},[s("q-icon",{staticStyle:{"font-size":"10px"},attrs:{name:"fiber_manual_record"}}),t._v(" "+t._s(e))],1)})):t._e()],2)]):t._e(),s("text-with-image",{attrs:{src:t.img2,left:"",square:"",size:.5,top:t.set.subtitle&&t.set.list?60:1,bottom:1}},[t.set.subtitle2&&t.set.list2?[t.set.subtitle2?s("div",{staticStyle:{color:"#5c574d","margin-bottom":"25px"},style:t.$q.screen.lt.sm?"font-size: 25px; line-height: 27px;":"font-size: 30px; line-height: 32px;"},[t._v(t._s(t.set.subtitle2))]):t._e(),t.set.list2?t._l(t.set.list2,(function(e,i){return s("div",{key:i},[s("q-icon",{staticStyle:{"font-size":"10px"},attrs:{name:"fiber_manual_record"}}),t._v(" "+t._s(e))],1)})):t._e()]:t.set.text?[t._v("\n      "+t._s(t.set.text)+"\n    ")]:t._e()],2),s("div",{staticClass:"row justify-center",style:{paddingBottom:t.$q.screen.lt.sm?"90px":"180px"}},[s("div",{staticClass:"col-4",staticStyle:{width:"100%","max-width":"920px"},style:{paddingLeft:t.$q.screen.width>390?"20px":"5px",paddingRight:t.$q.screen.width>390?"20px":"5px"}}),s("div",{staticClass:"col-4",staticStyle:{width:"100%","padding-left":"20px","padding-right":"20px","padding-top":"30px","max-width":"280px"}},[s("q-btn",{staticClass:"full-width",staticStyle:{color:"#4d4942"},attrs:{outline:"",label:"Оформить заказ"},on:{click:function(e){return t.changePage("/blank")}}}),s("q-separator",{staticClass:"full-width",staticStyle:{"margin-top":"25px","margin-bottom":"20px"},attrs:{color:"orange",inset:""}}),t._m(0),s("q-separator",{staticClass:"full-width",staticStyle:{"margin-top":"25px","margin-bottom":"20px"},attrs:{color:"orange",inset:""}}),t._m(1),s("q-separator",{staticClass:"full-width",staticStyle:{"margin-top":"25px","margin-bottom":"20px"},attrs:{color:"orange",inset:""}}),t._m(2)],1)]),[s("div",{staticClass:"row",class:t.$q.screen.lt.sm?"":"justify-center"},[s("q-carousel",{staticClass:"text-orange shadow-1 rounded-borders",style:t.$q.screen.lt.sm?"width: "+t.$q.screen.width+"px":"",attrs:{"transition-prev":"scale","transition-next":"scale",swipeable:"",animated:"","control-color":"orange",navigation:"",padding:"",arrows:"",height:t.$q.screen.lt.sm?150+350*t.allSetsRows[parseInt(t.slide)].length+"px":150+350*t.allSetsRows[0].length+"px"},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},t._l(t.allSetsRows,(function(e,i){return s("q-carousel-slide",{key:i,staticClass:"column no-wrap flex-center",attrs:{name:i+""}},t._l(e,(function(e,a){return s("div",{key:a,staticClass:"row",style:t.$q.screen.lt.md?null:"width: 1450px;"},t._l(e,(function(e,l){return s("div",{key:l,staticClass:"col column items-center",staticStyle:{width:"250px"},style:0!==a?"margin-top: 50px;":""},[s("div",{staticStyle:{color:"inherit","text-decoration":"none"},on:{click:function(s){return t.addLollipop({id:e.index,set:t.name,subset:i+1})}}},[s("q-card",{staticStyle:{cursor:"pointer"},style:(t.$q.screen.lt.sm,"width: 200px;")},[0!==e.index?s("q-img",{staticStyle:{height:"300px"},attrs:{src:"/img/sets/"+t.name+"/"+(i+1)+"/"+e.index+".png"}}):t._e()],1)],1)])})),0)})),0)})),1)],1),s("div",{staticStyle:{width:"100%"},style:t.$q.screen.lt.sm?null:"padding-top: 180px;"})]],2)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-center",staticStyle:{color:"#4d4942","font-size":"16px","line-height":"10px"}},[s("pre",[t._v("Цены на наборы")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-center",staticStyle:{color:"#4d4942","font-size":"16px","line-height":"10px"}},[s("pre",[t._v("Из 10 леденцов")]),s("pre",[t._v("499 Р/шт за 1   набор  ")]),s("pre",[t._v("399 Р/шт от 10  наборов")]),s("pre",[t._v("349 Р/шт от 50  наборов")]),s("pre",[t._v("299 Р/шт от 100 наборов")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-center",staticStyle:{color:"#4d4942","font-size":"16px","line-height":"10px"}},[s("pre",[t._v("Из 20 леденцов")]),s("pre",[t._v("899 Р/шт за 1   набор  ")]),s("pre",[t._v("769 Р/шт от 10  наборов")]),s("pre",[t._v("699 Р/шт от 50  наборов")]),s("pre",[t._v("559 Р/шт от 100 наборов")])])}],l=s("324d"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row justify-center"},[s("q-carousel",{staticStyle:{width:"100%"},style:t.$q.screen.lt.sm?"height: 300px;":"height: 600px;",attrs:{animated:"",swipeable:"",infinite:"",autoplay:2700,padding:"",arrows:null,"transition-prev":"slide-right","transition-next":"slide-left"},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},t._l(t.imgs,(function(t,e){return s("q-carousel-slide",{key:e,attrs:{name:e+1,"img-src":t}})})),1)],1)},r=[],o={props:{imgs:Array},data(){return{slide:1}}},c=o,p=s("2877"),d=s("880c"),u=s("62cd"),h=s("eebe"),m=s.n(h),g=Object(p["a"])(c,n,r,!1,null,null,null),x=g.exports;m()(g,"components",{QCarousel:d["a"],QCarouselSlide:u["a"]});var f={props:{name:String},components:{TextWithImage:l["a"],FullCarousel:x},data(){return{slide:"0"}},computed:{sets(){return this.$store.state.main.sets},set(){return void 0!==this.sets[this.name]?this.sets[this.name]:{title:"",text:"",data:[]}},img1(){return void 0!==this.sets[this.name]?`img/sets/${this.name}/1.jpg`:"img/orange.png"},img2(){return void 0!==this.sets[this.name]?`img/sets/${this.name}/1.jpg`:"img/orange.png"},title(){return"KOLOKARAMELLO - "+this.set.title},allSetsRows(){let t=[];for(let e=0;e<this.setsData.length;e++)t.push(this.setsRows(e));return t},setsData(){return this.set.data},carouselData(){let t=[];for(let e=1;e<=this.set.carouselCount;e++)t.push(`img/sets/${this.name}/carousel/${e}.jpg`);return t}},meta(){return{title:this.title}},beforeUpdate(){void 0===this.sets[this.name]&&this.$router.push("/sets")},mounted(){""!==this.set.title&&void 0!==this.sets[this.name]||this.$router.push("/sets")},methods:{changePage(t){this.$router.history.current.path!==t&&this.$router.push(t)},setsRows(t){return this.$q.screen.lt.md?this.$q.screen.lt.sm?this.getSetsRows(1,t):this.getSetsRows(2,t):this.getSetsRows(5,t)},getSetsRows(t,e){let s=[],i=[];const a=this.setsData[e].count;for(let l=0;l<10;l++)i.length<t&&(l<a?i.push({index:l+1}):i.length>0&&i.push({index:0}),i.length===t&&(s.push(i),i=[]));return i.length>0&&s.push(i),s},addLollipop(t){this.$store.commit("main/addLollipop",t)}}},v=f,y=(s("31c3"),s("eb85")),_=s("0016"),w=s("9c40"),b=s("f09f"),S=s("068f"),q=Object(p["a"])(v,i,a,!1,null,"08b1caae",null);e["default"]=q.exports;m()(q,"components",{QSeparator:y["a"],QIcon:_["a"],QBtn:w["a"],QCarousel:d["a"],QCarouselSlide:u["a"],QCard:b["a"],QImg:S["a"]})},ad97:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticStyle:{width:"100%",cursor:"pointer"},style:t.full?null:t.size?"max-width: "+560*t.size+"px;":"max-width: 560px;",on:{click:function(e){t.dialogImage=!0}}},[t._t("default",[s("q-img",{style:t.square?t.size?"height: 100%; max-height: "+560*t.size+"px;":"height: 100%; max-height: 560px;":null,attrs:{src:t.src,"spinner-color":"white"}})])],2),s("q-dialog",{model:{value:t.dialogImage,callback:function(e){t.dialogImage=e},expression:"dialogImage"}},[s("q-card",{staticStyle:{width:"100%"},attrs:{square:""}},[s("q-card-section",{staticStyle:{padding:"0px",width:"100%"}},[t._t("default",[s("q-img",{staticStyle:{height:"100%"},attrs:{src:t.src,"spinner-color":"white",contain:""}})]),s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"text-orange",staticStyle:{position:"absolute",top:"5px",right:"5px"},attrs:{icon:"close",flat:"",round:"",dense:""}})],2)],1)],1)],1)},a=[],l={props:{src:String,square:Boolean,size:Number,full:Boolean},data(){return{dialogImage:!1}}},n=l,r=s("2877"),o=s("068f"),c=s("24e8"),p=s("f09f"),d=s("a370"),u=s("9c40"),h=s("7f67"),m=s("eebe"),g=s.n(m),x=Object(r["a"])(n,i,a,!1,null,null,null);e["a"]=x.exports;g()(x,"components",{QImg:o["a"],QDialog:c["a"],QCard:p["a"],QCardSection:d["a"],QBtn:u["a"]}),g()(x,"directives",{ClosePopup:h["a"]})}}]);