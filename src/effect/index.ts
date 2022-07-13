import { useAsyncEffect } from "./useAsyncEffect"
import { useDebounceEffect } from "./useDebounceEffect"
import { useDebounceFn } from "./useDebounceFn"
import { useDeepCompareEffect } from "./useDeepCompareEffect"
import { useInterval } from "./useInterval"
import { useLockFn } from "./useLockFn"
import { useThrottleEffect } from "./useThrottleEffect"
import { useThrottleFn } from "./useThrottleFn"
import { useTimeout } from "./useTimeout"
import { useUpdateEffect } from "./useUpdateEffect"

export * from "./useAsyncEffect"
export * from "./useDebounceEffect"
export * from "./useDebounceFn"
export * from "./useDeepCompareEffect"
export * from "./useInterval"
export * from "./useLockFn"
export * from "./useThrottleEffect"
export * from "./useThrottleFn"
export * from "./useTimeout"
export * from "./useUpdateEffect"

/**
 * @name Effect Hooks
 * @example
 * useUpdateEffect       // 依赖项更新时,深度比较
 * useDeepCompareEffect  // 首次不执行，只在依赖项更新时执行
 * useAsyncEffect        // 组件加载时进行异步的检查
 * useLockFn             // 给一个异步函数增加竞态锁，防止并发执行
 * useDebounceEffect     // useEffect+防抖
 * useDebounceFn         // 处理防抖函数的Hook
 * useThrottleEffect     // useEffect+节流
 * useThrottleFn         // 处理函数节流的Hook
 * useInterval           // 处理setInterval的Hook
 * useTimeout            // 处理setTimeout的Hook
 */
export const Effect = {
  useAsyncEffect,
  useDebounceEffect,
  useDebounceFn,
  useDeepCompareEffect,
  useInterval,
  useLockFn,
  useThrottleEffect,
  useThrottleFn,
  useTimeout,
  useUpdateEffect
}
