import { useEffect, useState } from "react"
import { useThrottleFn } from "common-hook"

/**
 * @name 处理节流值Hook
 * @description
 * 规定在时间内，只能触发一次函数。如果这个时间内触发多次函数，只有一次生效
 * @example
 * const throttledValue = useThrottle(value, { wait: 500 })
 */
export const useThrottle = <T>(value: T, options?: any) => {
  const [throttled, setThrottled] = useState(value)

  const { run } = useThrottleFn(() => {
    setThrottled(value)
  }, options)

  useEffect(() => {
    run()
  }, [value])

  return throttled
}
