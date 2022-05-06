import { RecolorfulButtonWrapper } from '@/src/theme/overrides/Button'
import { useTheme } from '@mui/material'
import { Button, Typography } from '@mui/material'
import { UnsupportedChainIdError } from '@web3-react/core'

import { useActiveWeb3React, useConnectCallback } from '../../hooks/web3'
import { shortenAddress } from '../../utils'

export default function Web3Status() {
  const theme = useTheme()

  const { account, error } = useActiveWeb3React()

  const { handleConnect } = useConnectCallback()

  if (account) {
    return (
      <RecolorfulButtonWrapper>
        <Button sx={{ backgroundColor: theme.palette.common.black }}>
          <Typography sx={{ color: theme.palette.primary.contrastText }}>{shortenAddress(account ?? '')}</Typography>
        </Button>
      </RecolorfulButtonWrapper>
    )
  } else if (error) {
    return (
      <Button>
        <Typography>{error instanceof UnsupportedChainIdError ? 'Wrong Network' : 'Error'}</Typography>
      </Button>
    )
  }
  return (
    <RecolorfulButtonWrapper>
      <Button sx={{ backgroundColor: theme.palette.common.black }} onClick={handleConnect}>
        <Typography sx={{ color: theme.palette.primary.contrastText }}> Connect to a wallet</Typography>
      </Button>
    </RecolorfulButtonWrapper>
  )
}
