(function(e){function t(t){for(var n,c,s=t[0],l=t[1],i=t[2],v=0,f=[];v<s.length;v++)c=s[v],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(f.length)f.shift()();return a.push.apply(a,i||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,s=1;s<r.length;s++){var l=r[s];0!==o[l]&&(n=!1)}n&&(a.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={app:0},a=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/GradeCalculator/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var u=l;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-main",[r("HelloWorld")],1)],1)},a=[],c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("h4",[e._v("The score is "+e._s(e.average))])])],1),r("v-row",[r("v-col",{attrs:{cols:"2"}},[r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("p",[e._v("Name")])]),r("v-col",{attrs:{cols:"6"}},[r("p",[e._v("num")])])],1)],1),r("v-col",{attrs:{cols:"5"}},[r("p",[e._v("Score")])]),r("v-col",{attrs:{cols:"5"}},[r("p",[e._v("Weight")])])],1),e._l(e.scores,(function(t,n){return r("v-row",{key:n,attrs:{align:"center"}},[r("v-col",{attrs:{cols:"2"}},[r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("p",[e._v(e._s(t.name)+" (x "+e._s(t.numberOfItems)+")")])]),r("v-col",{attrs:{cols:"6"}},[r("v-text-field",{model:{value:t.numberOfItems,callback:function(r){e.$set(t,"numberOfItems",r)},expression:"item.numberOfItems"}})],1)],1)],1),r("v-col",{attrs:{cols:"5"}},[r("v-row",{attrs:{align:"center"}},[r("v-col",{attrs:{cols:"6"}},[r("v-slider",{attrs:{min:"0",max:t.max},model:{value:t.score,callback:function(r){e.$set(t,"score",r)},expression:"item.score"}})],1),r("v-col",{attrs:{cols:"3"}},[r("v-text-field",{attrs:{type:"number"},model:{value:t.score,callback:function(r){e.$set(t,"score",r)},expression:"item.score"}})],1),r("v-col",{attrs:{cols:"3"}},[e._v(e._s(Math.round(t.score/t.max*100))+"%")])],1)],1),r("v-col",{attrs:{cols:"5"}},[r("v-row",{staticClass:"align-center"},[r("v-col",{attrs:{cols:"9"}},[r("v-slider",{attrs:{min:"0",max:"100"},model:{value:t.weight,callback:function(r){e.$set(t,"weight",r)},expression:"item.weight"}})],1),r("v-col",{attrs:{cols:"3"}},[r("v-text-field",{attrs:{type:"number"},model:{value:t.weight,callback:function(r){e.$set(t,"weight",r)},expression:"item.weight"}})],1)],1)],1)],1)})),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("h4",[e._v("The score is "+e._s(e.average))])])],1)],2)},s=[],l=(r("d3b7"),r("159b"),r("99af"),r("b0c0"),{name:"HelloWorld",data:function(){return{elevation:1,scores:[{name:"Quiz",score:8,max:10,weight:10,numberOfItems:22},{name:"Inception Report",score:9.23,max:15,weight:15,numberOfItems:1},{name:"Project Management Plan",score:10,max:15,weight:15,numberOfItems:1},{name:"Design Plan",score:10,max:15,weight:15,numberOfItems:1},{name:"Final",score:23,max:40,weight:40,numberOfItems:1}]}},computed:{average:function(){var e=0,t=0;return this.scores.forEach((function(r){t+=r.weight*r.numberOfItems;var n=r.score/r.max*100;console.log("The average for ".concat(r.name," is ").concat(n)),e+=n*r.weight*r.numberOfItems})),e/t}}}),i=l,u=r("2877"),v=r("6544"),f=r.n(v),m=r("62ad"),p=r("a523"),d=r("0fd9"),b=r("ba0d"),h=r("8654"),g=Object(u["a"])(i,c,s,!1,null,null,null),w=g.exports;f()(g,{VCol:m["a"],VContainer:p["a"],VRow:d["a"],VSlider:b["a"],VTextField:h["a"]});var x={name:"App",components:{HelloWorld:w},data:function(){return{}}},O=x,_=r("7496"),y=r("f6c4"),j=Object(u["a"])(O,o,a,!1,null,null,null),I=j.exports;f()(j,{VApp:_["a"],VMain:y["a"]});var P=r("f309");n["a"].use(P["a"]);var k=new P["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:k,render:function(e){return e(I)}}).$mount("#app")}});
//# sourceMappingURL=app.e764c1cb.js.map