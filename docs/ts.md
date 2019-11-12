## TypeScript

### 数据类型

- 布尔值（boolean）//首字母小写为类型 大写为构造函数（除去 null underfind）

- 数值（number）

- 字符串（string）

- 空值 （void）//只能赋值为 underfind 和 null

- null 和 underfind//undefined 和 null 是所有类型的子类型,可以赋值为其他类型

- 任意类型（any）//未声明类型的会被默认识别为 any

  let something;
  something = 'seven';
  something = 7;

类型推论

    let myFavoriteNumber = 'seven';//推论为string
    myFavoriteNumber = 7;//报错

- 联合类型 使用 |（或）//联合类型只可以访问它们公共的属性方法

  let myFavoriteNumber: string | number;
  myFavoriteNumber = 'seven';
  myFavoriteNumber = 7;

### 接口

interface:于对类的一部分行为进行抽象，也常用于对「对象的形状（Shape）」进行描述。一般首字母大写。（不允许多和少属性）

    interface Person {
        name: string;
        age: number;
    }

    let tom: Person = {
        name: 'Tom',
        age: 25
    };

- 可选参数: ? eg: name?:string
- 任意属性：[]:any eg: [propName: string]: string; //一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
- 只读属性： rendonly eg: rendonly id:numeber; //只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候：

### 数组类型

- \[类型+方括号\] 表示法

  let fibonacci: number[] = [1, 1, 2, 3, 5];

- 数字泛型（Array<elemType>）

  let fibonacci: number[] = [1, 1, 2, 3, 5];

- 接口表示数字

  interface NumberArray{
  [index:number]:number;
  }
  let fibonacci: NumberArray = [1, 1, 2, 3, 5];

- 类数组 类数组不是数组类型。eg：arguments

  function sum() {
  let args: number[] = arguments;
  }

any 在数字中表示任意类型

### 函数类型

- 函数声明：（输入，输出） //输入多余的（或者少于要求的）参数，是不被允许的：

  function sum(a:number,b:number):number{}

* 函数表达式：
  let mysum=function(x:number,y:number):number{}//mysum 是通过类型推论自动赋予类型

  如：
  let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y;
  };

- 接口定义函数
  interface SearchFunc {
  (source: string, subString: string): boolean;
  }

  let mySearch: SearchFunc;
  mySearch = function(source: string, subString: string) {
  return source.search(subString) !== -1;
  }

* 可选参数
  lastName?: string

* 参数默认值

  lastname:string='cat'

- 剩余参数

  ...items:any[]

- 重载

  重载允许一个函数接受不同数量或类型的参数时，作出不同的处理

### 类型断言

<类型>值 或 值 as 类型

### 文件声明

### 内置对象

ECMAScript 标准提供的内置对象有：

    Boolean、Error、Date、RegExp 等。

DOM 和 BOM 提供的内置对象有：

    Document、HTMLElement、Event、NodeList 等。
