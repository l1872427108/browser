(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{412:function(s,t,a){"use strict";a.r(t);var n=a(56),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"v8优化小知识点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v8优化小知识点"}},[s._v("#")]),s._v(" V8优化小知识点")]),s._v(" "),a("h3",{attrs:{id:"v8-优化策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v8-优化策略"}},[s._v("#")]),s._v(" V8 优化策略")]),s._v(" "),a("p",[s._v("随着V8团队对解释器和编译器的不断优化，一些小的优化策略已经不是那么的关注了。")]),s._v(" "),a("ol",[a("li",[s._v("脚本流\n"),a("ul",[a("li",[s._v("正常流程应该是 下载 -> 解析 -> 执行")]),s._v(" "),a("li",[s._v("优化策略，下载的过程中如果超过 30kb，就会新开一个线程去解析，而不是等待下载全部结束在去解析。")])])]),s._v(" "),a("li",[s._v("字节码缓存\n"),a("ul",[a("li",[s._v("JIT 技术")])])]),s._v(" "),a("li",[s._v("懒解析。\n"),a("ul",[a("li",[s._v("先不去解析函数内部逻辑，用到再去解析")])])])]),s._v(" "),a("h3",{attrs:{id:"函数优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数优化"}},[s._v("#")]),s._v(" 函数优化")]),s._v(" "),a("ol",[a("li",[s._v("lazy parsing 懒解析： 不需要执行就不去解析, 这是懒解析. 但是如果我们声明函数，马上就会执行，这时候反过头去再去解析函数，势必就会带来性能问题。")]),s._v(" "),a("li",[s._v("eager parsing 饥饿解析: 遇到函数就去解析函数，等待下面真正执行的时候，就不需要回头去解析这个函数。")]),s._v(" "),a("li",[s._v("使用，需要给需要立即解析的函数加上一对括号。  var add = ((a, b) => a + b); 完事了。")])]),s._v(" "),a("h3",{attrs:{id:"对象优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对象优化"}},[s._v("#")]),s._v(" 对象优化")]),s._v(" "),a("ol",[a("li",[s._v("相同顺序初始化对象成员\n虽然说 js 是动态类型的，变量是没有类型的（值才有），但是在编译器解析的时候，会给对象的属性赋予一个类型（叫做 hiddenClass， 多达21种类型），以相同顺序初始化对象成员，可以避免类的调整。")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" person1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'leo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// hiddenClass-1")]),s._v("\nperson1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("age "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// hiddenClass-2")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" person2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("age")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// hiddenClass-3")]),s._v("\nperson2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'lisa'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// hiddenClass-4")]),s._v("\n")])])]),a("p",[s._v("这样做的并不会对 hiddenClass 进行复用，即使是一样的，但是在 V8 内部上的实现是会将每个属性都放入一个有顺序的容器（数组之类的），所以不是相同顺序对象成员，会进行类的调整，造成性能上的问题。")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" person1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'leo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// hiddenClass-1")]),s._v("\nperson1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("age "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// hiddenClass-2")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" person2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'lisa'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// hiddenClass-1")]),s._v("\nperson2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("age "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// hiddenClass-2")]),s._v("\n")])])]),a("p",[s._v("这样子就就可以进行复用了。不会心创建 hiddenClass.")]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("实例化之后避免添加新属性")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" person1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'leo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// In-object 属性，一开始就存在上面的属性。")]),s._v("\n\nperson1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("age "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Normal/Fast 属性, 是存储在 property store 需要间接查找属性。")]),s._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("避免使用类数组\n数组会进行极大的一个优化, 但是类数组却不会。")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("arrayLike"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),a("p",[s._v("V8 推荐，先把 类数组转为数组， 这样的效率要比call调用数组的方法要快。")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" arr "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("slice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("arrayLike"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\narr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("ol",{attrs:{start:"4"}},[a("li",[a("p",[s._v("避免读取超过数组的长度\n存在数组越界问题，arr[arr.length] 这种查找不到属性，就会沿着原型链找一遍，最后返回一个 undefined.")])]),s._v(" "),a("li",[a("p",[s._v("避免元素类型转换")])])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" array "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// PACKED_SMI_ELEMENTS")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("PACKED")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 是代表元素的是满的，元素并不存在 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v("、"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),s._v(" 这样的"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SMI")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 代表是 Int 类型\n\narray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// PACKED_DOUBLE_ELEMENTS ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("PACKED")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 是代表元素的是满的，元素并不存在 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v("、"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),s._v(" 这样的"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DOUBLE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 代表是 "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DOUBLE")]),s._v(" 类型"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\n是一个降级的过程：越降级越通用，但是优化越少。\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("HOLEY_DOUBLE_ELEMENTS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  也是向下的降级，代表有 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),s._v("、"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),s._v(" 的元素。\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);