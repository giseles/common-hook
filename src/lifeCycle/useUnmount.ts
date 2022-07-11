import { useEffect } from "react"
import { useLatest } from "common-hook"

/**
 * @name 在组件卸载时，执行函数
 * @description 在组件卸载（unmount）时执行的 Hook
 * @example
 * useUnmount(fn)
 */
export const useUnmount = (fn: () => void) => {
  const fnRef = useLatest(fn)

  useEffect(
    () => () => {
      fnRef.current()
    },
    []
  )
}
