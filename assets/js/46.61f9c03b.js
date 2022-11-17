(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{443:function(t,s,a){"use strict";a.r(s);var n=a(56),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"从渲染流水线看html、css、javascript的阻塞"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从渲染流水线看html、css、javascript的阻塞"}},[t._v("#")]),t._v(" 从渲染流水线看html、css、JavaScript的阻塞")]),t._v(" "),a("img",{attrs:{src:"/browser/渲染流水线1.jpg",width:"800",height:"300"}}),t._v("\n我们借助流水线来看看请求回来资源后如何浏览器是如何加载\n"),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#html解析器"}},[t._v("HTML解析器")])]),a("li",[a("a",{attrs:{href:"#css解析器"}},[t._v("CSS解析器")])]),a("li",[a("a",{attrs:{href:"#javascript解析器"}},[t._v("JavaScript解析器")])]),a("li",[a("a",{attrs:{href:"#注意"}},[t._v("注意")])])])]),a("p"),t._v(" "),a("h3",{attrs:{id:"html解析器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html解析器"}},[t._v("#")]),t._v(" HTML解析器")]),t._v(" "),a("p",[t._v("解析过程")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("50.9ms之前是浏览器要做的事情（也就是输入URL网络篇在发起请求之前做的事情）")])]),t._v(" "),a("li",[a("code",[t._v("Send Request 发送请求来从服务器获取 index.html 文件。")])]),t._v(" "),a("li",[a("code",[t._v("Finish Loading 完成加载 index.html 文件 (接下来就是也就是输入URL要进入解析篇)")])]),t._v(" "),a("li",[a("code",[t._v("通过 Parse HTML (可以看如何构建DOM树章节)，解析一点，添加到DOM树中，并且在页面上渲染一点 (Parse HTML 是异步的)")])]),t._v(" "),a("li",[a("code",[t._v("最终解析完，就是一颗 DOM 树")])])]),t._v(" "),a("p",[t._v("DOM树的解析不会阻塞页面渲染")]),t._v(" "),a("h3",{attrs:{id:"css解析器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css解析器"}},[t._v("#")]),t._v(" CSS解析器")]),t._v(" "),a("p",[t._v("可以看出来，style 标签中的样式解析还是通过 Parse HTML； link 引入的样式是通过 CSS解析器, 需要生成 stylesheet， 将 DOM 树进行渲染(结合输入URL要进入解析篇)")]),t._v(" "),a("ol",[a("li",[t._v("style 标签中的样式。")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("是由 Parse HTML 进行解析的。")])]),t._v(" "),a("li",[a("code",[t._v("不阻塞 DOM 树的解析, 最终要结合DOM树生成布局树")])]),t._v(" "),a("li",[a("code",[t._v("阻塞 DOM 树的渲染，需要将样式一次性的应用到DOM树上, DOM树不能够直接生成布局树")])]),t._v(" "),a("li",[a("code",[t._v("不会阻塞浏览器渲染, 通过 HTML Parse 解析一点渲染一点。（可能发生闪屏）")])])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("link 引入的外部 css 样式。")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("由 css 解析器执行。")])]),t._v(" "),a("li",[a("code",[t._v("不阻塞 DOM 的解析, 二者同步进行")])]),t._v(" "),a("li",[a("code",[t._v("阻塞浏览器渲染, 需要一次性解析完CSS。(避免闪屏现象)")])]),t._v(" "),a("li",[a("code",[t._v("阻塞 js 语句的执行, 后续的 Js 脚本可能会读取样式，为了避免读取错误信息; 现代浏览器，像 webkit 内核的浏览器而言，仅当脚本尝试访问样式的属性才会禁止脚本;firfox 是直接禁止脚本的")])])]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("优化策略(只有更快速的解析CSS，才能对DOM渲染、Js加载更加友好)")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("使用 CDN 节点进行外部资源加速。")])]),t._v(" "),a("li",[a("code",[t._v("对 CSS 进行压缩。")])]),t._v(" "),a("li",[a("code",[t._v("减少 http 请求数，对 css 文件合并。")])]),t._v(" "),a("li",[a("code",[t._v("优化样式表的代码")])])]),t._v(" "),a("h3",{attrs:{id:"javascript解析器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript解析器"}},[t._v("#")]),t._v(" JavaScript解析器")]),t._v(" "),a("p",[t._v("可以看出来，JavaScript 是通过 JavaScript 解析器一次性执行。（如何执行可以参考Js执行原理来看）")]),t._v(" "),a("ol",[a("li",[a("font",{attrs:{size:"3",color:"#dd0000"}},[t._v("阻塞 DOM 的解析(内联)")]),a("br")],1)]),t._v(" "),a("ul",[a("li",[a("code",[t._v("解析到脚本，Parse HTML 暂停对DOM的解析，主要是因为怕解析完DOM，JavaScript 直接清空结构，Parse HTML 做无用功。")])]),t._v(" "),a("li",[a("code",[t._v("脚本执行完成之后，Parse HTML恢复解析过程")])])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("font",{attrs:{size:"3",color:"#dd0000"}},[t._v("阻塞 DOM 的解析(外联)")]),a("br")],1)]),t._v(" "),a("ul",[a("li",[a("code",[t._v("下载这段 js 脚本, 会阻塞 DOM 解析，通常下载一般都是耗时的，受网络环境、js 文件大小等因素")])])]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[a("p",[a("font",{attrs:{size:"3",color:"#dd0000"}},[t._v("阻塞页面的渲染")]),a("br")],1)]),t._v(" "),a("li",[a("p",[a("font",{attrs:{size:"3",color:"#dd0000"}},[t._v("优化策略")]),a("br")],1)])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Chrome 的优化方式：预解析操作，渲染引擎收到字节流之后，开启一个预解析线程，来分析 HTML 文件中包含的 js、css 等文件，解析到文件之后，预解析线程会提前下载这些文件 (这也就是为什么上文还没有开始 Parse HTML，就已经开始请求图片资源)")])]),t._v(" "),a("li",[a("code",[t._v("使用 CDN 来加速js 文件的加载")])]),t._v(" "),a("li",[a("code",[t._v("压缩js文件的体积。")])]),t._v(" "),a("li",[a("code",[t._v("如果 JavaScript 文件中没有操作 DOM 相关代码，就可以将该 JavaScript 脚本设置为异步加载，通过 async 或 defer 来标记(请看 async/defer 章节)")])])]),t._v(" "),a("h3",{attrs:{id:"注意"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[t._v("#")]),t._v(" 注意")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("theme.css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" div1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByTagName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            div1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerText "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'time.geekbang'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//需要DOM")]),t._v("\n            div1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("color "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'red'")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//需要CSSOM")]),t._v("\n        ")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("test"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[a("code",[t._v("div1.style.color")]),t._v(" 是用来操纵 CSSOM 的，所以在执行 JavaScript 之前，需要先解析 JavaScript 语句之上所有的 CSS 样式。如果是外部的 CSS 文件，那么在执行 JavaScript 之前，还需要等待 CSS 文件下载完成，并解析成 CSSOM 对象之后，才能执行 JavaScript。")]),t._v(" "),a("p",[t._v("JavaScript 引擎在解析 JavaScript，不知道 JavaScript 是否会操作 CSSOM，所以渲染引擎遇到 JavaScript 脚本时，不管该脚本是否操作了 CSSOM，都会执行 CSS 文件下载，解析操作，在执行 JavaScript。")]),t._v(" "),a("p",[t._v("所以，JavaScript 阻塞 DOM 生成，而样式文件会阻塞 JavaScript。所以样式文件会阻塞 JavaScript 的执行。")])])}),[],!1,null,null,null);s.default=r.exports}}]);