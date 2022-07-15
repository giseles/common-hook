import { useEventListener } from "./useEventListener"
import { useFavicon } from "./useFavicon"
import { useHover } from "./useHover"
import { useMouse } from "./useMouse"
import { useTitle } from "./useTitle"

export * from "./useEventListener"
export * from "./useFavicon"
export * from "./useHover"
export * from "./useMouse"
export * from "./useTitle"

/**
 * @name 浏览器 Hooks
 * @example
 * useEventListener   // 事件监听
 * useTitle           // 设置页面标题
 * useFavicon         // 设置页面favicon
 * useHover           // 监听DOM元素是否鼠标悬停
 * useMouse           // 监听鼠标位置
 */
export const Dom = {
  useEventListener,
  useFavicon,
  useHover,
  useMouse,
  useTitle
}
