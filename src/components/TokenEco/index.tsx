import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import { Title } from "../Advantages"

import { styled } from "@mui/material/styles"
import { Icon } from "@iconify/react"
import { Trans } from "@lingui/macro"
import { ColorfulRect, CustomTheme } from "@/src/theme"
import { imgLazyload } from "@/src/utils/img"
import token from "@/public/images/tokeneco/token.png"
import token_h5 from "@/public/images/tokeneco/token_h5.png"

const Wrapper = styled("div")(({ theme }) => ({
  padding: "124px 0 211px 0 ",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  background: "linear-gradient(141deg, #2D385E 0%, #14081E 100%)",

  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    padding: "50px 0 100px 0",
  },
}))

export const MyImage = styled("img")(({ theme }) => ({
  width: "100%",
}))

const MiddleImg = styled("img")(({ theme }) => ({
  width: "1072px",
  marginTop: "108px",
  [theme.breakpoints.down("sm")]: {
    marginTop: "60px",
    width: "303px",
  },
}))
export default function TokenEco() {
  const isXs = useMediaQuery((theme: CustomTheme) =>
    theme.breakpoints.down("sm")
  )

  return (
    <Wrapper>
      <Stack
        sx={{
          mb: { sm: "130px" },
        }}
      >
        <Title>Token Economics</Title>
      </Stack>

      {isXs ? <MiddleImg src={token_h5} /> : <MiddleImg src={token} />}
    </Wrapper>
  )
}
