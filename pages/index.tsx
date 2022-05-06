import type { NextPage } from 'next'
import Page from '../src/components/Page'
import Header, { Pages } from '../src/components/Header'
import { styled } from '@mui/material/styles'
import First from '../src/components/First'
import WhyInfMeta from '../src/components/WhyInfMeta'
import { Box, Container } from '@mui/material'
import Tokens from '@/src/components/Tokens'
import bgLarge from '@/public/images/bg-large.png'
import bgLargeH5 from '@/public/images/bg-large-h5.png'
import RoadMap from '@/src/components/RoadMap'
import { MutableRefObject, useMemo, useRef } from 'react'
import Footer from '@/src/components/Footer'
import Advantages from '@/src/components/Advantages'
import TokenEco from '@/src/components/TokenEco'
import Middle from '@/src/components/Middle'
import Introduction from '@/src/components/Introduction'
import HomePage from '@/src/components/Home'

const Wrapper = styled('div')(({ theme }) => ({
  // background: `url(${bgLarge}) no-repeat;`,
  // backgroundSize: '100%',
  // backgroundPosition: 'center',
  // padding: '80px 0 0',
  // backgroundColor: theme.palette.common.black,
  [theme.breakpoints.down('sm')]: {
    background: '#fff',
  },
}))

const RefWrapper = styled('div')()

export const DEFAULT_PAGE_SPACING = {
  mt: { xs: '8px', sm: '166px' },
  pt: { xs: '70px', sm: '84px' },
}

const Home: NextPage = () => {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)

  const refs: {
    [key in Pages]: MutableRefObject<HTMLDivElement | null>
  } = useMemo(() => {
    return {
      [Pages.HOME]: ref1,
      [Pages.WHY]: ref2,
      [Pages.TOKEN]: ref3,
      [Pages.ROADMAP]: ref4,
    }
  }, [])

  return (
    <Page title={'Torai'}>
      <Wrapper>
        <Header refs={refs} />

        <HomePage />

        <Box sx={{ pt: { sm: '150px' }, pb: { sm: '100px' }, background: '#F8FAFC' }}>
          <Introduction />
        </Box>

        <Box sx={{ pt: { sm: '160px', xs: '20px' }, background: { xs: '#fff' } }}>
          <Advantages />
        </Box>

        <Box sx={{ pt: { sm: '160px', xs: '50px' }, background: { xs: '#fff' } }}>
          <TokenEco />
        </Box>

        <Box>
          <Middle />
        </Box>

        <Box sx={{ pt: '200px', background: { xs: '#fff' } }}>
          <Footer />
        </Box>
      </Wrapper>
    </Page>
  )
}

export default Home