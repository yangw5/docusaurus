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

### 继承与原型链

对象都有一个私有属性（_proto_）指向构造函数的原型对象（prototype），原型对象也有自己的原型对象（_proto_）,层层向上，直到为 null。

只有函数对象才有 prototype,每个对象有 (_proto_)

当试图访问对象的属性时，不仅仅会在该对象上搜索，还会在该对象的原型及对象的原型的原型上搜索。依次层层向上搜索，直到找到一个名字匹配的属性或到达原型链的末尾。

    Person.prototype.constructor = Person

    person1.__proto__ == Person.prototype

    person1.constructor == Person

    //关系存在于实例和构造函数的原型对象之间，不存在于实例和构造函数之间

注意：构造函数的原型对象只是一个普通的对象。

如何创建对象：字面量/new Object({})，构造函数，Object.create()

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

### 借用构造函数

通过在一个构造函数里面修改另一个构造函数的 this(call(this)),实现子类型构造函数的内部调用超类型构造函数。

缺点：无法实现函数的复用，父类方法对子类不可见

### 组合继承

原型链结合构造函数

通过原型链实现函数复用和每个实例拥有自己的属性。

缺点：调用了两次父类构造函数。

### 寄生式继承

### 寄生组合式继承

通过构造函数继承属性，原型链混用来继承方法。

### 原型继承

在 object()函数内部, 先创建一个临时性的构造函数, 然后将传入的对象作为这个构造函数的原型,最后返回了这个临时类型的一个新实例.

object.create()

Object.defineProperties()
