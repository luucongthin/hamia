(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{Mw6B:function(n,e,t){"use strict";t.r(e);var r={data:function(){return{number:34,number1:48,number2:50}}},u=t("KHd+"),a={data:function(){return{number1:196,number2:88,number3:25,number4:12,number5:590,number6:32}}},l={data:function(){return{number1:21}}},s={data:function(){return{number0:95,number1:21,number2:67,number3:2}}},m={data:function(){return{number0:5}}},o={data:function(){return{number0:1.5}}},i={data:function(){return{passengers:1}}},c={components:{NumberInputDefault:Object(u.a)(r,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("vx-card",{attrs:{title:"Default","code-toggler":""}},[t("p",[n._v("If you need to add a component that handles a single number, use the component "),t("code",[n._v("vs-input-number")])]),n._v(" "),t("p",[n._v("You can also change the increment and decrement button icons using the properties "),t("code",[n._v("icon-inc")]),n._v(" and "),t("code",[n._v("icon-dec")]),n._v(" respectively")]),n._v(" "),t("div",{staticClass:"demo-alignment"},[t("vs-input-number",{model:{value:n.number,callback:function(e){n.number=e},expression:"number"}}),n._v(" "),t("vs-input-number",{attrs:{disabled:!0},model:{value:n.number1,callback:function(e){n.number1=e},expression:"number1"}}),n._v(" "),t("vs-input-number",{attrs:{"icon-inc":"expand_less","icon-dec":"expand_more"},model:{value:n.number2,callback:function(e){n.number2=e},expression:"number2"}})],1),n._v(" "),t("template",{slot:"codeContainer"},[n._v('\n<template>\n  <div class="centerx">\n    <vs-input-number v-model="number"/>\n    <vs-input-number :disabled="true" v-model="number1"/>\n    <vs-input-number v-model="number2" icon-inc="expand_less" icon-dec="expand_more"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      number:34,\n      number1:48,\n      number2:50\n    }\n  }\n}\n<\/script>\n        ')])],2)}),[],!1,null,null,null).exports,NumberInputColor:Object(u.a)(a,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("vx-card",{attrs:{title:"Color","code-toggler":""}},[t("span",[n._v("You can change the color of the "),t("strong",[n._v("Input-Number")]),n._v(" with the property "),t("code",[n._v("color")]),n._v(". You are able to use the Main Colors or "),t("strong",[n._v("RGB")]),n._v(" and "),t("strong",[n._v("HEX")]),n._v(" colors.")]),n._v(" "),t("vs-alert",{staticClass:"mt-5",attrs:{icon:"warning",active:"true",color:"warning"}},[t("span",[n._v("Only "),t("strong",[n._v("RGB")]),n._v(" and "),t("strong",[n._v("HEX")]),n._v(" colors are supported.")])]),n._v(" "),t("div",{staticClass:"demo-alignment"},[t("vs-input-number",{attrs:{color:"danger"},model:{value:n.number1,callback:function(e){n.number1=e},expression:"number1"}}),n._v(" "),t("vs-input-number",{attrs:{color:"success"},model:{value:n.number2,callback:function(e){n.number2=e},expression:"number2"}}),n._v(" "),t("vs-input-number",{attrs:{color:"warning"},model:{value:n.number3,callback:function(e){n.number3=e},expression:"number3"}}),n._v(" "),t("vs-input-number",{attrs:{color:"dark"},model:{value:n.number4,callback:function(e){n.number4=e},expression:"number4"}}),n._v(" "),t("vs-input-number",{attrs:{color:"rgb(218, 24, 94)"},model:{value:n.number5,callback:function(e){n.number5=e},expression:"number5"}}),n._v(" "),t("vs-input-number",{attrs:{color:"#ad3af9"},model:{value:n.number6,callback:function(e){n.number6=e},expression:"number6"}})],1),n._v(" "),t("template",{slot:"codeContainer"},[n._v('\n<template>\n  <div class="centerx">\n    <vs-input-number color="danger" v-model="number1"/>\n    <vs-input-number color="success" v-model="number2"/>\n    <vs-input-number color="warning" v-model="number3"/>\n    <vs-input-number color="dark" v-model="number4"/>\n    <vs-input-number color="rgb(218, 24, 94)" v-model="number5"/>\n    <vs-input-number color="#ad3af9" v-model="number6"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      number1:196,\n      number2:88,\n      number3:25,\n      number4:12,\n      number5:590,\n      number6:32,\n    }\n  }\n}\n<\/script>\n        ')])],2)}),[],!1,null,null,null).exports,NumberInputMinMax:Object(u.a)(l,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("vx-card",{attrs:{title:"Min - Max","code-toggler":""}},[t("span",[n._v("You can restrict the maximum number or the minimum with the properties "),t("code",[n._v("min")]),n._v(", "),t("code",[n._v("max")])]),n._v(" "),t("div",{staticClass:"demo-alignment"},[t("vs-input-number",{attrs:{min:"13",max:"21"},model:{value:n.number1,callback:function(e){n.number1=e},expression:"number1"}})],1),n._v(" "),t("template",{slot:"codeContainer"},[n._v('\n<template>\n  <div class="centerx">\n    <vs-input-number min="13" max="21" v-model="number1"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      number1:21,\n    }\n  }\n}\n<\/script>\n        ')])],2)}),[],!1,null,null,null).exports,NumberInputSize:Object(u.a)(s,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("vx-card",{attrs:{title:"Size","code-toggler":""}},[t("span",[n._v("To change the size of the component, you can use the property "),t("code",[n._v("size")]),n._v(". The allowed values are: "),t("code",[n._v("medium")]),n._v(", "),t("code",[n._v("small")]),n._v(", and "),t("code",[n._v("mini")])]),n._v(" "),t("div",{staticClass:"demo-alignment"},[t("vs-input-number",{model:{value:n.number0,callback:function(e){n.number0=e},expression:"number0"}}),n._v(" "),t("vs-input-number",{attrs:{size:"medium"},model:{value:n.number1,callback:function(e){n.number1=e},expression:"number1"}}),n._v(" "),t("vs-input-number",{attrs:{size:"small"},model:{value:n.number2,callback:function(e){n.number2=e},expression:"number2"}}),n._v(" "),t("vs-input-number",{attrs:{size:"mini"},model:{value:n.number3,callback:function(e){n.number3=e},expression:"number3"}})],1),n._v(" "),t("template",{slot:"codeContainer"},[n._v('\n<template>\n  <div class="centerx">\n    <vs-input-number v-model="number0"/>\n    <vs-input-number size="medium" v-model="number1"/>\n    <vs-input-number size="small" v-model="number2"/>\n    <vs-input-number size="mini" v-model="number3"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      number0:95,\n      number1:21,\n      number2:67,\n      number3:2\n    }\n  }\n}\n<\/script>\n        ')])],2)}),[],!1,null,null,null).exports,NumberInputStep:Object(u.a)(m,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("vx-card",{attrs:{title:"Step","code-toggler":""}},[t("span",[n._v("To change the number to be added or decreased of the component, you can use the property "),t("code",[n._v("step")])]),n._v(" "),t("div",{staticClass:"demo-alignment"},[t("vs-input-number",{attrs:{step:5},model:{value:n.number0,callback:function(e){n.number0=e},expression:"number0"}})],1),n._v(" "),t("template",{slot:"codeContainer"},[n._v('\n<template>\n  <div class="centerx">\n    <vs-input-number v-model="number0" :step="5"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      number0:5,\n    }\n  }\n}\n<\/script>\n        ')])],2)}),[],!1,null,null,null).exports,NumberInputDecimal:Object(u.a)(o,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("vx-card",{attrs:{title:"Decimal","code-toggler":""}},[t("span",[n._v("Number Input also supports decimal values")]),n._v(" "),t("div",{staticClass:"demo-alignment"},[t("vs-input-number",{attrs:{step:.5},model:{value:n.number0,callback:function(e){n.number0=e},expression:"number0"}})],1),n._v(" "),t("template",{slot:"codeContainer"},[n._v('\n<template>\n  <div class="centerx">\n    <vs-input-number v-model="number0" :step="0.5"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      number0:1.5,\n    }\n  }\n}\n<\/script>\n        ')])],2)}),[],!1,null,null,null).exports,NumberInputLabel:Object(u.a)(i,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("vx-card",{attrs:{title:"Label","code-toggler":""}},[t("p",[n._v("Number Input supports adding labels for number inputs.")]),n._v(" "),t("div",{staticClass:"demo-alignment"},[t("vs-input-number",{attrs:{label:"passengers:"},model:{value:n.passengers,callback:function(e){n.passengers=e},expression:"passengers"}})],1),n._v(" "),t("template",{slot:"codeContainer"},[n._v('\n<template>\n  <div class="centerx">\n    <vs-input-number v-model="passengers" label="passengers:"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      passengers:1,\n    }\n  }\n}\n<\/script>\n        ')])],2)}),[],!1,null,null,null).exports}},b=Object(u.a)(c,(function(){var n=this.$createElement,e=this._self._c||n;return e("div",{attrs:{id:"form-element-number-input-demo"}},[e("number-input-default"),this._v(" "),e("number-input-color"),this._v(" "),e("number-input-min-max"),this._v(" "),e("number-input-size"),this._v(" "),e("number-input-step"),this._v(" "),e("number-input-decimal"),this._v(" "),e("number-input-label")],1)}),[],!1,null,null,null);e.default=b.exports}}]);