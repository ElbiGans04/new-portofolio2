import { extendTheme } from "@chakra-ui/react";
import source_sans from "../constants/fonts/source_sans_3";
import work_sans from "../constants/fonts/work_sans";
import inputAnatomyTheme from "./chakraComponents/Input";
import modalAnatomyTheme from "./chakraComponents/Modal";
import switchAnatomyTheme from "./chakraComponents/Switch";
/**
 * Custom Breakpoint
 */
export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

/**
 * Custom Configuration
 */
export const configuration = {
  semanticTokens: {
    colors: {
      bgLayer1: {
        default: "white",
        _dark: "gray.900",
      },
      bgLayer2: {
        default: "whiteAlpha.900",
        _dark: "gray.800",
      },
      bgLayer3: {
        default: "whiteAlpha.800",
        _dark: "gray.700",
      },
      textLayer1: {
        default: "black",
        _dark: "whiteAlpha.900",
      },
      borderLayer1: {
        default: "rgba(0 ,0 ,0 , 0.2)",
        _dark: "rgba(255,255,255, 0.2)",
      },
    },
  },
  styles: {
    global: () => ({
      "html, body": {
        color: "textLayer1",
        background: "bgLayer2",
      },
    }),
  },
  config: {
    initialColorMode: "system",
    useSystemColorMode: true,
  },
  breakpoints,
  colors: {
    brand: {
      1000: "#0b001a",
      900: "#22004d",
      800: "#380080",
      700: "#4e00b3",
      600: "#6500e6",
      500: "#7e1aff",
      400: "#9b4dff",
      300: "#b780ff",
      200: "#d4b3ff",
      100: "#f1e5ff",
      50: "#8424FF",
    },
  },
  fonts: {
    body: source_sans.style.fontFamily,
    heading: work_sans.style.fontFamily,
  },
  components: {
    Switch: {
      variants: {
        brand: {
          backgroundColor: "brand.50",
        },
      },
      defaultProps: {
        colorScheme: "brand",
      },
    },
    Button: {
      variants: {
        brand: {
          backgroundColor: "brand.50",
          cursor: "pointer",
          color: "white",
          padding: "10px",
          _hover: {
            backgroundColor: "brand.600",
            color: "whiteAlpha.900",
          },
          _active: {
            backgroundColor: "brand.700",
            color: "whiteAlpha.800",
          },
        },
        brandOutline: {
          backgroundColor: "bgLayer1",
          color: "brand.50",
          cursor: "pointer",
          borderWidth: "1px",
          borderColor: "brand.50",
          padding: "10px",
          _hover: {
            backgroundColor: "gray.100",
            color: "brand.500",
          },
          _active: {
            backgroundColor: "gray.200",
            color: "brand.600",
          },
        },
      },
    },
    Modal: modalAnatomyTheme,
    Input: inputAnatomyTheme,
    Switch: switchAnatomyTheme,
  },
};

export default extendTheme(configuration);
