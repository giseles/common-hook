import throttle from "lodash/throttle"
import { useMemo } from "react"
import { useUnmount, useLatest } from "common-hook"

type noop = (...args: any) => any

/**
 * @name 处理函数节流的Hook
 * @description
 * 规定在时间内，只能触发一次函数。如果这个时间内触发多次函数，只有一次生效
 * @example
 * const { run } = useThrottleFn(
    () => {
      setValue(value + 1);
    },
    { wait: 500 },
  );
 */
export const useThrottleFn = <T extends noop>(fn: T, options?: any) => {
  const fnRef = useLatest(fn)

  const wait = options?.wait ?? 1000

  const throttled = useMemo(
    () =>
      throttle(
        (...args: Parameters<T>): ReturnType<T> => {
          return fnRef.current(...args)
        },
        wait,
        options
      ),
    []
  )

  useUnmount(() => {
    throttled.cancel()
  })

  return {
    run: throttled,
    cancel: throttled.cancel,
    flush: throttled.flush
  }
}
