import { Box, Stack, Typography, useTheme } from '@mui/material'
import { styled } from '@mui/material/styles'

import { ColorfulRect, CustomTheme } from '@/src/theme'
import { useActiveWeb3React } from '@/src/hooks/web3'
import { useEffect } from 'react'
import { DEFAULT_PAGE_SPACING } from '@/pages'
import LangSwitcher from '../LangSwitcher'
import { Trans } from '@lingui/macro'

const Wrapper = styled('div')(() => ({}))

export default function RoadMap() {
  const theme: CustomTheme = useTheme()
  const { account } = useActiveWeb3React()

  useEffect(() => {
    console.log('[account]:', account)
  }, [account])

  return (
    <Wrapper sx={DEFAULT_PAGE_SPACING}>
      <Box>
        <Stack justifyContent={'center'} alignItems={'center'} spacing={2}>
          <Typography variant={'h2'}>Roadmap</Typography>
          <ColorfulRect />
        </Stack>
      </Box>

      <LangSwitcher />

      <Box
        sx={{
          mt: {
            xs: '40px',
            sm: '60px',
          },
        }}
      >
        <Trans>hello</Trans>
        {/* 123 */}
      </Box>
    </Wrapper>
  )
}
