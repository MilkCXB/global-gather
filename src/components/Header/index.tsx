import { Box, Button, Stack, Typography, useTheme } from '@mui/material'
import styled from '@mui/system/styled'
import logoBanner from '@/public/images/home/logo.png'
import { CustomTheme, Hidden } from '@/src/theme'
import { navs } from '@/src/constants/data'
import { Fragment, MutableRefObject, useCallback, useEffect, useMemo, useState } from 'react'
import { createGradient } from '@/src/theme/palette'
import Web3Status from '../Web3Status'
import { debounce } from 'lodash'

const Wrapper = styled('div')(({ theme }: { theme?: CustomTheme }) => ({
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  // background: '#FBFBFD',
  backdropFilter: 'blur(20px)',
}))

// const Blur = styled('div')(() => ({
//   width: '100%',
//   height: '100%',
//   filter: 'blur(20px)',
// }))

const ImgLogo = styled('img')(({ theme }) => ({
  width: '86px',
  height: '32px',
  [theme.breakpoints.down('sm')]: {
    width: '86px',
    height: '32px',
  },
}))

const MyButton = styled('div')`
  width: fit-content;
  padding: 7px 26px;
  border: 1px solid #fff;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  color: #fff;
  /* border-image: linear-gradient(90deg, rgba(39, 118, 255, 1), rgba(108, 97, 255, 1)) 1 1; */
  /* background-color: rgba(108, 97, 255, 1); */
`

export enum Pages {
  HOME = '#home',
  WHY = '#introduction',
  TOKEN = '#token',
  ROADMAP = '#roadmap',
}

export type HeaderRef = {
  [key in Pages]: MutableRefObject<HTMLDivElement | null>
}

export type HeaderProps = {
  refs?: HeaderRef
}

export default function Header({ refs }: HeaderProps) {
  const [active, setActive] = useState<Pages>(Pages.HOME)

  const theme = useTheme()

  const handleClickNavItem = (ref?: MutableRefObject<HTMLDivElement | null>) => {
    if (!ref) return

    // setActive(page)
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  const handleLunch = useCallback(() => {
    // location.href = ''
    window.open('http://16.162.188.15:9500/')
  }, [])

  const scrollEventListener = useMemo(() => {
    function fn() {
      if (!refs) return

      Object.keys(refs).map((page) => {
        const _page = page as Pages
        const el = refs[_page].current

        if (!el) return

        const { top, height } = el.getBoundingClientRect()
        const distance1 = top - 84
        const distance2 = top + height

        if (distance1 <= 0 && distance2 >= 0) {
          setActive(_page)
        }
      })
    }

    return debounce(fn)
  }, [refs])

  // add listener
  useEffect(() => {
    document.addEventListener('scroll', scrollEventListener)
    return () => {
      document.removeEventListener('scroll', scrollEventListener)
    }
  }, [scrollEventListener])

  return (
    <Wrapper>
      {/* <Blur /> */}
      <Box sx={{ padding: '20px 32px' }}>
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
          <Box>
            <ImgLogo src={logoBanner} alt="Logo banner" loading="lazy" />
          </Box>

          <Box>
            {/* <Button sx={{ backgroundColor: theme.palette.common.black }}>
              <Typography sx={{ color: theme.palette.primary.contrastText }}>123</Typography>
            </Button> */}

            <MyButton onClick={handleLunch}>Launch App</MyButton>
          </Box>
        </Stack>
      </Box>
    </Wrapper>
  )
}
