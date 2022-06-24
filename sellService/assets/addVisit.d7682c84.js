import{N as x}from"./hh-nav.93c5156f.js";import{d as w}from"./dayjs.min.883bdaf7.js";import{_ as y}from"./arrow_bottom_gray.1d71102f.js";import{_ as g,h as d,o as C,i as S,d as a,b as e,t as D,w as l,g as V,p as b,f as I,r as n,e as B}from"./index.d0ff2185.js";import"./_commonjsHelpers.88e99c8f.js";const N={components:{NavBar:x},setup(){const s=d(!1),o=new Date,m=d(""),t=d(""),{proxy:_}=V(),i=()=>{history.back()};return{minDate:new Date(2020,0,1),maxDate:new Date,dateStr:"",currentDate:o,dateShow:s,onClickLeft:i,workProgress:m,gymId:t,proxy:_}},mounted(){this.gymId=JSON.parse(this.$route.query.gymId)},methods:{dateConfirm(){this.dateStr=w(this.currentDate).format("YYYY-MM-DD HH:mm")},submitClick(){if(this.dateStr==""){this.$toast("\u8BF7\u9009\u62E9\u62DC\u8BBF\u65F6\u95F4");return}else if(this.workProgress==""){this.$toast("\u8BF7\u586B\u5199\u4E3B\u8981\u8FDB\u5C55");return}var s={visitTime:this.dateStr,content:this.workProgress};this.proxy.$api.addMyGymVisitRecord(this.gymId,s).then(o=>{this.$toast("\u6DFB\u52A0\u6210\u529F"),setTimeout(()=>{this.$router.back()},1500)})}}},c=s=>(b("data-v-8dc4f422"),s=s(),I(),s),P={class:"mainPage van-safe-area-top"},T={class:"container"},z=c(()=>e("text",{class:"norText mtCustom",style:{"--z":"15px"}},"\u8BF7\u9009\u62E9\u62DC\u8BBF\u65F6\u95F4",-1)),Y=c(()=>e("img",{class:"imgWHCustom",style:{"--z":"28px"},src:y},null,-1)),H=[z,Y],M={class:"rowSpace mt20"},L={class:"regText",style:{"--c":"rgba(0, 0, 0, 0.4)"}},U=c(()=>e("div",null,null,-1)),j=c(()=>e("div",{class:"rowSpace mtCustom",style:{"--z":"40px"}},[e("text",{class:"norText"},"\u4E3B\u8981\u8FDB\u5C55"),e("div")],-1)),q={class:"oneC"},E=B("\u6DFB\u52A0"),G={class:"wrapper"},J={class:"overCenterV"};function O(s,o,m,t,_,i){const p=n("nav-bar"),u=n("van-field"),v=n("van-cell-group"),h=n("van-button"),f=n("van-datetime-picker"),k=n("van-overlay");return C(),S("div",P,[a(p,{text:"\u6DFB\u52A0\u62DC\u8BBF\u8BB0\u5F55",onBlackclick:t.onClickLeft,isblack:!0,issearch:!1},null,8,["onBlackclick"]),e("div",T,[e("div",{class:"rowSpace",onClick:o[0]||(o[0]=r=>t.dateShow=!0)},H),e("div",M,[e("text",L,D(t.dateStr),1),U]),j,a(v,{inset:""},{default:l(()=>[a(u,{modelValue:t.workProgress,"onUpdate:modelValue":o[1]||(o[1]=r=>t.workProgress=r),rows:"1",autosize:"",type:"textarea",placeholder:"\u8BF7\u586B\u5199\u4E3B\u8981\u8FDB\u5C55",class:"markV",clearable:""},null,8,["modelValue"])]),_:1}),e("div",q,[a(h,{onClick:i.submitClick,class:"submitBtn"},{default:l(()=>[E]),_:1},8,["onClick"])]),a(k,{show:t.dateShow,onClick:o[3]||(o[3]=r=>t.dateShow=!1)},{default:l(()=>[e("div",G,[e("div",J,[a(f,{modelValue:t.currentDate,"onUpdate:modelValue":o[2]||(o[2]=r=>t.currentDate=r),type:"datetime","min-date":t.minDate,"max-date":t.maxDate,onConfirm:i.dateConfirm},null,8,["modelValue","min-date","max-date","onConfirm"])])])]),_:1},8,["show"])])])}var Q=g(N,[["render",O],["__scopeId","data-v-8dc4f422"]]);export{Q as default};