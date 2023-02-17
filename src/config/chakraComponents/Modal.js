import { modalAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
  // define the part you're going to style
  header: {
    color: 'brand.50'
  },
  closeButton: {
    color: 'brand.50'
  },
})

const modalAnatomyTheme = defineMultiStyleConfig({
  baseStyle,
});

export default modalAnatomyTheme