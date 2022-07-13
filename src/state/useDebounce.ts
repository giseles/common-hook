import { useEffect, useState } from "react"
import { useDebounceFn } from "common-hook"

/**
 * @name 处理防抖值Hook
 * @description
 * 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时
 * @example
 * const debouncedValue = useDebounce(value, { wait: 500 })
 */
export const useDebounce = (value: any, options?: any) => {
  const [debounced, setDebounced] = useState(value)

  const { run } = useDebounceFn(() => {
    setDebounced(value)
  }, options)

  useEffect(() => {
    run()
  }, [value])

  return debounced
}
