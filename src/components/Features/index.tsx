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
import img1 from "@/public/images/feature/img1.png"
import img2 from "@/public/images/feature/img2.png"
import img3 from "@/public/images/feature/img3.png"
import img4 from "@/public/images/feature/img4.png"
import { Title } from "../Advantages"
import { textAlign } from "@mui/system"
import { useCallback, useState } from "react"
import {
  ButtonTip,
  RecolorfulButtonWrapper,
} from "@/src/theme/overrides/Button"
import { lighten } from "polished"
import card_bg from "@/public/images/card_bg.png"

const Wrapper = styled("div")(({ theme }) => ({
  position: "relative",
  padding: "200px 0 155px 0",
  background: "linear-gradient(141deg, #2D385E 0%, #14081E 100%)",
}))
const ContentBox = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "nowrap",
  gap: "44px",
  justifyContent: "space-around",
}))
const Card1 = styled("div")(({ theme }) => ({
  padding: "0 30px 68px",
  borderRadius: "30px",
  background: "linear-gradient(180deg, #0C0B1A 0%, #1F113B 100%)",
}))
const MyImage = styled("img")(({ theme }) => ({
  width: "100%",
}))
const RecolorfulButtonWrapper1 = styled(RecolorfulButtonWrapper)`
  margin: 0 auto;
  width: fit-content;
  margin-top: 52px;
`
const ButtonReverse = styled(Button)(({ theme }) => ({
  padding: "10px 0",
  color: "#fff",
  display: "block",
  width: "140px",
  background: "linear-gradient(90deg, #18223c 0%, #1f113b 100%)",
  ":hover": {
    background: `linear-gradient(
      90deg,
      ${lighten(0.05, "#18223c")} 0%,
      ${lighten(0.05, "#1f113b")} 100%
    )`,
  },
}))
const TextBox = styled(Box)`
  text-align: center;
  min-height: 72px;
  margin-top: 54px;
  color: #afb3c8;
`
const TotalCard = styled(Container)(({ theme }) => ({
  display: "flex",
  position: "absolute",
  zIndex: 3,
  justifyContent: "center",
  top: 0,
  transform: "translateY(-50%)",
  left: "0",
  right: "0",
  margin: "auto",
  gap: "54px",
}))
const Card2 = styled("div")(({ theme }) => ({
  padding: "32px 0",
  textAlign: "center",
  flex: 1,
  background: `url(${card_bg}) no-repeat`,
  backgroundSize: "100% 100%",
}))
export default function Features() {
  const isXs = useMediaQuery((theme: CustomTheme) =>
    theme.breakpoints.down("sm")
  )
  const handleSkip = useCallback((params) => {
    // window.open(`http://16.162.188.15:7481/#/${params}`)
  }, [])
  const [comingSoon1, setComingSoon1] = useState(false)
  const [comingSoon2, setComingSoon2] = useState(false)
  const [comingSoon3, setComingSoon3] = useState(false)
  const [comingSoon4, setComingSoon4] = useState(false)

  return (
    <Wrapper>
      <Stack
        sx={{
          mb: { sm: "130px", xs: "76px" },
        }}
      >
        <Title>Features</Title>
      </Stack>
      <Container>
        <Grid>
          <ContentBox>
            <Grid sm={3}>
              <Card1>
                <MyImage src={img1} />
                <TextBox>
                  <Typography>Swap or Trade quickly and cheaply.</Typography>
                </TextBox>
                <RecolorfulButtonWrapper1>
                  <ButtonReverse
                    onClick={() => {
                      handleSkip("swap")
                    }}
                    onMouseEnter={() => {
                      setComingSoon1(true)
                    }}
                    onMouseLeave={() => {
                      setComingSoon1(false)
                    }}
                  >
                    {comingSoon1 ? "coming soon" : "Swap"}
                  </ButtonReverse>
                </RecolorfulButtonWrapper1>
              </Card1>
            </Grid>
            <Grid sm={3}>
              <Card1>
                <MyImage src={img2} />
                <TextBox>
                  <Typography>
                    Earn yield through fees and yield farms.
                  </Typography>
                </TextBox>
                <RecolorfulButtonWrapper1>
                  <ButtonReverse
                    onClick={() => {
                      handleSkip("pool")
                    }}
                    onMouseEnter={() => {
                      setComingSoon2(true)
                    }}
                    onMouseLeave={() => {
                      setComingSoon2(false)
                    }}
                  >
                    {comingSoon2 ? "coming soon" : "Farm"}
                  </ButtonReverse>
                </RecolorfulButtonWrapper1>
              </Card1>
            </Grid>
            <Grid sm={3}>
              <Card1>
                <MyImage src={img3} />
                <TextBox>
                  <Typography>
                    Liquidity providers are the most important participants in
                    DAO
                  </Typography>
                </TextBox>
                <RecolorfulButtonWrapper1>
                  <ButtonReverse
                    onClick={() => {
                      handleSkip("boost")
                    }}
                    onMouseEnter={() => {
                      setComingSoon3(true)
                    }}
                    onMouseLeave={() => {
                      setComingSoon3(false)
                    }}
                  >
                    {comingSoon3 ? "coming soon" : "Dao"}
                  </ButtonReverse>
                </RecolorfulButtonWrapper1>
              </Card1>
            </Grid>
            <Grid sm={3}>
              <Card1>
                <MyImage src={img4} />
                <TextBox>
                  <Typography>Provide liquidity for any SPL token.</Typography>
                </TextBox>
                <RecolorfulButtonWrapper1>
                  <ButtonReverse
                    onClick={() => {
                      handleSkip("factory")
                    }}
                    onMouseEnter={() => {
                      setComingSoon4(true)
                    }}
                    onMouseLeave={() => {
                      setComingSoon4(false)
                    }}
                  >
                    {comingSoon4 ? "coming soon" : "Factory"}
                  </ButtonReverse>
                </RecolorfulButtonWrapper1>
              </Card1>
            </Grid>
          </ContentBox>
        </Grid>
      </Container>
      <TotalCard>
        <Card2>
          <Stack>
            <Typography color={"#AFB3C8"} sx={{ fontSize: { sm: "16px" } }}>
              Total Value Locked
            </Typography>
            <Typography
              color={"#FCFBFF"}
              sx={{ fontSize: { sm: "36px", mt: "8px" } }}
            >
              $2.29B
            </Typography>
          </Stack>
        </Card2>
        <Card2>
          <Stack>
            <Typography color={"#AFB3C8"} sx={{ fontSize: { sm: "16px" } }}>
              Total Trading Volume
            </Typography>
            <Typography
              color={"#FCFBFF"}
              sx={{ fontSize: { sm: "36px", mt: "8px" } }}
            >
              $218.47M
            </Typography>
          </Stack>
        </Card2>
        <Card2>
          <Stack>
            <Typography color={"#AFB3C8"} sx={{ fontSize: { sm: "16px" } }}>
              Total Users
            </Typography>
            <Typography
              color={"#FCFBFF"}
              sx={{ fontSize: { sm: "36px", mt: "8px" } }}
            >
              13.72K
            </Typography>
          </Stack>
        </Card2>
      </TotalCard>
    </Wrapper>
  )
}
