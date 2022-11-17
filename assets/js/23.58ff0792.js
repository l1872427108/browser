(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{422:function(v,_,t){"use strict";t.r(_);var s=t(56),a=Object(s.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"从chrome渲染一帧的角度来做优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#从chrome渲染一帧的角度来做优化"}},[v._v("#")]),v._v(" 从Chrome渲染一帧的角度来做优化")]),v._v(" "),t("p",[v._v("Chrome渲染一帧的，也就是从渲染流水线的角度来看。如何能够让页面更快的显示和响应。")]),v._v(" "),t("h3",{attrs:{id:"三个重要的阶段-加载阶段、交互阶段和关闭阶段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三个重要的阶段-加载阶段、交互阶段和关闭阶段"}},[v._v("#")]),v._v(" 三个重要的阶段(加载阶段、交互阶段和关闭阶段)")]),v._v(" "),t("ul",[t("li",[v._v("加载阶段：从请求到渲染出完整的页面的过程，影响到这个阶段的主要因素有网络和js脚本。")]),v._v(" "),t("li",[v._v("交互阶段：从页面加载完成到用户交互的整合过程，影响到的主要是 js 脚本。")]),v._v(" "),t("li",[v._v("关闭阶段：从用户发出关闭指令后页面所做的一些清理操作。")])]),v._v(" "),t("h3",{attrs:{id:"加载阶段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加载阶段"}},[v._v("#")]),v._v(" 加载阶段")]),v._v(" "),t("p",[v._v("像js、css、html阻塞网页首次渲染的资源称为关键资源。而像图片、音频、视频等不会阻塞页面的首次渲染。可以细化三个影响页面首次渲染的核心因素。")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("第一个是关键资源个数。比如HTML文件、JavaScript文件和CSS文件")])]),v._v(" "),t("li",[t("p",[v._v("第二个是关键资源大小。通常关键资源的内容越小，整个资源的下载就越短，阻塞渲染的时间也越短。")])]),v._v(" "),t("li",[t("p",[v._v("第三个是请求关键资源需要多少个 RTT。 使用 TCP 协议传输一个文件时，由于TCP的特性，这个数据是被拆分为一个个的数据包来回多次进行传输的。RTT就是往返时延。表示从发送端发送数据开始，返回数据共经历的时延。通常1个HTTP的数据包在14KB左右，以一个0.1M的页面就需要拆分为8个包传递，也就是8个RTT。")])])]),v._v(" "),t("p",[v._v("那么如何针对性的解决呢？")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("将 js 和 css 改成内联形式。可以减少文件个数。如果js1没有DOM或CSSOM的操作，可以改成async或defer属性。可以将不需要css给变为非关键资源。")])]),v._v(" "),t("li",[t("p",[v._v("减少关键资源个数。 内联JavaScript和CSS。async/defer、如果不是在构建页面之前加载的CSS，可以添加媒体取消阻止显现的标志。")])]),v._v(" "),t("li",[t("p",[v._v("减小关键资源大小？可以压缩CSS和JavaScript资源，移除 HTML、CSS、JavaScript 文件中一些注释内容。")])]),v._v(" "),t("li",[t("p",[v._v("减少RTT次数。 就是减少关键资源的个数和大小。 还可以使用 CDN减少RTT时长。")])])]),v._v(" "),t("h3",{attrs:{id:"交互阶段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#交互阶段"}},[v._v("#")]),v._v(" 交互阶段")]),v._v(" "),t("p",[v._v("这个过程其实就是渲染进程渲染帧的速度，帧的渲染速度决定了交互的流畅度。")]),v._v(" "),t("p",[v._v("这个阶段就主要是一帧的生成，大部分情况下，生成一个新的帧都是由js通过由js修改修改DOM或者CSSOM来触发的。")]),v._v(" "),t("p",[v._v("交互阶段没有加载关键资源和构建DOM、CSSOM的流程，通常是由 JavaScript 触发交互动画的。")]),v._v(" "),t("p",[v._v("一方面就是布局信息的修改，就会触发重排操作。然后出发后续渲染流水线的一系列操作。")]),v._v(" "),t("p",[v._v("一方面就是修改了颜色一类的信息，那么就不会涉及到布局相关的调整，可以跳过布局极端，直接进入绘制阶段。")]),v._v(" "),t("p",[v._v("另一个方面就是通过 CSS 实现一些变形、渐变、动画等特效，由CSS触发的，并且是在合成线程上执行的，这个过程称为合成。不会触发重排或者重绘。")]),v._v(" "),t("p",[v._v("目标就是如何让单帧的生成速度变快。")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("减少 js 脚本的执行时间(占据主线程时间太长), 比如一个函数一次执行要花费很长时间，严重占了主线程执行其他渲染任务的时间。")]),v._v(" "),t("ul",[t("li",[v._v("可以将一次性操作函数分解为多个任务，每个任务都不会太久。")]),v._v(" "),t("li",[v._v("采用 Web Workers。 是主线程之外的另一个线程，可以执行 js 脚本，但是没有 DOM、CSSOM 环境。无法访问 DOM 的操作。可以将一些耗时的任务放到 Web Workers 中执行。")])])]),v._v(" "),t("li",[t("p",[v._v("避免强制同步布局\n指 js 强制将计算样式和布局操作提前放到当前任务重。")])])]),v._v(" "),t("p",[v._v("重新获取高度，需要重新布局，在获取高度之前，js还需要强制让渲染引擎执行一次布局操作。 导致计算样式和布局都在当前脚本执行过程中触发。")]),v._v(" "),t("p",[v._v("我们可以进程调整，在修改 DOM 之前查询相关值。")]),v._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[v._v("避免布局抖动\n在一次 js 执行过程中，多次执行强制布局和抖动操作。")])]),v._v(" "),t("p",[v._v("比如 for 循环中，不断读取属性值，每次读取属性值之前都要进行样式计算和布局。大大影响当前函数的执行效率。")]),v._v(" "),t("p",[v._v("尽量不要在修改 DOM 结构时再去查询一些相关值。")]),v._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[v._v("合理利用 CSS 合成动画。\n尽量使用 CSS 合成动画，能让 CSS 处理动画，尽量让 CSS 操作。")])]),v._v(" "),t("p",[v._v("如果提前知道某个元素执行动画操作，最好标记为 will-change，告诉渲染引擎将该元素单独生成一个图层。")]),v._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[v._v("避免频繁的垃圾回收\n在一些函数中频繁创建临时对象，那么垃圾回收也会频繁的执行垃圾回收策略。会占用主线程，影响到其他任务的执行。")])]),v._v(" "),t("p",[v._v("尽可能的优化存储结构，避免小颗粒对象产生。")])])}),[],!1,null,null,null);_.default=a.exports}}]);