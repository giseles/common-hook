import { useCallback, useEffect, useRef } from "react"
import { useLatest } from "common-hook"
import { isNumber } from "common-screw"

/**
 * @name 处理setTimeout的Hook
 * @description 例如:3000ms 后执行一次
 * @example
 * useTimeout(() => {setState(state + 1)}, 3000)
 */
export const useTimeout = (fn: () => void, delay: number | undefined) => {
  const fnRef = useLatest(fn)
  const timerRef = useRef()

  useEffect(() => {
    //@ts-ignore
    if (!isNumber(delay) || delay < 0) return

    timerRef.current = setTimeout(() => {
      fnRef.current()
    }, delay)
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current as NodeJS.Timer)
      }
    }
  }, [delay])

  const clear = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current as NodeJS.Timer)
    }
  }, [])

  return clear
}
