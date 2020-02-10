# docusaurus

docusaurus 是一个为开源项目创建一个静态网站的工具，由 facebook 开发。使用 Markdown 即可更新网站。文档、API 一应俱全

docusaurus 依赖于 node 环境，在 npm 上有相应的包。通过 npx docusaurus-init 进行网站初始化搭建，
# Young5

Young5 作为一个个人博客网站。记录本人的菜鸟学习历程。通过 markdown 的模式进行学习日志的记录。
欢迎大家指教。觉得 nice 就 Stars 鼓励打赏吧，谢谢了！

github 地址：https://github.com/yangw5/docusaurus.git

同时本人在 github 上还有有 react，react+ts 相关项目。欢迎大家指教。

react 后台管理系统： https://github.com/yangw5/react-web.git

react+ts 后台管理系统 demo:https://github.com/yangw5/react-ant-ts.git

## 启动：进入项目

yarn

cd website

yarn/npm run start
## 约定

1. 所有的文档文件都应该作为 .md 文件放在 docs 文件夹中。 任何博客文章都应该在 blog 文件夹中。

    * 要在博客中发布，请在博客文件夹中创建一个格式为 YYYY-MM-DD-My-Blog-Post-Title.md 的文件。 发布日期是从文件名中提取的。

    在siteConfig里配置{ blog: true, label: "xx" },会自动加载出所有博客，导航栏按时间顺序排列，

      例如，在 website/blog/2017-08-18-Introducing-Docusaurus.md:

          ---
          author: Frank Li - 作者署名的文本标签。
          authorURL: https://twitter.com/foobarbaz - 与作者相关的网址。 这可能是一个Twitter，GitHub，Facebook帐户等。
          authorFBID: 503283835   - 用于提取个人资料图片的 Facebook ID。
          title: Introducing Docusaurus - 博客文章标题。
          ---
      注意： <!--truncate--> 标记来表示在查看博客发布的所有博客文章时将显示的摘要。
      

2. headr定义:其中 id 是链接名称（例如 docs/intro.html），title 当然是浏览器页面的标题

      ---
      id: intro
      title: 入门
      ---

3. sidebars.json ：右侧导航配置
4. website/siteConfig.js 文件来配置网站
5. 创建任何的 自定义页面 和/或 自定义 website/core/Footer.js 文件来为你的网站提供页脚。
6. 将网站资源（如图像）放在 website/static/ 文件夹中。
7. Docusaurus 目前不支持嵌套文件夹中的文件; 只能是在一个平面文件结构中

## 打包发布静态版本

      yarn run build # 或 `npm run build`