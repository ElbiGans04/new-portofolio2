import { extendTheme  } from '@chakra-ui/react'
import source_sans from '../constants/fonts/source_sans_3';
const configuration = {
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
    main: source_sans.style.fontFamily,
  },
};


export default extendTheme(configuration);