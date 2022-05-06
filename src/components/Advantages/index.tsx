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
import { styled } from "@mui/material/styles"
import { Icon } from "@iconify/react"
import { Trans } from "@lingui/macro"
import { ColorfulRect, CustomTheme } from "@/src/theme"
import { imgLazyload } from "@/src/utils/img"
import { after } from "lodash"

const img1 = require("@/public/images/advantages/img1.png")
const img2 = require("@/public/images/advantages/img2.png")
const img3 = require("@/public/images/advantages/img3.png")
const img4 = require("@/public/images/advantages/img4.png")
export const MyImage = styled("img")(({ theme }) => ({
  width: "100%",
  maxWidth: "983px",
  transition: "filter 0.3s",
  filter: "blur(10px)",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    transition: "filter 0.3s",
    filter: "blur(10px)",
    float: "none",
    marginTop: "69px",
  },
}))
const Wrapper = styled("div")``

const Title = styled("div")(({ theme }) => ({
  position: "relative",
  fontSize: "52px",
  fontWeight: "24px",
  color: "#fff",
  fontFamily: "TimesNewRomanPS-BoldMT,TimesNewRomanPS",
  textAlign: "center",
  "& ::after": {
    position: "absolute",
    width: "80%",
    height: "5px",
    background: "#000",
    bottom: 0,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "26px",
    fontWeight: "24px",
  },
}))
const FlexWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
}))

const Card1 = styled("div")(({ theme }) => ({
  width: "548px",
  height: "761px",
  padding: "80px 42px 68px",
  borderRadius: "30px",
  background: "linear-gradient(180deg, #18223C 0%, #1F113B 100%)",
}))
const Text = styled(Typography)(({ theme }) => ({
  color: "#AFB3C8",
  textAlign: "center",
  lineHeight: "40px",
  height: "280px",
  fontSize: "20px",
}))
const MyImg = styled("img")(({ theme }) => ({
  maxWidth: "329px",
  margin: "0 auto",
}))

export default function Advantages() {
  const isXs = useMediaQuery((theme: CustomTheme) =>
    theme.breakpoints.down("sm")
  )

  return (
    <Wrapper>
      <Stack sx={{ mb: { sm: "130px", xs: "76px" }, mt: { xs: "30px" } }}>
        <Title>Advantages</Title>
      </Stack>
      <Container>
        <FlexWrapper>
          <Card1>
            <Text fontSize={20}>
              Klein Finance and automated market-making with dynamic peg provide
              excellent solutions to a series of problems such as impermanent
              losses, centralized liquidity, improved capital efficiency, low
              slippage, and dynamic fees on general exchange channels.
            </Text>
            <MyImg src={img1} />
          </Card1>
          <Card1 sx={{ mt: { sm: "100px" } }}>
            <Text>
              By depositing funds into the on-chain liquidity pool, liquidity
              providers can obtain transaction benefits, which support
              additional benefits for liquidity providers while improving the
              utilization of funds.
            </Text>
            <MyImg src={img2} />
          </Card1>
          <Card1 sx={{ mt: { sm: "46px" } }}>
            <Text>
              Liquidity providers are the most important participants in Klein
              Finance, and it is the most beneficial behavior for the governance
              of Klein Finance to allow liquidity providers to obtain the most
              project tokens and participate in governance.
            </Text>
            <MyImg src={img3} />
          </Card1>
          <Card1 sx={{ mt: { sm: "146px" } }}>
            <Text>
              Klein Finance has built a robust ecosystem around governance,
              rewards and staking. All designed to drive future growth and
              decentralization of Klein Finance, and resulting in a better
              experience for users
            </Text>
            <MyImg src={img4} />
          </Card1>
        </FlexWrapper>
      </Container>
    </Wrapper>
  )
}
