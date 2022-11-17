(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{441:function(t,a,s){"use strict";s.r(a);var r=s(56),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"输入url到加载经历了什么-网络"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#输入url到加载经历了什么-网络"}},[t._v("#")]),t._v(" 输入URL到加载经历了什么 --- 网络")]),t._v(" "),s("p",[t._v("整个加载过程是通过各个进程之间的配合(Chrome架构中介绍了包括的进程), 这其中涉及到网络、操作系统、Web等一系列指示。")]),t._v(" "),s("p",[t._v("当理解了整个过程，有助于我们站在上帝视角，来将浏览器的小点穿插到其中来梳理我们的知识(后续的章节都是在此基础上)")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#用户输入转换"}},[t._v("用户输入转换")])]),s("li",[s("a",{attrs:{href:"#构建请求行"}},[t._v("构建请求行")])]),s("li",[s("a",{attrs:{href:"#查找缓存-查看-浏览器缓存-章节"}},[t._v("查找缓存 (查看 浏览器缓存 章节)")])]),s("li",[s("a",{attrs:{href:"#dns-解析-查看-dns-章节"}},[t._v("DNS 解析 (查看 DNS 章节)")])]),s("li",[s("a",{attrs:{href:"#利用-ip-建立-tcp-连接"}},[t._v("利用 IP 建立 TCP 连接")])]),s("li",[s("a",{attrs:{href:"#发送-http-请求-结合跨域章节来看"}},[t._v("发送 HTTP 请求 (结合跨域章节来看)")])]),s("li",[s("a",{attrs:{href:"#网络响应"}},[t._v("网络响应")])]),s("li",[s("a",{attrs:{href:"#响应完成之后怎么办-tcp-连接就断开了吗"}},[t._v("响应完成之后怎么办？TCP 连接就断开了吗？")])]),s("li",[s("a",{attrs:{href:"#解析响应头"}},[t._v("解析响应头")])]),s("li",[s("a",{attrs:{href:"#准备渲染进程"}},[t._v("准备渲染进程")])]),s("li",[s("a",{attrs:{href:"#提交文档阶段"}},[t._v("提交文档阶段")])])])]),s("p"),t._v(" "),s("h3",{attrs:{id:"用户输入转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用户输入转换"}},[t._v("#")]),t._v(" 用户输入转换")]),t._v(" "),s("p",[t._v("我们需要在地址栏中输入一个查询关键字时，地址栏会先判断输入的关键字是搜索内容，还是请求的 URL。")]),t._v(" "),s("p",[t._v("如果是搜索内容字，地址栏会使用浏览器默认的搜索引擎，来合成新的搜索关键字的 URL。")]),t._v(" "),s("p",[t._v("如果是符合 URL 规则，那么浏览器会根据规则，加上协议，合并成为完整的 URL。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("csdn.net 合并为     https://www.csdn.net\n")])])]),s("p",[t._v("并且在发起真正的 csdn.net 请求之前，浏览器会给当前（即将跳转的页面）一次执行 beforeunload 事件的机会，允许当前页面执行一些清理性的操作，有的也会进行一次询问用户是否要跳转页面的弹框，可以用来取消导航。")]),t._v(" "),s("p",[t._v("接下来浏览器需要提交文档，在这个阶段浏览器是处于一个即将跳转页面的页面刷新。\n"),s("img",{attrs:{src:"/browser/url1.png",width:"800",height:"700"}})]),t._v(" "),s("h3",{attrs:{id:"构建请求行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建请求行"}},[t._v("#")]),t._v(" 构建请求行")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("GET /index.html HTTP/1.1\n")])])]),s("p",[t._v("浏览器进程会通过进程通信 IPC,把 URL 请求发送至网络进程, 网络进程在收到请求后, 会发起真正的 URL 请求。")]),t._v(" "),s("h3",{attrs:{id:"查找缓存-查看-浏览器缓存-章节"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查找缓存-查看-浏览器缓存-章节"}},[t._v("#")]),t._v(" 查找缓存 (查看 浏览器缓存 章节)")]),t._v(" "),s("p",[t._v("网络进程在发起请求资源前，先检查强缓存，如果命中直接使用，否则就进入下一步.")]),t._v(" "),s("h3",{attrs:{id:"dns-解析-查看-dns-章节"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns-解析-查看-dns-章节"}},[t._v("#")]),t._v(" DNS 解析 (查看 DNS 章节)")]),t._v(" "),s("p",[t._v("由于我们输入的是域名，而数据包是通过 "),s("em",[t._v("IP 地址")]),t._v(" 传给对方的。因此我们需要得到域名对应的 IP 地址 。这个过程需要依赖一个服务系统, 这个系统将域名和 IP 一一映射，我们将这个系统叫做 DNS （域名系统）。")]),t._v(" "),s("p",[t._v("浏览器提供了 "),s("strong",[t._v("DNS数据缓存功能")]),t._v("。如果一个域名已经解析过了，那么会把解析的结果缓存起来，瑕疵处理直接走缓存，不需要经过DNS解析.")]),t._v(" "),s("h3",{attrs:{id:"利用-ip-建立-tcp-连接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#利用-ip-建立-tcp-连接"}},[t._v("#")]),t._v(" 利用 IP 建立 TCP 连接")]),t._v(" "),s("p",[t._v("Chrome 在同一个域名下要求同时最多只能有 6 个 TCP 连接, 超过 6 个的话剩下的请求就得等待。")]),t._v(" "),s("p",[t._v("假设现在是小于 6 个连接的，我们进入 TCP 连接的建立阶段。")]),t._v(" "),s("p",[t._v("TCP（Transmission Control Protocol，传输控制协议）是一种面向连接的、可靠的、基于字节流的传输层通信协议。")]),t._v(" "),s("p",[t._v("TCP 通过三次握手, 数据包校验、四次挥手 来保证数据传输的可靠性。")]),t._v(" "),s("h3",{attrs:{id:"发送-http-请求-结合跨域章节来看"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发送-http-请求-结合跨域章节来看"}},[t._v("#")]),t._v(" 发送 HTTP 请求 (结合跨域章节来看)")]),t._v(" "),s("ol",[s("li",[t._v("建立好了 TCP 连接, 浏览器可以和服务器进行通信，发送 HTTP 请求。浏览器会向服务器发送请求行、请求头信息，并把和该域相关的 Cookie 等数据附加到请求头中，然后向服务器发送请求信息")])]),t._v(" "),s("p",[s("code",[t._v("常见的请求头信息")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Accept")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("application"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("xhtml"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("xml"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("application"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("xml"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("q"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.9")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("image"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("webp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("image"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("apng"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*;q=0.8,application/signed-exchange;v=b3\n\nAccept-Encoding: gzip, deflate, br\n\nAccept-Language: zh-CN,zh;q=0.9\n\nCache-Control: no-cache\n\nConnection: keep-alive\n\nCookie: /* 省略cookie信息 */")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Host")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" www"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("baidu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com\n\n"),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Pragma")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" no"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("cache\n\nUpgrade"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Insecure"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Requests"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\nUser"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Agent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Mozilla"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("iPhone"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CPU")]),t._v(" iPhone "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("OS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11_0")]),t._v(" like Mac "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("OS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("X")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" AppleWebKit"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("604.1")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".38")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("KHTML")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" like Gecko"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Version"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11.0")]),t._v(" Mobile"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("15A372 Safari"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("604.1")]),t._v("\n\n")])])]),s("h3",{attrs:{id:"网络响应"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络响应"}},[t._v("#")]),t._v(" 网络响应")]),t._v(" "),s("p",[t._v("服务器接收到请求后，根据请求信息生成响应数据（包含响应行、响应头和响应体等信息），接下来就是解析相应头的内容")]),t._v(" "),s("p",[s("code",[t._v("常见的响应头信息")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Cache"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Control"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" no"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("cache\n\n"),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Connection")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" keep"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("alive\n\nContent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Encoding"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" gzip\n\nContent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("charset"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("utf"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Wed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("04")]),t._v(" Dec "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("29")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GMT")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("Server")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" apache\n\nSet"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Cookie"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" rsv_i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("f9a0SIItKqzv7kqgAAgphbGyRts3RwTg"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("2FLyU3Y5Eh5LwyfOOrAsvdezbay0QqkDqFZ0DfQXby4wXKT8Au8O7ZT9UuMsBq2k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" domain"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("baidu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com\n\n")])])]),s("h3",{attrs:{id:"响应完成之后怎么办-tcp-连接就断开了吗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#响应完成之后怎么办-tcp-连接就断开了吗"}},[t._v("#")]),t._v(" 响应完成之后怎么办？TCP 连接就断开了吗？")]),t._v(" "),s("p",[t._v("这时候要判断 "),s("code",[t._v("Connection")]),t._v(" 字段, 如果请求头或响应头中包含 "),s("code",[t._v("Connection: Keep-Alive")]),t._v(" ，表示建立了持久连接，这样TCP连接会一直保持，之后请求统一站点的资源会复用这个连接。否则断开TCP连接, 请求-响应流程结束。")]),t._v(" "),s("h3",{attrs:{id:"解析响应头"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解析响应头"}},[t._v("#")]),t._v(" 解析响应头")]),t._v(" "),s("ul",[s("li",[s("p",[s("font",{attrs:{size:"3",color:"#dd0000"}},[t._v("重定向")]),s("br"),t._v("\nHTTP 直接返回 HTTP 响应数据的状态 301 或者 302 同时在请求头的 Location 字段中附上重定向地址，浏览器会根据 "),s("code",[t._v("状态码")]),t._v(" 和 "),s("code",[t._v("Location")]),t._v(" 进行重定向操作，然后按照重定向地址按照上面步骤重新发起请求。 如果响应行是 200，那么浏览器将继续处理")],1)]),t._v(" "),s("li",[s("p",[s("font",{attrs:{size:"3",color:"#dd0000"}},[t._v("协商缓存")]),s("br"),t._v("\n如果不是重定向, 首先服务器会根据请求头中的"),s("code",[t._v("If-None-Match")]),t._v(" 的值来判断请求的资源是否被更新，如果没有更新，就返回 "),s("code",[t._v("304")]),t._v(" 状态码, 相当于告诉浏览器之前的缓存还可以使用, 就不返回新数据了，直接获取缓存数据")],1)]),t._v(" "),s("li",[s("p",[s("font",{attrs:{size:"3",color:"#dd0000"}},[t._v("返回数据")]),s("br"),t._v("\n网络进程将获取到的数据包进行解析，根据响应头中的 "),s("code",[t._v("Content-type")]),t._v(" 来判断响应数据的类型，如果是字节流类型，就将该请求交给下载管理器，该导航流程结束，不再进行；如果是 "),s("code",[t._v("text/html")]),t._v(" 类型，就通知浏览器进程获取到文档准备渲染进程。")],1)])]),t._v(" "),s("h3",{attrs:{id:"准备渲染进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#准备渲染进程"}},[t._v("#")]),t._v(" 准备渲染进程")]),t._v(" "),s("p",[t._v("默认情况下，Chrome 会为每个页面分配一个渲染进程，也就是说，每打开一个新页面就会配套创建一个新的渲染进程。但是，也有一些例外，"),s("code",[t._v("在同一站点下")]),t._v("(同一站点章节)，浏览器会让多个页面直接运行在同一个渲染进程中。")]),t._v(" "),s("p",[t._v("渲染进程准备好之后，还不能立即进入文档解析状态，因为此时的文档数据还在网络进程中，并没有提交给渲染进程，所以下一步就进入了 "),s("code",[t._v("提交文档阶段")]),t._v(" 。")]),t._v(" "),s("h3",{attrs:{id:"提交文档阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提交文档阶段"}},[t._v("#")]),t._v(" 提交文档阶段")]),t._v(" "),s("ul",[s("li",[t._v("首先当浏览器进程接收到网络进程的响应头数据之后，便向渲染进程发起“ "),s("code",[t._v("提交文档")]),t._v(" ”的消息；")]),t._v(" "),s("li",[t._v("渲染进程接收到“提交文档”的消息后，会和网络进程建立传输数据的“ "),s("code",[t._v("管道")]),t._v(" ”。")]),t._v(" "),s("li",[t._v("等文档数据传输完成之后，渲染进程会返回“ "),s("code",[t._v("确认提交")]),t._v(" ”的消息给浏览器进程；")]),t._v(" "),s("li",[t._v("浏览器进程在收到“确认提交”的消息后，会 "),s("code",[t._v("更新浏览器界面")]),t._v(" 状态，包括了安全状态、地址栏的 URL、前进后退的历史状态，并更新 Web 页面。")])]),t._v(" "),s("p",[t._v("接下来就是浏览器的 "),s("code",[t._v("解析")]),t._v(" 和 "),s("code",[t._v("渲染")]),t._v(" 工作量。")])])}),[],!1,null,null,null);a.default=e.exports}}]);