---
id: es6
title: es6
sidebar_label:es6
---

## 对数组的操作

### 解构

### 扩展运算符

    将一个数组，变为参数序列

    代替apply方法

### 循环

## 继承与原型链

### 函数对象和普通对象

除 new Function()之外的都是普通对象，每个对象实例的 constructor 执行对象的构造函数

对象都有一个私有属性（\_\_proto\_\_ ）指向构造函数的原型对象（prototype），原型对象也有自己的原型对象 \_\_proto\_\_ ,层层向上，直到为 null。

只有函数对象才有 prototype,每个对象有 (\_\_proto\_\_ )，（Object.prototype.\_\_proto\_\_=== null // true）

当试图访问对象的属性时，不仅仅会在该对象上搜索，还会在该对象的原型及对象的原型的原型上搜索。依次层层向上搜索，直到找到一个名字匹配的属性或到达原型链的末尾。

    Person.prototype.constructor = Person

    person1.__proto__ == Person.prototype

    person1.constructor == Person

    //关系存在于实例和构造函数的原型对象之间，不存在于实例和构造函数之间

作用：原型对象用于继承

注意：

1. 构造函数的原型对象只是一个普通的对象。原型对象（Person.prototype）是 构造函数（Person）的一个实例。
2. Function.prototype 除外，它是函数对象，但它很特殊，他没有 prototype 属性

### 如何创建对象

字面量 new Object({})，构造函数，Object.create()

1.  new 的实现方式
    JavaScript 实际上执行的是：

         var o1 = new Object();//创建一个空对象 obj，创建上下文 this 指向空对象
         o1.[[Prototype]] = Base.prototype;//获取构造函数的方法 \_\_proto\_\_指向构造函数的 prototype
         Base.call(o1);//将构造函数的 this 指向 obj，返回 this（如果显示返回对象，this 为该对象 否则为 obj）

2.  Object.creact 的实现方式

        //Object.create 的实现方式 create（）里面里面的参数为对象的原型对象
        Object.create = function (o) {
        var F = function () {};//创建一个空的构造函数
        F.prototype = o;//设置原型对象
        return new F();//返回 F 的实例 所以 Object.create 创建的对象的**proto**指向 o
        };

        Object.create = function (obj) {
        var B={};
        Object.setPrototypeOf(B,obj);
        return B;
        };

        Object.create = function (obj) {
        var B={};
        B.\_\_proto\_\_=obj;
        return B;
        };

例子：

    var Base = function () {
        this.a = 2
    }
    Base.prototype.a = 3;
    var o1 = new Base();
    var o2 = Object.create(Base);//这里的o2自身没有a属性，访问__proto__是Bsae，这是一个构造函数 this是window全局，this.a就产生了变化
    console.log(o1.a); //2
    console.log(o2.a);//underfind

如果是 var o2 = Object.create(new Base())呢？

打印出啥？（）

### 相关属性及方法

1. constructor

1. prototype

1. setPrototypeOf

1. create

1. getPrototypeOf

1. hasOwnProperty

JavaScript 中唯一一个处理属性并且不会遍历原型链的方法

## 继承的实现方式

问题：如何实现属性和函数复用？

公用的放在 prototype,私有的放在构造函数。

所以的继承方式都是基于构造函数和原型链这两种继承方式实现的。

1. 通过原型链，即子类的原型指向父类的实例从而实现原型共享。
2. 借用构造函数，即通过 js 的 apply、call 实现子类调用父类的属性、方法；

### 借用构造函数

通过在一个构造函数里面修改另一个构造函数的 this(call(this)),实现子类型构造函数的内部调用超类型构造函数。

缺点：无法实现函数的复用，父类原型属性和方法对子类不可见

### 原型继承

在 object()函数内部, 先创建一个临时性的构造函数, 然后将传入的对象作为这个构造函数的原型,最后返回了这个临时类型的一个新实例.

object.create()

Object.defineProperties()

缺点：实现所有属性方法共享，但无法做到属性、方法独享，引用属性会被篡改导致子类相互影响。

### 组合继承

原型链结合构造函数

通过原型链实现函数复用和每个实例拥有自己的属性。

缺点：组合模式的缺点就是在使用子类创建实例对象时，其原型中会存在两份相同的属性/方法，调用了两次父类构造函数。

### 寄生式继承

类似于工厂模式。

    function createAnother(original){//传入的是对象
    var clone = object(original); // 通过调用 object() 函数创建一个新对象
    clone.sayHi = function(){  // 以某种方式来增强对象
        alert("hi");
    };
    return clone; // 返回这个对象

}

著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

缺点：原型链继承多个实例的引用类型属性指向相同，存在篡改的可能。
无法传递参数

### 寄生组合式继承

通过构造函数继承属性，原型链混用来继承方法。

注意：构造函数可以避免数据篡改，原型可扩展方法

[实例可见](https://codesandbox.io/s/reactdemo2-r98w2)
