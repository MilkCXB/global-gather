import {
  Box,
  Button,
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
import token from "@/public/images/tokeneco/token.png"
import token_h5 from "@/public/images/tokeneco/token_h5.png"

const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: "320px 0",
  position: "relative",
  background: "linear-gradient(141deg, #2D385E 0%, #14081E 100%)",
  [theme.breakpoints.down("sm")]: {
    padding: "50px 0 100px 0",
  },
}))
const ContentBox = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "nowrap",
  overflowX: "auto",
  gap: "77px",
  "&::-webkit-scrollbar": { display: "none" },
}))
const Card1 = styled("div")(({ theme }) => ({
  padding: "66px 72px",
  borderRadius: "30px",
  background:
    "linear-gradient(270deg, #14081E 0%, #14081E 32%, #14081E 71%, #14081E 100%)",
}))
const MyImage = styled("img")(({ theme }) => ({
  width: "100%",
}))
const TotalCard = styled("div")(({ theme }) => ({
  display: "flex",
  position: "absolute",
  justifyContent: "center",
  top: "-80px",
  left: "0",
  right: "0",
  margin: "auto",
  gap: "54px",
}))
const Card2 = styled("div")(({ theme }) => ({
  padding: "58px 85px",
  borderRadius: "15px",
  background:
    "linear-gradient(90deg, rgba(87, 175, 251, 0.2), rgba(142, 46, 246, 0.2))",
}))

export default function TotalTrading() {
  const isXs = useMediaQuery((theme: CustomTheme) =>
    theme.breakpoints.down("sm")
  )

  return (
    <Wrapper>
      <ContentBox>
        <Card1>
          <Stack flexDirection={"row"}>
            <Box
              sx={{
                background: "#F9934A",
                width: "81px",
                height: "81px",
                borderRadius: "50%",
              }}
            ></Box>
            <Box sx={{ ml: { sm: "12px" } }}>
              <Stack flexDirection={"row"}>
                <Typography color={"#FCFBFF"} fontSize={{ sm: 22 }}>
                  BTCB
                </Typography>
                <Typography
                  color={"#F14159"}
                  fontSize={{ sm: 24 }}
                  sx={{ ml: { sm: "12px" } }}
                >
                  3.89%
                </Typography>
              </Stack>
              <Typography
                color={"#FCFBFF"}
                sx={{ mt: "16px", fontSize: { sm: "32px" } }}
                whiteSpace={"nowrap"}
              >
                $ 4.208.87
              </Typography>
            </Box>
          </Stack>
        </Card1>
        <Card1>
          <Stack flexDirection={"row"}>
            <Box
              sx={{
                background: "#F9934A",
                width: "81px",
                height: "81px",
                borderRadius: "50%",
              }}
            ></Box>
            <Box sx={{ ml: { sm: "12px" } }}>
              <Stack flexDirection={"row"}>
                <Typography color={"#FCFBFF"} fontSize={{ sm: 22 }}>
                  BTCB
                </Typography>
                <Typography
                  color={"#F14159"}
                  fontSize={{ sm: 24 }}
                  sx={{ ml: { sm: "12px" } }}
                >
                  3.89%
                </Typography>
              </Stack>
              <Typography
                color={"#FCFBFF"}
                sx={{ mt: "16px", fontSize: { sm: "32px" } }}
                whiteSpace={"nowrap"}
              >
                $ 4.208.87
              </Typography>
            </Box>
          </Stack>
        </Card1>
        <Card1>
          <Stack flexDirection={"row"}>
            <Box
              sx={{
                background: "#F9934A",
                width: "81px",
                height: "81px",
                borderRadius: "50%",
              }}
            ></Box>
            <Box sx={{ ml: { sm: "12px" } }}>
              <Stack flexDirection={"row"}>
                <Typography color={"#FCFBFF"} fontSize={{ sm: 22 }}>
                  BTCB
                </Typography>
                <Typography
                  color={"#F14159"}
                  fontSize={{ sm: 24 }}
                  sx={{ ml: { sm: "12px" } }}
                >
                  3.89%
                </Typography>
              </Stack>
              <Typography
                color={"#FCFBFF"}
                sx={{ mt: "16px", fontSize: { sm: "32px" } }}
                whiteSpace={"nowrap"}
              >
                $ 4.208.87
              </Typography>
            </Box>
          </Stack>
        </Card1>
        <Card1>
          <Stack flexDirection={"row"}>
            <Box
              sx={{
                background: "#F9934A",
                width: "81px",
                height: "81px",
                borderRadius: "50%",
              }}
            ></Box>
            <Box sx={{ ml: { sm: "12px" } }}>
              <Stack flexDirection={"row"}>
                <Typography color={"#FCFBFF"} fontSize={{ sm: 22 }}>
                  BTCB
                </Typography>
                <Typography
                  color={"#F14159"}
                  fontSize={{ sm: 24 }}
                  sx={{ ml: { sm: "12px" } }}
                >
                  3.89%
                </Typography>
              </Stack>
              <Typography
                color={"#FCFBFF"}
                sx={{ mt: "16px", fontSize: { sm: "32px" } }}
                whiteSpace={"nowrap"}
              >
                $ 4.208.87
              </Typography>
            </Box>
          </Stack>
        </Card1>
      </ContentBox>
      <TotalCard>
        <Card2>
          <Stack spacing={3}>
            <Typography color={"#AFB3C8"}>Total Value Locked</Typography>
            <Typography color={"#fff"}>$ 46,639,222,31</Typography>
          </Stack>
        </Card2>
        <Card2>
          <Stack spacing={3}>
            <Typography color={"#AFB3C8"}>Total Value Locked</Typography>
            <Typography color={"#fff"}>$ 46,639,222,31</Typography>
          </Stack>
        </Card2>
      </TotalCard>
    </Wrapper>
  )
}
