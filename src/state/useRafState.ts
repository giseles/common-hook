import { useCallback, useRef, useState } from "react"
import type { Dispatch, SetStateAction } from "react"
import { useUnmount } from "common-hook"

/**
 * @name 只在 requestAnimationFrame callback 时更新 state
 * @description 一般用于性能优化
 * @example
 * const [state, setState] = useRafState({ width: 0,height: 0})
 */
export const useRafState = <S>(initialState?: S | (() => S)) => {
  const ref = useRef(0)
  const [state, setState] = useState(initialState)

  const setRafState = useCallback((value: S | ((prevState: S) => S)) => {
    cancelAnimationFrame(ref.current)

    ref.current = requestAnimationFrame(() => {
      setState(value)
    })
  }, [])

  useUnmount(() => {
    cancelAnimationFrame(ref.current)
  })

  return [state, setRafState] as const
}
