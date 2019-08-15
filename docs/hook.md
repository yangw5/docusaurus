---
id: Hook
title: Hook
sidebar_label: Hook
---

## Hook 简介

复用状态逻辑；将复杂组件中关联的部分拆分成小的函数模块，简化生命周期里的复杂逻辑；拥抱函数组件。

## 用法

单个组件中使用多个 State Hook 或 Effect Hook，React 靠 Hook 调用的顺序。

### useState

    （做什么，参数，返回值）
    const [count,setCount]=useState(0)//[状态，改变状态的函数]=useState(状态初始值)

给组件内部添加 state ，重复渲染会保留 state,使用时直接引用 state，无需用 this。可多次使用 useState。

### useEffect

将 class 组件中的生命周期函数整合到 useEffect 中，在函数中执行副作用(数据获取，设置订阅以及手动更改 React 组件中的 DOM 都属于副作用。)。默认情况下，它在第一次渲染之后和每次更新之后都会执行。effect 返回一个函数，React 将会在执行清除操作时调用它。

    userEffect(()=>{},[object])
    //react会根据[object]是否变化进行除第一次之后的更新是否渲染。 [object]是[],只会在第一次渲染执行effect。（性能的优化）

注：与 componentDidMount 或 componentDidUpdate 不同，使用 useEffect 调度的 effect 不会阻塞浏览器更新屏幕，这让你的应用看起来响应更快。

### 自定义 Hook

将逻辑抽离出来，进行分装，是对逻辑的复用，state 独立。并且 函数的名字以 “use” 开头并调用其他 Hook

    function FriendStatus(props) {

        const isOnline = useFriendStatus(props.friend.id);

        if (isOnline === null) {
            return 'Loading...';
        }
        return isOnline ? 'Online' : 'Offline';
    }

### Hook 规则

- 不要在循环，条件或嵌套函数中调用 Hook

- 只在 React 函数中调用 Hook

## Hook API 索引

### useRef

useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数（initialValue）。返回的 ref 对象在组件的整个生命周期内保持不变。React 都会将 ref 对象的 .current 属性设置为相应的 DOM 节点。

父组件获取子组件的方法：通过子组件引入 forwardRef, useImperativeHandle 设置,父组件对子组件设置 ref, 通过处理，父组件获取 HOC 子 ref。 使用
useImperativeHandle(ref, () => modalRef.current)，是将子组件自生暴露给父组件的 ref 属性;forwardRef 包裹子组件，获取 ref。就可使用子组件的 modalRef.current.xx()方法了。

    function TextInputWithFocusButton() {
        const inputEl = useRef(null);
        const onButtonClick = () => {
            // `current` 指向已挂载到 DOM 上的文本输入元素
            inputEl.current.focus();
        };
        return (
        <>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Focus the input</button>
        </>

     );
    }

[实例链接](https://codesandbox.io/s/sharp-meitner-grhmo) 见 hook.js 文件

### 获取上一轮的 props 或 state

通过 ref 来手动实现。useEffect 是异步执行，会先获取到上一次的.current，，在进行赋值，就可以获取前后两次的 value 值了。

    const [count, setCount] = useState(0);

    const prevCountRef = useRef();

    useEffect(() => {
        prevCountRef.current = count;
    });
    const prevCount = prevCountRef.current;

自定义 hook 获取

    function Counter() {
        const [count, setCount] = useState(0);
        const prevCount = usePrevious(count);
        return <h1>Now: {count}, before: {prevCount}</h1>;
    }

    function usePrevious(value) {
        const ref = useRef();
        useEffect(() => {
        ref.current = value;
        });
        return ref.current;
    }
