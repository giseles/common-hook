import { useMount } from "./useMount"
import { useUnmount } from "./useUnmount"

export * from "./useMount"
export * from "./useUnmount"

/**
 * @name 生命周期 Hooks
 * @example
 * useMount         // 在组件首次渲染时，执行方法
 * useUnmount       // 在组件卸载时，执行函数
 */
export const LifeCycle = {
  useMount,
  useUnmount
}
