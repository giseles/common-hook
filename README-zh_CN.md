 <h1 align="center">common-hook</h1>
<div align="center">

[English](./README.md) | 简体中文

</div>

> 前端业务代码工具库

提供项目中常用的 React Hooks，对输入输出函数做了特殊处理，避免闭包问题,包含丰富的基础 Hooks 以及提炼自业务的高级 Hooks

### 安装说明

```js
npm i common-hook

```

```js
yarn add common-hook

```

### 按需加载

> 默认支持基于 ES Modules 的 Tree Shaking

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

#### &emsp;&emsp;[useLatest](https://github.com/giseles/common-hook/blob/main/src/advanced/useLatest.ts) &emsp;&emsp;&emsp;返回的永远是最新值

### 浏览器 Hooks

#### &emsp;&emsp;[useEventListener](https://github.com/giseles/common-hook/blob/main/src/dom/useEventListener.ts) &emsp;&emsp;&emsp;事件监听

#### &emsp;&emsp;[useTitle](https://github.com/giseles/common-hook/blob/main/src/dom/useTitle.ts) &emsp;&emsp;&emsp;设置页面标题

#### &emsp;&emsp;[useFavicon](https://github.com/giseles/common-hook/blob/main/src/dom/useFavicon.ts) &emsp;&emsp;&emsp;设置页面 favicon

#### &emsp;&emsp;[useHover](https://github.com/giseles/common-hook/blob/main/src/dom/useHover.ts) &emsp;&emsp;&emsp;监听 DOM 元素是否鼠标悬停

#### &emsp;&emsp;[useMouse](https://github.com/giseles/common-hook/blob/main/src/dom/useMouse.ts) &emsp;&emsp;&emsp;监听鼠标位置

### Effect Hooks

#### &emsp;&emsp;[useUpdateEffect](https://github.com/giseles/common-hook/blob/main/src/effect/useUpdateEffect.ts) &emsp;&emsp;&emsp;首次不执行，只在依赖项更新时执行

#### &emsp;&emsp;[useDeepCompareEffect](https://github.com/giseles/common-hook/blob/main/src/effect/useDeepCompareEffect.ts) &emsp;&emsp;&emsp;依赖项更新时,深度比较执行

#### &emsp;&emsp;[useAsyncEffect](https://github.com/giseles/common-hook/blob/main/src/effect/useAsyncEffect.ts) &emsp;&emsp;&emsp;支持异步函数

#### &emsp;&emsp;[useLockFn](https://github.com/giseles/common-hook/blob/main/src/effect/useLockFn.ts) &emsp;&emsp;&emsp;给一个异步函数增加竞态锁，防止并发执行

#### &emsp;&emsp;[useDebounceEffect](https://github.com/giseles/common-hook/blob/main/src/effect/useDebounceEffect.ts) &emsp;&emsp;&emsp;useEffect+防抖

#### &emsp;&emsp;[useDebounceFn](https://github.com/giseles/common-hook/blob/main/src/effect/useDebounceFn.ts) &emsp;&emsp;&emsp;处理防抖函数的 Hook

#### &emsp;&emsp;[useThrottleEffect](https://github.com/giseles/common-hook/blob/main/src/effect/useThrottleEffect.ts) &emsp;&emsp;&emsp;useEffect+节流

#### &emsp;&emsp;[useThrottleFn](https://github.com/giseles/common-hook/blob/main/src/effect/useDebounceFn.ts) &emsp;&emsp;&emsp;处理函数节流的 Hook

#### &emsp;&emsp;[useInterval](https://github.com/giseles/common-hook/blob/main/src/effect/useInterval.ts) &emsp;&emsp;&emsp;处理 setInterval 的 Hook

#### &emsp;&emsp;[useTimeout](https://github.com/giseles/common-hook/blob/main/src/effect/useTimeout.ts) &emsp;&emsp;&emsp;处理 setTimeout 的 Hook

### 生命周期 Hooks

#### &emsp;&emsp;[useMount](https://github.com/giseles/common-hook/blob/main/src/lifeCycle/useMount.ts) &emsp;&emsp;&emsp;在组件首次渲染时，执行方法

#### &emsp;&emsp;[useUnmount](https://github.com/giseles/common-hook/blob/main/src/lifeCycle/useUnmount.ts) &emsp;&emsp;&emsp;在组件卸载时，执行函数

### 状态 Hooks

#### &emsp;&emsp;[useSetState](https://github.com/giseles/common-hook/blob/main/src/state/useSetState.ts) &emsp;&emsp;&emsp;管理 object 类型 state 的 Hooks

#### &emsp;&emsp;[useBoolean](https://github.com/giseles/common-hook/blob/main/src/state/useBoolean.ts) &emsp;&emsp;&emsp;切换 boolean，可以接收默认值

#### &emsp;&emsp;[useToggle](https://github.com/giseles/common-hook/blob/main/src/state/useToggle.ts) &emsp;&emsp;&emsp;用于在两个状态值间切换 Hook

#### &emsp;&emsp;[useDebounce](https://github.com/giseles/common-hook/blob/main/src/state/useDebounce.ts) &emsp;&emsp;&emsp;处理防抖值 Hook

#### &emsp;&emsp;[useThrottle](https://github.com/giseles/common-hook/blob/main/src/state/useThrottle.ts) &emsp;&emsp;&emsp;处理节流值 Hook

#### &emsp;&emsp;[useRafState](https://github.com/giseles/common-hook/blob/main/src/state/useRafState.ts) &emsp;&emsp;&emsp;只在 requestAnimationFrame callback 时更新 state
