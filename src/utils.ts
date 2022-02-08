export const dateFormatter = (time: string) => {
  if (!time) {
    return ''
  }

  const date = new Date(time)
  const y = date.getFullYear()
  const m = date.getMonth() + 1
  const d = date.getDate()
  return `${y}年${m}月${d}日`
}
