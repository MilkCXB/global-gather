export function debounce(fn: any, wait = 50, immediate = true) {
  let timer: any = null
  return function (...args: any) {
    if (timer) clearTimeout(timer)

    if (immediate && !timer) {
      // @ts-ignore
      fn.apply(this, args)
    }

    timer = setTimeout(() => {
      // @ts-ignore
      fn.apply(this, args)
    }, wait)
  }
}
