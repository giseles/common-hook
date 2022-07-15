import { useEffect } from "react"

/**
 * @name 设置页面标题
 * @example
 * useTitle('Page Title')
 */
export const useTitle = (title: string) => {
  useEffect(() => {
    document.title = title
  }, [title])
}
