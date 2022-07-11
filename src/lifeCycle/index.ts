import { useMount } from "./useMount"
import { useUnmount } from "./useUnmount"
import { useUnmountedRef } from "./useUnmountedRef"

export * from "./useMount"
export * from "./useUnmount"
export * from "./useUnmountedRef"

/**
 * @name 生命周期 Hooks
 * @example
 * useMount           //在组件首次渲染时，执行方法
 * useUnmount         //在组件卸载时，执行函数
 * useUnmountedRef    //获取当前组件是否已经卸载的 Hook
 */
export const LifeCycle = {
  useMount,
  useUnmount,
  useUnmountedRef
}
