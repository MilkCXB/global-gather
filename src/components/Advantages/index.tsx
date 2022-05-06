import { Box, Button, Container, Grid, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Icon } from '@iconify/react'
import { Trans } from '@lingui/macro'
import { ColorfulRect, CustomTheme } from '@/src/theme'
import { imgLazyload } from '@/src/utils/img'

const img1 = require('@/public/images/advantages/img1.png?lqip')
const img_active1 = require('@/public/images/advantages/img1.png')

const img2 = require('@/public/images/advantages/img2.png?lqip')
const img_active2 = require('@/public/images/advantages/img2.png')
export const MyImage = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: '983px',
  transition: 'filter 0.3s',
  filter: 'blur(10px)',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    transition: 'filter 0.3s',
    filter: 'blur(10px)',
    float: 'none',
    marginTop: '69px',
  },
}))
const Wrapper = styled('div')``

const Title = styled('div')(({ theme }) => ({
  fontSize: '52px',
  fontWeight: '24px',
  fontFamily: 'TimesNewRomanPS-BoldMT,TimesNewRomanPS',
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    fontSize: '26px',
    fontWeight: '24px',
  },
}))

export default function Advantages() {
  const isXs = useMediaQuery((theme: CustomTheme) => theme.breakpoints.down('sm'))

  return (
    <Wrapper>
      <Stack sx={{ mb: { sm: '130px', xs: '76px' }, mt: { xs: '30px' } }}>
        <Title>Advantages</Title>
      </Stack>
      <Grid container sx={{ mb: '158px' }}>
        <Grid item sm={6} xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          <Stack spacing={2} textAlign={'left'} sx={{ p: { sm: '0 77px 0 165px', xs: '0 25px' } }}>
            <Typography variant={'h2'} fontWeight={700} sx={{ fontSize: { sm: '30px', xs: '20px' } }} color={'#222'}>
              The novel mintage and exchange mechanism
            </Typography>
            <Typography
              variant={'h5'}
              color="#7990B5"
              sx={{
                maxWidth: '540px',
                fontSize: { sm: '20px', xs: '12px' },
                lineHeight: { sm: '30px', xs: '20px' },
              }}
            >
              The price of a stable currency is linked with the price of a target coin,lowering the risk of
              crypto-currency investment to a large extent.
            </Typography>
          </Stack>
        </Grid>
        <Grid item sm={6} xs={12}>
          <MyImage src={img1} loading="lazy" onLoad={(e) => imgLazyload(e, img_active1, img1)} />
        </Grid>
      </Grid>
      <Grid container flexDirection={isXs ? 'column-reverse' : 'row'}>
        <Grid item sm={6} xs={12}>
          <MyImage src={img2} loading="lazy" onLoad={(e) => imgLazyload(e, img_active2, img2)} />
        </Grid>
        <Grid item sm={6} xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
          <Stack spacing={2} textAlign={'left'} sx={{ p: { sm: '0 80px 0 120px', xs: '0 25px' } }}>
            <Typography variant={'h2'} fontWeight={700} sx={{ fontSize: { sm: '30px', xs: '20px' } }} color={'#222'}>
              The novel combination of blockchain product and the traditional bond concept
            </Typography>
            <Typography
              variant={'h5'}
              color="#7990B5"
              sx={{
                fontSize: { sm: '20px', xs: '12px' },
                lineHeight: { sm: '30px', xs: '20px' },
              }}
            >
              We im- port the transaction module and arbitrage module into this stable cur- rency market to the provides
              a stable,confident and universal digital currency platform for users to look after their finances.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Wrapper>
  )
}
