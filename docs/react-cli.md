---
id: react-cli
title: React 脚手架开发
sidebar_label: React 脚手架开发
---

## 依赖

          "dependencies": {
                "chalk": "^3.0.0",
                "commander": "^4.0.1",//node 命令行开发
                "download-git-repo": "^3.0.2",
                "inquirer": "^7.0.1",
                "ora": "^4.0.3"
            }

## 入口文件 bin/react-cli.js 文件

## commander

### 路径处理

path 模块

        var path = require('path');
        方法： basename，extname，join，resolve。。。

### 文件系统处理

fs-extra 模块

        var fse = require('fs-extra');

### 进程

process（主进程）和 child_process（子进程）。process 对象是一个 global（全局变量，控制当前 NodeJs 进程。作为一个对象，它对于 NodeJs 应用程序始终是可用的，故无需使用 require()。

常用属性和方法：

1. process.argv //返回 数组[node 进程执行的绝对路径，node 执行文件的绝对路径，。。。node 命令参数]

2. process.cwd() //获取当前 NodeJs 进程所在的工作目录

3. process.exit() //强制结束当前 NodeJs 进程

4. process.pid //每个进程启动的时候 NodeJs 都会分配为其一个唯一的进程 ID

5. process.kill(pid[, signal]) //杀死指定 pid 的进程，如果该 pid 不存在，则抛出异常

6. process.platform //返回系统的标识符

7. process.chdir(directory) //将 NodeJs 进程当前工作目录切换为目标目录，和你在命令行使用 cd directory 一样效果，如果目标目录不存在，则抛出异常

8. child_process（子进程）

### shelljs 模块

重新包装了 child_process,调用系统命令更加简单

### 命令行处理

commander 模块

npm install commander -g

            const program = require('commander')

属性和方法：（方法可以链式调用）

1.  version( string ) //定义版本号

2.  command('init') //自定义命令 参数可以用 <> 或 [] 修饰

3.  description(string) //命令描述

