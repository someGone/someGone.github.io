import{_ as C,o as i,c as v,w as o,r as n,a as c,b as e,d as g,t as S,e as f,f as k,p as y,g as V}from"./index.3e93812c.js";var w="/assets/logo.b28bdd42.png";const B={data(){return{phone:"",code:"",sendText:"\u53D1\u9001\u9A8C\u8BC1\u7801",time:6e4,isSending:!1,themes:{buttonDefaultBackgroundColor:"#DDFF55",buttonSmallHeight:"30px",buttonBorderWidth:"0px",buttonBorderRadius:"5px",buttonSmallFontSize:"14px",buttonDefaultColor:"#000000",buttonSmallPadding:"10px 20px 10px 20px",countDownTextColor:"rgba(0,0,0,0.5)"}}},mounted(){},methods:{sendCodeClick(){console.log("send code"),this.isSending=!0},loginClick(){},timeOver(){this.time=6e4,this.isSending=!1}}},h=s=>(y("data-v-e567f44a"),s=s(),V(),s),D=h(()=>c("img",{class:"topImg",src:w},null,-1)),F={key:1,class:"countBack"},I=h(()=>c("div",{style:{height:"82px"}},null,-1)),N=g("\u767B\u5F55");function T(s,l,z,L,t,r){const u=n("van-field"),a=n("van-col"),_=n("van-row"),p=n("van-divider"),m=n("van-button"),x=n("van-count-down"),b=n("van-config-provider");return i(),v(b,{"theme-vars":t.themes},{default:o(()=>[c("div",null,[D,e(_,{class:"input",align:"center",gutter:"8"},{default:o(()=>[e(a,{span:"24"},{default:o(()=>[e(u,{modelValue:t.phone,"onUpdate:modelValue":l[0]||(l[0]=d=>t.phone=d),placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",type:"number"},null,8,["modelValue"])]),_:1})]),_:1}),e(p,{class:"divider"}),e(_,{class:"input",justify:"space-between",align:"center",gutter:"8"},{default:o(()=>[e(a,{span:"12"},{default:o(()=>[e(u,{modelValue:t.code,"onUpdate:modelValue":l[1]||(l[1]=d=>t.code=d),placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",type:"number"},null,8,["modelValue"])]),_:1}),e(a,{span:"6"},{default:o(()=>[t.isSending?f("",!0):(i(),v(m,{key:0,onClick:r.sendCodeClick,type:"default",size:"small"},{default:o(()=>[g(S(t.sendText),1)]),_:1},8,["onClick"])),t.isSending?(i(),k("div",F,[e(x,{time:t.time,"auto-start":!0,ref:"codeCount",format:"ss\u79D2\u540E\u91CD\u65B0\u83B7\u53D6",onFinish:r.timeOver},null,8,["time","onFinish"])])):f("",!0)]),_:1})]),_:1}),e(p,{class:"divider"}),I,e(m,{class:"loginBtn"},{default:o(()=>[N]),_:1})])]),_:1},8,["theme-vars"])}var U=C(B,[["render",T],["__scopeId","data-v-e567f44a"]]);export{U as default};
