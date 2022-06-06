import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import styled from "@mui/system/styled";
import logoBanner from "@/public/images/footer/logo.png";
import { CustomTheme, Hidden } from "@/src/theme";
import { navs } from "@/src/constants/data";
import {
  Fragment,
  MutableRefObject,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { createGradient } from "@/src/theme/palette";
import Web3Status from "../Web3Status";
import { debounce } from "lodash";
import {
  ButtonTip,
  RecolorfulButtonWrapper,
} from "@/src/theme/overrides/Button";
import { lighten } from "polished";

const Wrapper = styled("div")(({ theme }: { theme?: CustomTheme }) => ({
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  zIndex: 6,
  // background: '#FBFBFD',
  // backdropFilter: "blur(20px)",
}));

// const Blur = styled('div')(() => ({
//   width: '100%',
//   height: '100%',
//   filter: 'blur(20px)',
// }))

const ImgLogo = styled("img")(({ theme }) => ({
  width: "50px",
  borderRadius: "5px",
  // height: '32px',
}));

const MyButton = styled("div")(({ theme }) => ({
  width: "fit-content",
  padding: "7px 26px",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: 500,
  color: "#fff",
  fontFamily: "Inter-Regular_Bold",
  background: "linear-gradient(90deg, #18223c 0%, #1f113b 100%)",
  ":hover": {
    background: `linear-gradient(
      90deg,
      ${lighten(0.05, "#18223c")} 0%,
      ${lighten(0.05, "#1f113b")} 100%
    )`,
  },
  [theme.breakpoints.down("sm")]: {
    padding: "5px 14px",
  },

  /* border-image: linear-gradient(90deg, rgba(39, 118, 255, 1), rgba(108, 97, 255, 1)) 1 1; */
  /* background-color: rgba(108, 97, 255, 1); */
}));

const TopItem = styled("div")<{ isAvtive: boolean }>`
  position: relative;
  cursor: pointer;

  ::after {
    width: ${({ isAvtive }) => (isAvtive ? "100%" : "0%;")};
    position: absolute;
    bottom: -14px;
    left: 0;
    content: "";
    background: white;
    height: 3px;
  }
`;

export enum Pages {
  HOME = "#home",
  WHY = "#introduction",
  TOKEN = "#token",
  ROADMAP = "#roadmap",
}

export type HeaderRef = {
  [key in Pages]: MutableRefObject<HTMLDivElement | null>;
};

export type HeaderProps = {
  refs?: HeaderRef;
};

export default function Header({ refs }: HeaderProps) {
  const [active, setActive] = useState<Pages>(Pages.HOME);

  const theme = useTheme();

  const handleClickNavItem = (
    ref?: MutableRefObject<HTMLDivElement | null>
  ) => {
    if (!ref) return;

    // setActive(page)
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const handleLunch = useCallback(() => {
    // location.href = ''
    // window.open("http://16.162.188.15:7481/")
  }, []);

  const scrollEventListener = useMemo(() => {
    function fn() {
      if (!refs) return;

      Object.keys(refs).map((page) => {
        const _page = page as Pages;
        const el = refs[_page].current;

        if (!el) return;

        const { top, height } = el.getBoundingClientRect();
        const distance1 = top - 84;
        const distance2 = top + height;

        if (distance1 <= 0 && distance2 >= 0) {
          setActive(_page);
        }
      });
    }

    return debounce(fn);
  }, [refs]);

  const [topState, setTopState] = useState(1);

  // add listener
  useEffect(() => {
    document.addEventListener("scroll", scrollEventListener);
    return () => {
      document.removeEventListener("scroll", scrollEventListener);
    };
  }, [scrollEventListener]);
  const [comingSoon, setComingSoon] = useState(false);

  return (
    <Wrapper>
      {/* <Blur /> */}
      <Box bgcolor={"#001220"} sx={{ padding: "10px 332px", opacity: 0.72 }}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "ceneter",
              color: "white",
            }}
          >
            <ImgLogo
              sx={{ mr: "10px" }}
              src={logoBanner}
              alt="Logo banner"
              loading="lazy"
            />
            <Box sx={{ mt: "10px" }}>全球汇</Box>
          </Box>

          <Box
            sx={{
              gap: "40px",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "ceneter",
            }}
          >
            <TopItem
              isAvtive={topState == 1}
              onClick={() => {
                setTopState(1);
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
            >
              首页
            </TopItem>
            <TopItem
              isAvtive={topState == 2}
              onClick={() => {
                setTopState(2);
                window.scrollTo({
                  top: 500,
                  left: 0,
                  behavior: "smooth",
                });
              }}
            >
              关于我们
            </TopItem>
            <TopItem
              isAvtive={topState == 3}
              onClick={() => {
                setTopState(3);
                window.scrollTo({
                  top: 2500,
                  left: 0,
                  behavior: "smooth",
                });
              }}
            >
              下载
            </TopItem>
          </Box>
        </Stack>
      </Box>
    </Wrapper>
  );
}
