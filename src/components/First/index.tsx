import { useActiveWeb3React, useConnectCallback } from '@/src/hooks/web3'
import { Button, Stack, Typography, useTheme } from '@mui/material'
import styled from '@mui/system/styled'
import Link from 'next/link'
import { useCallback } from 'react'
import { RecolorfulButtonWrapper } from '../../theme/overrides/Button'

const Wrapper = styled('div')``

const MyStack = styled(Stack)``

export default function First() {
  const theme = useTheme()

  const { account } = useActiveWeb3React()
  const { handleConnect } = useConnectCallback()

  const handleClaimToken = useCallback(() => {
    console.log('[]:', 'handleClaimToken')
  }, [])
  const handleLunch = useCallback(() => {
    console.log('[]:', 'handleLunch')
  }, [])

  return (
    <Wrapper id="home" sx={{ pt: { xs: '180px', sm: '220px', lg: '300px', xl: '450px' } }}>
      <MyStack justifyContent={'center'} alignItems={'center'} spacing={2}>
        <Typography variant={'h1'} lineHeight={1}>
          INFMETA
        </Typography>
        <Typography variant={'h2'} lineHeight={1} fontWeight={'normal'}>
          Decentralized identity
        </Typography>
        <Typography variant={'h2'} lineHeight={1} fontWeight={'normal'}>
          高质量用户集群地
        </Typography>

        <Stack direction={'row'} spacing={3} sx={{ pt: { sm: '16px' } }}>
          <RecolorfulButtonWrapper>
            {account ? (
              <Button sx={{ backgroundColor: 'rgba(0,0,0,.75)' }} onClick={handleClaimToken}>
                <Link href={'/claim'} passHref>
                  <Typography sx={{ color: theme.palette.primary.contrastText }}>Claim Tokens</Typography>
                </Link>
              </Button>
            ) : (
              <Button sx={{ backgroundColor: 'rgba(0,0,0,.75)' }} onClick={handleConnect}>
                <Typography
                  sx={{
                    color: theme.palette.primary.contrastText,
                  }}
                >
                  Connect wallet to Claim/ Refund
                </Typography>
              </Button>
            )}
          </RecolorfulButtonWrapper>
          <RecolorfulButtonWrapper>
            <Button sx={{ backgroundColor: 'transparent' }}>
              <Typography sx={{ color: theme.palette.primary.contrastText }} onClick={handleLunch}>
                Launch App
              </Typography>
            </Button>
          </RecolorfulButtonWrapper>
        </Stack>
      </MyStack>
    </Wrapper>
  )
}
