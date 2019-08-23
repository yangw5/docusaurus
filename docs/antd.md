---
id: antd
title: antd
---

## [AutoComplete](https://ant.design/components/auto-complete-cn/) 自动完成

## [表单](https://ant.design/components/form-cn/#%E8%A1%A8%E5%8D%95)

### Form

创建实体并进行数据校验，然后提交。包含多种元素。

- Form.create()()：经过 Form.create 包装的组件将会自带 this.props.form 属性

基础属性：layout（排列方式），labelCol（label 布局）...

### 表单域

<Form.Item />

基础属性：layout（排列方式），label（标签文本），labelCol（label 布局）...

## 数据

- getFieldDecorator(id, options) 实现数据的双向绑定

  1. options.initialValue 默认值

  2. options.normalize 数据转换

  3. options.rules 校验规则

如果使用 getFieldsValue getFieldValue setFieldsValue 前需要使用 getFieldDecorator 注册

### 校验规则

- max

- message

- required

- validator(Function) 自定义校验
