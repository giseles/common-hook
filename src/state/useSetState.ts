import { useCallback, useState } from "react"
import { isFunction } from "../_utils"

type SetState<S extends Record<string, any>> = <K extends keyof S>(
  state: Pick<S, K> | null | ((prevState: Readonly<S>) => Pick<S, K> | S | null)
) => void

/**
 * @name 管理 object 类型 state 的 Hooks
 * @description 用法与 class 组件的 this.setState 基本一致
 * @example
 * const [state, setState] = useSetState<State>({hello: '',count: 0})
 */
export const useSetState = <S extends Record<string, any>>(
  initialState: S | (() => S)
): [S, SetState<S>] => {
  const [state, setState] = useState(initialState)

  const setMergeState = useCallback((patch: any) => {
    setState((prevState: any) => {
      const newState = isFunction(patch) ? patch(prevState) : patch
      return newState ? { ...prevState, ...newState } : prevState
    })
  }, [])

  return [state, setMergeState]
}
