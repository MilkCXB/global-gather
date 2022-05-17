import {
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import { styled } from "@mui/material/styles"

import { ColorfulRect, CustomTheme } from "@/src/theme"
import { useActiveWeb3React } from "@/src/hooks/web3"
import {
  MutableRefObject,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react"
import { DEFAULT_PAGE_SPACING } from "@/pages"
import LangSwitcher from "../LangSwitcher"
import { Trans } from "@lingui/macro"
import { Title } from "../Advantages"
import active_icon2 from "@/public/images/roadmap/active_icon1.png"
import active_icon3 from "@/public/images/roadmap/active_icon2.png"
import active_icon4 from "@/public/images/roadmap/active_icon3.png"
import active_icon1 from "@/public/images/roadmap/active_icon4.png"
import icon2 from "@/public/images/roadmap/icon1.png"
import icon3 from "@/public/images/roadmap/icon2.png"
import icon4 from "@/public/images/roadmap/icon3.png"
import icon1 from "@/public/images/roadmap/icon4.png"
import active_q2 from "@/public/images/roadmap/2022Q2.png"
import active_q3 from "@/public/images/roadmap/2022Q3.png"
import active_q4 from "@/public/images/roadmap/2022Q4.png"
import active_q1 from "@/public/images/roadmap/2023Q1.png"
import { fontSize } from "@mui/system"
enum TabControl {
  Q1 = "Q1",
  Q2 = "Q2",
  Q3 = "Q3",
  Q4 = "Q4",
}
type refsProps = {
  [key in TabControl]: RefObject<HTMLDivElement | null>
}
const Wrapper = styled("div")(({ theme }) => ({
  padding: "124px 0 240px 0",
  [theme.breakpoints.down("sm")]: {
    padding: "65px 0 78px 0",
  },
}))

const TimeTab = styled("div")(({ theme }) => ({
  background: "#2E3348",
  height: "8px",
  width: "100%",
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  position: "relative",
  marginBottom: "32px",
}))
const TimeTabH5 = styled(TimeTab)(({ theme }) => ({
  width: "4px",
  minHeight: "562px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    paddingTop: "9px",
  },
}))

const ItemTab = styled("div")(({ theme }) => ({
  flex: 1,
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    width: "18px",
    alignItems: "stretch",
    flex: "unset",
  },
}))
const IconImg = styled("img")(({ theme }) => ({
  width: "36px",
  cursor: "pointer",
  zIndex: 2,
  [theme.breakpoints.down("sm")]: {
    width: "18px",
    height: "18px",
  },
}))
const ItemContent = styled("div")<{ active: boolean }>`
  flex: 1;
  opacity: ${({ theme, active }) => (active ? 1 : 0.25)};
`

