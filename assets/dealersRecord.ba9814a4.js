import{_ as u,a0 as m,T as c,a1 as w,a2 as p,P as b,o as d,c as l,d as t,t as v,I as _,J as x,e as P,w as y,g as B,p as S,f as C}from"./index.2a5fd15a.js";import{_ as k}from"./mdgl_icon_tuichu@2x.7436a5f8.js";import{_ as T}from"./white_xia.0ac18e8a.js";const F={setup(){const{proxy:i}=B();return{proxy:i}},data(){return{logOutShow:!1,list:[],userName:""}},created(){if(!m){this.$router.replace("/dealersLogin");return}c.loading({message:"",forbidClick:!0}),this.userName=w.name;let i={distributorId:w.distributorId,pageNum:1,pageSize:99999};this.proxy.$api.distributordIstributor(i).then(e=>{let g=[];e.data.list.forEach(r=>{r.createTime=r.createTime.substr(0,10),g.push(r)}),this.list=g}).catch(e=>{c({message:e.message,position:"top"})})},mounted(){},methods:{lookInvitation(){this.$router.push("/invitation")},clickDetail(i,e){this.$router.push({path:"/dealersDetail",query:{data:JSON.stringify(i)}})},LogOut(){p(),this.$router.replace("/dealersLogin")}}},n=i=>(S("data-v-7057bd86"),i=i(),C(),i),I={class:"login"},N={class:"loginBoxB"},z={class:"Top"},L=n(()=>t("div",{class:"logoL"},null,-1)),R={class:"logoR"},O={class:"managerBox"},D=n(()=>t("div",{class:"adminName"},"\u6211\u7684\u4E13\u5C5E\u9080\u8BF7\u9875",-1)),j=n(()=>t("div",{class:"allBox"},[t("span",null,"\u6211\u7684\u9080\u8BF7\u8BB0\u5F55")],-1)),E={class:"listBoxB"},J={key:0,class:"noData"},M={key:1,class:"listBox"},V={class:"mTraineePageLeft"},q={class:"name"},U={class:"roleNameBox"},A=["onClick"],G=n(()=>t("span",null,"\u8BE6\u60C5",-1)),H=n(()=>t("img",{src:T,alt:"",class:"white_xia"},null,-1)),K=[G,H],Q={class:"infoPop"},W=n(()=>t("div",{class:"title"},"\u9000\u51FA\u767B\u5F55",-1)),X={class:"saveBox"};function Y(i,e,g,r,o,s){const h=b;return d(),l("div",I,[t("div",N,[t("div",z,[L,t("div",R,[t("div",null,v(o.userName),1),t("img",{src:k,alt:"",class:"mdgl_icon_tuichu",onClick:e[0]||(e[0]=a=>o.logOutShow=!0)})])]),t("div",O,[D,t("div",{class:"adminNameInfo",onClick:e[1]||(e[1]=(...a)=>s.lookInvitation&&s.lookInvitation(...a))},"\u70B9\u51FB\u67E5\u770B")]),j,t("div",E,[o.list.length==0?(d(),l("text",J,"\u6682\u65E0\u8BB0\u5F55")):(d(),l("div",M,[(d(!0),l(_,null,x(o.list,(a,f)=>(d(),l("div",{key:f,class:"mTraineePage"},[t("div",V,[t("span",q,v(a.name),1),t("span",U,v(a.createTime),1)]),t("div",{class:"white_xiaBox",onClick:Z=>s.clickDetail(a,f)},K,8,A)]))),128))]))])]),P(h,{show:o.logOutShow,"onUpdate:show":e[4]||(e[4]=a=>o.logOutShow=a),round:"","close-on-click-overlay":!1},{default:y(()=>[t("div",Q,[W,t("div",X,[t("div",{class:"save",onClick:e[2]||(e[2]=(...a)=>s.LogOut&&s.LogOut(...a))},"\u786E\u8BA4"),t("div",{class:"updataInfo",onClick:e[3]||(e[3]=a=>o.logOutShow=!1)},"\u53D6\u6D88")])])]),_:1},8,["show"])])}var at=u(F,[["render",Y],["__scopeId","data-v-7057bd86"]]);export{at as default};
