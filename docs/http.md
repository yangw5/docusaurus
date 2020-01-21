---
id: "http"
title: "网络请求"
---

## http 网络请求

## 跨域问题

由于浏览器的同源策略/SOP，避免受到 xss,csfr 等的攻击。两域的文档或者脚本在“协议+域名+端口”三者任一不同的情况下，是无法进行请求通信的。（即便两个不同的域名指向同一个 ip 地址）。跨域的安全限制主要是针对浏览器，服务器是不存在跨域的安全限制的。

同源策略限制以下几种行为：

- Cookie、LocalStorage 和 IndexDB 无法读取；

- DOM 和 Js 对象无法获得；

- AJAX 请求不能发送；

## 解决方案：

1. nginx 代理跨域(反向代理):般适用于外网访问不了的内部网络请求，做反向代理来获取数据

2. node 中间件代理跨域:前后端分离引起跨域问题（从原理看 nginx 反向代理应该也适用），开发阶段前后台不同源的情况。

3. CORS 跨域资源共享:它为 web 服务器定义了一种方式,纯后端设置，无需前端做处理，如果需要携带 cookie，前后端都要配置，前端需要配置"withCredetails": "true;

4. postMessage

5. iframe+document.domain /location.hash /window.name

6. jsonp (script 标签):只支持 get 请求,需要后端配合，能够返回 callback 返回希望得到的数据；

7. WebSocket 协议跨域:l 是 HTML5 一种新的协议。它实现了浏览器与服务器全双工通信，同时允许跨域通讯，是 server push 技术的一种很好的实现。建议使用：Socket.io

注： 在本地开发环境中，可以通过 package.json 里的 proxy 做本地代理。

相关前端框架搭建的本地项目在启动的时候，也是会启动一个 devServer 服务的。而 server 也有一个服务，两者 API 形成 跨越。解决方案：

1. 可以在本地搭建 nginx（需要占用一个端口），将本地的服务代理到 server 服务上面，实现跨域。

2. 相关前端框架通过 package.json 里的 proxy 做本地代理。将本地请求代理到指点的域名上。实现跨域。