const YearImg = styled("img")`
  width: 81px;
  margin-bottom: 20px;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    width: 50px;
    margin-bottom: 12px;
  }
`
const TextWraper = styled("div")`
  font-size: 16px;
  color: #afb3c8;
`
const Text = styled("div")((theme) => ({
  display: "flex",
  alignItems: "center",
}))
const Dott = styled("div")((theme) => ({
  width: "4px",
  height: "4px",
  background: "#AFB3C8",
  borderRadius: "50%",
  marginRight: "5px",
}))
const CoverageBackground = styled("div")<{ clientWidth: number }>`
  height: 8px;
  width: ${({ theme, clientWidth }) =>
    clientWidth ? clientWidth + "px" : "unset"};
  background: linear-gradient(90deg, #57affb 0%, #8e2ef6 100%);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  border-radius: 4px;
`
const CoverageBackgroundH5 = styled("div")<{ clientHeight: number }>`
  width: 4px;
  height: ${({ theme, clientHeight }) =>
    clientHeight ? clientHeight + "px" : "unset"};
  background: linear-gradient(180deg, #57affb 0%, #8e2ef6 100%);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  border-radius: 4px;
`
const TextYear = styled("div")`
  flex: 1;
  font-size: 20px;
  color: #fcfbff;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    font-size: 12px;
  }
`
export default function RoadMap() {
  const theme: CustomTheme = useTheme()
  const { account } = useActiveWeb3React()
  const Q1 = useRef<HTMLDivElement>(null)
  const Q2 = useRef<HTMLDivElement>(null)
  const Q3 = useRef<HTMLDivElement>(null)
  const Q4 = useRef<HTMLDivElement>(null)
  const refs: refsProps = { Q1, Q2, Q3, Q4 }
  const [activeItem, setActiveItem] = useState<TabControl>(TabControl.Q2)
  const [coverClientwidth, setCoverClientWidth] = useState<number>(0)
  const [coverClientHeight, setCoverClientHeight] = useState<number>(0)
  useEffect(() => {
    const demo = refs[activeItem].current

    if (!demo) return
    console.log(demo.offsetTop)
    setCoverClientHeight(demo.offsetTop + 3)
    setCoverClientWidth(demo.offsetLeft + 3)
  }, [activeItem])
  const handleChange = useCallback((activeItem) => {
    setActiveItem(activeItem)
  }, [])
  const isXs = useMediaQuery((theme: CustomTheme) =>
    theme.breakpoints.down("sm")
  )
  return (
    <Wrapper>
      <Box>
        <Stack
          sx={{
            mb: { sm: "245px", xs: "76px" },
          }}
        >
          <Title>Project Roadmap</Title>
        </Stack>
      </Box>

      <Box sx={{ mb: "88px" }}>
        <Container>
          <Stack
            direction={isXs ? "row" : undefined}
            sx={{ height: "100%", p: isXs ? "0 10px" : "unset" }}
            spacing={3}
          >
            {isXs && (
              <>
                <Stack direction={"column"}>
                  <TextYear>2022</TextYear>
                  <TextYear>2022</TextYear>
                  <TextYear>2022</TextYear>
                  <TextYear>2023</TextYear>
                </Stack>
                <TimeTabH5>
                  <CoverageBackgroundH5 clientHeight={coverClientHeight} />
                  <ItemTab ref={Q2} sx={{ height: "183px" }}>
                    <IconImg
                      src={activeItem === TabControl.Q2 ? active_icon2 : icon2}
                      onClick={() => {
                        handleChange(TabControl.Q2)
                      }}
                    />
                  </ItemTab>
                  <ItemTab ref={Q3} sx={{ height: "167px" }}>
                    {" "}
                    <IconImg
                      src={activeItem === TabControl.Q3 ? active_icon3 : icon3}
                      onClick={() => {
                        handleChange(TabControl.Q3)
                      }}
                    />
                  </ItemTab>
                  <ItemTab ref={Q4} sx={{ height: "156px" }}>
                    {" "}
                    <IconImg
                      src={activeItem === TabControl.Q4 ? active_icon4 : icon4}
                      onClick={() => {
                        handleChange(TabControl.Q4)
                      }}
                    />
                  </ItemTab>
                  <ItemTab ref={Q1} sx={{ height: "63px" }}>
                    {" "}
                    <IconImg
                      src={activeItem === TabControl.Q1 ? active_icon1 : icon1}
                      onClick={() => {
                        handleChange(TabControl.Q1)
                      }}
                    />
                  </ItemTab>
                </TimeTabH5>
              </>
            )}
            <Stack
              direction={isXs ? "column" : "row"}
              sx={{
                justifyContent: "space-between",
                pt: isXs ? "14px" : "unset",
              }}
              spacing={isXs ? 4 : "unset"}
            >
              <ItemContent active={activeItem == TabControl.Q2}>
                <YearImg src={active_q2} />
                <TextWraper>
                  <Text>
                    <Dott />
                    <Typography>Deploying New Router</Typography>
                  </Text>
                  <Text>
                    <Dott />
                    <Typography>and Smart Contract</Typography>
                  </Text>
                  <Text>
                    <Dott />
                    <Typography>KLEIN White Paper Released</Typography>
                  </Text>
                  <Text>
                    <Dott />
                    <Typography>Test Network Launch</Typography>
                  </Text>
                  <Text>
                    <Dott />
                    <Typography>Contract Audit</Typography>
                  </Text>
                  <Text>
                    <Dott />
                    <Typography>Mainnet Launch</Typography>
                  </Text>
                  <Text>
                    <Dott />
                    <Typography>Execution of liquidity pools</Typography>
                  </Text>
                </TextWraper>
              </ItemContent>
              <ItemContent active={activeItem == TabControl.Q3}>
                <YearImg src={active_q3} />
                <TextWraper>
                  <Text>
                    <Dott />
                    <Typography>IEO</Typography>
                  </Text>
                  <Text>
                    <Dott />
                    <Typography>Token Trading</Typography>
                  </Text>

                  <Text>
                    <Dott />
                    <Typography>KLEIN DAO function launch</Typography>
                  </Text>
                  <Text>
                    <Dott />
                    <Typography>Acceleration launch</Typography>
                  </Text>
                  <Text>
                    <Dott />
                    <Typography>Voting system launch</Typography>
                  </Text>
                  <Text>
                    <Dott />
                    <Typography>Equity Dividend</Typography>
                  </Text>
                </TextWraper>
              </ItemContent>
              <ItemContent active={activeItem == TabControl.Q4}>
                <YearImg src={active_q4} />
                <TextWraper>
                  <Text>
                    <Dott />
                    <Typography>Multi-Chain Deployment</Typography>
                  </Text>
                  <Text>
                    <Dott />
                    <Typography>Site front-end enhancements</Typography>
                  </Text>
                  <Text>
                    <Dott />
                    <Typography>Performance upgrades</Typography>
                  </Text>
                  <Text>
                    <Dott />
                    <Typography>Contract Upgrades</Typography>
                  </Text>
                  <Text>
                    <Dott />
                    <Typography>Code Optimization</Typography>
                  </Text>
                </TextWraper>
              </ItemContent>
              <ItemContent active={activeItem == TabControl.Q1}>
                <YearImg src={active_q1} />
                <TextWraper>
                  <Text>
                    <Dott />
                    <Typography>Version 2.0 released</Typography>
                  </Text>
                  <Text>
                    <Dott />
                    <Typography>......</Typography>
                  </Text>
                </TextWraper>
              </ItemContent>
            </Stack>
          </Stack>
        </Container>
      </Box>
      {!isXs && (
        <Box>
          <TimeTab>
            <CoverageBackground clientWidth={coverClientwidth} />
            <Container>
              <Stack direction={"row"} sx={{}}>
                <ItemTab ref={Q2}>
                  <IconImg
                    src={activeItem === TabControl.Q2 ? active_icon2 : icon2}
                    onClick={() => {
                      handleChange(TabControl.Q2)
                    }}
                  />
                </ItemTab>
                <ItemTab ref={Q3}>
                  {" "}
                  <IconImg
                    src={activeItem === TabControl.Q3 ? active_icon3 : icon3}
                    onClick={() => {
                      handleChange(TabControl.Q3)
                    }}
                  />
                </ItemTab>
                <ItemTab ref={Q4}>
                  {" "}
                  <IconImg
                    src={activeItem === TabControl.Q4 ? active_icon4 : icon4}
                    onClick={() => {
                      handleChange(TabControl.Q4)
                    }}
                  />
                </ItemTab>
                <ItemTab ref={Q1}>
                  {" "}
                  <IconImg
                    src={activeItem === TabControl.Q1 ? active_icon1 : icon1}
                    onClick={() => {
                      handleChange(TabControl.Q1)
                    }}
                  />
                </ItemTab>
              </Stack>
            </Container>
          </TimeTab>
          <Container>
            <Stack direction={"row"}>
              <TextYear>2022</TextYear>
              <TextYear>2022</TextYear>
              <TextYear>2022</TextYear>
              <TextYear>2023</TextYear>
            </Stack>
          </Container>
        </Box>
      )}
    </Wrapper>
  )
}
