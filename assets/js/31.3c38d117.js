(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{430:function(t,e,i){"use strict";i.r(e);var v=i(56),_=Object(v.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"浏览器lighthouse面板"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#浏览器lighthouse面板"}},[t._v("#")]),t._v(" 浏览器Lighthouse面板")]),t._v(" "),i("p",[t._v("百度百科： Web性能描述了 Web 应用在浏览器上的加载和显示的速度。")]),t._v(" "),i("p",[t._v("我们要关注：1. 页面加载阶段。 2. 页面交互阶段")]),t._v(" "),i("h3",{attrs:{id:"lighthouse"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#lighthouse"}},[t._v("#")]),t._v(" Lighthouse")]),t._v(" "),i("p",[t._v("Chrome 提供了性能检测工具：Lighthouse。它能够准确统计页面在加载阶段的核心数据。")]),t._v(" "),i("p",[t._v("Lighthouse 将检测到的细节数据隐藏在背后，只提供给我们一些直观的性能数据，同时，还会给我们提供一些优化建议。")]),t._v(" "),i("h3",{attrs:{id:"利用-lighthouse-生成-web-性能报告"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#利用-lighthouse-生成-web-性能报告"}},[t._v("#")]),t._v(" 利用 Lighthouse 生成 Web 性能报告")]),t._v(" "),i("img",{attrs:{src:"/browser/a1.jpg",width:"800",height:"500"}}),t._v("\n我们可以先配置 Lighthouse, 可以配置监测类型 和 设备类型。\n"),i("p",[t._v("监控类型是指需要监控哪些内容.")]),t._v(" "),i("ul",[i("li",[t._v("监测并分析 Web 性能 (Performance)；")]),t._v(" "),i("li",[t._v("监测并分析 PWA(Progressive Web App) 程序的性能；")]),t._v(" "),i("li",[t._v("监测并分析 Web 应用是否采用了最佳实践策略 (Best practices)；")]),t._v(" "),i("li",[t._v("监测并分析是否实施了无障碍功能 (Accessibility)，无障碍功能让一些身体有障碍的人可以方便地浏览你的 Web 应用。")]),t._v(" "),i("li",[t._v("监测并分析 Web 应用是否采实施了 SEO 搜素引擎优化 (SEO)。")])]),t._v(" "),i("p",[t._v("设备 (Device) 部分，Moblie 选项是用来模拟移动设备环境的，另外一个 Desktop 选项是用来模拟桌面环境的。")]),t._v(" "),i("h3",{attrs:{id:"查看报告"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#查看报告"}},[t._v("#")]),t._v(" 查看报告")]),t._v(" "),i("p",[t._v("Lighthouse 除了生成性能指标以外，还会分析该站点并提供了很多优化建议，可以根据这些建议来改进 Web 应用以获得更高的得分，进而获得更好的用户体验效果。")]),t._v(" "),i("p",[t._v("报告的第一个部分是性能指标 (Metrics)，如下图所示：\n"),i("img",{attrs:{src:"/browser/a2.jpg",width:"800",height:"500"}})]),t._v(" "),i("p",[t._v("性能指标下面一共有六项内容，这六项内容分别对应了从 Web 应用的加载到页面展示完成的这段时间中，各个阶段所消耗的时长。")]),t._v(" "),i("p",[t._v("在中间还有一个 View Trace 按钮，点击该按钮可以跳转到 Performance 标签，并且查看这些阶段在 Performance 中所对应的位置。最下方是加载过程中各个时间段的屏幕截图。\n"),i("img",{attrs:{src:"/browser/a3.jpg",width:"800",height:"500"}})]),t._v(" "),i("p",[t._v("报告的第二个部分是可优化项 (Opportunities)，如下图所示：\n"),i("img",{attrs:{src:"/browser/a4.jpg",width:"800",height:"500"}})]),t._v(" "),i("p",[t._v("报告的第三部分是手动诊断 (Diagnostics)，如下图所示：\n"),i("img",{attrs:{src:"/browser/a5.jpg",width:"800",height:"500"}})]),t._v(" "),i("p",[t._v("在手动诊断部分，采集了一些可能存在性能问题的指标，这些指标可能会影响到页面的加载性能，Lighthouse 把详情列出来，并让你依据实际情况，来手动排查每一项。")]),t._v(" "),i("h3",{attrs:{id:"根据性能报告优化-web-性能"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#根据性能报告优化-web-性能"}},[t._v("#")]),t._v(" 根据性能报告优化 Web 性能")]),t._v(" "),i("p",[t._v("可以依据报告来分析如何优化 Web 应用, 最直接的方式是想办法提高性能指标的分数，而性能指标的分数是由六项指标决定的，它们分别是：")]),t._v(" "),i("ol",[i("li",[t._v("首次绘制 (First Paint)；")]),t._v(" "),i("li",[t._v("首次有效绘制 (First Meaningfull Paint)；")]),t._v(" "),i("li",[t._v("首屏时间 (Speed Index)；")]),t._v(" "),i("li",[t._v("首次 CPU 空闲时间 (First CPU Idle)；")]),t._v(" "),i("li",[t._v("完全可交互时间 (Time to Interactive)；")]),t._v(" "),i("li",[t._v("最大估计输入延时 (Max Potential First Input Delay)。")])]),t._v(" "),i("p",[t._v("这六项都是页面在加载过程中的性能指标")]),t._v(" "),i("p",[t._v("在渲染进程确认要渲染当前的请求后，渲染进程会创建一个空白页面，我们把创建空白页面的这个时间点称为 First Paint，简称 FP。")]),t._v(" "),i("p",[t._v("bundle.js 是关键资源，因此需要完成加载之后，渲染进程才能执行该脚本，然后脚本会修改 DOM，引发重绘和重排等一系列操作，当页面中绘制了第一个像素时，我们把这个时间点称为 First Content Paint，简称 FCP。")]),t._v(" "),i("p",[t._v("接下来继续执行 JavaScript 脚本，当首屏内容完全绘制完成时，我们把这个时间点称为 Largest Content Paint，简称 LCP。")]),t._v(" "),i("p",[t._v("在 FCP 和 LCP 中间，还有一个 FMP，这个是首次有效绘制")]),t._v(" "),i("p",[t._v("接下来 JavaScript 脚本执行结束，渲染进程判断该页面的 DOM 生成完毕，于是触发 DOMContentLoad 事件。等所有资源都加载结束之后，再触发 onload 事件。")]),t._v(" "),i("h3",{attrs:{id:"处理"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#处理"}},[t._v("#")]),t._v(" 处理")]),t._v(" "),i("ol",[i("li",[i("p",[t._v("第一项指标 FP，如果 FP 时间过久，那么直接说明了一个问题，那就是页面的 HTML 文件可能由于网络原因导致加载时间过久")])]),t._v(" "),i("li",[i("p",[t._v("不管是 FMP 还是 LCP，优化它们的方式都是类似的，如果 FMP 和 LCP 消耗时间过久，那么有可能是加载关键资源花的时间过久，也有可能是 JavaScript 执行过程中所花的时间过久，所以我们可以针对具体的情况来具体分析。")])]),t._v(" "),i("li",[i("p",[t._v("第三项是首屏时间 (Speed Index)，这就是我们上面提到的 LCP, 它表示填满首屏页面所消耗的时间，首屏时间的值越大，那么加载速度越慢，具体的优化方式同优化第二项 FMP 是一样。")])]),t._v(" "),i("li",[i("p",[t._v("第四项是首次 CPU 空闲时间 (First CPU Idle)，也称为 First Interactive, 它表示页面达到最小化可交互的时间，也就是说并不需要等到页面上的所有元素都可交互，只要可以对大部分用户输入做出响应即可。")])]),t._v(" "),i("li",[i("p",[t._v("要缩短首次 CPU 空闲时长，我们就需要尽可能快地加载完关键资源，尽可能快地渲染出来首屏内容，因此优化方式和第二项 FMP 和第三项 LCP 是一样的。")])]),t._v(" "),i("li",[i("p",[t._v("第五项是完全可交互时间 (Time to Interactive)，简称 TTI, 表示页面中所有元素都达到了可交互的时长。简单理解就这时候页面的内容已经完全显示出来了，所有的 JavaScript 事件已经注册完成，页面能够对用户的交互做出快速响应，通常满足响应速度在 50 毫秒以内。如果要解决 TTI 时间过久的问题，我们可以推迟执行一些和生成页面无关的 JavaScript 工作。")])]),t._v(" "),i("li",[i("p",[t._v("第六项是最大估计输入延时 (Max Potential First Input Delay）, 这个指标是估计你的 Web 页面在加载最繁忙的阶段， 窗口中响应用户输入所需的时间，为了改善该指标，我们可以使用 WebWorker 来执行一些计算，从而释放主线程。另一个有用的措施是重构 CSS 选择器，以确保它们执行较少的计算。")])])])])}),[],!1,null,null,null);e.default=_.exports}}]);