import { Helmet } from 'react-helmet-async'
import { forwardRef } from 'react'
// material
import { Box } from '@mui/material'

// ----------------------------------------------------------------------

// eslint-disable-next-line react/display-name
const Page = forwardRef(
  (
    {
      children,
      title = '',
      ...other
    }: {
      children: any
      title?: string
    },
    ref
  ) => (
    <Box ref={ref} {...other}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </Box>
  )
)

export default Page
