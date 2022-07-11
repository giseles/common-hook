import { useLatest } from "common-hook"
import { getTargetElement } from "../_utils/domTarget"
import useEffectWithTarget from "../_utils/useEffectWithTarget"

type noop = (...p: any) => void

/**
 * @name 事件监听
 * @description 优雅的使用 addEventListener
 * @example
 * useEventListener('click',
 * () => {setValue(value + 1)}
 * ,{ target: ref });
 */
export const useEventListener = (
  eventName: string,
  handler: noop,
  options: any = {}
) => {
  const handlerRef = useLatest(handler)

  useEffectWithTarget(
    () => {
      const targetElement = getTargetElement(options.target, window)
      if (!targetElement?.addEventListener) {
        return
      }

      const eventListener = (event: Event) => {
        return handlerRef.current(event)
      }

      targetElement.addEventListener(eventName, eventListener, {
        capture: options.capture,
        once: options.once,
        passive: options.passive
      })

      return () => {
        targetElement.removeEventListener(eventName, eventListener, {
          capture: options.capture
        })
      }
    },
    [eventName, options.capture, options.once, options.passive],
    options.target
  )
}
