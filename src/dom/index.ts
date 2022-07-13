import { useEventListener } from "./useEventListener"
import { useHover } from "./useHover"
import { useMouse } from "./useMouse"
import { useTitle } from "./useTitle"

export * from "./useEventListener"
export * from "./useHover"
export * from "./useMouse"
export * from "./useTitle"

/**
 * @name 浏览器 Hooks
 * @example
 * useEventListener   // 事件监听
 * useTitle           // 设置页面标题
 * useHover           // 监听DOM元素是否鼠标悬停
 * useMouse           // 监听鼠标位置
 */
export const Dom = {
  useEventListener,
  useHover,
  useMouse,
  useTitle
}
