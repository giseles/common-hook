import { useRef } from "react"

/**
 * @name 返回的永远是最新值
 * @description 返回当前最新值的 Hook，可以避免闭包问题
 * @example
 * useLatest(fn)
 */
export const useLatest = <T>(value: T) => {
  const ref = useRef(value)
  ref.current = value

  return ref
}
