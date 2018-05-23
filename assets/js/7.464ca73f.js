(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{161:function(t,s,a){"use strict";var n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),a("p",[t._v("v-charts 的数据由指标和维度组成。以一组常见的数据为例：")]),t._m(3),a("p",[t._v("“维度” 指的是数据的属性，例如表格中的 “日期” 维度，表示生成的每组数据的日期。")]),a("p",[t._v("“指标” 是量化衡量标准，例如表格中的 “访问用户” 和 “下单用户”。")]),a("p",[t._v("下面，以上面的这组数据为例绘制一个折线图：")]),a("Chart",{attrs:{name:"data_simply_line"}}),t._m(4),t._m(5),t._m(6),t._m(7),a("p",[t._v("图表的 setting 属性中统一有两个配置：")]),t._m(8),a("Chart",{attrs:{name:"data_set_metrics_line"}}),t._m(9),a("p",[t._v("某些情况下，数据中指标的名称并不是我们想要展示出来的，大部分图表的 setting 属性中提供\n统一的配置来解决这个问题。")]),a("Chart",{attrs:{name:"data_metrics_alias_line"}}),t._m(10),a("p",[t._v("在数据量比较大的情况下，优化 rows 中指标维度标签会得到更多网络性能上的提升，v-charts 自身提供了这样一个用于数据转换的配置。")]),t._m(11)],1)},e=[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据","aria-hidden":"true"}},[this._v("#")]),this._v(" 数据")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"指标和维度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指标和维度","aria-hidden":"true"}},[this._v("#")]),this._v(" 指标和维度")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介","aria-hidden":"true"}},[this._v("#")]),this._v(" 简介")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("日期")]),a("th",{staticStyle:{"text-align":"right"}},[t._v("访问用户")]),a("th",{staticStyle:{"text-align":"right"}},[t._v("下单用户")])])]),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("2018-05-22")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("32371")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("29810")])]),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("2018-05-23")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("12328")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("11398")])]),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("2018-05-24")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("92381")]),a("td",{staticStyle:{"text-align":"right"}},[t._v("82910")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"设置指标维度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置指标维度","aria-hidden":"true"}},[this._v("#")]),this._v(" 设置指标维度")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("一种典型的 v-charts "),s("code",[this._v("data")]),this._v(" 属性数据格式如下所示：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  columns"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'日期'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'访问用户'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'下单用户'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  rows"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'日期'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'2018-05-22'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'访问用户'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("32371")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'下单用户'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("19810")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'日期'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'2018-05-23'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'访问用户'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("12328")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'下单用户'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("4398")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'日期'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'2018-05-24'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'访问用户'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("92381")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'下单用户'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("52910")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("columns 中是维度和指标的集合，v-charts 中的大部分图表都是单维度多指标，所以默认第一个值为\n维度，剩余的值为指标")]),s("li",[this._v("rows 中是数据的集合。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("dimension 用于指定维度")]),s("li",[this._v("metrics 用于指定指标")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"设置指标的别名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置指标的别名","aria-hidden":"true"}},[this._v("#")]),this._v(" 设置指标的别名")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"简化数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简化数据","aria-hidden":"true"}},[this._v("#")]),this._v(" 简化数据")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ve-line")]),t._v("\n    "),a("span",{attrs:{class:"token attr-name"}},[t._v(":data")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("chartData"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),a("span",{attrs:{class:"token attr-name"}},[t._v("use-data-converter")]),t._v("\n    "),a("span",{attrs:{class:"token attr-name"}},[t._v(":handler")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("handler"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ve-line")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token script language-javascript"}},[t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" simpleDataConverter "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'v-charts-v2/lib/converter'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("data")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("handler "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      dataConverter"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" simpleDataConverter\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      chartData"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        columns"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'日期'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'访问用户'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'下单用户'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        rows"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'1/1'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1393")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1093")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'1/2'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("3530")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("3230")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'1/3'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2923")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2623")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'1/4'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1723")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1423")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'1/5'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("3792")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("3492")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'1/6'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("4593")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("4293")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])}];a.d(s,"a",function(){return n}),a.d(s,"b",function(){return e})},291:function(t,s,a){"use strict";a.r(s);var n=a(161),e=a(98);for(var r in e)"default"!==r&&function(t){a.d(s,t,function(){return e[t]})}(r);var c=a(0),o=Object(c.a)(e.default,n.a,n.b,!1,null,null,null);s.default=o.exports},97:function(t,s){data_simply_line={code:"\n    <template>\n      <ve-line :data=\"chartData\"></ve-line>\n    </template>\n    <script>\n    export default {\n      data () {\n        return {\n          chartData: {\n            columns: ['日期', '访问用户', '下单用户'],\n            rows: [\n              { '日期': '2018-05-22', '访问用户': 32371, '下单用户': 19810 },\n              { '日期': '2018-05-23', '访问用户': 12328, '下单用户': 4398 },\n              { '日期': '2018-05-24', '访问用户': 92381, '下单用户': 52910 }\n            ]\n          }\n        }\n      }\n    }\n    <\/script>\n  "},data_set_metrics_line={code:"\n    <template>\n      <ve-line :data=\"chartData\" :settings=\"chartSettings\"></ve-line>\n    </template>\n    <script>\n    export default {\n      data () {\n        this.chartSettings = {\n          metrics: ['下单用户']\n        }\n        return {\n          chartData: {\n            columns: ['日期', '访问用户', '下单用户'],\n            rows: [\n              { '日期': '2018-05-22', '访问用户': 32371, '下单用户': 19810 },\n              { '日期': '2018-05-23', '访问用户': 12328, '下单用户': 4398 },\n              { '日期': '2018-05-24', '访问用户': 92381, '下单用户': 52910 }\n            ]\n          }\n        }\n      }\n    }\n    <\/script>\n  "},data_metrics_alias_line={code:"\n    <template>\n      <ve-line :data=\"chartData\" :settings=\"chartSettings\"></ve-line>\n    </template>\n    <script>\n    export default {\n      data () {\n        this.chartSettings = {\n          labelAlias: {\n            PV: '访问用户',\n            Order: '下单用户'\n          }\n        }\n        return {\n          chartData: {\n            columns: ['date', 'PV', 'Order'],\n            rows: [\n              { 'date': '2018-05-22', 'PV': 32371, 'Order': 19810 },\n              { 'date': '2018-05-23', 'PV': 12328, 'Order': 4398 },\n              { 'date': '2018-05-24', 'PV': 92381, 'Order': 52910 }\n            ]\n          }\n        }\n      }\n    }\n    <\/script>\n  "}},98:function(t,s,a){"use strict";a.r(s);var n=a(97),e=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(s,t,function(){return n[t]})}(r);s.default=e.a}}]);