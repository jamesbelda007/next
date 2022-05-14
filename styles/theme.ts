import { extendTheme } from '@chakra-ui/react'

export const theme = {
  colors: {
    primary: {
      500: '#30A5C1',
    },
    tint: {
      100: '#F7F7F7',
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 500,
      },
      variants: {
        primary: {
          bg: 'primary.500',
          color: '#fff',
        },
      },
    },
    Tabs: {
      variants: {
        line: {
          tab: {
            color: 'gray.500',
            _selected: {
              color: 'primary.500',
            },
            _focus: {
              boxShadow: 'none',
            },
          },
        },
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: 'tint.100',
      },
    },
  },
}

export default extendTheme(theme)
