 <h1 align="center">common-hook</h1>
<div align="center">

English | [简体中文](./README-zh_CN.md)

</div>

> Front-end business code tool library

Provide the commonly used React Hooks in the project, and the input and output functions do a special treatment to avoid closure problems, including a wealth of basic Hooks and refined from the business of advanced Hooks.

### Install

```js
npm i common-hook

```

```js
yarn add common-hook

```

### Demand Loading

> Default support for ES Modules-based Tree Shaking

```js
import { useMount, useUnmount } from "common-hook"

useMount(() => {
  console.log("useMount")
})
useUnmount(() => {
  console.log("useUnmount")
})
```

## :package: API Documentation

### Advanced Hooks

#### &emsp;&emsp;[useLatest](https://github.com/giseles/common-hook/blob/main/src/advanced/useLatest.ts) &emsp;&emsp;&emsp;The returned value is always the latest

### Dom Hooks

#### &emsp;&emsp;[useEventListener](https://github.com/giseles/common-hook/blob/main/src/dom/useEventListener.ts) &emsp;&emsp;&emsp;Event Listener

#### &emsp;&emsp;[useTitle](https://github.com/giseles/common-hook/blob/main/src/dom/useTitle.ts) &emsp;&emsp;&emsp;Set page title

#### &emsp;&emsp;[useFavicon](https://github.com/giseles/common-hook/blob/main/src/dom/useFavicon.ts) &emsp;&emsp;&emsp;Set page favicon

#### &emsp;&emsp;[useHover](https://github.com/giseles/common-hook/blob/main/src/dom/useHover.ts) &emsp;&emsp;&emsp;Listen to DOM elements for mouse hover

#### &emsp;&emsp;[useMouse](https://github.com/giseles/common-hook/blob/main/src/dom/useMouse.ts) &emsp;&emsp;&emsp;Listen to mouse position

### Effect Hooks

#### &emsp;&emsp;[useUpdateEffect](https://github.com/giseles/common-hook/blob/main/src/effect/useUpdateEffect.ts) &emsp;&emsp;&emsp;Not executed for the first time, only when dependencies are updated

#### &emsp;&emsp;[useDeepCompareEffect](https://github.com/giseles/common-hook/blob/main/src/effect/useDeepCompareEffect.ts) &emsp;&emsp;&emsp;When a dependency is updated, a deep comparison is performed

#### &emsp;&emsp;[useAsyncEffect](https://github.com/giseles/common-hook/blob/main/src/effect/useAsyncEffect.ts) &emsp;&emsp;&emsp;Support asynchronous functions

#### &emsp;&emsp;[useLockFn](https://github.com/giseles/common-hook/blob/main/src/effect/useLockFn.ts) &emsp;&emsp;&emsp;Add a competing lock to an asynchronous function to prevent concurrent execution

#### &emsp;&emsp;[useDebounceEffect](https://github.com/giseles/common-hook/blob/main/src/effect/useDebounceEffect.ts) &emsp;&emsp;&emsp;useEffect + Debounce

#### &emsp;&emsp;[useDebounceFn](https://github.com/giseles/common-hook/blob/main/src/effect/useDebounceFn.ts) &emsp;&emsp;&emsp;Hooks to handle debounce

#### &emsp;&emsp;[useThrottleEffect](https://github.com/giseles/common-hook/blob/main/src/effect/useThrottleEffect.ts) &emsp;&emsp;&emsp;useEffect + Throttle

#### &emsp;&emsp;[useThrottleFn](https://github.com/giseles/common-hook/blob/main/src/effect/useDebounceFn.ts) &emsp;&emsp;&emsp;Hooks to handle debounce

#### &emsp;&emsp;[useInterval](https://github.com/giseles/common-hook/blob/main/src/effect/useInterval.ts) &emsp;&emsp;&emsp;Hooks to handle setInterval

#### &emsp;&emsp;[useTimeout](https://github.com/giseles/common-hook/blob/main/src/effect/useTimeout.ts) &emsp;&emsp;&emsp;Hooks to handle setTimeout

### LifeCycle Hooks

#### &emsp;&emsp;[useMount](https://github.com/giseles/common-hook/blob/main/src/lifeCycle/useMount.ts) &emsp;&emsp;&emsp;Executed when the component is first rendered

#### &emsp;&emsp;[useUnmount](https://github.com/giseles/common-hook/blob/main/src/lifeCycle/useUnmount.ts) &emsp;&emsp;&emsp;Execute on component unmount

### State Hooks

#### &emsp;&emsp;[useSetState](https://github.com/giseles/common-hook/blob/main/src/state/useSetState.ts) &emsp;&emsp;&emsp;Hooks to manage object type states

#### &emsp;&emsp;[useBoolean](https://github.com/giseles/common-hook/blob/main/src/state/useBoolean.ts) &emsp;&emsp;&emsp;Toggle boolean to receive default value

#### &emsp;&emsp;[useToggle](https://github.com/giseles/common-hook/blob/main/src/state/useToggle.ts) &emsp;&emsp;&emsp;Hooks to switch between two state values

#### &emsp;&emsp;[useDebounce](https://github.com/giseles/common-hook/blob/main/src/state/useDebounce.ts) &emsp;&emsp;&emsp;Hook for handling debounce values

#### &emsp;&emsp;[useThrottle](https://github.com/giseles/common-hook/blob/main/src/state/useThrottle.ts) &emsp;&emsp;&emsp;Hook for handling throttle values

#### &emsp;&emsp;[useRafState](https://github.com/giseles/common-hook/blob/main/src/state/useRafState.ts) &emsp;&emsp;&emsp;Update state only on requestAnimationFrame callback
