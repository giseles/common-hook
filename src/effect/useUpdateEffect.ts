import { useEffect, useRef } from "react"
import type { useEffect as useEffectType, useLayoutEffect } from "react"

type EffectHookType = typeof useEffectType | typeof useLayoutEffect

const createUpdateEffect: (hook: EffectHookType) => EffectHookType =
  (hook) => (effect: any, deps: any) => {
    const isMounted = useRef(false)
    hook(() => {
      return () => {
        isMounted.current = false
      }
    }, [])

    hook(() => {
      if (!isMounted.current) {
        isMounted.current = true
      } else {
        return effect()
      }
    }, deps)
  }

/**
 * @name 首次不执行，只在依赖项更新时执行
 * @description 使用上与useEffect完全相同，只是它忽略了首次执行，只在依赖项更新时执行
 * @example
 * useUpdateEffect(() => {
    setUpdateEffectCount((c) => c + 1);
   }, [count]);
 */
export const useUpdateEffect = createUpdateEffect(useEffect)
