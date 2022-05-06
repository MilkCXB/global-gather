import { Web3Provider } from '@ethersproject/providers'
import { Contract } from 'ethers'
import ERC20_ABI from '../abis/erc20.json'
import { Erc20 } from '../abis/types'

export class ContractManager {
  public readonly library: Web3Provider
  public readonly chainId: number
  public readonly account: string

  constructor(library: Web3Provider, chainId: number, account: string) {
    this.library = library
    this.chainId = chainId
    this.account = account
  }

  getContract<T extends Contract = Contract>(
    address: string | undefined,
    abi: any[],
    withSigner = true
  ): T | undefined {
    const singer = this.library.getSigner()

    if (!address) return undefined

    const contract = new Contract(address, abi, withSigner ? singer : this.library) as T

    return contract
  }

  getTokenContract(address: string | undefined, withSigner = true): Erc20 | undefined {
    return this.getContract<Erc20>(address, ERC20_ABI, withSigner)
  }
}
