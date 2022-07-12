import debounce from "lodash/debounce"
import { useMemo } from "react"
import { useLatest, useUnmount } from "common-hook"

type noop = (...args: any) => any

/**
 * @name 处理防抖函数的Hook
 * @description
 * 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时
 * @example
 * const { run } = useDebounceFn(
    () => {
      setValue(value + 1)
    },
    {
      wait: 500
    }
  )
 */
export const useDebounceFn = <T extends noop>(fn: T, options?: any) => {
  const fnRef = useLatest(fn)

  const wait = options?.wait ?? 1000

  const debounced = useMemo(
    () =>
      debounce(
        (...args: Parameters<T>): ReturnType<T> => {
          return fnRef.current(...args)
        },
        wait,
        options
      ),
    []
  )

  useUnmount(() => {
    debounced.cancel()
  })

  return {
    run: debounced,
    cancel: debounced.cancel,
    flush: debounced.flush
  }
}
