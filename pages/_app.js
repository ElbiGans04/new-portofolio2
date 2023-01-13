import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/src/config/chakra.config";
import source_sans_3 from "@/src/constants/fonts/source_sans_3";
import { Provider } from "react-redux";
import { store } from "@/src/store";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}
