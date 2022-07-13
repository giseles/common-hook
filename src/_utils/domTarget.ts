import { isFunction, isBrowser } from "common-screw"

type TargetValue<T> = T | undefined | null

type TargetType = HTMLElement | Element | Window | Document

export function getTargetElement<T extends TargetType>(
  target: any,
  defaultElement?: T
) {
  if (!isBrowser) {
    return undefined
  }

  if (!target) {
    return defaultElement
  }

  let targetElement: TargetValue<T>

  if (isFunction(target)) {
    targetElement = target()
  } else if ("current" in target) {
    targetElement = target.current
  } else {
    targetElement = target
  }

  return targetElement
}
