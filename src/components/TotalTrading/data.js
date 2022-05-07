const list = [
  {
    currencyName: "BTCB",
    price: "4.23",
    trend: -2.21,
  },
  {
    currencyName: "USDC",
    price: 3.45,
    trend: 1.2,
  },
  {
    currencyName: "USDT",
    price: 1.23,
    trend: 3.42,
  },
  {
    currencyName: "BUSD",
    price: 1.23,
    trend: -3.42,
  },
  {
    currencyName: "DAI",
    price: 1.23,
    trend: 2.1,
  },
  {
    currencyName: "BTH",
    price: 8.13,
    trend: 1.1,
  },
]

export const getCurrency = function () {
  return new Promise((re) => {
    re(list)
  })
}
