/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const { siteConfig, language = "" } = this.props;
    const { baseUrl, docsUrl } = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/undraw_monitor.svg`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href="#try">背景</Button>
            <Button href="#tools">攻略</Button>
            <Button href="#work">行走</Button>
            <Button href={docUrl("doc2.html")}>卓越</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = "" } = this.props;
    const { baseUrl } = siteConfig;

    const Block = props => (
      <Container
        padding={["bottom", "top"]}
        id={props.id}
        background={props.background}
      >
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{ textAlign: "center" }}
      >
        <h2>学无止境，永攀高峰</h2>
        <MarkdownBlock>
          语言：html5,js,ts,css,less,sass。框架：react,vue,angular.UI库：antd,element。数据可视化：echars,D3。游戏引擎：laya,白鹭。
          辅助工具：webpack,glup,git,bable。规范：git,css等规范（eslint...）。微前端。微信小程序。app开发。组件化配置话开发。npm.
        </MarkdownBlock>
      </div>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content: "很久很久以前，",
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: "left",
            title: "背景"
          }
        ]}
      </Block>
    );

    const Description = () => (
      <Block id="work" background="dark">
        {[
          {
            content: "爬，滚，走，跑",
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: "left",
            title: "行走"
          }
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block id="tools" background="light">
        {[
          {
            content: "初级，中级，高级",
            image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
            imageAlign: "right",
            title: "攻略"
          }
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: "This is the content of my life",
            image: `${baseUrl}img/undraw_react.svg`,
            imageAlign: "top",
            title: "记录"
          },
          {
            content: "The content of my conclusion",
            image: `${baseUrl}img/undraw_operating_system.svg`,
            imageAlign: "top",
            title: "总结"
          },
          {
            content: "The content of my aims",
            image: `${baseUrl}img/undraw_operating_system.svg`,
            imageAlign: "top",
            title: "提升"
          }
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : "") + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>谁会用她呢?</h2>
          <p>欢迎大家发布文章到网站和提出宝贵意见</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl("users.html")}>
              更多 {siteConfig.title} 信息
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <FeatureCallout />
          <TryOut />
          <LearnHow />
          <Description />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;
