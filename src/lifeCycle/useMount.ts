//@ts-ignore
import { useEffect } from "react"

/**
 * @name 在组件首次渲染时，执行方法
 * @description 只在组件初始化时执行的 Hook
 * @example
 * useMount(fn)
 */
export const useMount = (fn: () => void) => {
  useEffect(() => {
    fn?.()
  }, [])
}
