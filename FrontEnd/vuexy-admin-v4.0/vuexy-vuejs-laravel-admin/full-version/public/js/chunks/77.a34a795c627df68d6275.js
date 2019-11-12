(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{sTaK:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{text:"Copy Me!"}},methods:{onCopy:function(){this.$vs.notify({title:"Success!",text:"Text copied successfully.",color:"success",iconPack:"feather",position:"top-center",icon:"icon-check-circle"})},onError:function(){this.$vs.notify({title:"Failed!",text:"Error in copying text.",color:"danger",iconPack:"feather",position:"top-center",icon:"icon-alert-circle"})}}},c=n("KHd+"),i={data:function(){return{text2:"Copy Me Without Directive!"}},methods:{copyText:function(){var t=this;this.$copyText(this.text2).then((function(){t.$vs.notify({title:"Success!",text:"Text copied successfully.",color:"success",iconPack:"feather",position:"top-center",icon:"icon-check-circle"})}),(function(){t.$vs.notify({title:"Failed!",text:"Error in copying text.",color:"danger",iconPack:"feather",position:"top-center",icon:"icon-alert-circle"})}))}}},r={components:{ClipboardDirective:Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vx-card",{attrs:{title:"Using Directive",subtitle:"Use directive on button to copy text.","code-toggler":""}},[n("vs-input",{staticClass:"inline-flex mb-2 mr-2",model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),t._v(" "),n("vs-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.text,expression:"text",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}]},[t._v("\n\t\t\tCopy!\n\t\t")]),t._v(" "),n("template",{slot:"codeContainer"},[t._v("\n<template>\n    <vs-input v-model=\"text\" class=\"inline-flex\" />\n    <vs-button\n        v-clipboard:copy=\"text\"\n        v-clipboard:success=\"onCopy\"\n        v-clipboard:error=\"onError\">\n        Copy!\n    </vs-button>\n</template>\n\n<script>\nexport default {\n    data() {\n        return {\n            text: 'Copy Me!',\n        }\n    },\n    methods: {\n        onCopy() {\n            this.$vs.notify({\n                title: 'Success!',\n                text: 'Text copied successfully.',\n                color: 'success',\n                iconPack: 'feather',\n                position: 'top-center',\n                icon: 'icon-check-circle'\n            })\n        },\n        onError() {\n            this.$vs.notify({\n                title: 'Failed!',\n                text: 'Error in copying text.',\n                color: 'danger',\n                iconPack: 'feather',\n                position: 'top-center',\n                icon: 'icon-alert-circle'\n            })\n        },\n    }\n}\n<\/script>\n\t\t")])],2)}),[],!1,null,null,null).exports,ClipboardWithoutDirective:Object(c.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vx-card",{attrs:{title:"Without directive",subtitle:"You can copy text without a specific button. Use $copyText to copy text when event got fired.","code-toggler":""}},[n("vs-input",{staticClass:"inline-flex mb-2 mr-2",model:{value:t.text2,callback:function(e){t.text2=e},expression:"text2"}}),t._v(" "),n("vs-button",{on:{click:t.copyText}},[t._v("Copy!")]),t._v(" "),n("template",{slot:"codeContainer"},[t._v("\n<template>\n    <vs-input v-model=\"text2\" class=\"inline-flex\" />\n    <vs-button @click=\"copyText\">Copy!</vs-button>\n</template>\n\n<script>\nexport default {\n    data() {\n        return {\n            text2: 'Copy Me Without Directive!',\n        }\n    },\n    methods: {\n        copyText() {\n            const thisIns = this;\n            this.$copyText(this.text2).then(function() {\n                thisIns.$vs.notify({\n                    title: 'Success!',\n                    text: 'Text copied successfully.',\n                    color: 'success',\n                    iconPack: 'feather',\n                    position: 'top-center',\n                    icon: 'icon-check-circle'\n                })\n            }, function() {\n                thisIns.$vs.notify({\n                    title: 'Failed!',\n                    text: 'Error in copying text.',\n                    color: 'danger',\n                    iconPack: 'feather',\n                    position: 'top-center',\n                    icon: 'icon-alert-circle'\n                })\n            })\n        }\n    }\n}\n<\/script>\n\t\t")])],2)}),[],!1,null,null,null).exports}},s=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"page-clipboard-demo"}},[e("clipboard-directive"),this._v(" "),e("clipboard-without-directive")],1)}),[],!1,null,null,null);e.default=s.exports}}]);