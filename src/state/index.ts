import { useBoolean } from "./useBoolean"
import { useDebounce } from "./useDebounce"
import { useRafState } from "./useRafState"
import { useSetState } from "./useSetState"
import { useThrottle } from "./useThrottle"
import { useToggle } from "./useToggle"

export * from "./useBoolean"
export * from "./useDebounce"
export * from "./useRafState"
export * from "./useSetState"
export * from "./useThrottle"
export * from "./useToggle"

/**
 * @name 状态 Hooks
 * @example
 * useSetState    // 管理 object 类型 state 的 Hooks
 * useBoolean     // 切换boolean，可以接收默认值
 * useToggle      // 用于在两个状态值间切换Hook
 * useDebounce    // 处理防抖值Hook
 * useThrottle    // 处理节流值Hook
 * useRafState    // 只在 requestAnimationFrame callback 时更新 state
 */
export const State = {
  useBoolean,
  useDebounce,
  useRafState,
  useSetState,
  useThrottle,
  useToggle
}
