import { Theme } from '@mui/material/styles'
import { merge } from 'lodash'
import { CustomTheme } from '../index'
// import Card from './Card'
// import Lists from './Lists'
// import Paper from './Paper'
// import Input from './Input'
// import Button from './Button'
// import Tooltip from './Tooltip'
// import Backdrop from './Backdrop'
// import Typography from './Typography'
// import IconButton from './IconButton'
// import Autocomplete from './Autocomplete'

import Button from './Button'

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme: CustomTheme) {
  return merge(
    // Card(theme),
    // Lists(theme),
    // Paper(theme),
    // Input(theme),
    // Button(theme),
    // Tooltip(theme),
    // Backdrop(theme),
    // Typography(theme),
    // IconButton(theme),
    // Autocomplete(theme),

    Button(theme)
  )
}
