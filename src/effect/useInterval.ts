import { useCallback, useEffect, useRef } from "react"
import { useLatest } from "common-hook"
import { isNumber } from "../_utils"

/**
 * @name 处理setInterval的Hook
 * @description 例如:每1000ms，执行一次
 * @example
 * useInterval(() => {
    setCount(count + 1);
   }, 1000);
 */
export const useInterval = (
  fn: () => void,
  delay: number | undefined,
  options?: {
    immediate?: boolean
  }
) => {
  const immediate = options?.immediate

  const fnRef = useLatest(fn)
  const timerRef = useRef()

  useEffect(() => {
    if (!isNumber(delay) || delay < 0) return

    if (immediate) {
      fnRef.current()
    }
    timerRef.current = setInterval(() => {
      fnRef.current()
    }, delay)
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current as NodeJS.Timer)
      }
    }
  }, [delay])

  const clear = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current as NodeJS.Timer)
    }
  }, [])

  return clear
}
