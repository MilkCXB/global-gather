import { useActiveWeb3React, useConnectCallback } from "@/src/hooks/web3";
import { darken, lighten, position, transparentize } from "polished";

import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import styled from "@mui/system/styled";
import Link from "next/link";
import { useCallback, useState } from "react";
import {
  RecolorfulButtonWrapper,
  ButtonTip,
} from "../../theme/overrides/Button";
import { CustomTheme } from "@/src/theme";
import banner from "@/public/images/home/banner.png";
import banner1 from "@/public/images/home/banner1.png";
import phone from "@/public/images/aobout/phone.png";
import message from "@/public/images/aobout/message.png";
import twitter from "@/public/images/aobout/twitter.png";
import telegram from "@/public/images/aobout/telegram.png";
import about1 from "@/public/images/aobout/about1.png";
import about2 from "@/public/images/aobout/about2.png";
import about3 from "@/public/images/aobout/about3.png";
import title_icon1 from "@/public/images/home/title-icon1.png";
import title_icon2 from "@/public/images/home/title-icon2.png";
import az from "@/public/images/home/az.png";
import ios from "@/public/images/home/ios.png";

const Wrapper = styled("div")(({ theme }) => ({
  // padding: "260px 0 300px 0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
}));

const MyStack = styled(Stack)`
  padding: 80px 200px;
  align-items: center;
  height: fit-content;
`;

const MyStackGray = styled(Stack)`
  padding: 80px 200px;
  background: rgba(243, 243, 243, 0.39);
  align-items: center;
  height: fit-content;
`;

const Title = styled("div")(({ theme }) => ({
  position: "relative",
  fontSize: "52px",
  fontWeight: "24px",
  textAlign: "center",
  fontFamily: "TimesNewRomanPS-BoldMT,TimesNewRomanPS",
}));

const TitleIcon1 = styled("img")`
  position: absolute;
  top: 0;
  left: -55px;
  width: 74px;
`;

const TitleIcon2 = styled("img")`
  position: absolute;
  top: 0;
  right: -30px;
  width: 17px;
`;

const Tip = styled("div")(({ theme }) => ({
  fontSize: "20px",
  color: "#AFB3C8",
  maxWidth: "900px",
  textAlign: "center",
}));

const Tip1 = styled("div")(({ theme }) => ({
  fontSize: "18px",
  color: "#AFB3C8",
  textAlign: "center",
}));

const Text1 = styled("div")`
  font-size: 30px;
  font-family: PingFang SC;
  text-align: center;
  font-weight: 400;
  line-height: 56px;
`;

const Text2 = styled("div")`
  font-size: 28px;
  text-align: center;
  font-weight: 400;
`;

const Text3 = styled("div")`
  font-size: 14px;
  font-family: PingFang SC;
  line-height: 50px;
  color: #0f1217;
`;

const AboutImg = styled("img")`
  width: 570px;
  /* height: 390px; */
`;

const DownLoadButton = styled("div")`
  color: white;
  padding: 10px 28px;
  font-size: 24px;
  position: absolute;
  bottom: 30px;
  left: 20%;
  border: 1px solid #ffffff;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DownLoadButton1 = styled("div")`
  color: white;
  padding: 10px 28px;
  font-size: 24px;
  border: 1px solid #ffffff;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 30px;
  left: 35%;
`;

const DownLoadImg = styled("img")`
  width: 30px;
  margin-right: 20px;
`;

const MyButton = styled(Button)(({ theme }) => ({
  // width: "fit-content",
  color: "#fff",
  cursor: "pointer",
  padding: "16px 0",
  borderRadius: "9px",
  fontSize: "24px",
  width: "260px",
  textAlign: "center",
  fontFamily: "Inter-Regular_Bold",
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
    fontWeight: "24px",
    padding: "9px 12px",
    width: "120px",
  },
}));

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
}));
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
}));

const AboutTitle = styled("div")`
  position: relative;
  font-size: 40px;
  font-weight: bold;
  line-height: 56px;
  color: #0f1217;
  ::after {
    width: 120%;
    font-weight: normal;
    position: absolute;
    top: 17px;
    left: 0;
    font-size: 30px;
    color: #0f1217;
    opacity: 0.2;
    content: "CORPORATE BUSINESS";
  }
`;

const AboutTitle1 = styled("div")`
  position: relative;
  font-size: 40px;
  font-weight: bold;
  line-height: 56px;
  color: #0f1217;
  ::after {
    width: 120%;
    font-weight: normal;
    position: absolute;
    top: 17px;
    left: 0;
    font-size: 30px;
    color: #0f1217;
    opacity: 0.2;
    content: "CORPORATE CULTURE";
  }
`;

const AboutTitle2 = styled("div")`
  position: relative;
  font-size: 40px;
  font-weight: bold;
  line-height: 56px;
  color: #0f1217;
  ::after {
    width: 120%;
    font-weight: normal;
    position: absolute;
    top: 17px;
    left: 0;
    font-size: 30px;
    color: #0f1217;
    opacity: 0.2;
    content: "OUR TEAM";
  }
`;

const ContactBox = styled("div")`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 40px 60px;
  background: rgba(243, 243, 243, 0.39);
  border-radius: 18px;
  min-width: 254px;
`;

const NavItem = styled("a")`
  cursor: pointer;
