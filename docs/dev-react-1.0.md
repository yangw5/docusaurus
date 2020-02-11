---
id: react
title: React
sidebar_label: React
---

## 生命周期

### constructor

1. 初始化 state
2. 绑定 this

### getDerivedStateFromProps

一个静态方法，所以不能在这个函数里面使用 this，这个函数有两个参数 props 和 state，分别指接收到的新参数和当前的 state 对象，这个函数会返回一个对象用来更新当前的 state 对象，如果不需要更新可以返回 null

该函数会在挂载时，接收到新的 props，调用了 setState 和 forceUpdate 时被调用

注：取代了 componentWillMount、componentWillReceiveProps 和 componentWillUpdate

### render()

每次组件更新都会调用 render()方法。组件的 props 和 state(无论重传递还是重赋值，无论值是否有变化，都会引起组件的重新 render)

### componentDidMount

组件装载之后调用，此时我们可以获取到 DOM 节点并操作，

### componentWillUnmount

### shouldComponentUpdate

有两个参数 nextProps 和 nextState，表示新的属性和变化之后的 state，返回一个布尔值，true 表示会触发重新渲染，false 表示不会触发重新渲染，默认返回 true,可用于组件优化。

### getSnapshotBeforeUpdate

这个方法在 render 之后，componentDidUpdate 之前调用，有两个参数 prevProps 和 prevState，表示之前的属性和之前的 state，这个函数有一个返回值，会作为第三个参数传给 componentDidUpdate，如果你不想要返回值，请返回 null，不写的话控制台会有警告

注：代替 componentWillUpdate/UNSAVE_componentWillUpdate

### componentDidUpdata

## 高阶组件（HOC）

    高阶组件是一个函数，接收一个组件组参数，返回新的组件。为实现组件代码的复用。（高级函数）
    如：Form.creact()(component)

    作用：属性代理，反向继承

    高阶组件内部的包装组件和被包装组件之间通过 props 传递数据。


    注意:高阶函数正常情况拿不到ref antd的form是通过设置
      wrappedComponentRef={(form) => this.formRef = form}  使用wrappedComponentRef 拿到子组件传递过来的ref。

---函数组件

---

react 组件性能优化

1. 针对无用的渲染

- class 组件

  1. shouldComponentUpdate

     手动判断每次更新前后的 state 和 props 决定是否 updata

  2. Pure Component

     extends React.PureComponent，自动对更新前后的 state 和 props 进行浅比较

- 函数组件

  1. React.memo()包裹组件，类似于 Pure Component.

     React.memo 会返回一个纯化(purified)的组件 MemoFuncComponent，这个组件将会在 JSX 标记中渲染出来。当组件的参数 props 和状态 state 发生改变时，React 将会检查前一个状态和参数是否和下一个状态和参数是否相同，如果相同，组件将不会被渲染，如果不同，组件将会被重新渲染。
