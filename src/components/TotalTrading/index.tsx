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
import card_bg from "@/public/images/card_bg.png"
import currency from "@/public/images/currency.png"
import { useEffect, useCallback, useState, useRef } from "react"
import { getCurrency } from "./data"

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
  width: "100%",

  "&::-webkit-scrollbar": { display: "none" },
}))

const Card1 = styled("div")(({ theme }) => ({
  padding: "50px 55px",
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
  background: `url(${card_bg}) no-repeat`,
  backgroundSize: "100%",
}))
interface CurrencyType {
  currencyName: string
  price: number
  trend: number
}
export default function TotalTrading() {
  const isXs = useMediaQuery((theme: CustomTheme) =>
    theme.breakpoints.down("sm")
  )

  const [currencyList, setCurrencyList] = useState<CurrencyType[]>()
  const [increaseSet, setIncreaseSet] = useState(false)
  const increaseRef = useRef<HTMLDivElement>(null)

  const getCurrencyInfo = useCallback(async () => {
    const list = await getCurrency()
    setCurrencyList(list)
  }, [])
  useEffect(() => {
    getCurrencyInfo()
  }, [])
  useEffect(() => {
    if (!increaseSet && increaseRef && increaseRef.current) {
      setInterval(() => {
        if (
          increaseRef.current &&
          increaseRef.current.scrollLeft !== increaseRef.current.scrollWidth
        ) {
          increaseRef.current.scrollTo(increaseRef.current.scrollLeft + 1, 0)
        }
      }, 10)
      setIncreaseSet(true)
    }
  }, [increaseRef, increaseSet])
  return (
    <Wrapper>
      <ContentBox ref={increaseRef}>
        {currencyList &&
          currencyList.map((item, index) => {
            return (
              <Card1 key={index}>
                <Stack flexDirection={"row"}>
                  <Box
                    sx={{
                      width: "70px",
                      height: "70px",
                      borderRadius: "50%",
                    }}
                  >
                    <MyImage src={currency} />
                  </Box>
                  <Box sx={{ ml: { sm: "12px" }, minWidth: { sm: "160px" } }}>
                    <Stack flexDirection={"row"}>
                      <Typography color={"#FCFBFF"} fontSize={{ sm: 22 }}>
                        {item?.currencyName}
                      </Typography>
                      <Typography
                        color={item?.trend > 0 ? "#5dc691" : "#F14159"}
                        fontSize={{ sm: 22 }}
                        sx={{
                          ml: {
                            sm: "12px",
                            display: "flex",
                            alignItems: "center",
                          },
                        }}
                        whiteSpace={"nowrap"}
                      >
                        <Icon
                          icon={
                            item?.trend > 0
                              ? "akar-icons:arrow-up"
                              : "akar-icons:arrow-down"
                          }
                        />
                        {item?.trend && Math.abs(item.trend)}%
                      </Typography>
                    </Stack>
                    <Typography
                      color={"#FCFBFF"}
                      sx={{ mt: "16px", fontSize: { sm: "30px" } }}
                      whiteSpace={"nowrap"}
                    >
                      $ {item?.price}
                    </Typography>
                  </Box>
                </Stack>
              </Card1>
            )
          })}
      </ContentBox>

      <TotalCard>
        <Card2>
          <Stack spacing={3}>
            <Typography color={"#AFB3C8"} sx={{ fontSize: { sm: "20px" } }}>
              Total Value Locked
            </Typography>
            <Typography color={"#fff"} sx={{ fontSize: { sm: "32px" } }}>
              $ 46,639,222,31
            </Typography>
          </Stack>
        </Card2>
        <Card2>
          <Stack spacing={3}>
            <Typography color={"#AFB3C8"} sx={{ fontSize: { sm: "20px" } }}>
              Total Trading Volume
            </Typography>
            <Typography color={"#fff"} sx={{ fontSize: { sm: "32px" } }}>
              $ 46,639,222,31
            </Typography>
          </Stack>
        </Card2>
      </TotalCard>
    </Wrapper>
  )
}
