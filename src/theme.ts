import { type ThemeConfig, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false
  } as ThemeConfig
})

export default theme
