export type ProcessItem = {
  progress: number
  title: string
  desc: string
  bgColor: string
  progressColor: string
}
export type NavItem = {
  label: string
  to: string
  outer: boolean
}

export const processItems: ProcessItem[] = [
  {
    progress: 50,
    title: '50%',
    desc: 'Airdrop',
    bgColor: '#1E293B',
    progressColor: '#409EFF',
  },
  {
    progress: 20,
    title: '20%',
    desc: 'Staking Incentive',
    bgColor: '#1E293B',
    progressColor: '#FFC652',
  },
  {
    progress: 20,
    title: '20%',
    desc: 'InfMeta Treasury',
    bgColor: '#1E293B',
    progressColor: '#2ED9ED',
  },
  {
    progress: 10,
    title: '10%',
    desc: 'LP Incentive',
    bgColor: '#1E293B',
    progressColor: '#B566FE',
  },
  {
    progress: 0,
    title: '0%',
    desc: 'Founding Team',
    bgColor: '#1E293B',
    progressColor: '#B566FE',
  },
]

export const infmetaFeatures = [
  { desc: 'Support emerging artists and their original work' },
  { desc: 'Support NFT communities' },
  { desc: 'Support art preservation' },
  { desc: 'Support our Developer Grant for participating in the xxx ecosystem' },
]

export const navs: NavItem[] = [
  // { label: 'Home', to: '#home', outer: false },
  // { label: 'Introduction', to: '#introduction', outer: false },
  // { label: 'Token', to: '#token', outer: false },
  // { label: 'Roadmap', to: '#roadmap', outer: false },
  { label: 'Launch App', to: '#', outer: true },
]
