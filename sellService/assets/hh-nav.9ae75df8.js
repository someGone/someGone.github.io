import{_ as d,o as i,f as l,a as s,e as r,t as o}from"./index.3e93812c.js";var A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAgCAYAAAAffCjxAAAAAXNSR0IArs4c6QAAARpJREFUSEut1T1OxDAQBeA3pREdVGOXtFSIGiRaKLgGd+Cv5jZIiIYrcAEUgRBykZYuIYpR0BJl2SSemeDa/mRL854J/7TI6oQQjlJKdwCeY4wXJsh7fwLgHsBWd5G2bQ/V0F8EwHtVVfsqaAT5aJrmuCzLVzE0h3TPE0E5RARJkCwkRWYhDTIJaZFRyIJsQFZkDVqC9NBS5Adi5l0Ab0S0vWqCfuw1zUAhhL2U0stgyp+cc6dFUVQqqNvMzNdEdDM4+OicO9dgfdaY+ZaIrqzYWmiXYBvpt2KjNWLBJvtIi80WmwbLNqQUy0KrOcuOhgiSYGIoh6mgCewhxnimhsYw05f9m0Xv/SWALuhFXdcHphsNsJ0Y4yeAr2/ZIty1iI72kQAAAABJRU5ErkJggg==";const _={props:{text:{type:String,default:"\u9996\u9875"},isblack:{type:Boolean,default:!1},issearch:{type:Boolean,default:!0}},methods:{blackclick(){this.$emit("blackclick")},searchclick(){this.$emit("searchclick")}}},k={class:"nav-bar"},h={class:"title"},n={class:"blak"},m={class:"nav_title"},g={class:"search"};function v(u,e,t,f,B,a){return i(),l("div",k,[s("div",h,[s("div",n,[t.isblack?(i(),l("img",{key:0,class:"img",src:A,alt:"",onClick:e[0]||(e[0]=(...c)=>a.blackclick&&a.blackclick(...c))})):r("",!0)]),s("div",m,o(t.text),1),s("div",g,[t.issearch?(i(),l("img",{key:0,class:"img",src:A,alt:"",onClick:e[1]||(e[1]=(...c)=>a.searchclick&&a.searchclick(...c))})):r("",!0)])])])}var I=d(_,[["render",v],["__scopeId","data-v-a091c3a2"]]);export{I as N};
