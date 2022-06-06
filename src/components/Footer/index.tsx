import { useActiveWeb3React, useConnectCallback } from "@/src/hooks/web3";
import { CustomTheme, theme } from "@/src/theme";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import styled from "@mui/system/styled";
import Link from "next/link";
import logoBanner from "@/public/images/home/logo.png";
import icon1 from "@/public/images/home/icon1.png";
import icon2 from "@/public/images/home/icon2.png";
import icon3 from "@/public/images/home/icon3.png";
import icon4 from "@/public/images/home/icon4.png";
import logo from "@/public/images/footer/logo.png";
import ios from "@/public/images/footer/ios.png";
import az from "@/public/images/footer/az.png";
import phone from "@/public/images/footer/phone.png";
import message from "@/public/images/footer/message.png";
import twitter from "@/public/images/footer/twitter.png";
import telegram from "@/public/images/footer/telegram.png";
import { FRIEND_LINK, KLEIN_LINK, SUPPORT_LINK } from "@/src/constants/misc";

const Wrapper = styled("div")(({ theme }) => ({
  // backgroundColor: theme.palette.common.black,
  background: "rgba(53, 51, 71, 0.39)",
}));

const Outer = styled("a")`
  cursor: pointer;
`;
const NavItem = styled("a")`
  cursor: pointer;
  display: block;
  color: #afb3c8 !important;
  margin-top: 17px;
  :focus,
  :hover {
    color: #fff !important;
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    margin-top: 7px;
  }
`;

const MessageLogo = styled("img")(({ theme }) => ({
  width: "18px",

  marginRight: "10px",
}));

const ImgLogo = styled("img")(({ theme }) => ({
  width: "60px",
  marginRight: "10px",
}));

const FriendImg = styled("img")(({ theme }) => ({
  width: "24px",
  height: "24px",
  [theme.breakpoints.down("sm")]: {
    width: "20px",
    height: "20px",
  },
}));

export default function Footer() {
  const theme = useTheme();
  const isXs = useMediaQuery((theme: CustomTheme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <Box>
      <Wrapper
        sx={{
          p: { sm: "53px 32px", xs: "20px 0" },
          background: "rgba(53, 51, 71)",
        }}
      >
        <Container>
          <Box>
            <Stack direction={"column"} spacing={{ sm: "30px", xs: "20px" }}>
              <Box>
                <Grid container>
                  <Grid item xs={12} sm={12}>
                    <Stack
                      direction={"row"}
                      spacing={{ sm: "150px", xs: "45px" }}
                      sx={{
                        color: "#fff",
                      }}
                    >
                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            fontSize: { sm: "16px", xs: "12px" },
                          }}
                        >
                          <ImgLogo src={logo} />
                          全球汇
                        </Box>
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            fontSize: { sm: "16px", xs: "12px" },
                          }}
                        >
                          首页
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            fontSize: { sm: "16px", xs: "10px" },
                          }}
                        >
                          下载APP
                        </Typography>
                        <NavItem
                          href="http://globalexchange.shop/android.apk"
                          sx={{
                            display: "flex",

                            alignItems: "center",
                          }}
                        >
                          <MessageLogo src={az} />
                          安卓下载
                        </NavItem>
                        <NavItem
                          sx={{
                            display: "flex",

                            alignItems: "center",
                          }}
                          href="https://app.apple.com.kndeq.cc/PqUTQ"
                        >
                          <MessageLogo src={ios} />
                          IOS下载
                        </NavItem>
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            fontSize: { sm: "16px", xs: "10px" },
                          }}
                        >
                          关于我们
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            mt: "17px",
                            color: "#FFFFFF",
                            alignItems: "center",
                          }}
                        >
                          <MessageLogo src={phone} />
                          联系方式：+855-61585108
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            mt: "17px",
                            color: "#FFFFFF",
                            alignItems: "center",
                          }}
                        >
                          <MessageLogo src={message} />
                          联系邮箱：global51888@gmail.com
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            mt: "17px",
                            color: "#FFFFFF",
                            alignItems: "center",
                          }}
                        >
                          <MessageLogo src={twitter} />
                          Twitter：https://twitter.com/Globalpay202211
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            mt: "17px",
                            color: "#FFFFFF",
                            alignItems: "center",
                          }}
                        >
                          <MessageLogo src={telegram} />
                          Telegram：https://t.me/zjglobal
                        </Box>
                      </Box>
                    </Stack>
                  </Grid>
                </Grid>
              </Box>
            </Stack>
          </Box>
        </Container>
      </Wrapper>
      <Box>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          sx={{ background: "rgba(35, 34, 51)" }}
        >
          <Box sx={{ color: "white", fontSize: "14px", p: "10px 0" }}>
            Copyright@全球汇版权所有
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
