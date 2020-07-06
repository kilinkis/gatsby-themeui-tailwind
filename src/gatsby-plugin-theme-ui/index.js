import { tailwind } from '@theme-ui/presets'

export default {
  ...tailwind,
  colors: {
    ...tailwind.colors, // this, of course, extends the existing configuration, if we want to have just our own set of colors, we can remove this spread
    primary: '#005AFF',
    secondary: '#5fc1ee',
    accent: '#8dc73f'
  },
  styles: {
    ...tailwind.styles,
    h1: {
      fontSize: 32,
      fontFamily: 'heading',
      fontWeight: 'heading',
      color: 'primary',
      mt: 4,
      mb: 2,
    },
  }
}