import { inputAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const brand = definePartsStyle({
  // define the part you're going to style
  field: {
    borderRadius: ["8px"],
    borderWidth: ["1px"],
    borderStyle: ["solid"],
    borderColor: ["brand.50"],
    transitionDuration: '0.2s',
    _focusVisible: { borderWidth: ["1.5px"], boxShadow: "0 0 3px #7e1aff!important" },
    _hover: {   boxShadow: "0 0 2px #7e1aff"},
    backgroundColor: 'bgLayer1',
    color: 'textLayer1'
  },
});

const inputAnatomyTheme = defineMultiStyleConfig({
  variants: { brand },
  defaultProps: {
    variant: "brand",
  },
});

export default inputAnatomyTheme;
