---
id: Ra
title: react 结合 antd 开发
sidebar_label: react 结合 antd 开发
---

## react 结合 antd 在线主题开发

主题切换思路：

- css 切换文件：通过页面加载不同的 css 文件显示不同样式
- css 变量切换
- less 切换
- less 结合 css 变量切换：antd-theme-generator 或者 antd-theme-webpack-plugin
- 组件封装：包裹子组件，为子组件设置相应 css 类：css in js

### antd-theme-generator

使用 less 的 modifyVars 完成 antd 的主题变量替换。结合 css 变量进行全局主题替换//var(--xxx)。

要求：

1.  需要配合 LESS v2.7.x 使用

步骤:

1.  添加 color.js 文件进行配置

        const path = require('path');
        const { generateTheme } = require('antd-theme-generator');

        const options = {
        antDir: path.join(**dirname, './node_modules/antd'),
        stylesDir: path.join(**dirname, './src/style/antd'),
        varFile: path.join(**dirname, './src/style/antd/variables.less'),
        mainLessFile: path.join(**dirname, './src/style/antd/index.less'),
        themeVariables: ['@primary-color', '@primary-color-rgba', '@primary-assist-color'],
        indexFileName: 'index.html',
        outputFilePath: path.join(\_\_dirname, './public/color.less'),
        };

        generateTheme(options)
        .then(less => {
        console.log('Theme generated successfully');
        })
        .catch(error => {
        console.log('Error', error);
        });

2.  在 css 文件下添加 less 文件

- 添加 variables.less 文件

        @import "~antd/lib/style/themes/default.less"; //引入 antd 的变量文件，实现变量的覆盖
        @primary-color: #1DA57A;
        @link-color: #1DA57A;
        @btn-primary-bg:#1DA57A;

- variabless.less 文件设置 css 变量，实现全局样式配置

        :root {
            --primary: @primary-color; //color.less中加入css原生变量：--primary
            --primary-rgba: @primary-color-rgba; //顶部渐变
            --primary-assist-color: @primary-assist-color; //辅助色底色
        }

3.  HTML 文件中加入全局 less 配置

        <!-- 可封装成js文件引入 使用自动生成的color.less，主要路径与index.html文件同级 -->
        <link rel="stylesheet/less" type="text/css" href="%PUBLIC_URL%/color.less" />
        <script>
        window.less = {
            async: false,
            env: 'production'
        };
         window.less
        .modifyVars({
            '@primary-color': themecolor.color, //主题色
            '@primary-color-rgba': themecolor.rgba, //主题色rgb
            '@primary-shadow-color': themecolor.shadowColor, //渐变颜色
            '@primary-text-color': themecolor.textColor, //文字颜色
            '@primary-assist-color': themecolor.assistColor, //辅助颜色
        })
        .then(() => {
            // 编译成功
            console.log('编译成功');
        })
        .catch(() => {
            // 编译失败
            console.log('编译失败');
        });
        </script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/less.js/2.7.2/less.min.js"></script>

    注意：如果将全局 less 配置写在 app.js 里，会存在刷新样式过渡时间过长，用户体验不好的情况。同时需要等待
    https://cdnjs.cloudflare.com/ajax/libs/less.js/2.7.2/less.min.js 文件加载完成后进行设置

            //设置主题
        setTheme = () => {
            //异步加载less.js切换主题
            window.less = {
                async: true,
            };
            if (window.less && window.less.modifyVars) {
                this.changeTheme();
                return;
            }
            loadScript('https://cdnjs.cloudflare.com/ajax/libs/less.js/2.7.2/less.min.js').then(res => {
                if (!window.less || !window.less.modifyVars) {
                    return;
                } else {
                    this.changeTheme();
                }
            });
        };

        changeTheme = () => {
            let themeid = localStorage.getItem('themeColor');
            let themecolor = THEME_IPTION[0].theme;
            console.log('主题缓存');
            console.log(themecolor);
            THEME_IPTION.forEach(v => {
                if (v.id === Number(themeid)) themecolor = v.theme;
            });
            window.less
                .modifyVars({
                    '@primary-color': themecolor.color, //主题色
                    '@primary-color-rgba': themecolor.rgba, //主题色rgb
                    '@primary-shadow-color': themecolor.shadowColor, //渐变颜色
                    '@primary-text-color': themecolor.textColor, //文字颜色
                    '@primary-assist-color': themecolor.assistColor, //辅助颜色
                })
                .then(() => {
                    // 编译成功
                    console.log('编译成功');
                })
                .catch(() => {
                    // 编译失败
                    console.log('编译失败');
                });
        };

