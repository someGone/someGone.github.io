import{x as C,j as P,y as S,z,e as w,D as F,E as _,L as T,G as N,_ as V,H as I,T as h,P as E,o as s,c as l,d as a,t as b,h as A,I as B,J as k,w as U,g as D,p as G,f as L,i as M}from"./index.2a5fd15a.js";import{_ as Q,a as R}from"./icon_sel_none.64f8cce2.js";import{_ as K}from"./icoo_successful.ceb6f77d.js";import{_ as X}from"./icoo_wechat_bg.44c5b8fd.js";const[Y,x]=C("switch"),J={size:F,loading:Boolean,disabled:Boolean,modelValue:_,activeColor:String,inactiveColor:String,activeValue:{type:_,default:!0},inactiveValue:{type:_,default:!1}};var j=P({name:Y,props:J,emits:["change","update:modelValue"],setup(e,{emit:i,slots:r}){const m=()=>e.modelValue===e.activeValue,n=()=>{if(!e.disabled&&!e.loading){const d=m()?e.inactiveValue:e.activeValue;i("update:modelValue",d),i("change",d)}},o=()=>{if(e.loading){const d=m()?e.activeColor:e.inactiveColor;return w(T,{class:x("loading"),color:d},null)}if(r.node)return r.node()};return S(()=>e.modelValue),()=>{var d;const{size:u,loading:t,disabled:v,activeColor:g,inactiveColor:f}=e,p=m(),y={fontSize:z(u),backgroundColor:p?g:f};return w("div",{role:"switch",class:x({on:p,loading:t,disabled:v}),style:y,tabindex:v?void 0:0,"aria-checked":p,onClick:n},[w("div",{class:x("node")},[o()]),(d=r.background)==null?void 0:d.call(r)])}}});const O=N(j);var H="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAcVJREFUSEvFljtPAkEQx/+zPK2MiQWFDYUxfAEjBdLZ2GLDQW9jIhTaWNJowZHY2BNopLWxUwqIX8AQCxsTKUiMlRyPG7OcXHgfD7Nccbns7Oxvdu6/s0NwfJjiuU6E2DwGKEzEu2Da6rkRfzHTG8AVJvFQPHeX5eCsJWmWUdONGIAMgD3HuKwJNQBXhZSvNG3+RGDy9idotkURhIM5QcPTGFXhMeP5s433Uf8xYDLbjprULQG0vRTMduKGYFcsn/Y8Da4zBLRg5iMA72ow27slWBwNQm1gL40dell9Z6OhckO4eb+fXhuoZY3K0v/MKR2MaiHtC/eELV9/arx38uvbCbiW3wxczusD4ESqlwAmTW+/Ajyv9NGFGQT8cKE1psLpAVCtkPKEKJ5rHxKbQ0pyitoCAi6IBYByayJKmm7I9Fw4QQbtywIB3JCmt54BjqgBUpkSOeOTGQEVQCLUKaG3mgz2TQJKNXZg3o3a6t/+DzkW2GzujNrcEKfT1EsgYw1A1SlVLhrlx0L5wVdX2lArpLyhdRRv6yQpvZ4kUPkF3IOqbDH6JUppE2VDVbaJg8XYaj0oM383QDWAF2+Eh2+A/231fwEapA/omZHppAAAAABJRU5ErkJggg==",Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAoCAYAAACfKfiZAAAAAXNSR0IArs4c6QAABEhJREFUWEetmF+IVGUYxp/nOzNn1n/tqmnSTYQZ5YVFF6KUQoiGRCqZhTujJkVh0e7M9t8L0UJKyj2zE3RhIro7swmmiCUohBcJIWh/DIsy66aiJUpbrXXnm5nzxBkXU3BnzpnZ73be5/l+33ve7/1ehoiwVngX2iZiwmpQSyTcB/BmAFbwz5Cmt5CO7wSoCJZg2OBkt10HKgugbTSNwF5D5o0f+663i7+F8Q4FkMyWNkH+ljCGIzFWhi/0d7o76mnqAiSzxScAfgipbuz1m7FshPl9Xe6pWhA1TVe9fb7VdcefBTm93klu+Dt5spB25zYMkPLsBkHvN7T5iKjim/v3vhj/fDSPmhlIesUjAB5qBoCkl0+7XQ0C2L8ATWkGAODpQsa9NzLAutzwzHKF55rbHBBQdtvcSbvXc/hGXqN+gvbtpQdp/GPNAgT6mOPesaeDP0UD6Ckvp185OBYAcDi/0OGeiASQytq1kvaMBYBxnGV9HbGPIwEkveI2AK+MBQChl/OZlncjAbR7wx8QfHpsAPBmPpPYFA0gazso9YwFgMjO/rSbiwSw5j3d7pdtcA1N0xCNFGGwadKzuwGtawaA5N582l0duREFglTO3qOKvm4GQNDM/kzLzw0BXMlC8SsAo7bS2nA8Xsi4Cxt+DatZ6C4tEP1PAbgRMzEkw4X9ne4XTQFUIbKlxZIOAJoYCoIYMD4fqTeMBF6hp5xUj+2UX50J6y4DZ2VfJnagbmAkgAgFaTU8dV9X6/kxBUjmNBsV+20Y04S9eNOuV6ddChMb/hN02/WidoUypbM8n44dChUbJiiZK85GhccA3RImXsBZp8Vd0LeBf9SLr5mBpTklJvul5yi9ASDcDfh/x99JbinG44V9z/Of0I1oVbfGuSouArFMNCsITbuRWIBIXik0aWqNk14mcFTE/riGPtmdmfz3tbFXM9Ces3NNhS8J/sMAxodI3bZ8JvFaENfu2e2ERp18r/GyoDls6G/q60ycudoHUtniVgmBWZSXb1Uhk/goMEn2lBbBr3bLsKsC4p1COvE6U9nySqlSNYq4Ts4adOdt3kw/6RWPAlgSUQ/SeYxJr7gfwKNRxdX0UXeVK2a8Y/RlY3pzkO1e8QcCd0Y34IVCOj71mR2I/TtkBwGMi+6Bc0EGLgKYFFlMHCmkE0sDXSprj0t6ILIHMMhk1pYhOQ2I3ypkEhurRehZD1A6ugdtAHAJCvnMXn+B1xTSifzINVxDqDcygDQQ1MBpAnOiiiV19Xe1eFWArH2K0s6oHgA/Yypb2ij5WxsQD4JYLB8k/cMjf1iFtyEGCLO22gmDEVxlO0/EHAh3Q5gF4jYAE+o4+gpuY63BhpTk/0maHyF9T+kbGnNi+Nb4qX2Ps1LzMXrSU1sxZmc4ZTMD8qfDcLKkKSRaJU4Er8yJkl8GzGVSgxAvEDovYwYcp/JLSzzx645nOTTaQf4DE26pENbMbUUAAAAASUVORK5CYII=";const W={setup(){const{proxy:e}=D();return{proxy:e}},data(){return{administrator:{},list:[],eidt:!1,show:!1,tenantId:0}},created(){this.tenantId=I.tenantId,this.mTraineePageApi(),this.proxy.$api.administrator().then(e=>{this.administrator=e.data}).catch(e=>{h({message:e.message,position:"top"})})},mounted(){},methods:{AddInvitation(){this.show=!0},isAdmin(e){this.proxy.$api.setAdmin({id:e.id}).then(i=>{h({message:"\u4FEE\u6539\u6210\u529F\uFF01",position:"top"}),this.mTraineePageApi()}).catch(i=>{h({message:i.message,position:"top"})})},del(){let e=[];this.list.forEach(i=>{i.check==!0&&e.push(i.id)}),this.proxy.$api.traineeBatchDelete(e).then(i=>{this.mTraineePageApi(),h({message:"\u5220\u9664\u6210\u529F\uFF01",position:"top"})}).catch(i=>{h({message:i.message,position:"top"})})},mTraineePageApi(){h.loading({forbidClick:!0});let e={pageNum:1,pageSize:10,tenantId:this.tenantId};this.proxy.$api.mTraineePage(e).then(i=>{this.list=[],i.data.list.forEach(r=>{r.check=!1,this.list.push(r)})}).catch(i=>{h({message:i.message,position:"top"})})},clickEidt(){this.eidt=!0},clickSel(e,i){this.eidt&&(this.list[i].check=!e.check)}}},c=e=>(G("data-v-1e9c8b53"),e=e(),L(),e),q={class:"login"},$={class:"loginBoxB"},ee={class:"blue_addBox"},ie=c(()=>a("span",null,"\u9080\u8BF7\u5458\u5DE5\u6CE8\u518C",-1)),ae=c(()=>a("img",{src:H,alt:"",class:"blue_add_icon"},null,-1)),te=[ie,ae],ne=c(()=>a("div",{class:"administratortitle"},"\u8D85\u7EA7\u7BA1\u7406\u5458",-1)),oe={class:"managerBox"},se=c(()=>a("img",{src:Z,alt:"",class:"blue_icon_man"},null,-1)),le={class:"adminName"},ce=c(()=>a("div",{class:"line"},null,-1)),de=c(()=>a("span",{class:"adminNameInfo"},"\u5E97\u957F",-1)),re={class:"allBox"},ge=c(()=>a("span",null,"\u6240\u6709\u4EBA\u5458",-1)),he=M(),ve={class:"listBoxB"},we={class:"listBox"},me=["onClick"],fe={key:0},be={key:0,src:Q,alt:"",class:"icon_sel"},ue={key:1,src:R,alt:"",class:"icon_sel"},pe={class:"nameBox"},_e={class:"name"},Ae={class:"roleNameBox"},xe={class:"mTraineePageRight"},Be=c(()=>a("div",{class:"mSpan"},"\u8BBE\u4E3A\u7BA1\u7406\u5458",-1)),ke={key:0,class:"closeBox"},ye={class:"wechat_bg"},Ce=c(()=>a("div",{class:"icoo_successfulBox"},[a("img",{src:K,alt:"",class:"icoo_successful"}),a("span",null,"\u94FE\u63A5\u5DF2\u590D\u5236")],-1)),Pe=c(()=>a("img",{src:X,alt:"",class:"icoo_wechat_bg"},null,-1));function Se(e,i,r,m,n,o){const d=O,u=E;return s(),l("div",q,[a("div",$,[a("div",ee,[a("div",{class:"blue_add",onClick:i[0]||(i[0]=(...t)=>o.AddInvitation&&o.AddInvitation(...t))},te)]),ne,a("div",oe,[se,a("span",le,b(n.administrator.adminName),1),ce,de]),a("div",re,[ge,he,n.eidt?A("",!0):(s(),l("span",{key:0,onClick:i[1]||(i[1]=(...t)=>o.clickEidt&&o.clickEidt(...t))},"\u7F16\u8F91"))]),a("div",ve,[a("div",we,[(s(!0),l(B,null,k(n.list,(t,v)=>(s(),l("div",{key:v,class:"mTraineePage"},[a("div",{class:"mTraineePageLeft",onClick:g=>o.clickSel(t,v)},[n.eidt?(s(),l("div",fe,[t.check?(s(),l("img",be)):(s(),l("img",ue))])):A("",!0),a("div",pe,[a("span",_e,b(t.name),1),a("div",Ae,[(s(!0),l(B,null,k(t.roleNameList,(g,f)=>(s(),l("span",{key:f,class:"roleName"},b(g)+b(f<t.roleNameList.length-1?"\u3001":""),1))),128))])])],8,me),a("div",xe,[Be,w(d,{modelValue:t.isAdmin,"onUpdate:modelValue":g=>t.isAdmin=g,size:"30px",onChange:g=>o.isAdmin(t)},null,8,["modelValue","onUpdate:modelValue","onChange"])])]))),128))])]),n.eidt?(s(),l("div",ke,[a("div",{class:"close",onClick:i[2]||(i[2]=t=>n.eidt=!1)},"\u53D6\u6D88"),a("div",{class:"del",onClick:i[3]||(i[3]=(...t)=>o.del&&o.del(...t))},"\u5220\u9664")])):A("",!0)]),w(u,{show:n.show,"onUpdate:show":i[5]||(i[5]=t=>n.show=t),position:"bottom",round:""},{default:U(()=>[a("div",ye,[Ce,Pe,a("div",{class:"close",onClick:i[4]||(i[4]=t=>n.show=!1)},"\u53D6\u6D88")])]),_:1},8,["show"])])}var Ve=V(W,[["render",Se],["__scopeId","data-v-1e9c8b53"]]);export{Ve as default};
