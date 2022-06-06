import type { NextPage } from "next"
import Page from "../src/components/Page"
import Header from "../src/components/Header"
import { styled, useTheme } from "@mui/material/styles"
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material"
import bgLarge from "@/public/images/bg-large.png"
// import bgLargeH5 from '@/public/images/bg-large-h5.png'
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { RecolorfulButtonWrapper } from "@/src/theme/overrides/Button"
import { Icon } from "@iconify/react"
import { ContractManager } from "@/src/utils/contract"
import { useActiveWeb3React } from "@/src/hooks/web3"
import { Erc20 } from "@/src/abis/types"
import { MaxUint256 } from "@ethersproject/constants"
import { useRouter } from "next/router"

const Wrapper = styled("div")(({ theme }) => ({
  padding: "84px 32px 0",
  backgroundColor: theme.palette.common.black,
  minHeight: "100vh",
  [theme.breakpoints.down("sm")]: {
    // background: `url(${bgLargeH5}) no-repeat;`,
    backgroundPosition: "unset",
    backgroundSize: "100%",
    padding: "60px 8px 0",
  },
  [theme.breakpoints.up("md")]: {
    backgroundSize: "100%",
    backgroundPosition: "unset",
  },
  [theme.breakpoints.up("xl")]: {
    backgroundSize: "100%",
    backgroundPosition: "unset",
  },
}))

const LittleTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[600],
}))

enum ApproveState {
  PENDING,
  APPROVED,
  NOT_APPROVED,
  UNKNOWN,
}

const tokenAddress = "0x31a9AA4c6817121963557ac2360edee6452c08a1"
const spender = "0xc1f11636103fF5327057949a2dA7CC9FBfa72725"

