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

const Wrapper = styled("div")(({ theme }) => ({}))
const ContentBox = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "nowrap",
  gap: "44px",
  justifyContent: "space-around",
}))
const Card1 = styled("div")(({ theme }) => ({
  padding: "21px 30px 68px",
  borderRadius: "30px",
  background: "linear-gradient(180deg, #0C0B1A 0%, #1F113B 100%)",
}))
const MyImage = styled("img")(({ theme }) => ({
  width: "100%",
}))
const ButtonReverse = styled(Button)(({ theme }) => ({
  padding: "10px 48px",
  color: "#fff",
  display: "block",
  border: "1px solid #8E2EF6",
  margin: "0 auto",
  marginTop: "52px",
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
                <ButtonReverse>Swap</ButtonReverse>
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
                <ButtonReverse>Farm</ButtonReverse>
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
                <ButtonReverse>Dao</ButtonReverse>
              </Card1>
            </Grid>
            <Grid sm={3}>
              <Card1>
                <MyImage src={img4} />
                <TextBox>
                  <Typography>Provide liquidity for any SPL token.</Typography>
                </TextBox>
                <ButtonReverse>Factory</ButtonReverse>
              </Card1>
            </Grid>
          </ContentBox>
        </Grid>
      </Container>
    </Wrapper>
  )
}