`;

const ContactBoxImg = styled("img")`
  width: 80px;
  margin-bottom: 20px;
`;

const MobileBc = styled("img")`
  width: 100%;
`;

export default function HomePage() {
  const theme = useTheme();
  const isXs = useMediaQuery((theme: CustomTheme) =>
    theme.breakpoints.down("sm")
  );

  const { account } = useActiveWeb3React();
  const { handleConnect } = useConnectCallback();

  const handleClaimToken = useCallback(() => {
    console.log("[]:", "handleClaimToken");
  }, []);

  const handleLunch = useCallback(() => {
    // location.href = ''
    // window.open("http://16.162.188.15:7481/")
  }, []);
  const [comingSoon1, setComingSoon1] = useState(false);
  const [comingSoon2, setComingSoon2] = useState(false);
  return (
    <Wrapper id="home">
      <Box>
        <MobileBc src={banner} />
        <MyStack>
          <Box sx={{ position: "relative" }}>
            <Title>关于全球汇</Title>
            <TitleIcon1 src={title_icon1} />
            <TitleIcon2 src={title_icon2} />
          </Box>
          <Tip sx={{ mb: "60px" }}>ABOUT US </Tip>
          <Text1>
            全球汇是一家旨在为全世界带来领先金融科技的创新企业，我们是以各种提现兑换支付的综合兑换平台。
          </Text1>
          <Stack
            flexDirection={"row"}
            gap={"24px"}
            sx={{ mt: { sm: "70px", xs: "48px" } }}
          ></Stack>
        </MyStack>
        <MyStackGray>
          <Grid container gap={"80px"}>
            <Grid item sm={5}>
              <AboutTitle sx={{ mb: "20px" }}>公司业务</AboutTitle>
              <Text3>
                公司业务服务于越南，泰国，印尼，马来西亚，新加坡，菲律宾，香港，欧盟，台湾，英国，美国，柬埔寨美金的X兑换（支持与虚拟币），以及在全世界各地的线下服务玩的（我们支持的国家都有网点）。
              </Text3>
            </Grid>
            <Grid item sm={5}>
              <AboutImg src={about1} />
            </Grid>
          </Grid>
        </MyStackGray>
        <MyStack>
          <Grid container gap={"120px"}>
            <Grid item sm={5}>
              <AboutImg src={about2} />
            </Grid>
            <Grid item sm={5}>
              <AboutTitle1 sx={{ mb: "20px" }}>企业文化</AboutTitle1>
              <Text3>
                我们的核心价值观
                <br />
                秉承“诚信天下，以客为尊，科技创新，以人为本”
              </Text3>
            </Grid>
          </Grid>
        </MyStack>
        <MyStackGray>
          <Grid container gap={"130px"}>
            <Grid item sm={5}>
              <AboutTitle2 sx={{ mb: "20px" }}>我们的团队</AboutTitle2>
              <Text3>
                全球汇支付兑换团队是由各个国家的顶尖银行家，一流的外汇专家，一流的兑换钱庄，安全领域专家和软硬科技精英组成，通过专家和软硬件科技精英组成，通过世界各地的外贸精英，一起搭建世界各地的客户享受到一小时内光速提现到任何国家，以及方便，安全，售后有保证的服务。
              </Text3>
            </Grid>
            <Grid item sm={5}>
              <AboutImg src={about3} />
            </Grid>
          </Grid>
        </MyStackGray>
        <Box sx={{ position: "relative" }}>
          <MobileBc src={banner1} />
          <NavItem href="http://globalexchange.shop/android.apk">
            <DownLoadButton>
              <DownLoadImg src={az} />
              安卓下载
            </DownLoadButton>
          </NavItem>
          <NavItem href="https://app.apple.com.kndeq.cc/PqUTQ">
            <DownLoadButton1>
              <DownLoadImg src={ios} />
              IOS下载
            </DownLoadButton1>
          </NavItem>
        </Box>
        <MyStack>
          <Box sx={{ position: "relative" }}>
            <Title>联系我们</Title>
            <TitleIcon1 src={title_icon1} />
            <TitleIcon2 src={title_icon2} />
          </Box>
          <Tip sx={{ mb: "60px" }}>CONTACT US </Tip>

          <Stack
            flexDirection={"row"}
            gap={"24px"}
            sx={{ mt: { sm: "70px", xs: "48px" } }}
          >
            <ContactBox>
              <ContactBoxImg src={phone} />
              <Text2 sx={{ mb: "10px" }}>联系方式</Text2>
              <Tip1>+855-61585108</Tip1>
            </ContactBox>
            <ContactBox>
              <ContactBoxImg src={message} />
              <Text2 sx={{ mb: "10px" }}>联系邮箱</Text2>
              <Tip1>global51888@gmail.com</Tip1>
            </ContactBox>
            <ContactBox>
              <ContactBoxImg src={twitter} />
              <Text2 sx={{ mb: "10px" }}>Twitter</Text2>
              <Tip1>https://twitter.com/Globalpay2022</Tip1>
            </ContactBox>
            <ContactBox>
              <ContactBoxImg src={telegram} />
              <Text2 sx={{ mb: "10px" }}>Telegram</Text2>
              <Tip1>https://t.me/zjglobal</Tip1>
            </ContactBox>
          </Stack>
        </MyStack>
      </Box>
    </Wrapper>
  );
}
