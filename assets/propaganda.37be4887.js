import{Q as d,h}from"./wxqrcode.b0f8daaf.js";import{_ as r,H as c,o as l,c as m,d as e,t as a,g,p as v,f as I}from"./index.461c5154.js";const b={setup(){const{proxy:t}=g();return{proxy:t}},data(){return{path:"",pathIndex:"",codeImg:"",gymData:{logo:"data:image/png;base64,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",name:"maio",brand:"\u5927\u5927\u5927",address:"XXXXXXXXXXXXXXXXX",phone:"18666226655"}}},created(){this.path=this.$route.query.data,this.pathIndex=this.$route.query.i;var t="https://www.baidu.com";let o=d.createQrCodeImg(t,{size:parseInt(80)});this.codeImg=o,setTimeout(()=>{},3e3)},mounted(){this.proxy.$api.getGymInfo(c.tenantId).then(t=>{console.log("\u5065\u8EAB",t)})},methods:{submit(){this.downs()},downs(){var t=document.createElement("a");t.href=this.posterImg,t.download="poster",t.click()},exportPosterImg(){h(this.$refs.posterImgV,{useCORS:!0,logging:!0}).then(t=>{var o=t.toDataURL("image/jpeg");this.posterImg=o})}}},u=t=>(v("data-v-6d06b9ec"),t=t(),I(),t),f={class:"login"},p={class:"loginBoxB"},w={class:"postersBox"},E={class:"posters",ref:"posterImgV"},K=["src"],C=["src"],X={class:"info"},T={class:"left"},S=["src"],U={class:"leftC"},y={class:"t"},x={class:"subT"},Q={class:"right"},B=u(()=>e("view",{class:"mt20"},null,-1)),A={class:"haobaoTitle"},J={class:"submitBox"};function R(t,o,H,j,s,i){return l(),m("div",f,[e("div",p,[e("div",w,[e("div",E,[e("img",{src:s.path,alt:"",class:"image"},null,8,K),e("img",{class:"qrcode",src:s.codeImg},null,8,C),e("view",X,[e("view",T,[e("img",{src:s.gymData.logo},null,8,S),e("view",U,[e("text",y,a(s.gymData.name),1),e("text",x,a(s.gymData.brand),1)])]),e("view",Q,[e("text",null,"\u5730\u5740:"+a(s.gymData.address),1),e("text",null,"\u7535\u8BDD:"+a(s.gymData.phone),1)])])],512),B,e("div",A,"\u6D77\u62A5\u6A21\u677F\uFF08"+a(Number(s.pathIndex))+"\uFF09",1),e("div",J,[e("div",{class:"submit",onClick:o[0]||(o[0]=(...n)=>i.submit&&i.submit(...n))},"\u4E0B\u8F7D\u6D77\u62A5")])])])])}var k=r(b,[["render",R],["__scopeId","data-v-6d06b9ec"]]);export{k as default};
