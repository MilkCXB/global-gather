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
import { useCallback } from "react"
import { RecolorfulButtonWrapper } from "@/src/theme/overrides/Button"
import { lighten } from "polished"

const Wrapper = styled("div")(({ theme }) => ({}))
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
  padding: "10px 48px",
  color: "#fff",
  display: "block",
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
export default function Features() {
  const isXs = useMediaQuery((theme: CustomTheme) =>
    theme.breakpoints.down("sm")
  )
  const handleSkip = useCallback((params) => {
    window.open(`http://16.162.188.15:7481/#/${params}`)
  }, [])
  return (
    <Wrapper>
      <Stack
        sx={{
          mb: { sm: "130px", xs: "76px" },
          mt: { xs: "30px", sm: "200px" },
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
                  >
                    Swap
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
                  >
                    Farm
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
                  >
                    Dao
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
                  >
                    Factory
                  </ButtonReverse>
                </RecolorfulButtonWrapper1>
              </Card1>
            </Grid>
          </ContentBox>
        </Grid>
      </Container>
    </Wrapper>
  )
}
