import { useActiveWeb3React, useConnectCallback } from "@/src/hooks/web3"
import { CustomTheme, theme } from "@/src/theme"
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
import logoBanner from "@/public/images/home/logo.png"
import icon1 from "@/public/images/home/icon1.png"
import icon2 from "@/public/images/home/icon2.png"
import icon3 from "@/public/images/home/icon3.png"
import icon4 from "@/public/images/home/icon4.png"
import { FRIEND_LINK, KLEIN_LINK, SUPPORT_LINK } from "@/src/constants/misc"

const Wrapper = styled("div")(({ theme }) => ({
  // backgroundColor: theme.palette.common.black,
}))

const MyStack = styled(Stack)``
const Outer = styled("a")`
  cursor: pointer;
`
const NavItem = styled("a")`
  cursor: pointer;
  display: block;
  color: #afb3c8 !important;
  margin-top: 17px;
  :focus,
  :hover {
    color: #fff !important;
  }
`

const ImgLogo = styled("img")(({ theme }) => ({
  width: "100px",
  [theme.breakpoints.down("sm")]: {
    width: "43px",
    height: "16px",
  },
}))

const FriendImg = styled("img")(({ theme }) => ({
  width: "24px",
  height: "24px",
  [theme.breakpoints.down("sm")]: {
    width: "20px",
    height: "20px",
  },
}))

export default function Footer() {
  const theme = useTheme()
  const isXs = useMediaQuery((theme: CustomTheme) =>
    theme.breakpoints.down("sm")
  )

  return (
    <Wrapper
      sx={{
        p: { sm: "53px 32px", xs: "20px" },
        background: "linear-gradient(141deg, #2D385E 0%, #14081E 100%);",
      }}
    >
      <Container>
        <Box>
          <Stack direction={"column"} spacing={{ sm: "30px", xs: "20px" }}>
            <Box display={"flex"} alignItems={"center"}>
              {isXs ? (
                <Grid item xs={12} sm={2}>
                  <Stack
                    direction={"row"}
                    spacing={3}
                    alignItems={"center"}
                    justifyContent={"flex-end"}
                  >
                    <Outer href={FRIEND_LINK.twitter}>
                      <FriendImg src={icon1} />
                    </Outer>
                    <Outer href={FRIEND_LINK.telegram}>
                      <FriendImg src={icon2} />
                    </Outer>
                    <Outer href={FRIEND_LINK.channel}>
                      <FriendImg src={icon3} />
                    </Outer>
                  </Stack>
                </Grid>
              ) : null}
            </Box>

            <Box>
              <Grid container>
                <Grid item xs={12} sm={8}>
                  <Stack
                    direction={"row"}
                    spacing={{ sm: "150px", xs: "13px" }}
                    sx={{
                      color: "#fff",
                    }}
                  >
                    <Box>
                      <Typography sx={{ fontSize: { sm: "16px", xs: "10px" } }}>
                        PROTOCOL
                      </Typography>
                      <NavItem>Swap</NavItem>
                      <NavItem>Farm</NavItem>
                      <NavItem>DAO</NavItem>
                      <NavItem>Factory</NavItem>
                    </Box>
                    <Box>
                      <Typography sx={{ fontSize: { sm: "16px", xs: "10px" } }}>
                        SUPPORT
                      </Typography>
                      <NavItem
                        href={SUPPORT_LINK.documentation}
                        target="_blank"
                      >
                        Documentation
                      </NavItem>
                      <NavItem>FAQ</NavItem>
                      <NavItem>Contracts</NavItem>
                    </Box>
                    <Box>
                      <Typography sx={{ fontSize: { sm: "16px", xs: "10px" } }}>
                        COMMUNITY
                      </Typography>
                      <NavItem href={FRIEND_LINK.twitter} target="_blank">
                        Twitter
                      </NavItem>
                      <NavItem href={FRIEND_LINK.telegram} target="_blank">
                        Telegram{" "}
                      </NavItem>
                      <NavItem href={FRIEND_LINK.channel} target="_blank">
                        Channel{" "}
                      </NavItem>
                      <NavItem href={FRIEND_LINK.ins} target="_blank">
                        Instagram{" "}
                      </NavItem>
                      <NavItem href={FRIEND_LINK.medium} target="_blank">
                        Medium{" "}
                      </NavItem>
                    </Box>
                  </Stack>
                </Grid>
                {isXs ? null : (
                  <Grid item xs={12} sm={4}>
                    <ImgLogo
                      src={logoBanner}
                      alt="Logo banner"
                      loading="lazy"
                    />
                    <Box
                      sx={{
                        color: "#AFB3C8",
                        m: { sm: "25px 0 14px 0" },
                      }}
                    >
                      <Typography sx={{ textAlign: "left" }}>
                        The provides a stable,confident and universal digital
                        currency platform for users to look after their
                        finances.
                      </Typography>
                    </Box>
                    {/* <Stack direction={"row"} spacing={2} alignItems={"center"}>
                      <Outer href={FRIEND_LINK.twitter}>
                        <FriendImg src={icon1} />
                      </Outer>
                      <Outer href={FRIEND_LINK.telegram}>
                        <FriendImg src={icon2} />
                      </Outer>
                      <Outer href={FRIEND_LINK.channel}>
                        <FriendImg src={icon3} />
                      </Outer>
                    </Stack> */}
                  </Grid>
                )}
              </Grid>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Wrapper>
  )
}
