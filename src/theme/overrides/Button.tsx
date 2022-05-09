// ----------------------------------------------------------------------

import styled from "@emotion/styled"
import { CustomTheme } from "../index"

export const RecolorfulButtonWrapper = styled.div`
  background: linear-gradient(90deg, #57affb 0%, #8e2ef6 100%);

  padding: 1px;
  border-radius: 8px;
`
export const RecolorfulButtonWrapper2 = styled.div`
  background: linear-gradient(90deg, #57affb 0%, #8e2ef6 100%);
  padding: 2px;
  border-radius: 8px;
`

export default function Button(theme: CustomTheme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            boxShadow: "none",
          },
          padding: {
            xs: "4px 6px",
            sm: "8px 24px",
          },

          color: "inherit",
        },
        sizeLarge: {
          height: 48,
        },
        containedInherit: {
          color: theme.palette.grey[800],
          boxShadow: theme.customShadows.z8,
          "&:hover": {
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
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
        textInherit: {
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
    },
  }
}
