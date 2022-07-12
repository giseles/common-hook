import { useEffect, useState } from "react"
import { useThrottleFn, useUpdateEffect } from "common-hook"

/**
 * @name useEffect+节流
 * @description
 * 规定在时间内，只能触发一次函数。如果这个时间内触发多次函数，只有一次生效
 * @example
 * useThrottleEffect(
    () => {
      setRecords((val) => [...val, value])
    },
    [value],
    {
      wait: 1000
    }
  )
 */
export const useThrottleEffect = (effect: any, deps?: any, options?: any) => {
  const [flag, setFlag] = useState({})

  const { run } = useThrottleFn(() => {
    setFlag({})
  }, options)

  useEffect(() => {
    return run()
  }, deps)

  useUpdateEffect(effect, [flag])
}
