(function(t){function e(e){for(var a,o,u=e[0],s=e[1],l=e[2],d=0,p=[];d<u.length;d++)o=u[d],i[o]&&p.push(i[o][0]),i[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);c&&c(e);while(p.length)p.shift()();return n.push.apply(n,l||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],a=!0,u=1;u<r.length;u++){var s=r[u];0!==i[s]&&(a=!1)}a&&(n.splice(e--,1),t=o(o.s=r[0]))}return t}var a={},i={app:0},n=[];function o(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=a,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(r,a,function(e){return t[e]}.bind(null,a));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var c=s;n.push(["e35a","chunk-vendors"]),r()})({"0b1a":function(t,e,r){},"26fe":function(t,e,r){"use strict";var a=r("b793"),i=r.n(a);i.a},"2af5":function(t,e,r){},"35c8":function(t,e,r){"use strict";var a=r("eb64"),i=r.n(a);i.a},"3cd7":function(t,e,r){"use strict";var a=r("2af5"),i=r.n(a);i.a},"57c6":function(t,e,r){"use strict";var a=r("e573"),i=r.n(a);i.a},"7a14":function(t,e,r){"use strict";var a=r("9040"),i=r.n(a);i.a},8164:function(t,e,r){"use strict";var a=r("9d9f"),i=r.n(a);i.a},9040:function(t,e,r){},9951:function(t,e,r){"use strict";var a=r("f8c0"),i=r.n(a);i.a},"9d9f":function(t,e,r){},b793:function(t,e,r){},d1d2:function(t,e,r){"use strict";var a=r("0b1a"),i=r.n(a);i.a},e35a:function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("097d");var a=r("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[t._m(0),r("div",{staticClass:"tab-content",attrs:{id:"myTabContent"}},[r("div",{staticClass:"tab-pane show active",attrs:{id:"vue-slider-tab",role:"tabpanel","aria-labelledby":"profile-tab"}},[r("component-fixture",{scopedSlots:t._u([{key:"control",fn:function(e){return r("Editor",t._b({},"Editor",e,!1))}}])},[r("vue-slider")],1)],1),r("div",{staticClass:"tab-pane fade",attrs:{id:"sunburst-tab",role:"tabpanel","aria-labelledby":"home-tab"}},[r("component-fixture",{scopedSlots:t._u([{key:"control",fn:function(e){return r("Editor",t._b({},"Editor",e,!1))}}])},[r("sunburst")],1)],1),r("div",{staticClass:"tab-pane fade",attrs:{id:"tree-tab",role:"tabpanel","aria-labelledby":"profile-tab"}},[r("component-fixture",{scopedSlots:t._u([{key:"control",fn:function(e){return r("Editor",t._b({},"Editor",e,!1))}}])},[r("tree")],1)],1)])])},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"nav nav-tabs",attrs:{role:"tablist"}},[r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link active",attrs:{"data-toggle":"tab",href:"#vue-slider-tab",role:"tab","aria-controls":"profile","aria-selected":"true"}},[t._v("Vue Slider Component")])]),r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",attrs:{"data-toggle":"tab",href:"#sunburst-tab",role:"tab","aria-controls":"home","aria-selected":"false"}},[t._v("Sunburst")])]),r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",attrs:{"data-toggle":"tab",href:"#tree-tab",role:"tab","aria-controls":"profile","aria-selected":"false"}},[t._v("D3tree")])])])}],o=(r("456d"),r("ac6a"),r("7f7f"),r("a322")),u=r("9393");r("6b54"),r("4917"),r("c5f6");function s(t){return""===t?null:/^(-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/.test(t)?Number(t):NaN}function l(t){if("undefined"!==t)return"null"===t?null:JSON.parse(t)}function c(t){return void 0===t?"undefined":null===t?"null":JSON.stringify(t)}function d(t){var e=eval.call(null,"(".concat(t,")"));if("function"!==typeof e)throw new Error("unable to convert string into function");return e}function p(t){return null===t||void 0===t?["Object","Array","String","Number","Boolean"]:"boolean"===typeof t?["Boolean"]:"string"===typeof t?["String"]:"function"===typeof t?["Function"]:Array.isArray(t)?["Array"]:isNaN(t)?["Object"]:["Number"]}var f=Object.prototype.hasOwnProperty;function b(t,e){return f.call(t,e)}function v(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function m(t,e,r){if(b(e,"default")){var a=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[r]&&void 0!==t._props[r]?t._props[r]:"function"===typeof a&&"Function"!==v(e.type)?a.call(t):a}}function h(t,e,r){var a=m(t,e,r);return void 0!==a?a:e.required?e.type?e.type():{}:void 0}function y(t,e){if(t.type){var r=Array.isArray(t.type)?t.type:[t.type];return r.map(v)}return p(e)}function _(t,e){var r=void 0===e||null===e;if(t.required&&r)return{ok:!1,message:"Prop is required"};if(null===e&&!t.required)return{ok:!0};var a=t.validator;return!a||a(e)?{ok:!0}:{ok:!1,message:"Invalid prop: custom validator check failed"}}var j,g,x={event:"input",prop:"value"},O={name:"ComponentFixture",renderError:function(t,e){return t("pre",{style:{color:"red"}},e.stack)},render:function(t){var e=this.$slots.default;if(!e||1!==e.length)throw new Error("ComponentFixture should have one unique default slot");var r=Object(u["a"])(e,1),a=r[0];if(0===this.__stage)return t("div",{},[a]);var i=this.$scopedSlots.control,n=a.componentOptions.Ctor,s=this.dynamicAttributes,l=this.componentName,c=this.componentModel,d=this.propsDefinition,p=c.event,f=c.prop,b={props:s,ref:"cut"};return s.hasOwnProperty(f)&&(b.on=Object(o["a"])({},p,function(t){s[f]=t})),i?t("div",{class:{main:!0}},[t("div",{class:{control:!0}},[i({attributes:this.dynamicAttributes,componentName:l,propsDefinition:d})]),t("div",{class:{component:!0}},[t(n,b,[])])]):t(n,b,[])},mounted:function(){if(1===this.$children.length){this.__stage=1;var t=Object(u["a"])(this.$children,1),e=t[0],r=e.$options,i=r.props,n=r.name,o=r.model;this.componentName=n,this.componentModel=o||x;var s=this.dynamicAttributes,l=this.propsDefinition;Object.keys(i).forEach(function(t){var r=i[t],n=h(e,r,t);a["a"].set(s,t,n),a["a"].set(l,t,{definition:r,types:y(r,n),validate:_.bind(null,r)})}),this.$forceUpdate()}},updated:function(){var t=this;1===this.__stage&&(this.__stage=2,this.$nextTick(function(){var e=t.$refs.cut.$emit,r=function(r){for(var a=arguments.length,i=new Array(a>1?a-1:0),n=1;n<a;n++)i[n-1]=arguments[n];t.events.push({name:r,args:i}),e.call.apply(e,[t.$refs.cut,r].concat(i))};t.$refs.cut.$emit=r}))},data:function(){return this.__stage=0,{componentName:null,dynamicAttributes:{},propsDefinition:{},events:[]}}},E=O,A=(r("d1d2"),r("2877")),V=Object(A["a"])(E,j,g,!1,null,null,null);V.options.__file="ComponentFixture.vue";var C=V.exports,k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"editor"},[r("h1",[t._v(t._s(t.componentName))]),r("form",t._l(t.attributes,function(e,a){return r("attributeEditor",{key:a,attrs:{object:t.attributes,attribute:a,metaData:t.propsDefinition[a]}})}))])},w=[],N=(r("f9e3"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-sm-4 col-form-label",attrs:{for:"attribute-"+t.attribute}},[t._v(t._s(t.attribute))]),r("div",{directives:[{name:"tooltip",rawName:"v-tooltip",value:{content:t.type,placement:"top",offset:-5},expression:"{content:type, placement: 'top', offset: -5}"}],staticClass:"col-sm-2 col-form-label"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],staticClass:"form-control form-control-sm",attrs:{disabled:1===t.types.length},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.type=e.target.multiple?r:r[0]}}},t._l(t.avalaibleTypes,function(e){return r("option",{key:e.value,domProps:{value:e.value}},[t._v(t._s(e.display))])}))]),r("div",{staticClass:"col-sm-6"},["Boolean"===t.type?r("input",{directives:[{name:"model",rawName:"v-model",value:t.object[t.attribute],expression:"object[attribute]"}],staticClass:"checkbox control-input",attrs:{id:"attribute-"+t.attribute,type:"checkbox"},domProps:{checked:Array.isArray(t.object[t.attribute])?t._i(t.object[t.attribute],null)>-1:t.object[t.attribute]},on:{change:function(e){var r=t.object[t.attribute],a=e.target,i=!!a.checked;if(Array.isArray(r)){var n=null,o=t._i(r,n);a.checked?o<0&&t.$set(t.object,t.attribute,r.concat([n])):o>-1&&t.$set(t.object,t.attribute,r.slice(0,o).concat(r.slice(o+1)))}else t.$set(t.object,t.attribute,i)}}}):"Number"===t.type?r("numberAttributeEditor",t._b({},"numberAttributeEditor",{object:t.object,attribute:t.attribute,metaData:t.metaData,value:t.object[t.attribute]},!1)):"String"===t.type?r("stringAttributeEditor",t._b({},"stringAttributeEditor",{object:t.object,attribute:t.attribute,metaData:t.metaData,value:t.object[t.attribute]},!1)):"Function"===t.type?r("functionAttributeEditor",t._b({},"functionAttributeEditor",{object:t.object,attribute:t.attribute,metaData:t.metaData},!1)):r("jsonAttributeEditor",t._b({},"jsonAttributeEditor",{object:t.object,attribute:t.attribute,metaData:t.metaData,types:t.types,value:t.object[t.attribute]},!1))],1)])}),D=[],S=(r("7514"),r("e37d")),$=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.textValue,expression:"textValue"}],staticClass:"form-control",class:{"is-invalid":!t.valid},attrs:{id:"attribute-"+t.attribute},domProps:{value:t.textValue},on:{input:function(e){e.target.composing||(t.textValue=e.target.value)}}}),r("div",{staticClass:"invalid-feedback"},[t._v("\n    "+t._s(t.error)+"\n  ")])])},q=[],P={props:{attribute:{required:!1,type:String},metaData:{required:!0,type:Object},object:{required:!0,type:Object},types:{required:!0,type:Array},value:{type:[Object,Array]}},data:function(){return{textValue:"",error:null}},watch:{textValue:function(t){var e=this;try{var r=l(t),a=p(r),i=a.find(function(t){return e.types.find(function(e){return e===t})});if(!i)return void(this.error="types: ".concat(a," not compatible with ").concat(this.types));var n=this.metaData.validate(r);if(!n.ok)return void(this.error=n.message);this.object[this.attribute]=r,this.error=null}catch(t){this.error="Unable to convert JSON data"}},value:{handler:function(t){this.textValue=c(t),this.error=null},immediate:!0}},computed:{valid:function(){return null===this.error}}},F=P,T=(r("3cd7"),Object(A["a"])(F,$,q,!1,null,"47b9bbc7",null));T.options.__file="JsonAttributeEditor.vue";var J=T.exports,M=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.textValue,expression:"textValue"}],staticClass:"form-control",class:{"is-invalid":!t.valid},attrs:{id:"attribute-"+t.attribute},domProps:{value:t.textValue},on:{input:function(e){e.target.composing||(t.textValue=e.target.value)}}}),r("div",{staticClass:"invalid-feedback"},[t._v("\n    "+t._s(t.error)+"\n  ")])])},B=[],I={props:{attribute:{required:!0,type:String},metaData:{required:!0,type:Object},object:{required:!0,type:Object}},data:function(){var t=this.object[this.attribute];return{textValue:t,error:null,functionValue:this.object[this.attribute]}},watch:{textValue:function(t){try{var e=d(t),r=this.metaData.validate(e);if(!r.ok)return void(this.error=r.message);this.functionValue=e,this.object[this.attribute]=e,this.error=null}catch(t){this.error="Provide a valid function"}}},computed:{valid:function(){return null===this.error}}},U=I,z=(r("26fe"),Object(A["a"])(U,M,B,!1,null,"096f1ee6",null));z.options.__file="FunctionAttributeEditor.vue";var G=z.exports,H=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.textValue,expression:"textValue"}],staticClass:"form-control",class:{"is-invalid":!t.valid},attrs:{id:"attribute-"+t.attribute},domProps:{value:t.textValue},on:{input:function(e){e.target.composing||(t.textValue=e.target.value)}}}),r("div",{staticClass:"invalid-feedback"},[t._v("\n    "+t._s(t.error)+"\n  ")])])},K=[],L={props:{object:{required:!0,type:Object},attribute:{required:!0,type:String},metaData:{required:!0,type:Object},value:{required:!1,type:Number}},data:function(){var t=this.object[this.attribute];return{textValue:t,error:null,NumberValue:t}},watch:{textValue:function(t){var e=s(t);if(isNaN(e))this.error="Provide a valid number";else{var r=this.metaData.validate(e);r.ok?(this.NumberValue=e,this.object[this.attribute]=e,this.error=null):this.error=r.message}},value:{handler:function(t){this.NumberValue=t,this.error=null,s(this.textValue)!=t&&(this.textValue=t)}}},computed:{valid:function(){return null===this.error}}},Q=L,R=(r("57c6"),Object(A["a"])(Q,H,K,!1,null,"9715e760",null));R.options.__file="NumberAttributeEditor.vue";var W=R.exports,X=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.textValue,expression:"textValue"}],staticClass:"form-control",class:{"is-invalid":!t.valid},attrs:{id:"attribute-"+t.attribute},domProps:{value:t.textValue},on:{input:function(e){e.target.composing||(t.textValue=e.target.value)}}}),r("div",{staticClass:"invalid-feedback"},[t._v("\n    "+t._s(t.error)+"\n  ")])])},Y=[],Z={props:{object:{required:!0,type:Object},attribute:{required:!0,type:String},metaData:{required:!0,type:Object},value:{required:!1,type:String}},data:function(){var t=this.object[this.attribute];return{textValue:t,error:null}},watch:{textValue:function(t){var e=this.metaData.validate(t);e.ok?(this.object[this.attribute]=t,this.error=null):this.error=e.message},value:function(t){this.textValue=t,this.error=null}},computed:{valid:function(){return null===this.error}}},tt=Z,et=(r("7a14"),Object(A["a"])(tt,X,Y,!1,null,"43b126d5",null));et.options.__file="StringAttributeEditor.vue";var rt=et.exports,at=[{display:"{}",value:"Object"},{display:"[]",value:"Array"},{display:"Π",value:"Number"},{display:'""',value:"String"},{display:"&&",value:"Boolean"},{display:"=>",value:"Function"}];function it(t,e){if(1===t.length)return t[0];var r=p(e);return t.find(function(t){return-1!==r.indexOf(t)})}var nt={directives:{tooltip:S["a"]},components:{jsonAttributeEditor:J,functionAttributeEditor:G,numberAttributeEditor:W,stringAttributeEditor:rt},props:{object:{required:!0,type:Object},metaData:{required:!0,type:Object},attribute:{required:!0,type:String}},data:function(){var t=this.metaData.types,e=it(t,this.object[this.attribute]);return{type:e}},computed:{types:function(){return this.metaData.types},avalaibleTypes:function(){var t=this;return at.filter(function(e){return-1!==t.types.indexOf(e.value)})}}},ot=nt,ut=(r("35c8"),Object(A["a"])(ot,N,D,!1,null,null,null));ut.options.__file="AttributeEditor.vue";var st=ut.exports,lt={components:{attributeEditor:st},props:{attributes:{required:!0,type:Object},componentName:{required:!0,type:String},propsDefinition:{required:!0,type:Object}}},ct=lt,dt=(r("8164"),Object(A["a"])(ct,k,w,!1,null,null,null));dt.options.__file="Editor.vue";var pt=dt.exports,ft=r("74cc"),bt=r("4449"),vt=r("6f79"),mt=r.n(vt),ht=(r("59c2"),{name:"app",components:{ComponentFixture:C,Editor:pt,sunburst:bt["sunburst"],tree:ft["tree"],vueSlider:mt.a}}),yt=ht,_t=(r("9951"),Object(A["a"])(yt,i,n,!1,null,null,null));_t.options.__file="App.vue";var jt=_t.exports;r("4989"),a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(jt)}}).$mount("#app")},e573:function(t,e,r){},eb64:function(t,e,r){},f8c0:function(t,e,r){}});
//# sourceMappingURL=app-legacy.65add30a.js.map