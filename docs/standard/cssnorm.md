---
id: cssnorm
title: css命名规范-BEM
sidebar_label: css命名规范
---

## B(块)

    block :代表高级别的抽象或者组件，可复用而不依赖其他组件块

## E(元素)

    element :块中的某一部分，子元素

## M(修饰符)

    modifier :块的特点状态，即块的特点属性。修饰块，体现出外形行为状态等特征。

## 连接符

\- 中划线 ：仅作为连字符使用，表示某个块或者某个子元素的多单词之间的连接记号。

\_\_ 双下划线：双下划线用来连接块和块的子元素

\_ 单下划线：单下划线用来描述一个块或者块的子元素的一种状态

## 例如(B\_\_E_M):

    css常规使用：
    search-form__button_hover

    结合less使用：
    .search-form{
    	&__button{
    		&_bover{
    			...
    		}
    	}
    }

## 注意

- 保证各个部分只有一级 B**E*M ，修饰器需要和对应的块或元素一起使用，避免单独使用
  eg:
  /*出现 content-left, h2 两个元素\_/
  search-form**content-left\_\_h2
- 在样式文件中，仅以类名作为选择器，不使用 ID 或标签名来约束选择器，且 CSS（或者 SCSS 编译后的 CSS）中的选择器嵌套不超过 2 层，增加效率和复用性，减少选择器之间的耦合度。

      		eg:
      			&_hover {}
      		/* 应该把这个元素提取出来 */
      		&-set {
      			&_hover {}

<!-- This is a link to [another document.](doc3.md)
This is a link to an [external page.](http://www.example.com) -->
