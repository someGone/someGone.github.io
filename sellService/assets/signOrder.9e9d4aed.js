var N=Object.defineProperty;var V=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var O=(a,s,o)=>s in a?N(a,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[s]=o,P=(a,s)=>{for(var o in s||(s={}))j.call(s,o)&&O(a,o,s[o]);if(V)for(var o of V(s))E.call(s,o)&&O(a,o,s[o]);return a};import{N as Z}from"./hh-nav.93c5156f.js";import{h as R}from"./html2canvas.esm.3d083717.js";import{d as z,u as A}from"./aliOSS.fb2b2dcc.js";import{u as G}from"./index.18040514.js";import{_ as M,h as _,o as n,i,d as v,b as r,w as I,m as L,F as y,j as k,t as l,k as h,g as q,l as B,p as F,f as J,r as b,c as w,e as C}from"./index.d0ff2185.js";import"./_commonjsHelpers.88e99c8f.js";const K={components:{NavBar:Z},setup(){var a=0;const s=_(""),o=_(!1),t=_(-1),p=_("");var u=_([]);const x=()=>{history.back()},{proxy:g}=q(),S=_("0"),f=_(),T=!1,e=_([{name:"\u5065\u8EAB\u623F\u8BE6\u7EC6\u540D\u79F0",value:"",placeholder:"\u8BF7\u8F93\u5165\u5065\u8EAB\u623F\u540D\u79F0"},{name:"\u8054\u7CFB\u4EBA",value:"",placeholder:"\u8BF7\u8F93\u5165\u8054\u7CFB\u4EBA\u59D3\u540D"},{name:"\u7535\u8BDD",value:"",placeholder:"\u8BF7\u8F93\u5165\u8054\u7CFB\u4EBA\u7535\u8BDD"},{name:"\u8BE6\u7EC6\u5730\u5740",value:"",placeholder:"\u8BF7\u8F93\u5165\u5065\u8EAB\u623F\u8BE6\u7EC6\u5730\u5740"},{name:"\u8425\u4E1A\u6267\u7167\u7F16\u53F7",value:"",placeholder:"\u8BF7\u8F93\u5165\u5065\u8EAB\u623F\u8425\u4E1A\u6267\u7167\u7F16\u53F7"},{name:"\u7B7E\u7EA6\u65F6\u957F",value:"",placeholder:"\u8BF7\u8F93\u5165\u7B7E\u7EA6\u65F6\u957F",type:1,unit:"\u5E74"},{name:"\u7B7E\u5355\u91D1\u989D",value:"",placeholder:"\u8BF7\u8F93\u5165\u7B7E\u5355\u91D1\u989D",type:1,unit:"\u5143"},{name:"\u524D5\u4E2A\u6708\u5151\u6362\u7801\u6BCF\u6708\u8D60\u9001\u6570\u91CF",value:"",placeholder:"\u8BF7\u8F93\u5165\u8D60\u9001\u6570\u91CF",type:1,unit:"\u4E2A"}]),c=_([]),{toClipboard:m}=G();return{onClickLeft:x,gymId:0,stepIndex:a,orderInput:e,markInfo:s,canOrder:o,orderState:t,steps:u,orderImgBase64:p,proxy:g,hardwareList:c,orderTotalPrice:S,orderInfo:f,isReInputOrder:T,copy:async D=>{try{var H=await m(D);return H}catch(U){return console.error(U),!1}}}},data(){return{checkTimer:null}},mounted(){const{gymId:a}=P({},this.$route.query);this.gymId=a,this.getGymSignOrderData(),this.checkTimer=setInterval(()=>{var s=0;this.hardwareList.map(g=>{s+=g.unitPrice*g.count});let o=parseInt(this.orderInput[6].value==""?0:this.orderInput[6].value)+s;this.orderTotalPrice=o.toString();for(var t=!0,p=0;p<this.orderInput.length;p++){var u=this.orderInput[p];for(var x in u)x=="value"&&u[x]==""&&(t=!1)}this.canOrder=t},1e3)},unmounted(){clearInterval(this.checkTimer)},methods:{getGymSignOrderData(){this.proxy.$api.getGymSignOrder(this.gymId).then(a=>{this.orderInfo=a.data,this.orderState=a.data.state,this.orderInput[0].value=this.orderInfo.company_name,this.orderInput[1].value=this.orderInfo.contact_name,this.orderInput[2].value=this.orderInfo.contact_phone,this.orderInput[3].value=this.orderInfo.address,this.orderInput[4].value=this.orderInfo.license_no,this.orderInput[5].value=this.orderInfo.sign_duration,this.orderInput[6].value=parseInt(this.orderInfo.sign_price),this.orderInput[7].value=this.orderInfo.each_month_coupon_quantity,this.markInfo=a.data.remark,this.isReInputOrder=!1,this.hardwareList=this.orderInfo.products.map(s=>{var o={name:s.name,count:s.amount,unitPrice:s.unit_price};return o}),this.getStepData(),a.data.state>=3&&a.data.state<=5&&this.orderInfo.contract_img==null?setTimeout(()=>{this.onExport()},1500):this.orderImgBase64=this.orderInfo.contract_img}).catch(a=>{a.code==422&&(this.orderState=-1,this.getStepData(),this.getHardwareInfo())})},getStepData(){this.orderState==-1?(this.steps=["\u63D0\u62A5\u7B7E\u5355","\u5BA1\u6838\u4E2D","\u7B7E\u5408\u540C","\u6253\u6B3E"],this.stepIndex=0):this.orderState==1?(this.steps=["\u63D0\u62A5\u7B7E\u5355","\u5BA1\u6838\u4E2D","\u7B7E\u5408\u540C","\u6253\u6B3E"],this.stepIndex=1):this.orderState==2?(this.steps=["\u63D0\u62A5\u7B7E\u5355","\u5BA1\u6838\u672A\u901A\u8FC7","\u7B7E\u5408\u540C","\u6253\u6B3E"],this.stepIndex=1):this.orderState==3?(this.steps=["\u63D0\u62A5\u7B7E\u5355","\u5BA1\u6838\u901A\u8FC7","\u53D1\u9001\u5408\u540C","\u6253\u6B3E"],this.stepIndex=2):this.orderState==4?(this.steps=["\u63D0\u62A5\u7B7E\u5355","\u5BA1\u6838\u901A\u8FC7","\u53D1\u9001\u5408\u540C","\u6253\u6B3E"],this.stepIndex=2):this.orderState==5||this.orderState==6?(this.steps=["\u63D0\u62A5\u7B7E\u5355","\u5BA1\u6838\u901A\u8FC7","\u5408\u540C\u5B8C\u6210","\u7B49\u5F85\u6253\u6B3E"],this.stepIndex=3):this.orderState==7&&(this.steps=["\u63D0\u62A5\u7B7E\u5355","\u5BA1\u6838\u901A\u8FC7","\u5408\u540C\u5B8C\u6210","\u5DF2\u6253\u6B3E"],this.stepIndex=3)},getHardwareInfo(){this.proxy.$api.signOrderHardwarePrice().then(a=>{console.log("\u786C\u4EF6",a);var s=a.data;this.hardwareList=s.map(o=>{var t={name:o.name,count:0,unitPrice:o.unitPrice};return t})})},orderClick(){var a=!0;if(this.orderInput.map(t=>{t.value==""&&(a=!1)}),!a){this.$toast("\u8BF7\u5B8C\u5584\u4FE1\u606F\u540E\u518D\u63D0\u4EA4");return}if(this.isReInputOrder){this.updateSignOrder();return}var s=this.hardwareList.map(t=>({name:t.name,amount:parseInt(t.count),unitPrice:parseInt(t.unitPrice)})),o={companyName:this.orderInput[0].value,contactName:this.orderInput[1].value,contactPhone:this.orderInput[2].value,address:this.orderInput[3].value,licenseNo:this.orderInput[4].value,signDuration:parseInt(this.orderInput[5].value),signPrice:parseInt(this.orderInput[6].value),giftCouponMonth:5,eachMonthCouponQuantity:parseInt(this.orderInput[7].value),totalPrice:parseInt(this.orderTotalPrice),remark:this.markInfo,products:s};this.proxy.$api.createGymSignOrder(this.gymId,o).then(t=>{this.getGymSignOrderData()})},reInputClick(){this.$dialog.confirm({title:"\u7B7E\u5355",message:"\u8BF7\u786E\u5B9A\u662F\u5426\u91CD\u65B0\u586B\u62A5\u6B64\u95E8\u5E97\u7B7E\u5355?"}).then(()=>{this.stepIndex=0,this.orderState=-1,this.isReInputOrder=!0,this.steps=["\u63D0\u62A5\u7B7E\u5355","\u5BA1\u6838\u4E2D","\u7B7E\u5408\u540C","\u6253\u6B3E"]}).catch(()=>{})},updateSignOrder(){var a=this.hardwareList.map(o=>({name:o.name,amount:parseInt(o.count),unitPrice:parseInt(o.unitPrice)})),s={companyName:this.orderInput[0].value,contactName:this.orderInput[1].value,contactPhone:this.orderInput[2].value,address:this.orderInput[3].value,licenseNo:this.orderInput[4].value,signDuration:parseInt(this.orderInput[5].value),signPrice:parseInt(this.orderInput[6].value),giftCouponMonth:5,eachMonthCouponQuantity:parseInt(this.orderInput[7].value),totalPrice:parseInt(this.orderTotalPrice),remark:this.markInfo,products:a};this.proxy.$api.updateGymSignOrder(this.orderInfo.id,s).then(o=>{this.$toast("\u91CD\u65B0\u586B\u62A5\u7B7E\u5355\u6210\u529F"),this.getGymSignOrderData()})},onExport(){R(this.$refs.imageWrapper,{useCORS:!0,logging:!0}).then(a=>{const s=a.toDataURL("image/png");this.orderImgBase64=s,this.stepIndex=2,this.steps=["\u63D0\u62A5\u7B7E\u5355","\u5BA1\u6838\u901A\u8FC7","\u53D1\u9001\u5408\u540C","\u6253\u6B3E"];const o="exercise/gymSell/gymImgs/contractImg/"+this.orderInfo.id.toString()+".jpg";var t=z(s,o);A(o,t).then(p=>{console.log("\u4E0A\u4F20\u6210\u529F");var u={contractImg:"https://zkyk-gym.oss-cn-guangzhou.aliyuncs.com/"+o};this.proxy.$api.sendSignContract(this.orderInfo.id,u).then(x=>{this.getGymSignOrderData()})}).catch(p=>{console.log("\u4E0A\u4F20\u5931\u8D25",p)})})},sendElectronicContract(){var a={contractImg:this.orderInfo.contract_img};this.proxy.$api.sendSignContract(this.orderInfo.id,a).then(async s=>{const o=s.data,t="localhost:3000/contractSign?token="+o+`&id=${this.gymId}&orderId=${this.orderInfo.id}`;var p=await this.copy(t);p&&this.$toast("\u5408\u540C\u5730\u5740\u590D\u5236\u6210\u529F,\u8BF7\u5FAE\u4FE1\u53D1\u9001\u7ED9\u7B7E\u5408\u540C\u7684\u5BA2\u6237")})},sendOrderToOther(){this.proxy.$api.getShortToken(this.orderInfo.id).then(async a=>{const s=a.data;var o="https://gol.mynatapp.cc/pay?token="+s+`&gymId=${this.gymId}&orderId=${this.orderInfo.id}`,t=await this.copy(o);t&&this.$toast("\u8BA2\u5355\u5730\u5740\u590D\u5236\u6210\u529F,\u8BF7\u5FAE\u4FE1\u53D1\u9001\u7ED9\u7B7E\u5408\u540C\u7684\u5BA2\u6237")})},getAndInitJSSDKAndShare(a){this.proxy.$api.getJSSDKConfig().then(s=>{console.log(s.data.appId)}),wx.config({debug:!0,appId:"wx15d89d1b4bf9c60c",timestamp:"1618020077",nonceStr:"dwajndnkwajdwajnmmzxmoi",signature:"8fc64853bfbaf6b004560f6bff84e878edd1b9ec",jsApiList:["updateAppMessageShareData"]}),wx.ready(()=>{console.log("wx.ready"),wx.updateAppMessageShareData({title:"\u5408\u540C\u7B7E\u7F72",desc:"",link:"https://www.zkyunkang.com/",imgUrl:"",success:function(){}})}),wx.error(function(s){console.log("config fail123:",s)})}}},d=a=>(F("data-v-74a3e3f8"),a=a(),J(),a),Q={class:"mainPage van-safe-area-top"},W={class:"container"},X={key:0},Y={class:"mt20 ml20 mr20"},$={class:"norText w30"},tt={key:0,class:"justColumnEnd flex1"},et=d(()=>r("div",{class:"wLine",style:{"--z":"90%"}},null,-1)),st={key:1,class:"justColumnEnd"},rt=d(()=>r("div",{class:"wLine",style:{"--z":"90%"}},null,-1)),at={key:2},ot=B('<text class="regText ml20 mt20" style="--c:rgba(91, 143, 249, 1);" data-v-74a3e3f8>*\u7B7E\u5355\u6210\u529F\u540E\u7B2C\u4E00\u4E2A\u6708\u5151\u6362\u7801\u65E0\u9650\u91CF\u4F9B\u5E94</text><div class="marginV" style="--mH:16px;" data-v-74a3e3f8></div><div class="rowAround mtCustom" data-v-74a3e3f8><text class="norText w30" style="--fZ:14px;--c:rgba(102, 102, 102, 1);" data-v-74a3e3f8>\u786C\u4EF6\u540D\u79F0</text><text class="norText w30" style="--fZ:14px;--c:rgba(102, 102, 102, 1);" data-v-74a3e3f8>\u6570\u91CF/\u4E2A</text><text class="norText w30" style="--fZ:14px;--c:rgba(102, 102, 102, 1);" data-v-74a3e3f8>\u4EF7\u683C/\u5143</text></div>',3),nt={class:"regText w30",style:{"--fZ":"14px"}},it={key:0,class:"norText w30",style:{"--fZ":"14px"}},dt={key:2,class:"norText w30",style:{"--fZ":"14px"}},lt=d(()=>r("div",{class:"marginV",style:{"--mH":"16px"}},null,-1)),ct={class:"rowSpace ml20 mr20"},ht=d(()=>r("text",{class:"norText"},"\u603B\u91D1\u989D",-1)),ut={class:"bigText"},pt={class:"justRow ml20 mr20 mt20"},mt=d(()=>r("text",{class:"norText w30"},"\u5907\u6CE8",-1)),_t={class:"justColumnEnd flex1"},vt=d(()=>r("div",{class:"wLine",style:{"--z":"90%"}},null,-1)),gt={key:0},It=d(()=>r("div",{class:"marginV",style:{"--mH":"28px"}},null,-1)),xt=d(()=>r("text",{class:"bigText ml20",style:{"--c":"rgba(232, 102, 81, 1)"}},"\u5BA1\u6838\u672A\u901A\u8FC7\u539F\u56E0",-1)),ft=d(()=>r("div",{class:"marginV",style:{"--mH":"0px"}},null,-1)),yt={class:"regText ml20",style:{"--c":"rgba(232, 102, 81, 1)"}},kt={key:1,class:"oneCenter mtCustom",style:{"--z":"36px"}},St=C("\u5B8C\u6210\u5E76\u586B\u62A5"),bt={key:2,class:"oneCenter mtCustom",style:{"--z":"36px"}},wt=C("\u91CD\u65B0\u586B\u62A5"),Ct={key:1},Tt={class:"mt20 ml20 mr20"},Vt=d(()=>r("div",{class:"marginV",style:{"--mH":"24px"}},null,-1)),Ot=d(()=>r("text",{class:"bigText oneCenter"},"\u5408\u540C\u9884\u89C8",-1)),Pt=d(()=>r("div",{class:"marginV",style:{"--mH":"16px"}},null,-1)),Lt={class:"orderLookImgV"},Bt=["src"],Dt=d(()=>r("div",{class:"marginV",style:{"--mH":"60px"}},null,-1)),Ht={key:0,class:"bottomBtn"},Ut={key:2},Nt={class:"mt20 ml20 mr20"},jt={key:0},Et=d(()=>r("div",{class:"marginV",style:{"--mH":"24px"}},null,-1)),Zt=d(()=>r("text",{class:"oneCenter bigText"},"\u7B7E\u5355\u8BE6\u60C5",-1)),Rt=d(()=>r("div",{class:"marginV",style:{"--mH":"16px"}},null,-1)),zt=[Et,Zt,Rt],At={class:"regText w30",style:{"--c":"#1b1b1b"}},Gt={key:0,class:"justColumnEnd flex1"},Mt={class:"norText rowEnd",style:{"--c":"#1b1b1b"}},qt={key:1,class:"justColumnEnd flex1"},Ft={class:"norText rowEnd",style:{"--c":"#1b1b1b"}},Jt=B('<div class="marginV" style="--mH:16px;" data-v-74a3e3f8></div><div class="rowAround mtCustom" data-v-74a3e3f8><text class="norText w30 tInC" style="--fZ:14px;--c:rgba(102, 102, 102, 1);" data-v-74a3e3f8>\u786C\u4EF6\u540D\u79F0</text><text class="norText w30 tInC" style="--fZ:14px;--c:rgba(102, 102, 102, 1);" data-v-74a3e3f8>\u6570\u91CF/\u4E2A</text><text class="norText w30 tInC" style="--fZ:14px;--c:rgba(102, 102, 102, 1);" data-v-74a3e3f8>\u4EF7\u683C/\u5143</text></div>',2),Kt={class:"regText w30 tInC",style:{"--fZ":"14px"}},Qt={class:"norText w30 tInC",style:{"--fZ":"14px"}},Wt={class:"norText w30 tInC",style:{"--fZ":"14px"}},Xt=d(()=>r("div",{class:"marginV",style:{"--mH":"16px"}},null,-1)),Yt={class:"rowSpace ml20 mr20"},$t=d(()=>r("text",{class:"bigText"},"\u603B\u91D1\u989D",-1)),te={class:"bigText"},ee=d(()=>r("div",{class:"marginV borderInB",style:{"--mH":"16px"}},null,-1)),se={key:0,class:"bottomBtn"};function re(a,s,o,t,p,u){const x=b("nav-bar"),g=b("van-step"),S=b("van-steps"),f=b("van-field"),T=b("van-button");return n(),i("div",Q,[v(x,{text:"\u7B7E\u5355",onBlackclick:t.onClickLeft,isblack:!0,issearch:!1},null,8,["onBlackclick"]),r("div",W,[t.orderState<3||t.orderState==3&&t.orderImgBase64==""?(n(),i("div",X,[r("div",Y,[v(S,{active:t.stepIndex,"active-icon":t.orderState==2?"close":"passed","active-color":t.orderState==2?"rgba(255,0,0,1)":"rgba(91, 143, 249, 1)"},{default:I(()=>[(n(!0),i(y,null,k(t.steps,(e,c)=>(n(),w(g,{key:c},{default:I(()=>[C(l(e),1)]),_:2},1024))),128))]),_:1},8,["active","active-icon","active-color"])]),r("div",{class:L(t.orderState==2?"op4":""),ref:"imageWrapper"},[(n(!0),i(y,null,k(t.orderInput,(e,c)=>(n(),i("div",{key:c,class:"justRow ml20 mr20 mt20"},[r("text",$,l(e.name),1),e.type!=1?(n(),i("div",tt,[v(f,{modelValue:e.value,"onUpdate:modelValue":m=>e.value=m,placeholder:e.placeholder,disabled:t.orderState!=-1},null,8,["modelValue","onUpdate:modelValue","placeholder","disabled"]),et])):h("",!0),e.type==1?(n(),i("div",st,[v(f,{modelValue:e.value,"onUpdate:modelValue":m=>e.value=m,placeholder:e.placeholder,disabled:t.orderState!=-1},null,8,["modelValue","onUpdate:modelValue","placeholder","disabled"]),rt])):h("",!0),e.type==1?(n(),i("text",at,l(e.unit),1)):h("",!0)]))),128)),ot,(n(!0),i(y,null,k(t.hardwareList,(e,c)=>(n(),i("div",{class:"rowAround clearC",key:c},[r("text",nt,l(e.name),1),t.orderState!=-1?(n(),i("text",it,l(e.count),1)):(n(),w(f,{key:1,maxlength:"4",class:"hardwareCount",modelValue:e.count,"onUpdate:modelValue":m=>e.count=m,type:"number",required:"",placeholder:"\u8BF7\u8F93\u5165\u6570\u91CF"},null,8,["modelValue","onUpdate:modelValue"])),t.orderState!=-1?(n(),i("text",dt,l(e.unitPrice),1)):(n(),w(f,{key:3,maxlength:"8",class:"hardwareCount",modelValue:e.unitPrice,"onUpdate:modelValue":m=>e.unitPrice=m,type:"number",required:"",placeholder:"\u8BF7\u8F93\u5165\u6570\u91CF"},null,8,["modelValue","onUpdate:modelValue"]))]))),128)),lt,r("div",ct,[ht,r("text",ut,"\xA5 "+l(t.orderTotalPrice)+" \u5143",1)]),r("div",pt,[mt,r("div",_t,[v(f,{modelValue:t.markInfo,"onUpdate:modelValue":s[0]||(s[0]=e=>t.markInfo=e),placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8(\u9009\u586B)"},null,8,["modelValue"]),vt])])],2),t.orderState==2?(n(),i("div",gt,[It,xt,ft,r("text",yt,l(this.orderInfo.audit_reason),1)])):h("",!0),t.orderState==-1?(n(),i("div",kt,[v(T,{onClick:u.orderClick,class:L(t.canOrder?"submitBtn":"submitBtnDisabled")},{default:I(()=>[St]),_:1},8,["onClick","class"])])):h("",!0),t.orderState==2?(n(),i("div",bt,[v(T,{onClick:u.reInputClick,class:"submitBtn"},{default:I(()=>[wt]),_:1},8,["onClick"])])):h("",!0)])):h("",!0),t.orderState==4||t.orderState==5?(n(),i("div",Ct,[r("div",Tt,[v(S,{active:t.stepIndex,"active-icon":"passed","active-color":"rgba(91, 143, 249, 1)"},{default:I(()=>[(n(!0),i(y,null,k(t.steps,(e,c)=>(n(),w(g,{key:c},{default:I(()=>[C(l(e),1)]),_:2},1024))),128))]),_:1},8,["active"])]),Vt,Ot,Pt,r("div",Lt,[r("img",{src:t.orderImgBase64,class:"orderImg"},null,8,Bt)]),Dt,t.orderState!=5?(n(),i("div",Ht,[r("text",{class:"boBtn2",onClick:s[1]||(s[1]=(...e)=>u.sendElectronicContract&&u.sendElectronicContract(...e))},"\u53D1\u9001\u7535\u5B50\u5408\u540C")])):h("",!0)])):h("",!0),t.orderState>=5?(n(),i("div",Ut,[r("div",Nt,[v(S,{active:t.stepIndex,"active-icon":"passed","active-color":"rgba(91, 143, 249, 1)"},{default:I(()=>[(n(!0),i(y,null,k(t.steps,(e,c)=>(n(),w(g,{key:c},{default:I(()=>[C(l(e),1)]),_:2},1024))),128))]),_:1},8,["active"])]),t.orderState>=6?(n(),i("div",jt,zt)):h("",!0),(n(!0),i(y,null,k(t.orderInput,(e,c)=>(n(),i("div",{key:c,class:"justRow ml20 mr20 mt20"},[r("text",At,l(e.name),1),e.type!=1?(n(),i("div",Gt,[r("text",Mt,l(e.value),1)])):h("",!0),e.type==1?(n(),i("div",qt,[r("text",Ft,l(e.value+e.unit),1)])):h("",!0)]))),128)),Jt,(n(!0),i(y,null,k(t.hardwareList,(e,c)=>(n(),i("div",{class:"rowAround clearC",key:c},[r("text",Kt,l(e.name),1),r("text",Qt,l(e.count),1),r("text",Wt,l(e.unitPrice),1)]))),128)),Xt,r("div",Yt,[$t,r("text",te,"\xA5 "+l(t.orderTotalPrice)+" \u5143",1)]),ee])):h("",!0)]),t.orderState>5?(n(),i("div",se,[r("text",{class:"boBtn2",onClick:s[2]||(s[2]=(...e)=>u.sendOrderToOther&&u.sendOrderToOther(...e))},"\u53D1\u9001\u8BA2\u5355")])):h("",!0)])}var ue=M(K,[["render",re],["__scopeId","data-v-74a3e3f8"]]);export{ue as default};
