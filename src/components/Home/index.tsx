import { useActiveWeb3React, useConnectCallback } from "@/src/hooks/web3"
import { darken, lighten, transparentize } from "polished"

import {
  Box,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material"

import styled from "@mui/system/styled"
import Link from "next/link"
import { useCallback } from "react"
import { RecolorfulButtonWrapper } from "../../theme/overrides/Button"
import bgLarge from "@/public/images/home/bg_home.png"
import bgLargeH5 from "@/public/images/home/bg_home_h5.png"
import { CustomTheme } from "@/src/theme"
import { before } from "lodash"
import title_img from "@/public/images/home/title.png"

const Wrapper = styled("div")(({ theme }) => ({
  // padding: "260px 0 300px 0",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    background: `url(${bgLargeH5})`,
    fontWeight: "24px",
    backgroundSize: "cover",

    paddingBottom: "391px",
  },
}))

const MyStack = styled(Stack)`
  padding: 0 200px;
  align-items: center;
  height: fit-content;
`

const Text1 = styled("div")(({ theme }) => ({
  fontSize: "52px",
  fontWeight: "24px",
  color: "#fff",
  textAlign: "center",

  fontFamily: "TimesNewRomanPS-BoldMT,TimesNewRomanPS",
  [theme.breakpoints.down("sm")]: {
    fontSize: "26px",
    fontWeight: "24px",
    textAlign: "center",
  },
}))
const TitleImg = styled("img")(({ theme }) => ({
  maxWidth: "600px",
}))

const Text2 = styled("div")(({ theme }) => ({
  fontSize: "20px",
  color: "#AFB3C8",
  maxWidth: "900px",
  fontWeight: "24px",
  textAlign: "center",
  marginTop: "80px",

  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
    fontWeight: "24px",
    padding: "0 15px",
    textAlign: "center",
  },
}))
const MyButton = styled(Button)(({ theme }) => ({
  width: "fit-content",
  color: "#fff",
  cursor: "pointer",
  padding: "16px 56px",
  borderRadius: "9px",
  fontSize: "24px",
  fontFamily: "Inter-Regular_Bold",
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
    fontWeight: "24px",
    padding: "10px 30px",
  },
}))

const ButtonPrimary = styled(MyButton)(({ theme }) => ({
  background: "linear-gradient(90deg, #57AFFB 0%, #8E2EF6 100%)",
  fontFamily: "Inter-Regular_Bold",
  ":hover": {
    background: `linear-gradient(90deg, ${lighten(
      0.05,
      "#57AFFB"
    )} 0%, ${lighten(0.05, "#8E2EF6")} 100%)`,
  },
  [theme.breakpoints.down("sm")]: {
    margin: "0 auto",
  },
}))
export const ButtonReverse = styled(MyButton)(({ theme }) => ({
  position: "relative",
  borderRadius: "9px",
  background: "linear-gradient(90deg, #18223c 0%, #1f113b 100%)",
  ":hover": {
    background: `linear-gradient(
      90deg,
      ${lighten(0.05, "#18223c")} 0%,
      ${lighten(0.05, "#1f113b")} 100%
    )`,
  },
}))

const MobileBc = styled("img")`
  width: 100%;
  margin-top: 26px;
`

export default function HomePage() {
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
    // location.href = ''
    // window.open("http://16.162.188.15:7481/")
  }, [])

  return (
    <Wrapper id="home">
      <MyStack>
        <Box>
          <TitleImg src={title_img} />
        </Box>
        <Text2>
          Provide an effective mechanism for the liquidity of the long-tail
          market and stablecoins.
        </Text2>

        <Stack flexDirection={"row"} gap={"24px"} sx={{ mt: { sm: "70px" } }}>
          <RecolorfulButtonWrapper>
            <ButtonPrimary onClick={handleLunch}>Launch App</ButtonPrimary>
          </RecolorfulButtonWrapper>
          <RecolorfulButtonWrapper>
            <ButtonReverse>Learn More</ButtonReverse>
          </RecolorfulButtonWrapper>
        </Stack>
        {/* {isXs ? <MobileBc src={bgLargeH5} /> : null} */}
      </MyStack>
    </Wrapper>
  )
}
