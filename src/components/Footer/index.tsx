import { useActiveWeb3React, useConnectCallback } from '@/src/hooks/web3'
import { CustomTheme, theme } from '@/src/theme'
import { Box, Button, Container, Grid, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import styled from '@mui/system/styled'
import Link from 'next/link'
import logoBanner from '@/public/images/home/logo_revert.png'
import icon1 from '@/public/images/home/icon1.png'
import icon2 from '@/public/images/home/icon2.png'
import icon3 from '@/public/images/home/icon3.png'
import icon4 from '@/public/images/home/icon4.png'
import icon5 from '@/public/images/home/icon5.png'
import { FRIEND_LINK } from '@/src/constants/misc'

const Wrapper = styled('div')(({ theme }) => ({
  // backgroundColor: theme.palette.common.black,
}))

const MyStack = styled(Stack)``
const Outer = styled('a')`
  cursor: pointer;
`
const NavItem = styled('a')`
  cursor: pointer;
`

const ImgLogo = styled('img')(({ theme }) => ({
  width: '86px',
  height: '32px',
  [theme.breakpoints.down('sm')]: {
    width: '43px',
    height: '16px',
  },
}))

const FriendImg = styled('img')(({ theme }) => ({
  width: '24px',
  height: '24px',
  [theme.breakpoints.down('sm')]: {
    width: '20px',
    height: '20px',
  },
}))

export default function Footer() {
  const theme = useTheme()
  const isXs = useMediaQuery((theme: CustomTheme) => theme.breakpoints.down('sm'))

  return (
    <Wrapper
      sx={{
        p: { sm: '53px 32px', xs: '20px' },
        background: 'linear-gradient(90deg, #2776FF 0%, #6C61FF 100%)',
      }}
    >
      <Container>
        <Box>
          <Stack direction={'column'} spacing={{ sm: '30px', xs: '20px' }}>
            <Box display={'flex'} alignItems={'center'}>
              <ImgLogo src={logoBanner} alt="Logo banner" loading="lazy" />
              {isXs ? (
                <Grid item xs={12} sm={2}>
                  <Stack direction={'row'} spacing={3} alignItems={'center'} justifyContent={'flex-end'}>
                    <Outer href={FRIEND_LINK.twitter}>
                      <FriendImg src={icon1} />
                    </Outer>
                    <Outer href={FRIEND_LINK.telegram}>
                      <FriendImg src={icon2} />
                    </Outer>
                    <Outer href={FRIEND_LINK.discord}>
                      <FriendImg src={icon3} />
                    </Outer>
                    <Outer href={FRIEND_LINK.medium}>
                      <FriendImg src={icon4} />
                    </Outer>
                    <Outer href={FRIEND_LINK.github}>
                      <FriendImg src={icon5} />
                    </Outer>
                  </Stack>
                </Grid>
              ) : null}
            </Box>

            <Box>
              <Grid container>
                <Grid item xs={12} sm={10}>
                  <Stack
                    direction={'row'}
                    spacing={{ sm: '50px', xs: '13px' }}
                    alignItems={'center'}
                    sx={{
                      color: '#fff',
                    }}
                  >
                    <NavItem>
                      <Typography sx={{ fontSize: { sm: '16px', xs: '10px' } }}>Privacy policy</Typography>
                    </NavItem>
                    <NavItem>
                      <Typography sx={{ fontSize: { sm: '16px', xs: '10px' } }}>Terms of Services</Typography>
                    </NavItem>
                    <NavItem>
                      <Typography sx={{ fontSize: { sm: '16px', xs: '10px' } }}>Legal Overview</Typography>
                    </NavItem>
                  </Stack>
                </Grid>
                {isXs ? null : (
                  <Grid item xs={12} sm={2}>
                    <Stack direction={'row'} spacing={2} alignItems={'center'} justifyContent={'flex-end'}>
                      <Outer href={FRIEND_LINK.twitter}>
                        <FriendImg src={icon1} />
                      </Outer>
                      <Outer href={FRIEND_LINK.telegram}>
                        <FriendImg src={icon2} />
                      </Outer>
                      <Outer href={FRIEND_LINK.discord}>
                        <FriendImg src={icon3} />
                      </Outer>
                      <Outer href={FRIEND_LINK.medium}>
                        <FriendImg src={icon4} />
                      </Outer>
                      <Outer href={FRIEND_LINK.github}>
                        <FriendImg src={icon5} />
                      </Outer>
                    </Stack>
                  </Grid>
                )}
              </Grid>
            </Box>

            <Box
              sx={{
                color: '#fff',
              }}
            >
              <Typography sx={{ textAlign: 'left' }}>
                The provides a stable,confident and universal digital currency platform for users to look after their
                finances.
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Wrapper>
  )
}
