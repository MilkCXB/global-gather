/**
 * List of all the networks supported by the Uniswap Interface
 */
export enum SupportedChainId {
  HUOBI_TEST = 256,
  MAIN = 1,
}

export const DEFAULT_CHAIN: {
  chainId: SupportedChainId
  chainName: string
  rpcUrls: string
  nativeCurrency: {
    name: string
    symbol: string // 2-6 characters long
    decimals: 18
  }
} = {
  chainId: SupportedChainId.MAIN,
  chainName: '',
  rpcUrls: '',
  nativeCurrency: {
    name: '',
    symbol: '',
    decimals: 18,
  },
}

/**
 * Array of all the supported chain IDs
 */
export const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[] = Object.values(SupportedChainId).filter(
  (id) => typeof id === 'number'
) as SupportedChainId[]

export const NETWORK_LABELS: { [chainId in SupportedChainId | number]: string } = {
  [SupportedChainId.MAIN]: 'Main',
  [SupportedChainId.HUOBI_TEST]: 'Huobi Test',
}
