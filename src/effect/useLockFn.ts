import { useRef, useCallback } from "react"

/**
 * @name 给一个异步函数增加竞态锁，防止并发执行
 * @description 在 submit 函数执行完成前，其余的点击动作都会被忽略。
 * @example
 *  const submit = useLockFn(async () => {
    await mockApiRequest();
    setCount((val) => val + 1);
  });
 */
export const useLockFn = <P extends any[] = any[], V extends any = any>(
  fn: (...args: P) => Promise<V>
) => {
  const lockRef = useRef(false)

  return useCallback(
    async (...args: P) => {
      if (lockRef.current) return
      lockRef.current = true
      try {
        const ret = await fn(...args)
        lockRef.current = false
        return ret
      } catch (e) {
        lockRef.current = false
        throw e
      }
    },
    [fn]
  )
}
