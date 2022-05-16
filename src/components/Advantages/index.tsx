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

export const Title = styled("div")`
  position: relative;
  font-size: 44px;
  font-weight: 24px;
  color: #fff;
  width: fit-content;
  font-family: "Inter-Regular_Bold";
  margin: 0 auto;
  :after {
    content: "";
    width: 70%;
    height: 2px;
    position: absolute;
    bottom: -16px;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 2;
    background: linear-gradient(
      90deg,
      rgba(87, 175, 251, 1),
      rgba(142, 46, 246, 1)
    );
  }
`

const FlexWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
}))
const BorderBox = styled("div")`
  background: linear-gradient(180deg, #18223c 0%, #1f113b 100%);
  border-radius: 30px;
  padding: 1px;
  :hover {
    background: linear-gradient(90deg, #57affb 0%, #8e2ef6 100%);
  }
`
const Card1 = styled("div")(({ theme }) => ({
  maxWidth: "548px",
  maxHeight: "761px",
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
  maxWidth: "300px",
  width: "100%",
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
          <Grid sm={5}>
            <BorderBox>
              <Card1>
                <Text sx={{ fontSize: { sm: "20px" } }}>
                  Klein Finance and automated market-making with dynamic peg
                  provide excellent solutions to a series of problems such as
                  impermanent losses, centralized liquidity, improved capital
                  efficiency, low slippage, and dynamic fees on general exchange
                  channels.
                </Text>
                <MyImg src={img1} />
              </Card1>
            </BorderBox>
          </Grid>
          <Grid sm={5}>
            <BorderBox sx={{ mt: { sm: "100px" } }}>
              <Card1>
                <Text sx={{ fontSize: { sm: "20px" } }}>
                  By depositing funds into the on-chain liquidity pool,
                  liquidity providers can obtain transaction benefits, which
                  support additional benefits for liquidity providers while
                  improving the utilization of funds.
                </Text>
                <MyImg src={img2} />
              </Card1>
            </BorderBox>
          </Grid>
          <Grid sm={5}>
            <BorderBox sx={{ mt: { sm: "46px" } }}>
              <Card1>
                <Text sx={{ fontSize: { sm: "20px" } }}>
                  Liquidity providers are the most important participants in
                  Klein Finance, and it is the most beneficial behavior for the
                  governance of Klein Finance to allow liquidity providers to
                  obtain the most project tokens and participate in governance.
                </Text>
                <MyImg src={img3} />
              </Card1>
            </BorderBox>
          </Grid>
          <Grid sm={5}>
            <BorderBox sx={{ mt: { sm: "146px" } }}>
              <Card1>
                <Text sx={{ fontSize: { sm: "20px" } }}>
                  Klein Finance has built a robust ecosystem around governance,
                  rewards and staking. All designed to drive future growth and
                  decentralization of Klein Finance, and resulting in a better
                  experience for users
                </Text>
                <MyImg src={img4} />
              </Card1>
            </BorderBox>
          </Grid>
        </FlexWrapper>
      </Container>
    </Wrapper>
  )
}
