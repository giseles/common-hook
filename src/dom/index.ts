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
 * @name 语法 类方法
 * @example
 * useEventListener   // 事件监听
 * useFavicon         // 设置页面的favicon
 * useHover           // 设置页面的favicon
 * useMouse           // 监听鼠标位置
 * useTitle           // 设置页面标题
 */
export const Dom = {
  useEventListener,
  useFavicon,
  useHover,
  useMouse,
  useTitle
}
