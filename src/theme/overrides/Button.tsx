// ----------------------------------------------------------------------

import styled from '@emotion/styled'
import { CustomTheme } from '../index'

export const RecolorfulButtonWrapper = styled.div`
  background: linear-gradient(90deg, #d650d0 0%, #bd59ff 29%, #4c86ff 66%, #44d7e8 100%);
  padding: 2px;
  border-radius: 8px;
`
export const RecolorfulButtonWrapper2 = styled.div`
  background: linear-gradient(90deg, #bd59ff 0%, #4c86ff 50%, #76ee68 100%);
  padding: 2px;
  border-radius: 8px;
`

export default function Button(theme: CustomTheme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            boxShadow: 'none',
          },
          padding: {
            xs: '4px 6px',
            sm: '8px 24px',
          },

          color: 'inherit',
        },
        sizeLarge: {
          height: 48,
        },
        containedInherit: {
          color: theme.palette.grey[800],
          boxShadow: theme.customShadows.z8,
          '&:hover': {
            backgroundColor: theme.palette.grey[400],
          },
        },
        containedPrimary: {
          boxShadow: theme.customShadows.primary,
        },
        containedSecondary: {
          boxShadow: theme.customShadows.secondary,
        },
        outlinedInherit: {
          // border: `1px solid ${theme.palette.grey[500_32]}`,
          border: `1px solid ${theme.palette.grey[500_32]}`,
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        },
        textInherit: {
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
    },
  }
}
