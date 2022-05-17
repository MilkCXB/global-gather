import { useActiveWeb3React, useConnectCallback } from "@/src/hooks/web3"
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import styled from "@mui/system/styled"
import Link from "next/link"
import { useCallback } from "react"
import { RecolorfulButtonWrapper } from "../../theme/overrides/Button"
import roadmapImg from "@/public/images/middle/roadmap.png"
import roadmapBg from "@/public/images/middle/roadmap_bg.png"
import roadmapBgH5 from "@/public/images/middle/roadmap_bg_h5.png"

import img1 from "@/public/images/market/img1.png"
import img2 from "@/public/images/market/img2.png"
import img3 from "@/public/images/market/img3.png"
import img4 from "@/public/images/market/img4.png"
import img5 from "@/public/images/market/img5.png"
import img6 from "@/public/images/market/img6.png"

import { CustomTheme } from "@/src/theme"
import { Title } from "../Advantages"

const Wrapper = styled("div")`
  padding-bottom: 200px;
  background: linear-gradient(141deg, #2d385e 0%, #14081e 100%);
  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding-bottom: 65px;
  }
`

const FlexWrapper = styled("div")`
  display: flex;
  /* min-height: 100vh; */
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
`

const IconImg = styled("img")(({ theme }) => ({
  width: "294px",
  [theme.breakpoints.down("sm")]: {
    width: "134px",
    "&:nth-child(3)": {
      marginTop: "50px",
    },
  },
}))

const IconWrapper = styled("div")(({ theme }) => ({
  display: "grid",
  width: "100%",
  gridTemplateColumns: "1fr 1fr 1fr",
  alignItems: "center",
  justifyItems: "center",
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr 1fr ",
    marginTop: "75px",
  },
}))
const BgBox = styled("div")(({ theme }) => ({
  background: `url(${roadmapBg})`,
  backgroundSize: "cover",
  padding: "200px 0 360px 0",
  [theme.breakpoints.down("sm")]: {
    background: `url(${roadmapBgH5})`,
    padding: "50px 0",
    backgroundSize: "100%",
  },
}))

export default function MarketMaker() {
  const theme = useTheme()
  const isXs = useMediaQuery((theme: CustomTheme) =>
    theme.breakpoints.down("sm")
  )

  const { account } = useActiveWeb3React()
  const { handleConnect } = useConnectCallback()

  const handleClaimToken = useCallback(() => {
    console.log("[]:", "handleClaimToken")
  }, [])
  const handleLunch = useCallback(() => {
    console.log("[]:", "handleLunch")
  }, [])

  return (
    <Wrapper id="home">
      <Container>
        <Box>
          <FlexWrapper>
            <Stack
              sx={{
                mb: { sm: "130px" },
                mt: { xs: "65px", sm: "160px" },
              }}
            >
              <Title>Market maker</Title>
            </Stack>
            <IconWrapper>
              <IconImg src={img1} />
              <IconImg src={img2} sx={{ width: "180px" }} />
              <IconImg src={img3} sx={{ width: "180px" }} />
            </IconWrapper>
          </FlexWrapper>
          <FlexWrapper>
            <Stack
              sx={{
                mb: { sm: "130px" },
                mt: { xs: "65px", sm: "160px" },
              }}
            >
              <Title>IEO platform</Title>
            </Stack>
            <IconWrapper>
              <IconImg src={img4} />
              <IconImg src={img5} />
              <IconImg src={img6} />
            </IconWrapper>
          </FlexWrapper>
        </Box>
      </Container>
    </Wrapper>
  )
}