4.  option(flags <String>, description//描述, fn//自定义方法, defaultValue//参数默认值) //参数自定义

    - flags <String>：自定义参数格式,格式为"-shortFlag, --longFlag null|<value>|[value]|<value>..<value>"
      \\短标识 长标识 修饰


        eg:
            program
            .version('0.0.1')
            .usage('[options] <file ...>')
            .option('-i, --integer <n>', 'An integer argument', parseInt)
            .option('-f, --float <n>', 'A float argument', parseFloat)
            //限定输入格式为 <a>..<b>
            .option('-r, --range <a>..<b>', 'A range', range)
            .option('-l, --list <items>', 'A list', list)
            .option('-o, --optional [value]', 'An optional value')
            //默认值为空数组[]
            .option('-c, --collect [value]', 'A repeatable value', collect, [])
            .option('-v, --verbose', 'A value that can be increased', increaseVerbosity, 0)
            .parse(process.argv);

5.  action(function) //定义方法触发调用

6.  parse(process.argv) //解析命令参数，参数定义完成后才能调用

7.  on() //自定义相关信息

8.  help(): 打印帮助信息并立即结束当前进程

9.  outputHelp()：打印帮助信息，然后等待用户继续输入信息，不结束当前进程

注： .outputHelp()方法和.help()方法都可以带一个参数——一个回调方法，打印信息在显示到命令行之前会先传入这个方法，你可以在方法里面做必要的信息处理，比如改变文本颜色。

### ora

微调节器：图标等的自定义

     const ora = reqiure('ora');
     const spinner = ora('first attemp!!!').start();

     spinner.stop();

### chalk

可以给终端的字体加上颜色。

        const chalk = require('chalk');
        chalk.red.bold.bgWhite('Hello World') //字体样式加粗等／字体颜色／背景颜色

### download-git-repo

下载并提取 git 仓库，用于下载项目模板

download(repository, destination, options, callback) //github 库地址 目标文件夹 下载时携带的参数 完成之后的回调

        //在顶部添加这句:
        #!/usr/bin/env node  --这种用法是为了防止操作系统用户没有将node装在默认的/usr/bin路径里。当系统看到这一行的时候，
        首先会到env设置里查找node的安装路径，再调用对应路径下的解释器程序完成操作。
        //download-git-repo踩坑(路径错误导致下载模板失败--git clone status 128)
        //从github上下载所需得template 下载地址不是你复制得https://github.com/xxx/xxx.git
        //正确写法：
        download('github:Shadownc/express-tpl#master', name, {clone: true}, (err) => {
            console.log(err ? 'Fail' : 'Success')
        })
        //还有一种简写：
        Shadownc/express-tpl#master
        //#master为模板所在的分支

### 命令行交互

### Inquirer.js 或者 co-prompt

通用的命令行用户界面集合，用于和用户进行交互。

1.  Inquirer.js

        eg:
            var inquirer = require('inquirer')

            inquirer.prompt([
            {
            type: 'confirm',
            name: 'test',
            message: 'Are you handsome?',
            default: true
            }
            ]).then((answers) => {
            console.log('结果为:')
            console.log(answers)
            })`

    - Questions<obj>:

              {
                  type: String, // 表示提问的类型，下文会单独解释
                  name: String, // 在最后获取到的answers回答对象中，作为当前这个问题的键
                  message: String|Function, // 打印出来的问题标题，如果为函数的话
                  default: String|Number|Array|Function, // 用户不输入回答时，问题的默认值。或者使用函数来return一个默认值。假如为函数时，函数第一个参数为当前问题的输入答案。
                  choices: Array|Function, // 给出一个选择的列表，假如是一个函数的话，第一个参数为当前问题的输入答案。为数组时，数组的每个元素可以为基本类型中的值。
                  validate: Function, // 接受用户输入，并且当值合法时，函数返回true。当函数返回false时，一个默认的错误信息会被提供给用户。
                  filter: Function, // 接受用户输入并且将值转化后返回填充入最后的answers对象内。
                  when: Function|Boolean, // 接受当前用户输入的answers对象，并且通过返回true或者false来决定是否当前的问题应该去问。也可以是简单类型的值。
                  pageSize: Number, // 改变渲染list,rawlist,expand或者checkbox时的行数的长度。
              }

      注：default, choices, validate, filter, when 等函数都能被异步调用。同时返回一个 promise 或者通过使用 this.async()函数来进行回调获取最终值。

    - Answers :promise 的回调 then()
    - Separator
    - Prompt types:问题类型（小写）：List，Raw list，Expand，Checkbox，Confirm，Input，Input，Editor

2.  co-prompt

            var co = require('co');
            var prompt = require('co-prompt');

    方法和属性：

    - prompt(msg) ：put 文本提示
    - prompt.password(msg, [mask]) ：非明文密码提示。mask ：密码替换符号
    - prompt.multiline(msg) :多行文本提示
    - prompt.confirm(msg)：确认提示信息


    eg:
            var co = require('co');
            var prompt = require('co-prompt');

            co(function*() {
                var username = yield prompt('username: ');
                var pwd = yield prompt.password('password: ');
                var desc = yield prompt.multiline('description:');
                var ok = yield prompt.confirm('are you sure?(yes|no)');
                console.log('hello %s %s\n', username, pwd);
                console.log('you describe yourself as:\n' + desc);
                console.log('answer: %s', ok);
                process.exit();
            });

通过 console.log 返回提交数据

### handlebars.js

模板引擎，将用户提交的信息动态填充到文件中。

### log-symbols

可以在终端上显示出 √ 或 × 等的图标。

    var logSymbols = require('log-symbols');

    console.log(logSymbols.success, 'finished successfully!');

相关 api:

- logSymbols
- info
- success
- warning
- error
- Related
- License

## 模版信息配置文件

templates.json 用来存放模版信息,即项目 git 远程拉取项目模板。如 react-cli

      {
        "creact-react-app": {
            "place": "facebook/create-react-app", //github模板名称
            "branch": "master" //分支类型
        },
        "young5": {
            "place": "",
            "branch": ""
        }
        }
