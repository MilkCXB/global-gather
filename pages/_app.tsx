import Head from 'next/head'
import { AppProps } from 'next/app'
import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from '../src/createEmotionCache'
import { HelmetProvider } from 'react-helmet-async'
import ThemeConfig from '../src/theme'
import GlobalStyles from '../src/theme/globalStyles'
import Web3ReactManager from '@/src/components/Web3ReactManager'
import { Web3ReactProvider } from '@web3-react/core'
import getLibrary from '@/src/utils/getLibrary'
import { LanguageProvider } from '@/src/i18n'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <CacheProvider value={emotionCache}>
      <HelmetProvider>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>

        <Web3ReactProvider getLibrary={getLibrary}>
          <LanguageProvider>
            <Web3ReactManager>
              <ThemeConfig>
                <GlobalStyles />
                <Component {...pageProps} />
              </ThemeConfig>
            </Web3ReactManager>
          </LanguageProvider>
        </Web3ReactProvider>
      </HelmetProvider>
    </CacheProvider>
  )
}
