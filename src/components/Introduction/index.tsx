import { useActiveWeb3React, useConnectCallback } from '@/src/hooks/web3'
import { Button, Grid, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import styled from '@mui/system/styled'
import { useCallback } from 'react'
import { RecolorfulButtonWrapper } from '../../theme/overrides/Button'
import bondImg from '@/public/images/middle/bond-icon.png'
import daoImg from '@/public/images/middle/dao-icon.png'
import dexImg from '@/public/images/middle/dex-icon.png'
import stableImg from '@/public/images/middle/stable-icon.png'
import Box from '@mui/system/Box'
import { Icon } from '@iconify/react'
import { CustomTheme } from '@/src/theme'

const Wrapper = styled('div')(({ theme }) => ({
  padding: '0 200px',
  [theme.breakpoints.down('sm')]: {
    padding: '45px 15px',
  },
}))

const FlexWrapper = styled('div')`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const InBox = styled('div')(({ theme }) => ({
  background: '#fff',
  borderRadius: '15px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'left',
  padding: '24px 30px',
  [theme.breakpoints.down('sm')]: {
    padding: '15px',
  },
}))

const InBoxTitle = styled('div')`
  font-size: 20px;
  font-family: 'TimesNewRomanPS-BoldMT, TimesNewRomanPS';
  font-weight: normal;
  color: #222222;
`

const InBoxContent = styled('div')`
  font-size: 16px;
  font-family: 'TimesNewRomanPSMT';
  color: #7990b5;
`

const Title = styled('div')(({ theme }) => ({
  fontSize: '52px',
  fontWeight: '24px',
  fontFamily: 'TimesNewRomanPS-BoldMT,TimesNewRomanPS',
  [theme.breakpoints.down('sm')]: {
    fontSize: '26px',
    fontWeight: '24px',
  },
}))

const IconImg = styled('img')(({ theme }) => ({
  width: '60px',
  [theme.breakpoints.down('sm')]: {
    width: '30px',
  },
}))

const CardWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '100%',
  margin: '125px 0 71px 0',
  // gridTemplateColumns: '1fr 1fr 1fr 1fr',
  justifyContent: 'flex-start',
  // alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    // gridTemplateColumns: '1fr 1fr ',
    flexWrap: 'wrap',
    margin: '45px 0 30px 0',
  },
}))

const CardCommon = styled('div')`
  display: flex;
  padding: 32px;
  width: fit-content;
  text-align: center;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  :hover {
    background: linear-gradient(180deg, #ffffff 0%, #ffffff 100%);
    box-shadow: 0px 15px 30px 0px rgba(223, 229, 237, 0.5);
    border-radius: 15px;
    cursor: pointer;
  }
`

const Card = styled(CardCommon)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    padding: '15px',
  },
}))

const CardTitle = styled('div')(({ theme }) => ({
  fontSize: '20px',
  fontWeight: 'normal',
  fontFamily: 'TimesNewRomanPS-BoldMT,TimesNewRomanPS',
  margin: '18px 0',
  [theme.breakpoints.down('sm')]: {
    fontSize: '15px',
    margin: '10px 0',
  },
}))

const CardTip = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  fontSize: '16px',
  fontFamily: 'TimesNewRomanPS-BoldMT, TimesNewRomanPS',
  fontWeight: 'normal',
  marginTop: '28px',
  color: '#2776ff',
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
  },
}))

const MyStack = styled(Stack)``

export default function Introduction() {
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

  const handelSkip = useCallback((parameter: string) => {
    window.open(`http://16.162.188.15:9500/${parameter}`)
  }, [])
  return (
    <Wrapper id="home">
      <FlexWrapper>
        <Title>Introduction</Title>
        <CardWrapper>
          <Card sx={{ width: { xs: '50%' } }} onClick={() => handelSkip('swap')}>
            <IconImg src={bondImg} />
            <CardTitle>DEX</CardTitle>
            <Typography color={'#7990B5'} sx={{ height: { sm: '180px', xs: '126px' } }}>
              The transaction module corre- lates the currency with other existing digital currencies to enhance its
              market confidence as well as attract liquidity from other currency markets.
            </Typography>
            <CardTip>
              Trade
              <Icon icon={'bx:right-arrow-alt'} />
            </CardTip>
          </Card>
          <Card sx={{ width: { xs: '50%' } }} onClick={() => handelSkip('minting')}>
            <IconImg src={daoImg} />
            <CardTitle>Stable Currency</CardTitle>
            <Typography color={'#7990B5'} sx={{ height: { sm: '180px', xs: '126px' } }}>
              The stability module provides a bidirectional transformation of the two dual currencies, guaranteeing the
              price of the stable currency close to USD.
            </Typography>
            <CardTip>
              Minting
              <Icon icon={'bx:right-arrow-alt'} />
            </CardTip>
          </Card>
          <Card sx={{ width: { xs: '50%' } }} onClick={() => handelSkip('bond')}>
            <IconImg src={dexImg} />
            <CardTitle>Bond</CardTitle>
            <Typography color={'#7990B5'} sx={{ height: { sm: '180px', xs: '126px' } }}>
              The bond module increases the gross value of the stable currency and also provides the users with a steady
              growth channel of digital properties.
            </Typography>
            <CardTip>
              Subscription
              <Icon icon={'bx:right-arrow-alt'} />
            </CardTip>
          </Card>
          <Card sx={{ width: { xs: '50%' } }} onClick={() => handelSkip('vote')}>
            <IconImg src={stableImg} />
            <CardTitle>DAO</CardTitle>
            <Typography color={'#7990B5'} sx={{ height: { sm: '180px', xs: '126px' } }}>
              Decentralized autonomous management, enhancing the value capture of products through community power
            </Typography>
            <CardTip>
              Vote
              <Icon icon={'bx:right-arrow-alt'} />
            </CardTip>
          </Card>
        </CardWrapper>

        <InBox>
          <InBoxTitle>The arbitrage</InBoxTitle>
          <InBoxContent>
            The arbitrage module penetrates the former three modules as a spontaneous adjustment of the market,including
            price maintaining,gross value increment, liquidity providing and market confidence building.
          </InBoxContent>
        </InBox>
      </FlexWrapper>
    </Wrapper>
  )
}
