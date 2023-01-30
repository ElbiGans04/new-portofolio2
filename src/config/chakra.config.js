import { extendTheme } from "@chakra-ui/react";
import source_sans from "../constants/fonts/source_sans_3";
import work_sans from "../constants/fonts/work_sans";

/**
 * Custom Breakpoint
 */
const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

/**
 * Custom Configuration
 */
const configuration = {
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
          backgroundColor: "white",
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
  },
};

export default extendTheme(configuration);
