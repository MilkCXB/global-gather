import { useActiveWeb3React, useConnectCallback } from '@/src/hooks/web3'
import { Box, Button, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import styled from '@mui/system/styled'
import Link from 'next/link'
import { useCallback } from 'react'
import { RecolorfulButtonWrapper } from '../../theme/overrides/Button'
import bgLarge from '@/public/images/home/bg_home.png'
import bgLargeH5 from '@/public/images/home/bg_home_h5.png'
import { CustomTheme } from '@/src/theme'

const Wrapper = styled('div')(({ theme }) => ({
  background: `url(${bgLarge}) no-repeat;`,
  backgroundSize: '100%',
  paddingBottom: '219px',
  // backgroundPosition: '200px 100px',
  [theme.breakpoints.down('sm')]: {
    background: `url(${bgLargeH5})`,
    fontWeight: '24px',
    backgroundSize: 'cover',

    paddingBottom: '391px',
  },
}))

const MyStack = styled(Stack)``

const Text1 = styled('div')(({ theme }) => ({
  fontSize: '52px',
  fontWeight: '24px',
  color: '#fff',
  fontFamily: 'TimesNewRomanPS-BoldMT,TimesNewRomanPS',
  [theme.breakpoints.down('sm')]: {
    fontSize: '26px',
    fontWeight: '24px',
    textAlign: 'center',
  },
}))

const Text2 = styled('div')(({ theme }) => ({
  fontSize: '20px',
  color: '#fff',
  maxWidth: '674px',
  fontWeight: '24px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
    fontWeight: '24px',
    padding: '0 15px',
    textAlign: 'center',
  },
}))

const MyButton = styled('div')(({ theme }) => ({
  width: 'fit-content',
  color: '#222',
  background: '#fff',
  cursor: 'pointer',
  padding: '16px 56px',
  borderRadius: '15px',
  fontSize: '24px',
  fontFamily: 'TimesNewRomanPS-BoldMT, TimesNewRomanPS',
  marginTop: '40px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
    fontWeight: '24px',
    padding: '10px 30px',
    margin: '0 auto',
  },
}))

const MobileBc = styled('img')`
  width: 100%;
  margin-top: 26px;
`

export default function HomePage() {
  const theme = useTheme()
  const isXs = useMediaQuery((theme: CustomTheme) => theme.breakpoints.down('sm'))

  const { account } = useActiveWeb3React()
  const { handleConnect } = useConnectCallback()

  const handleClaimToken = useCallback(() => {
    console.log('[]:', 'handleClaimToken')
  }, [])

  const handleLunch = useCallback(() => {
    // location.href = ''
    window.open('http://16.162.188.15:9500/')
  }, [])

  return (
    <Wrapper id="home" sx={{ pt: { xs: '120px', sm: '220px', lg: '280px', xl: '450px' } }}>
      <MyStack spacing={3} sx={{ ml: { sm: '170px' } }}>
        <Text1>Welcome to TORAI</Text1>
        <Text2>
          Torai, a novel modular stable currency system.a bond protocol based on stable currency issuance. Through the
          combination of liquidity, trading, design, and financial management products can be designed and issued within
          various protocols.
        </Text2>

        <Box>
          <MyButton onClick={handleLunch}>Launch App</MyButton>
        </Box>
        {/* {isXs ? <MobileBc src={bgLargeH5} /> : null} */}
      </MyStack>
    </Wrapper>
  )
}
