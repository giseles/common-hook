# common-hook

提供项目中常用的 React Hooks

> 前端业务代码工具库

提供项目中常用的工具 Hooks，对输入输出函数做了特殊处理，避免闭包问题,包含丰富的基础 Hooks 以及提炼自业务的高级 Hooks

### 使用说明

```js
npm i common-hook

```

```js
yarn add common-hook

```

### 按需加载 默认支持基于 ES Modules 的 Tree Shaking

```js
import { useMount, useUnmount } from "common-hook"

useMount(() => {
  console.log("useMount")
})
useUnmount(() => {
  console.log("useUnmount")
})
```

## :package: API 文档

### 辅助 Hooks

#### useLatest 返回的永远是最新值

### 浏览器 Hooks

#### useEventListener 事件监听

#### useTitle 设置页面标题

#### useHover 监听 DOM 元素是否鼠标悬停

#### useMouse 监听鼠标位置

### Effect Hooks

#### useUpdateEffect 首次不执行，只在依赖项更新时执行

#### useDeepCompareEffect 依赖项更新时,深度比较

#### useAsyncEffect 支持异步函数

#### useLockFn 给一个异步函数增加竞态锁，防止并发执行

#### useDebounceEffect useEffect+防抖

#### useDebounceFn 处理防抖函数的 Hook

#### useThrottleEffect useEffect+节流

#### useThrottleFn 处理函数节流的 Hook

#### useInterval 处理 setInterval 的 Hook

#### useTimeout 处理 setTimeout 的 Hook

### 生命周期 Hooks

#### useMount 在组件首次渲染时，执行方法

#### useUnmount 在组件卸载时，执行函数

### 状态 Hooks

#### useSetState 管理 object 类型 state 的 Hooks

#### useBoolean 切换 boolean，可以接收默认值

#### useToggle 用于在两个状态值间切换 Hook

#### useDebounce 处理防抖值 Hook

#### useThrottle 处理节流值 Hook

#### useRafState 只在 requestAnimationFrame callback 时更新 state
