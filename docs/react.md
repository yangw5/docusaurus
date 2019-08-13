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

每次组件更新都会调用 render()方法。组件的props和state(无论重传递还是重赋值，无论值是否有变化，都会引起组件的重新render)

### componentDidMount

组件装载之后调用，此时我们可以获取到 DOM 节点并操作，

### componentWillUnmount

### shouldComponentUpdate

有两个参数 nextProps 和 nextState，表示新的属性和变化之后的 state，返回一个布尔值，true 表示会触发重新渲染，false 表示不会触发重新渲染，默认返回 true,可用于组件优化。

### getSnapshotBeforeUpdate

这个方法在 render 之后，componentDidUpdate 之前调用，有两个参数 prevProps 和 prevState，表示之前的属性和之前的 state，这个函数有一个返回值，会作为第三个参数传给 componentDidUpdate，如果你不想要返回值，请返回 null，不写的话控制台会有警告

注：代替 componentWillUpdate/UNSAVE_componentWillUpdate

### componentDidUpdata
