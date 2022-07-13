import useDeepEffect from "use-deep-compare-effect"
/**
 * @name 依赖项更新时,深度比较
 * @description
 * 依赖项更新时,对输入进行深度比较，而不是引用相等
 * @example
 * useDeepCompareEffect(
    () => {
      // make an HTTP request or whatever with the query and variables
      // optionally return a cleanup function if necessary
    },[query, variables],)
 */
export const useDeepCompareEffect = useDeepEffect
