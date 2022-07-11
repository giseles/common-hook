import { useMemo, useState } from "react"

interface Actions<T> {
  setLeft: () => void
  setRight: () => void
  set: (value: T) => void
  toggle: () => void
}

/**
 * @name 用于在两个状态值间切换Hook
 * @description 默认为 boolean 切换，基础用法与 useBoolean 一致
 * @example
 * const [state, { toggle, setLeft, setRight }] = useToggle()
 */
export const useToggle = <D, R>(
  defaultValue: D = false as unknown as D,
  reverseValue?: R
) => {
  const [state, setState] = useState(defaultValue)

  const actions = useMemo(() => {
    const reverseValueOrigin = (
      reverseValue === undefined ? !defaultValue : reverseValue
    ) as D | R

    const toggle = () =>
      setState((s: any) =>
        s === defaultValue ? reverseValueOrigin : defaultValue
      )
    const set = (value: D | R) => setState(value)
    const setLeft = () => setState(defaultValue)
    const setRight = () => setState(reverseValueOrigin)

    return {
      toggle,
      set,
      setLeft,
      setRight
    }
  }, [])

  return [state, actions]
}
