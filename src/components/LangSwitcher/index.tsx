import Link from 'next/link'
import { useRouter } from 'next/router'
import { LOCALE_LABEL, SupportedLocale } from '@/src/constants/locales'
import { Fragment, useEffect } from 'react'

export default function LangSwitcher() {
  const { route } = useRouter()

  return (
    <>
      {Object.keys(LOCALE_LABEL).map((key) => {
        const _local = key as SupportedLocale
        const _label = LOCALE_LABEL[_local]
        const to = `${route}?lng=${_local}`

        return (
          <Fragment key={_local}>
            <Link href={to}>
              <a style={{ display: 'block', marginBottom: '20px' }}>{_label}</a>
            </Link>
          </Fragment>
        )
      })}
    </>
  )
}
