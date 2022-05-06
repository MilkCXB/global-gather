// material
import { CssBaseline, useMediaQuery } from '@mui/material'
import { ThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles'
//
import shape from './shape'
import palette from './palette'
import typography from './typography'
import componentsOverride from './overrides'
import shadows, { customShadows } from './shadows'
import { Theme } from '@mui/system/createTheme'
import { styled } from '@mui/material/styles'
import { Breakpoint } from '@mui/material'
import { ReactElement, ReactNode } from 'react'

export type CustomTheme = Theme & {
  customShadows: typeof customShadows
  palette: typeof palette
}

// ----------------------------------------------------------------------

const themeOptions = {
  palette,
  shape,
  typography,
  shadows: shadows as any,
  customShadows,
}

export const theme = createTheme(themeOptions) as any as CustomTheme
theme.components = componentsOverride(theme)

export default function ThemeConfig({ children }: { children: JSX.Element[] | JSX.Element }) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export const ColorfulRect = styled('div')<{ width?: string; height?: string }>(({ width, height }) => ({
  height: height ? height : '3px',
  width: width ? width : '140px',
  background: 'linear-gradient(90deg, #d650d0 0%, #bd59ff 29%, #4c86ff 66%, #44d7e8 100%)',
}))

export function Hidden({
  width,
  children,
}: {
  width: 'xsDown' | 'smDown' | 'mdDown' | 'lgDown' | 'xlDown' | 'xsUp' | 'smUp' | 'mdUp' | 'lgUp' | 'xlUp'
  children: any
}) {
  const breakpoint = width.substring(0, 2) as Breakpoint

  const hiddenUp = useMediaQuery((theme: CustomTheme) => theme.breakpoints.up(breakpoint))
  const hiddenDown = useMediaQuery((theme: CustomTheme) => theme.breakpoints.down(breakpoint))

  if (width.includes('Down')) {
    return hiddenDown ? null : children
  }

  if (width.includes('Up')) {
    return hiddenUp ? null : children
  }

  return null
}
