---
id: D3
title: D3
---

## js 实现数据可视化的函数库

元素选择：d3.select()/selectAll()

数据绑定：datun()/data() (结合 text(function)使用)

增删：append() insert() remove()

画布：

canvas：js 元素，绘制 2D 图形

SVG:缩放矢量图，描述二维矢量图形的一种图形格式（图形即对象，不失真）

画布添加：

    var width = 300;  //画布的宽度
    var height = 300;   //画布的高度

    var svg = d3.select("body")     //选择文档中的body元素
        .append("svg")          //添加一个svg元素
        .attr("width", width)       //设定宽度
        .attr("height", height);    //设定高度

.enter() 指定选择集的 enter 部分

比例尺：max min d3.scale.linear()

坐标：d3.svg.axis() orient()：指定刻度的朝向，bottom 表示在坐标轴的下方显示。
ticks()：指定刻度的数量。
