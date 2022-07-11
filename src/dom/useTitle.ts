import { useEffect, useRef } from "react"
import { useUnmount } from "common-hook"
import isBrowser from "../_utils/isBrowser"

/**
 * @name 设置页面标题
 * @example
 * useTitle('Page Title')
 */
export const useTitle = (title: string, options: any) => {
  const titleRef = useRef(isBrowser ? document.title : "")
  useEffect(() => {
    document.title = title
  }, [title])

  useUnmount(() => {
    if (options.restoreOnUnmount) {
      document.title = titleRef.current
    }
  })
}
