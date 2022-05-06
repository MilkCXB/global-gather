// ----------------------------------------------------------------------

import { Typography } from '@mui/material/styles/createTypography'

function pxToRem(value: number) {
  return `${value / 16}rem`
}

function responsiveFontSizes({ sm, md, lg }: { sm: number; md: number; lg: number }) {
  return {
    '@media (min-width:600px)': {
      fontSize: pxToRem(sm),
    },
    '@media (min-width:900px)': {
      fontSize: pxToRem(md),
    },
    '@media (min-width:1200px)': {
      fontSize: pxToRem(lg),
    },
  }
}

const FONT_PRIMARY = 'Public Sans, sans-serif'

const typography: Typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 700,
    lineHeight: 80 / 64,
    fontSize: pxToRem(30),
    ...responsiveFontSizes({ sm: 80, md: 82, lg: 84 }),
  },
  h2: {
    fontWeight: 700,
    lineHeight: 64 / 48,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 46, md: 48, lg: 50 }),
  },
  h3: {
    // fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(14),
    ...responsiveFontSizes({ sm: 26, md: 28, lg: 30 }),
  },
  h4: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    ...responsiveFontSizes({ sm: 22, md: 22, lg: 24 }),
  },
  h5: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
  },
  h6: {
    fontWeight: 700,
    lineHeight: 28 / 18,
    fontSize: pxToRem(12),
    ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
  },
  subtitle1: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  subtitle2: {
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  body1: {
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    ...responsiveFontSizes({ sm: 16, md: 16, lg: 16 }),
  },
  body2: {
    lineHeight: 22 / 14,
    fontSize: pxToRem(10),
    ...responsiveFontSizes({ sm: 14, md: 14, lg: 14 }),
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    letterSpacing: 1.1,
    textTransform: 'uppercase',
  },
  button: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
    textTransform: 'capitalize',
  },
  fontSize: 12,
  fontWeightLight: undefined,
  htmlFontSize: 16,
  pxToRem,
  ...responsiveFontSizes({ sm: 16, md: 16, lg: 16 }),
}

export default typography
