(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{424:function(t,r,a){"use strict";a.r(r);var v=a(56),_=Object(v.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"重排、重绘和合成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重排、重绘和合成"}},[t._v("#")]),t._v(" 重排、重绘和合成")]),t._v(" "),a("p",[t._v("从输入URL到响应中，基于解析和渲染阶段，来看重排、重绘和合成; 对于 Web 性能优化将有很大的帮助")]),t._v(" "),a("img",{attrs:{src:"/browser/渲染流水线1.jpg",width:"800",height:"300"}}),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#重排"}},[t._v("重排")])]),a("li",[a("a",{attrs:{href:"#重绘"}},[t._v("重绘")])]),a("li",[a("a",{attrs:{href:"#合成"}},[t._v("合成")])]),a("li",[a("a",{attrs:{href:"#开启-cpu-加速-硬件加速"}},[t._v("开启 CPU 加速（硬件加速）")])]),a("li",[a("a",{attrs:{href:"#针对流水线优化方案"}},[t._v("针对流水线优化方案")])])])]),a("p"),t._v(" "),a("h3",{attrs:{id:"重排"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重排"}},[t._v("#")]),t._v(" 重排")]),t._v(" "),a("p",[t._v("通过 JavaScript 或者 CSS 修改元素的几何位置属性。浏览器会触发重新布局，解析之后的一系列子阶段，这个过程就是重排。重排需要更新完整的渲染流水线，开销最大。")]),t._v(" "),a("img",{attrs:{src:"/browser/渲染流水线2.jpg",width:"800",height:"300"}}),t._v(" "),a("p",[t._v("具体的能够触发回流：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("一个 DOM 元素的几何属性变化，常见的有 width、height、padding、margin、left、top、border 等。")])]),t._v(" "),a("li",[a("code",[t._v("使 DOM 节点发生 增减或移动。")])]),t._v(" "),a("li",[a("code",[t._v("读写 offset ， scroll， client 这些属性的时候，浏览器为了获取这些值，会进行回流操作。")])]),t._v(" "),a("li",[a("code",[t._v("调用 window.getComputedStyle 方法。")])])]),t._v(" "),a("h3",{attrs:{id:"重绘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重绘"}},[t._v("#")]),t._v(" 重绘")]),t._v(" "),a("p",[t._v("通过修改元素外观的改变所触发的浏览器行为, 改变背景、颜色、outline, 呈现一个新的外观.外观、阴影、颜色、边框")]),t._v(" "),a("p",[t._v("布局阶段将不会执行，并没有引起几何位置的变化，直接进入绘制阶段, 然后执行之后的一系列子阶段。重绘省去了布局和分层阶段，所以执行效率会比重排操作要高一些。")]),t._v(" "),a("img",{attrs:{src:"/browser/渲染流水线3.jpg",width:"800",height:"300"}}),t._v(" "),a("p",[t._v("重绘是以图层为单位的。 如果图层中某个元素需要重绘，整个图层都需要绘制。")]),t._v(" "),a("h3",{attrs:{id:"合成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#合成"}},[t._v("#")]),t._v(" 合成")]),t._v(" "),a("p",[t._v("既不要布局也不要绘制，渲染引擎将会跳过布局和绘制，只执行后续的合成操作，这个过程就是合成。")]),t._v(" "),a("p",[t._v("直接在非主线程上执行合成动画操作。这样的效率是最高的，因为是在非主线程上合成，并没有占用主线程的资源，另外也避开了布局和绘制两个子阶段，所以相对于重绘和重排，合成能大大提升绘制效率。")]),t._v(" "),a("img",{attrs:{src:"/browser/渲染流水线5.jpg",width:"800",height:"300"}}),t._v(" "),a("h3",{attrs:{id:"开启-cpu-加速-硬件加速"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开启-cpu-加速-硬件加速"}},[t._v("#")]),t._v(" 开启 CPU 加速（硬件加速）")]),t._v(" "),a("p",[t._v("CSS 的 animation、transform、transtion 并不会开启硬件加速，而是通过浏览器的缓慢的软件渲染引擎来实现执行。")]),t._v(" "),a("p",[t._v("在之前章节中，在生产位图的时候是由栅格化来进行的，但是性能不佳，可以借助GPU来快速生成位图. 那么如何开启 GPU 硬件加速")]),t._v(" "),a("ol",[a("li",[a("font",{attrs:{size:"3",color:"#dd0000"}},[t._v("如何开启")]),a("br")],1)]),t._v(" "),a("ul",[a("li",[a("code",[t._v("transform(tranlate3d、tranlateZ(0)等)")])]),t._v(" "),a("li",[a("code",[t._v("opacity")])]),t._v(" "),a("li",[a("code",[t._v("filter")])]),t._v(" "),a("li",[a("code",[t._v("will-change")])])]),t._v(" "),a("p",[t._v("如果我们只是单纯想要使用 GPU 加速，而不改变任何属性。可以使用 transform: translateZ(0)")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[a("font",{attrs:{size:"3",color:"#dd0000"}},[t._v("注意事项")]),a("br"),t._v("\nMemory: GPU处理过多的内容会导致内存问题,通常不会对所有的元素使用硬件加速。（过多地开启硬件加速可能会耗费较多的内存. 因此什么时候开启硬件加速，给多少元素开启硬件加速，需要用测试结果说话")],1)]),t._v(" "),a("li",[a("p",[a("font",{attrs:{size:"3",color:"#dd0000"}},[t._v("will-change")]),a("br"),t._v("\n提前告诉渲染引擎该元素要做几何变换和透明度操作，浏览器会在开始之前对其进行优化。这时候渲染引擎会将该元素单独实现一帧，等这些变换发送时，渲染引擎会通过合成线程直接去处理变化变换，这些变化没有涉及到主线程，就大大的提升了渲染的效率。")],1)])]),t._v(" "),a("h3",{attrs:{id:"针对流水线优化方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#针对流水线优化方案"}},[t._v("#")]),t._v(" 针对流水线优化方案")]),t._v(" "),a("ol",[a("li",[t._v("元素变化， 定位操作位置。  使用 css3 的 transform")]),t._v(" "),a("li",[t._v("不要使用 table 布局.")]),t._v(" "),a("li",[t._v("将多次改变样式属性操作合并成一次行操作。   class")]),t._v(" "),a("li",[t._v("将 DOM 离线后操作。\ndisplay: none; 或者隐藏掉，不再页面上显示。")]),t._v(" "),a("li",[t._v("文档碎片。createDocumentFragment 进行批量的 DOM 操作。")]),t._v(" "),a("li",[t._v("对于 resize、scroll 等进行防抖/节流处理。")]),t._v(" "),a("li",[t._v("添加 will-change: transform")])])])}),[],!1,null,null,null);r.default=_.exports}}]);