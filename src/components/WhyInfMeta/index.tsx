import { Box, Button, Grid, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Icon } from '@iconify/react'

const img1 = require('@/public/images/why/img1.png?lqip')
const img2 = require('@/public/images/why/img2.png?lqip')
const img3 = require('@/public/images/why/img3.png?lqip')
const img4 = require('@/public/images/why/img4.png?lqip')
const img5 = require('@/public/images/why/img5.png?lqip')

const img_active1 = require('@/public/images/why/img1.png')
const img_active2 = require('@/public/images/why/img2.png')
const img_active3 = require('@/public/images/why/img3.png')
const img_active4 = require('@/public/images/why/img4.png')
const img_active5 = require('@/public/images/why/img5.png')

import { ColorfulRect, CustomTheme } from '@/src/theme'
import { DEFAULT_PAGE_SPACING } from '@/pages'
import { imgLazyload } from '@/src/utils/img'
import { RecolorfulButtonWrapper, RecolorfulButtonWrapper2 } from '@/src/theme/overrides/Button'

const Wrapper = styled('div')``

const MyImage = styled('img')(() => ({
  width: '100%',
  transition: 'filter 0.3s',
  filter: 'blur(10px)',
}))

export default function WhyInfMeta() {
  const theme = useTheme()

  const isXs = useMediaQuery((theme: CustomTheme) => theme.breakpoints.down('sm'))

  return (
    <Wrapper id="introduction" sx={DEFAULT_PAGE_SPACING}>
      <Box>
        <Stack justifyContent={'center'} alignItems={'center'} spacing={2}>
          <Typography variant={'h2'}>InfMeta</Typography>
          <ColorfulRect />
          <Typography color={theme.palette.grey[600]} maxWidth={1000} textAlign={'center'}>
            InfMeta is a portal to a decentralized social world built on top of Web3.0. It aims to establish a
            high-quality platform, where users can highlight their on-chain assets and provide users with a top,
            deepened and rewarding social experience through unique ID tags.
          </Typography>
        </Stack>
      </Box>

      <Box
        sx={{
          mt: {
            xs: '50px',
            sm: '170px',
          },
        }}
      >
        <Grid container flexDirection={isXs ? 'column-reverse' : 'row'}>
          <Grid item sm={6} xs={12}>
            <MyImage
              loading="lazy"
              src={img1}
              sx={{ p: { xs: '16px 20px 0', sm: '30px 50px' } }}
              onLoad={(e) => imgLazyload(e, img_active1, img1)}
            />
          </Grid>

          <Grid item sm={6} xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
            <Stack spacing={2} textAlign={'right'}>
              <Typography variant={'h2'}>Address benefit-sharing issues</Typography>
              <Typography variant={'h3'} color={theme.palette.grey[600]}>
                Under the algorithm mechanism of traditional social platforms, there is an unbalanced distribution of
                benefits between users and service providers in terms of traffic realization, which is not conducive to
                the protection of users' rights and interests. InfMeta allows users to monetize their social influence
                without the need for third-party commissions.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          mt: {
            xs: '50px',
            sm: '440px',
          },
        }}
      >
        <Grid container>
          <Grid item sm={4} xs={12} sx={{ display: 'flex', alignItems: 'flex-start' }}>
            <Stack spacing={2}>
              <Typography variant="h2">Resolve data ownership issues</Typography>
              <Typography variant={'h3'} color={theme.palette.grey[600]}>
                123
              </Typography>
            </Stack>
          </Grid>

          <Grid item sm={8} xs={12}>
            <MyImage
              loading="lazy"
              src={img2}
              sx={{ p: { xs: '16px 20px 0', sm: '30px 50px' } }}
              onLoad={(e) => imgLazyload(e, img_active2, img2)}
            />
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          mt: {
            xs: '50px',
            sm: '440px',
          },
        }}
      >
        <Grid container flexDirection={isXs ? 'column-reverse' : 'row'}>
          <Grid item sm={8} xs={12}>
            <MyImage
              src={img3}
              sx={{ p: { xs: '16px 20px 0', sm: '30px 50px' } }}
              loading="lazy"
              onLoad={(e) => imgLazyload(e, img_active3, img3)}
            />
          </Grid>

          <Grid item sm={4} xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
            <Stack spacing={2} textAlign={'right'}>
              <Typography variant={'h2'}>Solve credit problems</Typography>
              <Typography variant={'h3'} color={theme.palette.grey[600]}>
                In traditional social networking, all registration requires users' real identity information, and the
                information stored in the background of operators is easy to leak.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          mt: {
            xs: '50px',
            sm: '440px',
          },
        }}
      >
        <Grid container>
          <Grid item sm={4} xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
            <Stack spacing={2}>
              <Typography variant={'h2'}>Address privacy and security issues</Typography>
              <Typography variant={'h3'} color={theme.palette.grey[600]}>
                In traditional social networking, all account registration requires users' real identity information,
                and the information stored in the backend of operators is easy to leak. InfMeta is based on blockchain
                technology, and the anonymity of user identity information helps protect their data privacy and
                security.
              </Typography>
            </Stack>
          </Grid>

          <Grid item sm={8} xs={12}>
            <MyImage
              src={img4}
              sx={{ p: { xs: '16px 20px 0', sm: '30px 50px' } }}
              loading="lazy"
              onLoad={(e) => imgLazyload(e, img_active4, img4)}
            />
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          mt: {
            xs: '50px',
            sm: '440px',
          },
        }}
      >
        <Grid container flexDirection={isXs ? 'column-reverse' : 'row'}>
          <Grid item sm={6} xs={12}>
            <MyImage
              src={img5}
              sx={{ p: { xs: '16px 20px 0', sm: '30px 50px' } }}
              loading="lazy"
              onLoad={(e) => imgLazyload(e, img_active5, img5)}
            />
          </Grid>

          <Grid item sm={6} xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
            <Stack alignItems={'flex-end'} spacing={2}>
              <RecolorfulButtonWrapper2 style={{ width: 'fit-content' }}>
                <Button
                  sx={{
                    backgroundColor: '#080B14',
                    '&:hover': {
                      backgroundColor: '#080B14',
                    },
                  }}
                >
                  <Stack direction={'row'} alignItems={'center'} spacing={3}>
                    <Typography>Join the community</Typography>
                    <Icon icon={'ant-design:arrow-right-outlined'} />
                  </Stack>
                </Button>
              </RecolorfulButtonWrapper2>
              <Typography variant={'h3'} color={theme.palette.grey[600]}>
                你可以加入我们的社群，获取更多的产品咨询，更加有机会赢取产品的奖励！
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Wrapper>
  )
}
