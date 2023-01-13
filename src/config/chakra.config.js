import { extendTheme  } from '@chakra-ui/react'
import source_sans from '../constants/fonts/source_sans_3';
const configuration = {
  colors: {
    brand: {
      900: "#8424FF",
    },
  },
   fonts: {
    main: source_sans.style.fontFamily,
  },
};


export default extendTheme(configuration);