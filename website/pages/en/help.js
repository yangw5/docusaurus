/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-08-15 17:27:02
 * @LastEditors  : yangw5
 * @LastEditTime : 2019-12-30 15:41:42
 * @FilePath: \docusaurus\website\pages\en\help.js
 */
/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Help(props) {
  const { config: siteConfig, language = "" } = props;
  const { baseUrl, docsUrl } = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
  const langPart = `${language ? `${language}/` : ""}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const allitem = [
    {
      title: `[rollup](${docUrl(
        "doc1.html"
      )})`
    },
    {
      title: `[storybook](${docUrl(
        "doc1.html"
      )})`
    },
  ];


  const supportLinks = [
    {
      content: `Learn more using the [documentation on this site.](${docUrl(
        "doc1.html"
      )})`,
      title: "构建工具"
    },
    {
      content: `查看详细信息请前往[戳我](${docUrl(
        "doc1.html"
      )})`,
      title: "组件库搭建"
    },
    {
      content: "Find out what's new with this project",
      title: "打包工具"
    },
    {
      content: "Find out what's new with this project",
      title: "测试工具"
    },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>朱雀</h1>
            <h2>涉及到自己不会的，好玩的，有兴趣的，新兴的技术等</h2>
          </header>
          <GridBlock contents={allitem} layout="threeColumn" />
          <div style={{border:'1px solid red',height:'1px',width:'100%'}} />
          <GridBlock contents={supportLinks} layout="threeColumn" />
        </div>
      </Container>
    </div>
  );
}

module.exports = Help;
