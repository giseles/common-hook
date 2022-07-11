import { useMemo } from "react"
import { useToggle } from "common-hook"

export interface Actions {
  setTrue: () => void
  setFalse: () => void
  set: (value: boolean) => void
  toggle: () => void
}

/**
 * @name 切换boolean，可以接收默认值
 * @example
 * const [state, { toggle, setTrue, setFalse }] = useBoolean(true)
 */
export const useBoolean = (defaultValue = false): [boolean, Actions] => {
  const [state, { toggle, set }] = useToggle(defaultValue)

  const actions: Actions = useMemo(() => {
    const setTrue = () => set(true)
    const setFalse = () => set(false)
    return {
      toggle,
      set: (v: any) => set(!!v),
      setTrue,
      setFalse
    }
  }, [])

  return [state, actions]
}