const Claim: NextPage = () => {
  const [approveState, setApproveState] = useState(ApproveState.UNKNOWN)
  const [manager, setManager] = useState<ContractManager>()
  const [tokenContract, setTokenContract] = useState<Erc20>()

  const theme = useTheme()
  const { library, chainId, account } = useActiveWeb3React()

  // const router = useRouter()

  // useEffect(() => {
  //   console.log('[router]:', router)
  // }, [router])

  const handleApprove = useCallback(async () => {
    if (!tokenContract) return

    try {
      setApproveState(ApproveState.PENDING)

      const { wait } = await tokenContract.approve(spender, MaxUint256)
      await wait()

      setApproveState(ApproveState.APPROVED)
    } catch (err) {
      setApproveState(ApproveState.NOT_APPROVED)
    }
  }, [tokenContract])

  const handleClaim = useCallback(() => {
    console.log("[]:", "claim")
  }, [])

  // init contract manager
  useEffect(() => {
    if (!library || !chainId || !account) {
      return
    }

    const manager = new ContractManager(library, chainId, account)
    setManager(manager)
    setTokenContract(manager.getTokenContract(tokenAddress))
  }, [account, chainId, library])

  // query approve state
  useEffect(() => {
    if (!tokenContract || !account) return

    tokenContract.allowance(account, spender).then((allowance) => {
      if (allowance.gt("100000000")) {
        setApproveState(ApproveState.APPROVED)
      } else {
        setApproveState(ApproveState.NOT_APPROVED)
      }
    })
  }, [account, tokenContract])

  return (
    <Page title={"Claim | InfMeta"}>
      <Wrapper>
        <Header />

        <Container>
          <Box
            sx={{
              p: {
                xs: "220px 0",
                lg: "160px 0",
                xl: "280px 0",
              },
            }}
          >
            <Card
              sx={{
                maxWidth: "600px",
                m: "0 auto",
                p: { xs: "24px", sm: "50px" },
                backgroundColor: theme.palette.grey[900],
                color: theme.palette.grey[100],
              }}
            >
              <Typography variant={"h3"}>Claim Tokens！</Typography>

              <Stack
                direction={"row"}
                spacing={2}
                alignItems={"center"}
                sx={{ mt: { xs: "20px", sm: "40px" } }}
              >
                <Stack spacing={2}>
                  <LittleTypography>Personal Gas</LittleTypography>
                  <LittleTypography>Reward</LittleTypography>
                </Stack>

                <Stack spacing={1}>
                  <Stack direction={"row"} alignItems={"center"} spacing={1}>
                    <Typography variant={"h4"}>87.98K ETH</Typography>
                    <LittleTypography>($389.89K)</LittleTypography>
                  </Stack>

                  <Typography variant={"h4"}>$887.98K</Typography>
                </Stack>
              </Stack>

              {approveState == ApproveState.NOT_APPROVED ? (
                <Grid
                  container
                  spacing={2}
                  sx={{ mt: { xs: "12px", sm: "32px" } }}
                >
                  <Grid item xs={12} sm={6}>
                    <RecolorfulButtonWrapper>
                      <Button
                        sx={{
                          backgroundColor: theme.palette.common.black,
                          width: "100%",
                        }}
                        onClick={handleApprove}
                      >
                        <Typography
                          sx={{ color: theme.palette.primary.contrastText }}
                        >
                          Approve
                        </Typography>
                      </Button>
                    </RecolorfulButtonWrapper>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <RecolorfulButtonWrapper>
                      <Button
                        sx={{ backgroundColor: "transparent", width: "100%" }}
                        onClick={handleClaim}
                      >
                        <Typography
                          sx={{ color: theme.palette.primary.contrastText }}
                        >
                          Claim
                        </Typography>
                      </Button>
                    </RecolorfulButtonWrapper>
                  </Grid>
                </Grid>
              ) : approveState == ApproveState.PENDING ? (
                <Grid
                  container
                  spacing={2}
                  sx={{ mt: { xs: "12px", sm: "32px" } }}
                >
                  <Grid item xs={12} sm={6}>
                    <RecolorfulButtonWrapper>
                      <Button
                        sx={{
                          backgroundColor: theme.palette.common.black,
                          width: "100%",
                        }}
                        disabled={true}
                      >
                        <Typography
                          sx={{ color: theme.palette.primary.contrastText }}
                        >
                          Approving...
                        </Typography>
                      </Button>
                    </RecolorfulButtonWrapper>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <RecolorfulButtonWrapper>
                      <Button
                        sx={{ backgroundColor: "transparent", width: "100%" }}
                        onClick={handleClaim}
                      >
                        <Typography
                          sx={{ color: theme.palette.primary.contrastText }}
                        >
                          Claim
                        </Typography>
                      </Button>
                    </RecolorfulButtonWrapper>
                  </Grid>
                </Grid>
              ) : (
                <Grid
                  container
                  spacing={2}
                  sx={{ mt: { xs: "12px", sm: "32px" } }}
                >
                  <Grid item xs={12} sm={12}>
                    <RecolorfulButtonWrapper>
                      <Button
                        sx={{ backgroundColor: "transparent", width: "100%" }}
                        onClick={handleClaim}
                      >
                        <Typography
                          sx={{ color: theme.palette.primary.contrastText }}
                        >
                          Claim
                        </Typography>
                      </Button>
                    </RecolorfulButtonWrapper>
                  </Grid>
                </Grid>
              )}

              <Stack spacing={1}>
                <Stack
                  direction={"row"}
                  spacing={1}
                  alignItems={"center"}
                  sx={{
                    color: theme.palette.grey[600],
                    mt: { xs: "20px", sm: "40px" },
                  }}
                >
                  <Icon icon={"ic:outline-calculate"} />
                  <Typography>Reward calculation</Typography>
                </Stack>
                <Typography>
                  Personal Rewards = Personal Gas / Total Gas x Total Rewards
                </Typography>
              </Stack>
            </Card>
          </Box>
        </Container>
      </Wrapper>
    </Page>
  )
}

export default Claim
