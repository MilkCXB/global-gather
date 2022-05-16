import { Box, Container, Stack, Typography, useTheme } from "@mui/material"
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
  Q1 = "q1",
  Q2 = "q2",
  Q3 = "q3",
  Q4 = "q4",
}
type refsProps = {
  [key in TabControl]: RefObject<HTMLDivElement>
}
const Wrapper = styled("div")((theme) => ({
  padding: "124px 0 240px 0",
}))

const TimeTab = styled("div")((theme) => ({
  background: "#2E3348",
  height: "8px",
  width: "100%",
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  position: "relative",
  marginBottom: "32px",
}))
const ItemTab = styled("div")((theme) => ({
  flex: 1,
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
}))
const IconImg = styled("img")((theme) => ({
  width: "36px",
  cursor: "pointer",
  zIndex: 2,
}))
const ItemContent = styled("div")<{ active: boolean }>`
  flex: 1;
  opacity: ${({ theme, active }) => (active ? 1 : 0.25)};
`

const YearImg = styled("img")`
  width: 81px;
  margin-bottom: 20px;
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
const TextYear = styled("div")`
  flex: 1;
  font-size: 20px;
  color: #fcfbff;
`
export default function RoadMap() {
  const theme: CustomTheme = useTheme()
  const { account } = useActiveWeb3React()
  const q1 = useRef<HTMLDivElement>(null)
  const q2 = useRef<HTMLDivElement>(null)
  const q3 = useRef<HTMLDivElement>(null)
  const q4 = useRef<HTMLDivElement>(null)
  const refs = { q1, q2, q3, q4 }
  const [activeItem, setActiveItem] = useState<TabControl>(TabControl.Q2)
  const [coverClientwidth, setCoverClientWidth] = useState<number>(0)
  useEffect(() => {
    if (
      activeItem &&
      refs[activeItem] &&
      refs[activeItem].current &&
      refs[activeItem].current.offsetLeft
    ) {
      setCoverClientWidth(refs[activeItem].current.offsetLeft + 3)
    }
  }, [activeItem])
  const handleChange = useCallback((activeItem) => {
    setActiveItem(activeItem)
  }, [])
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
          <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
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
              </TextWraper>
            </ItemContent>
          </Stack>
        </Container>
      </Box>
      <Box>
        <TimeTab>
          <CoverageBackground clientWidth={coverClientwidth} />
          <Container>
            <Stack direction={"row"} sx={{}}>
              <ItemTab ref={q2}>
                <IconImg
                  src={activeItem === TabControl.Q2 ? active_icon2 : icon2}
                  onClick={() => {
                    handleChange(TabControl.Q2)
                  }}
                />
              </ItemTab>
              <ItemTab ref={q3}>
                {" "}
                <IconImg
                  src={activeItem === TabControl.Q3 ? active_icon3 : icon3}
                  onClick={() => {
                    handleChange(TabControl.Q3)
                  }}
                />
              </ItemTab>
              <ItemTab ref={q4}>
                {" "}
                <IconImg
                  src={activeItem === TabControl.Q4 ? active_icon4 : icon4}
                  onClick={() => {
                    handleChange(TabControl.Q4)
                  }}
                />
              </ItemTab>
              <ItemTab ref={q1}>
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
    </Wrapper>
  )
}
