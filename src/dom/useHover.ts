import { useBoolean, useEventListener } from "common-hook"

export interface Options {
  onEnter?: () => void
  onLeave?: () => void
  onChange?: (isHovering: boolean) => void
}

/**
 * @name 监听DOM元素是否有鼠标悬停
 * @example
 * const isHovering = useHover(ref)
 */
export const useHover = (target: any, options?: Options): boolean => {
  const { onEnter, onLeave, onChange } = options || {}

  const [state, { setTrue, setFalse }] = useBoolean(false)

  useEventListener(
    "mouseenter",
    () => {
      onEnter?.()
      setTrue()
      onChange?.(true)
    },
    {
      target
    }
  )

  useEventListener(
    "mouseleave",
    () => {
      onLeave?.()
      setFalse()
      onChange?.(false)
    },
    {
      target
    }
  )

  return state
}
