(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{446:function(a,t,v){"use strict";v.r(t);var _=v(56),r=Object(_.a)({},(function(){var a=this,t=a.$createElement,v=a._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("h1",{attrs:{id:"首屏加载"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#首屏加载"}},[a._v("#")]),a._v(" 首屏加载")]),a._v(" "),v("p",[a._v("前面很多章节都涉及到了渲染流水线，渲染流水线影响到了首次页面展示的速度, 而首次展示会影响到用户的跳出率")]),a._v(" "),v("h3",{attrs:{id:"三个影响视觉阶段"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#三个影响视觉阶段"}},[a._v("#")]),a._v(" 三个影响视觉阶段")]),a._v(" "),v("ul",[v("li",[a._v("第一个阶段，请求发出后，提交数据阶段，页面展示出来的还是之前的页面内容。")]),a._v(" "),v("li",[a._v("第二个阶段，提交数据之后渲染进程会创建一个空白页面， 这段时间称为解析白屏，并等待 CSS 文件和 JavaScript 文件的加载完成，生成 CSSOM 和 DOM，然后合成布局树，最后还要经过一系列的步骤准备首次渲染")]),a._v(" "),v("li",[a._v("第三个阶段，等首次渲染完成之后，就开始进入完整页面的生成阶段了，然后页面会一点点被绘制出来。")])]),a._v(" "),v("h3",{attrs:{id:"分析"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分析"}},[a._v("#")]),a._v(" 分析")]),a._v(" "),v("ol",[v("li",[v("p",[a._v("影响第一个阶段的因素主要是网络或者服务器处理这块。")])]),a._v(" "),v("li",[v("p",[a._v("影响第二个阶段，这个阶段的主要问题是白屏时间，如果白屏时间过久，就会影响到用户体验。这个阶段浏览器的主要任务是：解析HTML、下载CSS、下载JavaScript、生成 CSSOM、执行 JavaScript、生成布局树、绘制页面等操作。")])])]),a._v(" "),v("p",[a._v("所以重点要关注与下载CSS文件、下载JavaScript文件和执行JavaScript。")]),a._v(" "),v("h3",{attrs:{id:"解决"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#解决"}},[a._v("#")]),a._v(" 解决")]),a._v(" "),v("ul",[v("li",[a._v("通过内联JavaScript、内联CSS来移除这两种类型文件的下载，这样获取到 HTML 文件之后可以直接开始渲染流程。")]),a._v(" "),v("li",[a._v("尽量减少文件大小，通过压缩或者移除一些不必要的开销，并压缩 JavaScript 文件。")]),a._v(" "),v("li",[a._v("还可以将一些不需要在解析 HTML 阶段阶段使用的 JavaScript 标记上 async或者 defer。")]),a._v(" "),v("li",[a._v("大的 CSS 文件，可以通过媒体查询属性，拆分为多个不同用途的 CSS 文件，这样只有在特定的场景下才会加载特定的 CSS 文件。")])]),a._v(" "),v("p",[a._v("通过情况下的瓶颈体现在下载CSS文件、下载JS文件和执行JS。")]),a._v(" "),v("h3",{attrs:{id:"优化策略"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#优化策略"}},[a._v("#")]),a._v(" 优化策略")]),a._v(" "),v("ul",[v("li",[a._v("通过内联 js、内联css来移除下载。")]),a._v(" "),v("li",[a._v("减少文件大小。webpack。")]),a._v(" "),v("li",[a._v("将一些不需要解析 HTML 阶段使用的 js 标记 sync defer。")]),a._v(" "),v("li",[a._v("对于大的 CSS 文件，可以拆分为多个不同用途的 CSS 文件。")])])])}),[],!1,null,null,null);t.default=r.exports}}]);