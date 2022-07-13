# common-hook

提供项目中常用的 React Hooks

> 前端业务代码工具库

提供项目中常用的工具函数，对输入输出函数做了特殊处理，避免闭包问题,包含丰富的基础 Hooks 以及提炼自业务的高级 Hooks

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

辅助 Hooks
useLatest 返回的永远是最新值
