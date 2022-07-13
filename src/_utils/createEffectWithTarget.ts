import type {
  DependencyList,
  EffectCallback,
  useEffect,
  useLayoutEffect
} from "react"
import { useRef } from "react"
import { useUnmount } from "common-hook"
import depsAreSame from "./depsAreSame"
import { getTargetElement } from "./domTarget"

const createEffectWithTarget = (
  useEffectType: typeof useEffect | typeof useLayoutEffect
) => {
  /**
   *
   * @param effect
   * @param deps
   * @param target target should compare ref.current vs ref.current, dom vs dom, ()=>dom vs ()=>dom
   */
  const useEffectWithTarget = (
    // @ts-ignore
    effect: EffectCallback,
    // @ts-ignore
    deps: DependencyList,
    target: any
  ) => {
    const hasInitRef = useRef(false)
    // @ts-ignore
    const lastElementRef = useRef<(Element | null)[]>([])
    // @ts-ignore
    const lastDepsRef = useRef<DependencyList>([])
    // @ts-ignore
    const unLoadRef = useRef<any>()

    useEffectType(() => {
      const targets = Array.isArray(target) ? target : [target]
      const els = targets.map((item) => getTargetElement(item))

      // init run
      if (!hasInitRef.current) {
        hasInitRef.current = true
        lastElementRef.current = els
        lastDepsRef.current = deps

        unLoadRef.current = effect()
        return
      }

      if (
        els.length !== lastElementRef.current.length ||
        !depsAreSame(els, lastElementRef.current) ||
        !depsAreSame(deps, lastDepsRef.current)
      ) {
        unLoadRef.current?.()

        lastElementRef.current = els
        lastDepsRef.current = deps
        unLoadRef.current = effect()
      }
    })

    useUnmount(() => {
      unLoadRef.current?.()
      // for react-refresh
      hasInitRef.current = false
    })
  }

  return useEffectWithTarget
}

export default createEffectWithTarget
