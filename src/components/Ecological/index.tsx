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
import roadmapH5Img from "@/public/images/middle/roadmap_h5.png"
import support_1 from "@/public/images/middle/supports/support-1.png"
import support_2 from "@/public/images/middle/supports/support-2.png"
import support_3 from "@/public/images/middle/supports/support-3.png"
import support_4 from "@/public/images/middle/supports/support-4.png"
import support_5 from "@/public/images/middle/supports/support-5.png"
import support_6 from "@/public/images/middle/supports/support-6.png"
import support_7 from "@/public/images/middle/supports/support-7.png"
import support_8 from "@/public/images/middle/supports/support-8.png"
import support_9 from "@/public/images/middle/supports/support-9.png"
import support_10 from "@/public/images/middle/supports/support-10.png"

import { CustomTheme } from "@/src/theme"
import { Title } from "../Advantages"

const Wrapper = styled("div")`
  padding-bottom: 300px;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding-bottom: 78px;
  }
  /* background: linear-gradient(141deg, #2d385e 0%, #14081e 100%); */
`

const FlexWrapper = styled("div")`
  display: flex;
  /* min-height: 100vh; */
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
`

const Tip = styled("div")`
  font-size: 16px;
  font-family: "TimesNewRomanPS-BoldMT, TimesNewRomanPS";
  font-weight: normal;
  color: #222222;
`

const MiddleImg = styled("img")(({ theme }) => ({
  width: "1200px",
  marginTop: "104px",
  [theme.breakpoints.down("sm")]: {
    width: "345px",
    margin: "0 auto",
    marginTop: "45px",
  },
}))

const IconImg = styled("img")(({ theme }) => ({
  // margin: "0 0 150px 0",
  maxWidth: "288px",
  [theme.breakpoints.down("sm")]: {
    width: "145px",
  },
}))

const IconWrapper = styled("div")(({ theme }) => ({
  marginTop: "104px",
  display: "grid",
  width: "100%",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  // alignItems: "center",
  justifyItems: "space-between",
  gridColumnGap: "20px",
  gridRowGap: "150px",
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr 1fr ",
    marginTop: "75px",
    gridColumnGap: "25px",
    gridRowGap: "50px",
    padding: "0 15px",

    // gridGap: '20px',
  },
}))
const BgBox = styled("div")(({ theme }) => ({
  background: `url(${roadmapBg})`,
  backgroundSize: "cover",
  [theme.breakpoints.down("sm")]: {
    background: `url(${roadmapBgH5})`,
    padding: "50px 0",
    backgroundSize: "100%",
  },
}))

export default function Ecological() {
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
              <Title>Ecological support</Title>
            </Stack>
            <IconWrapper>
              <IconImg src={support_1} />
              <IconImg src={support_2} />
              <IconImg src={support_3} />
              <IconImg src={support_4} />
              <IconImg src={support_5} />
              <IconImg src={support_6} />
              <IconImg src={support_7} />
              <IconImg src={support_8} />
              <IconImg src={support_9} />
              <IconImg src={support_10} />
            </IconWrapper>
          </FlexWrapper>
        </Box>
      </Container>
    </Wrapper>
  )
}
