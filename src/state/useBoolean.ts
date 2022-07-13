import { useMemo } from "react"
import { useToggle } from "common-hook"

/**
 * @name 切换boolean，可以接收默认值
 * @example
 * const [state, { toggle, setTrue, setFalse }] = useBoolean(true)
 */
export const useBoolean = (defaultValue = false) => {
  const [state, { toggle, set }] = useToggle(defaultValue)

  const actions = useMemo(() => {
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
