---
id: gitnorm
title: git提交规范-BEM
sidebar_label: git提交规范
---

使用 commitzen + commitlint 实现 git commit 的规范。

## 介绍

### commitzen

格式化 commit message 的工具

### commitlint

commitlint 自身只提供了检测的功能和一些最基础的规则。类似于 eslint.

### 安装配置

yarn add 以下包

commitizen：Git 日志提交约束工具，主要工具

cz-conventional-changelog：angular 开发团队的提交日志规范模板（已经很好了，所以就直接使用该模板，暂不需要自定义模板）

@commitlint/config-conventional：校验工具的配置，适配 angular 模板

@commitlint/cli：提交日志的校验工具，校验是否符合提交约束

husky：配合 Git hook，对所有的工具 Git 提交校验规范约束

standard-version：根据提交日志，自动生成更新日志文档

安装
// yarn 安装工具，用 npm 一样

    yarn add -D @commitlint/cli @commitlint/config-conventional commitizen cz-conventional-changelog husky standard-version

package.json 添加配置

    "scripts": {
        "commit": "git-cz",
        "release": "standard-version"
    },
    "config": {
        "commitizen": {
            "path": "node_modules/cz-conventional-changelog"
        }
    },
    "husky": {
        "hooks": {
            "commit-msg": "commitlint -e $GIT_PARAMS"
        }
    }

根目录下创建 commitlintrc.js。配置

    module.exports = {
        extends: ['@commitlint/config-conventional'],
        rules:{}
    };

### 使用说明

    // 提交
    yarn commit
    // 生成change log
    yarn release

### commit type

    feat：新功能（feature）
    fix：修补bug
    docs：文档（documentation）
    style： 格式（不影响代码运行的变动）
    refactor：重构（即不是新增功能，也不是修改bug的代码变动）
    test：增加测试
    chore：构建过程或辅助工具的变动
