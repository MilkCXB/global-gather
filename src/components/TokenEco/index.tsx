import { Box, Button, Grid, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Icon } from '@iconify/react'
import { Trans } from '@lingui/macro'
import { ColorfulRect, CustomTheme } from '@/src/theme'
import { imgLazyload } from '@/src/utils/img'
import token from '@/public/images/tokeneco/token.png'
import token_h5 from '@/public/images/tokeneco/token_h5.png'

const Wrapper = styled('div')(({ theme }) => ({
  padding: '284px 0 252px 0 ',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(270deg, #e9e9ff 0%, #f3f5f9 32%, #f3f5f9 71%, #ecf2ff 100%)',
  [theme.breakpoints.down('sm')]: {
    padding: '50px 0 100px 0',
  },
}))

export const MyImage = styled('img')(({ theme }) => ({
  width: '100%',
}))

const MiddleImg = styled('img')(({ theme }) => ({
  width: '1072px',
  marginTop: '108px',
  [theme.breakpoints.down('sm')]: {
    marginTop: '45px',
    width: '303px',
  },
}))
export default function TokenEco() {
  const isXs = useMediaQuery((theme: CustomTheme) => theme.breakpoints.down('sm'))

  return (
    <Wrapper>
      <Typography
        variant={'h2'}
        fontWeight={700}
        sx={{ fontSize: { sm: '52px', xs: '26px' }, textAlign: 'center' }}
        color={'#222'}
      >
        Token Economics
      </Typography>

      {isXs ? <MiddleImg src={token_h5} /> : <MiddleImg src={token} />}
    </Wrapper>
  )
}
