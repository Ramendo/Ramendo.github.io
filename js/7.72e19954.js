(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"2e5e":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"q-pa-md",style:t.$q.screen.lt.md?null:"display: grid; place-items: center;"},[s("div",{staticStyle:{width:"100%"},style:t.$q.screen.lt.sm?"padding-top: 150px;":"padding-top: 180px;"}),t._l(t.setsRows,(function(e,r){return s("div",{key:r,staticClass:"row",style:t.$q.screen.lt.md?null:"width: 1450px;"},t._l(e,(function(e,r){return s("div",{key:r,staticClass:"col column items-center"},[s("router-link",{staticStyle:{color:"inherit","text-decoration":"none"},attrs:{to:t.currentPath+"/"+e.name}},[s("q-card",{staticStyle:{width:"300px",cursor:"pointer"},style:"background-color: "+e.titleColor+";"+(t.$q.screen.lt.sm?"width: "+(t.$q.screen.width-50)+"px; height: "+t.cardHeight+"px;":"")},[s("div",{staticClass:"text-h6 text-center text-white non-selectable",staticStyle:{"padding-top":"25px","padding-bottom":"25px",color:"#534f47"}},[t._v(t._s(e.title.toUpperCase()))]),s("q-img",{staticStyle:{height:"400px"},attrs:{src:"/img/sets/"+e.name+"/1.jpg"}})],1)],1),s("div",{staticStyle:{width:"100%"},style:t.$q.screen.lt.sm?"padding-top: 45px;":"padding-top: 90px;"})],1)})),0)})),s("div",{staticStyle:{width:"100%"},style:t.$q.screen.lt.sm?"padding-top: 45px;":"padding-top: 90px;"})],2)},i=[],n={data(){return{currentPath:"",cardHeight:450,title:"KOLOKARAMELLO - Наборы"}},computed:{setsData(){const t=this.$store.state.main.sets,e=[];for(let s in t)e.push(t[s]);return e},setsRows(){return this.$q.screen.lt.md?this.$q.screen.lt.sm?this.getSetsRows(1):this.getSetsRows(2):this.getSetsRows(4)},sets(){return this.setsData}},meta(){return{title:this.title}},created(){this.currentPath=this.$router.history.current.path;const t=this.$q.screen.height-250;this.cardHeight=t<250||t>450?450:this.$q.screen.height-250},methods:{getSetsRows(t){let e=[],s=[];for(let r=0;r<this.sets.length;r++)s.length<t&&(s.push(this.sets[r]),s.length===t&&(e.push(s),s=[]));return s.length>0&&e.push(s),e},goToSetInfo(t){this.$router.history.current.path!=="/sets/"+t&&("/"===this.currentPath[this.currentPath.length-1]?this.$router.push(this.currentPath+t):this.$router.push(this.currentPath+"/"+t))}}},a=n,h=(s("a913"),s("2877")),c=s("f09f"),o=s("068f"),l=s("eebe"),p=s.n(l),d=Object(h["a"])(a,r,i,!1,null,"1b592320",null);e["default"]=d.exports;p()(d,"components",{QCard:c["a"],QImg:o["a"]})},"77e7":function(t,e,s){},a913:function(t,e,s){"use strict";var r=s("77e7"),i=s.n(r);i.a}}]);