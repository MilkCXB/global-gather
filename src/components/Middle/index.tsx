import { useActiveWeb3React, useConnectCallback } from '@/src/hooks/web3'
import { Box, Button, Container, Grid, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import styled from '@mui/system/styled'
import Link from 'next/link'
import { useCallback } from 'react'
import { RecolorfulButtonWrapper } from '../../theme/overrides/Button'
import roadmapImg from '@/public/images/middle/roadmap.png'
import roadmapBg from '@/public/images/middle/roadmap_bg.png'
import roadmapBgH5 from '@/public/images/middle/roadmap_bg_h5.png'
import roadmapH5Img from '@/public/images/middle/roadmap_h5.png'
import support_1 from '@/public/images/middle/supports/support-1.png'
import support_2 from '@/public/images/middle/supports/support-2.png'
import support_3 from '@/public/images/middle/supports/support-3.png'
import support_4 from '@/public/images/middle/supports/support-4.png'
import support_5 from '@/public/images/middle/supports/support-5.png'
import support_6 from '@/public/images/middle/supports/support-6.png'
import support_7 from '@/public/images/middle/supports/support-7.png'
import support_8 from '@/public/images/middle/supports/support-8.png'
import support_9 from '@/public/images/middle/supports/support-9.png'

import partner_1 from '@/public/images/middle/partners/partner-1.png'
import partner_2 from '@/public/images/middle/partners/partner-2.png'
import partner_3 from '@/public/images/middle/partners/partner-3.png'
import partner_4 from '@/public/images/middle/partners/partner-4.png'
import partner_5 from '@/public/images/middle/partners/partner-5.png'
import partner_6 from '@/public/images/middle/partners/partner-6.png'
import partner_7 from '@/public/images/middle/partners/partner-7.png'
import partner_8 from '@/public/images/middle/partners/partner-8.png'
import { CustomTheme } from '@/src/theme'

const Wrapper = styled('div')``

const FlexWrapper = styled('div')`
  display: flex;
  /* min-height: 100vh; */
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
`

const Tip = styled('div')`
  font-size: 16px;
  font-family: 'TimesNewRomanPS-BoldMT, TimesNewRomanPS';
  font-weight: normal;
  color: #222222;
`

const MiddleImg = styled('img')(({ theme }) => ({
  width: '1200px',
  marginTop: '104px',
  [theme.breakpoints.down('sm')]: {
    width: '345px',
    margin: '0 auto',
    marginTop: '45px',
  },
}))

const IconImg = styled('img')(({ theme }) => ({
  margin: '0 20px 70px 0',
  width: '224px',
  [theme.breakpoints.down('sm')]: {
    margin: '0 0 40px 0 ',
    width: '112px',
    height: '40px',
  },
}))

const IconWrapper = styled('div')(({ theme }) => ({
  marginTop: '104px',
  display: 'grid',
  width: '100%',
  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
  alignItems: 'center',
  justifyItems: 'center',
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr 1fr ',
    marginTop: '75px',
    // gridGap: '20px',
  },
}))
const BgBox = styled('div')(({ theme }) => ({
  background: `url(${roadmapBg})`,
  backgroundSize: 'cover',
  padding: '200px 0 360px 0',
  [theme.breakpoints.down('sm')]: {
    background: `url(${roadmapBgH5})`,
    padding: '50px 0',
    backgroundSize: '100%',
  },
}))

export default function Middle() {
  const theme = useTheme()
  const isXs = useMediaQuery((theme: CustomTheme) => theme.breakpoints.down('sm'))

  const { account } = useActiveWeb3React()
  const { handleConnect } = useConnectCallback()

  const handleClaimToken = useCallback(() => {
    console.log('[]:', 'handleClaimToken')
  }, [])
  const handleLunch = useCallback(() => {
    console.log('[]:', 'handleLunch')
  }, [])

  return (
    <Wrapper id="home">
      <BgBox>
        <Container>
          <FlexWrapper>
            <Typography
              variant={'h2'}
              fontWeight={700}
              sx={{ fontSize: { sm: '52px', xs: '26px' } }}
              color={'#222'}
              textAlign={'center'}
            >
              Roadmap
            </Typography>
            <Typography
              variant={'h2'}
              fontWeight={700}
              sx={{ fontSize: { sm: '16px', xs: '12px' }, textAlign: 'center', marginTop: { sm: '20px', xs: '15px' } }}
              color={'#7990B5'}
            >
              The provides a stable,confident and universal digital currency platform for users to look after their
              finances.
            </Typography>

            {isXs ? <MiddleImg src={roadmapH5Img} /> : <MiddleImg src={roadmapImg} />}
          </FlexWrapper>
        </Container>
      </BgBox>
      <Container>
        <Box sx={{ mt: { sm: '200px' } }}>
          <FlexWrapper>
            <Typography
              variant={'h2'}
              fontWeight={700}
              sx={{ fontSize: { sm: '52px', xs: '26px' }, mt: { xs: '60px' } }}
              color={'#222'}
              textAlign={'center'}
            >
              Support
            </Typography>
            <IconWrapper>
              <IconImg src={support_1} />
              <IconImg src={support_2} />
              <IconImg src={support_3} />
              <IconImg src={support_4} />
              <IconImg src={support_5} />
              <IconImg src={support_6} />
              <IconImg src={support_7} />
              <IconImg src={support_8} />
              <IconImg src={support_9} />
            </IconWrapper>
          </FlexWrapper>
        </Box>
        <Box sx={{ mt: { sm: '200px', xs: '60px' } }}>
          <FlexWrapper>
            <Typography
              variant={'h2'}
              fontWeight={700}
              sx={{ fontSize: { sm: '52px', xs: '26px' } }}
              color={'#222'}
              textAlign={'center'}
            >
              Partner
            </Typography>
            <IconWrapper>
              <IconImg src={partner_1} />
              <IconImg src={partner_2} />
              <IconImg src={partner_3} />
              <IconImg src={partner_4} />
              <IconImg src={partner_5} />
              <IconImg src={partner_6} />
              <IconImg src={partner_7} />
              <IconImg src={partner_8} />
            </IconWrapper>
          </FlexWrapper>
        </Box>
      </Container>
    </Wrapper>
  )
}
