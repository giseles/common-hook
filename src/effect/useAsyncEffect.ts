import { useEffect } from "react"
import { isFunction } from "common-screw"

/**
 * @name 组件加载时进行异步的检查
 * @description 支持异步函数
 * @example
 *  useAsyncEffect(async () => {setPass(await mockCheck())}, []);
 */
export const useAsyncEffect = (
  effect: () => AsyncGenerator<void, void, void> | Promise<void>,
  deps?: any
) => {
  const isAsyncGenerator = (
    val: any
  ): val is AsyncGenerator<void, void, void> => {
    return isFunction(val[Symbol.asyncIterator])
  }
  useEffect(() => {
    const e = effect()
    let cancelled = false
    async function execute() {
      if (isAsyncGenerator(e)) {
        while (true) {
          const result = await e.next()
          if (result.done || cancelled) {
            break
          }
        }
      } else {
        await e
      }
    }
    execute()
    return () => {
      cancelled = true
    }
  }, deps)
}
