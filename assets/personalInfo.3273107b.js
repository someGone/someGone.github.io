import{_ as h,T as d,o as m,c as u,d as a,e as g,w as v,u as w,g as _,p as x,f as B,U as F,C as y,F as b}from"./index.2a5fd15a.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import{_ as I}from"./upload.d4d89b0f.js";var C="./assets/avver.9c00fc21.png";const L={setup(){const{proxy:e}=_();return{proxy:e}},data(){return{fileList:[],liftList:[],message:"",feedBack:!1,portrait:"",coverList:[]}},created(){d.loading({message:"",forbidClick:!0}),this.proxy.$api.traineeInfo().then(e=>{let t=[];if(e.data.coverList.length>0){let l=e.data.coverList.split(",");this.coverList=e.data.coverList.split(","),l.forEach(s=>{t.push({url:s})}),this.liftList=t}this.fileList=[{url:e.data.photo}],this.message=e.data.selfIntroduction}).catch(e=>{d({message:e.message,position:"top"})})},mounted(){},methods:{afterRead(e){this.updata("trainer/photo",e.file,1)},afterReadLift(e){this.updata("gym/trainer/cover",e.file,2)},updata(e,t,l){let s=new FormData;s.append("dir",e),s.append("file",t),this.proxy.$api.commonUpload(s).then(i=>{l==1?this.portraitImg(i.data.url):this.coverListImg(i.data.url)}).catch(i=>{d({message:i.message,position:"top"})})},portraitImg(e){this.portrait=e},coverListImg(e){this.coverList.push(e)},submit(){if(this.portrait==""&&this.fileList.length==0){d({message:"\u8BF7\u4E0A\u4F20\u5934\u50CF\uFF01",position:"top"});return}let e={coverList:this.coverList.toString(),photo:this.portrait==""?this.fileList[0].url:this.portrait,selfIntroduction:this.message,traineeId:0};this.proxy.$api.wxLoginReplenish(e).then(t=>{d({message:"\u5DF2\u5B8C\u5584\u4E2A\u4EBA\u4FE1\u606F\uFF01",position:"top"}),this.$router.back()}).catch(t=>{d({message:t.message,position:"top"})})}}},n=e=>(x("data-v-9a45ad1e"),e=e(),B(),e),k={class:"login"},S={class:"loginBoxB"},P={class:"vanFieldBox"},R=n(()=>a("div",{class:"titleName"},[a("span",null,"\u4E2A\u4EBA\u5DE5\u4F5C\u7167\u5934\u50CF\uFF1A")],-1)),z=n(()=>a("img",{src:C,style:{width:"106px",height:"106px","border-radius":"50%"}},null,-1)),V={class:"vanFieldBox"},N=n(()=>a("div",{class:"titleName"},[a("span",null,"\u4E2A\u4EBA\u751F\u6D3B\u7167\uFF1A")],-1)),T=n(()=>a("img",{src:I,style:{width:"106px",height:"106px"}},null,-1)),U={class:"feedbackBox"},j=n(()=>a("div",{class:"feedBackTest"},"\u4E2A\u4EBA\u7B80\u4ECB:",-1)),E=n(()=>a("div",{class:"feedBackTestRed"}," \u5B66\u5458\u7AEF\u5C06\u6309\u7167\u60A8\u7684\u7B80\u4ECB\u683C\u5F0F\u5C55\u793A\uFF0C\u8BF7\u6CE8\u610F\u6392\u7248 ",-1)),G={class:"submitBox"};function A(e,t,l,s,i,r){const f=F,p=b,c=y;return m(),u("div",k,[a("div",S,[a("div",null,[a("div",P,[R,g(f,{modelValue:i.fileList,"onUpdate:modelValue":t[0]||(t[0]=o=>i.fileList=o),"preview-size":[106,106],class:"logoImg",multiple:"","max-count":1,"after-read":r.afterRead},{default:v(()=>[z]),_:1},8,["modelValue","after-read"])]),a("div",V,[N,g(f,{modelValue:i.liftList,"onUpdate:modelValue":t[1]||(t[1]=o=>i.liftList=o),"preview-size":[106,106],class:"lifeImg",multiple:"","max-count":5,"after-read":r.afterReadLift},{default:v(()=>[T]),_:1},8,["modelValue","after-read"])]),a("div",U,[j,E,g(c,{inset:"",class:"groupBox",style:w(i.feedBack?"border: 2px solid #40A9FF":"border: 2px solid #ffffff")},{default:v(()=>[g(p,{modelValue:i.message,"onUpdate:modelValue":t[2]||(t[2]=o=>i.message=o),autosize:"",type:"textarea",placeholder:"\u8BF7\u8F93\u5165\u4E2A\u4EBA\u7B80\u4ECB",maxlength:"50"},null,8,["modelValue"])]),_:1},8,["style"])]),a("div",G,[a("div",{class:"submit",onClick:t[3]||(t[3]=(...o)=>r.submit&&r.submit(...o))},"\u63D0\u4EA4")])])])])}var O=h(L,[["render",A],["__scopeId","data-v-9a45ad1e"]]);export{O as default};
