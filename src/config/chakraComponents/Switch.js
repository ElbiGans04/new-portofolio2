import { switchAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
  // define the part you're going to style
  track: {
    backgroundColor: 'brand.50'
  },
})

const switchAnatomyTheme = defineMultiStyleConfig({
  baseStyle,
});

export default switchAnatomyTheme