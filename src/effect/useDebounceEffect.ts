import { useEffect, useState } from "react"
import { useDebounceFn, useUpdateEffect } from "common-hook"

/**
 * @name useEffect+防抖
 * @description
 * 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时
 * @example
 * useDebounceEffect(
    () => {
      setRecords((val) => [...val, value])
    },
    [value],
    { wait: 1000 }
  )
 */
export const useDebounceEffect = (effect: any, deps?: any, options?: any) => {
  const [flag, setFlag] = useState({})

  const { run } = useDebounceFn(() => {
    setFlag({})
  }, options)

  useEffect(() => {
    return run()
  }, deps)
  useUpdateEffect(effect, [flag])
}
