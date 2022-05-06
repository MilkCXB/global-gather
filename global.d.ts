// define some custom type

interface Window {
  ethereum?: {
    isMetamask?: boolean
    on?: (...args: any[]) => void
    removeListener?: (...args: any[]) => void
  }
}
