import { useEffect, useRef } from "react"

/**
 * @name unmountedRef.current 代表组件是否已经卸载
 * @description 获取当前组件是否已经卸载的 Hook
 * @example
 * const unmountedRef = useUnmountedRef()
 * console.log(unmountedRef.current)
 */
export const useUnmountedRef = () => {
  const unmountedRef = useRef(false)
  useEffect(() => {
    unmountedRef.current = false
    return () => {
      unmountedRef.current = true
    }
  }, [])
  return unmountedRef
}
