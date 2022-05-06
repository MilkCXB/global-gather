import { SyntheticEvent } from 'react'
import { debounce } from './debounce'

export function imgLazyload(
  e: SyntheticEvent<HTMLImageElement, Event>,
  newSrc: string,
  firstSrc: string,
  match = -10,
  distance?: number
) {
  const el = e.target as HTMLImageElement
  const oldSrc = el.src
  const clientHeight = document.documentElement.clientHeight

  const _distance = distance || clientHeight

  // avoid circle
  if (oldSrc.slice(match) != firstSrc.slice(match)) {
    return
  }

  const scrollEventListener = debounce(
    () => {
      const { top } = el.getBoundingClientRect()

      if (top <= _distance) {
        el.src = newSrc
        el.style.filter = 'unset'

        document.removeEventListener('scroll', scrollEventListener)
      }
    },
    18,
    true
  )

  document.addEventListener('scroll', scrollEventListener)
}