4.  项目启动处修改

- 修改项目运行配置 package.json，项目运行的同时完成页面 color 文件的配置"scripts":

        {
        "start": "node color && node scripts/start.js",
        "build": "node color && node scripts/build.js",
        "test": " node color && node scripts/test.js"
        },

  注意：项目启动文件执行顺序的不同

         {
        "start": " node scripts/start.js && node color ",
        "build": " node scripts/build.js && node color",
        "test": "  node scripts/test.js && node color"
        },

5. 页面调用方法切换主题

- 页面点击主题切换配置，这样写的缘故是因为我配置的变量不同：

        window.less.modifyVars({
            '@primary-color': theme.color, //主题颜色
            '@primary-shadow-color': theme.shadowColor, //渐变颜色
            '@primary-text-color': theme.textColor, //文字颜色
            '@primary-assist-color': theme.assistColor, //辅助颜色
            '@primary-color-rgba': theme.rgba,
        })
        .then(() => {
        message.success('主题切换成功')
        })
        .catch(error => {
        message.error(`主题切换失败`);
        console.log(error)
        });

6. 自定义的 less 文件配置， 通过 var(--primary)变量进行样式设置

7. 主题缓存，存在浏览器中或数据库中。

资料: [antd 在线换肤定制功能](https://yq.aliyun.com/articles/662349): <https://yq.aliyun.com/articles/662349v>

## react 结合 antd 组件库开发

form 表单组件开发：对 antd 组件进行二次开发

### 表单基础组件的开发

作为 form 表单的基础组件，包括 input,select,checkbox 等，提供基本的 api 接口。
经 Form.create() 包装过的组件会自带 this.props.form 属性,基础组件的 form 及相关属性控制均由父组件传递。
基础组件内部不可对特殊情况数据进行特别处理，都由外部组件传递相关函数予以控制。

原理：通过 getFieldDecorator(field,option)(component)将基础组件和 form 表单进行数据的双向绑定。而不需要手动对基础表单组件进行 value 的绑定监听等。通过设置 option 的相关属性，实现对输入数据进行校验转化等。

1. 组件展示样式定义

- label 字段名
- labelCol label 样式
- wrpperCol 输入控件样式
- addonAfter 输入控件额外 dom
- placeholder 占位符

2. 数据来源

- initialValue：初始值
- field:表单字段名
- form

3. 数据约束

- rules

  - max
  - required
  - validator ：自定义校验
  - readOnly
  - ruleType
  - validateFirst

4. 数据输出

- form

  - getFieldDecorator //数据双向绑定 同时设置数据相关约束条件

        1. normalize ：转换默认的value值给控件
            - valueFilter  //自定义方法 数据转换 格式化输出

        2. initialValue：默认值
        3. rules：校验规则
           - max
           - required
           - transform：校验前转换字段值
           - validator：自定义校验
        4. getValueFromEvent：获取onChange的参数转化给控件

  - getFieldsValue:获取一组组件的值
  - getFieldValue：获取 form 的值
  - setFields
  - setFieldsValue ：手动修改 form 的值
  - validateFields

- callback：传递函数回调将数据暴露到外部组件（高阶函数）

* form.item

  - hasFeedback：提示图标 input 使用
  - validateStatus:'success' 'warning' 'error' 'validating'
  - help:提示信息

### 表单自定义组件的开发

在表单基础组件的开发的基础上，将表单双向绑定的基础组件设置为 input,作为隐藏域（<Input style={{ display: 'none' }} />），在设置自定义显示的组件（可以多组件组合）。通过给该组件绑定事件，监听该组件的状态变化，在通过 getFieldsValue 和 setFieldsValue 来手动获取和设置 form 的数据，从而实现 form 表单和自定义组件的数据绑定。
