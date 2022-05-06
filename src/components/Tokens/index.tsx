import { Box, Grid, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { styled } from '@mui/material/styles'

import Process from '../Process'
import { ColorfulRect, CustomTheme } from '@/src/theme'
import { infmetaFeatures, processItems } from '@/src/constants/data'
import { Fragment } from 'react'
import bgTokenCard from '@/public/images/token/bg-card.png'
import img1 from '@/public/images/token/airdrop1.png'
import img2 from '@/public/images/token/airdrop2.png'
import img3 from '@/public/images/token/airdrop3.png'
import { Icon } from '@iconify/react'
import { CircleProps } from 'react-circle'
import { DEFAULT_PAGE_SPACING } from '@/pages'

const Wrapper = styled('div')``

const CardWrapper = styled('div')``

export default function Tokens() {
  const theme: CustomTheme = useTheme()

  const isXs = useMediaQuery((theme: CustomTheme) => theme.breakpoints.down('sm'))

  return (
    <Wrapper id="token" sx={DEFAULT_PAGE_SPACING}>
      <Box>
        <Stack justifyContent={'center'} alignItems={'center'} spacing={2}>
          <Typography variant={'h2'}>Token</Typography>
          <ColorfulRect />
          <Typography color={theme.palette.grey[600]} maxWidth={1000}>
            Total Supply: 100 Trillion
          </Typography>
        </Stack>
      </Box>

      <Box
        sx={{
          mt: {
            xs: '20px',
            sm: '60px',
          },
        }}
      >
        <Grid container sx={{ overflowX: 'auto' }}>
          <Grid item sm={12}>
            <Stack
              direction={'row'}
              justifyContent={'center'}
              alignItems={isXs ? 'flex-start' : 'center'}
              spacing={isXs ? '2px' : 10}
            >
              {processItems.map(({ progress, title, desc, bgColor, progressColor }, index) => {
                return (
                  <Fragment key={index}>
                    <ProcessItem
                      progress={progress}
                      title={title}
                      desc={desc}
                      bgColor={bgColor}
                      progressColor={progressColor}
                      size={isXs ? '30' : undefined}
                    />
                  </Fragment>
                )
              })}
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          mt: {
            xs: '25px',
            sm: '100px',
          },
        }}
      >
        <CardWrapper>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <TokenCard
                header={
                  <>
                    {/* <ImgHead src={imgHead1} /> */}
                    <Typography
                      variant="h3"
                      sx={{
                        background: 'linear-gradient(90deg, #D650D0 0%, #BD59FF 10%, #4C86FF 20%, #44D7E8 30%)',
                        ' -webkit-background-clip': 'text',
                        color: 'transparent',
                      }}
                    >
                      Airdrop
                    </Typography>
                    <ColorfulRect width="70px" />
                    <Typography color={theme.palette.grey[600]}>
                      Data from Dune Analytics up until January 12, 2022
                    </Typography>
                  </>
                }
                content={
                  <>
                    <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>
                      <Stack spacing={1}>
                        <Img src={img1} />
                        <Typography variant="h3">305K+</Typography>
                        <Typography color={theme.palette.grey[600]}>Users claimed</Typography>
                      </Stack>
                      <Stack spacing={1}>
                        <Img src={img2} />
                        <Typography variant="h3">620K+</Typography>
                        <Typography color={theme.palette.grey[600]}>Users claimed</Typography>
                      </Stack>
                      <Stack spacing={1}>
                        <Img src={img3} />
                        <Typography variant="h3">210K+</Typography>
                        <Typography color={theme.palette.grey[600]}>Users claimed</Typography>
                      </Stack>
                    </Stack>
                  </>
                }
              />
            </Grid>
            <Grid item xs={12} sm={6} sx={{ mt: { xs: '16px' } }}>
              <TokenCard
                header={
                  <>
                    {/* <ImgHead src={imgHead2} /> */}
                    <Typography
                      variant="h3"
                      sx={{
                        background: 'linear-gradient(90deg, #D650D0 0%, #BD59FF 10%, #4C86FF 20%, #44D7E8 30%)',
                        ' -webkit-background-clip': 'text',
                        color: 'transparent',
                      }}
                    >
                      InfMeta
                    </Typography>
                    <ColorfulRect width="70px" />
                    <Typography color={theme.palette.grey[600]}>
                      20% of the xxx tokens have been allocated to the InfMeta to:
                    </Typography>
                  </>
                }
                content={
                  <>
                    <Stack spacing={2} justifyContent={'space-between'}>
                      {infmetaFeatures.map(({ desc }, index) => {
                        return (
                          <Fragment key={index}>
                            <Stack direction={'row'} spacing={1} alignItems={'center'}>
                              <Icon icon={'entypo:triangle-right'} />
                              <Typography>{desc}</Typography>
                            </Stack>
                          </Fragment>
                        )
                      })}
                    </Stack>
                  </>
                }
              />
            </Grid>
          </Grid>
        </CardWrapper>
      </Box>
    </Wrapper>
  )
}

function ProcessItem({
  progress,
  title,
  desc,
  bgColor,
  progressColor,
  ...rest
}: CircleProps & {
  progress: number
  title: string
  desc: string
  bgColor: string
  progressColor: string
}) {
  const theme: CustomTheme = useTheme()

  const isXs = useMediaQuery((theme: CustomTheme) => theme.breakpoints.down('sm'))

  return (
    <Stack spacing={isXs ? 1 : 2} alignItems={'center'}>
      <Process
        {...rest}
        progress={progress}
        bgColor={bgColor}
        progressColor={progressColor}
        lineWidth={isXs ? '40px' : '40px'}
      />
      <Stack spacing={1} alignItems={'center'}>
        <Typography variant="h3" color={theme.palette.chart.yellow[1]}>
          {title}
        </Typography>
        <Typography color={theme.palette.grey[600]}>{desc}</Typography>
      </Stack>
    </Stack>
  )
}

const TokenCardWrapper = styled('div')(() => ({
  background: `url(${bgTokenCard}) no-repeat;`,
  backgroundSize: '100% 100%',
  backgroundPosition: 'center',
  maxWidth: '480px',
}))
const Img = styled('img')(({ theme }) => ({
  width: '40px',
  height: '40px',
  [theme.breakpoints.down('sm')]: { width: '28px', height: '28px' },
}))
const ImgHead = styled('img')(() => ({
  width: '150px',
}))
function TokenCard({ header, content }: { header: JSX.Element[] | JSX.Element; content: JSX.Element[] | JSX.Element }) {
  const theme: CustomTheme = useTheme()

  return (
    <TokenCardWrapper
      sx={{
        p: {
          xs: '48px 22px',
          sm: '60px 30px',
        },
      }}
    >
      <Stack spacing={2}>{header}</Stack>

      <Box sx={{ mt: { xs: '20px', sm: '60px' } }}>{content}</Box>
    </TokenCardWrapper>
  )
}
