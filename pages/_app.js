import theme from "@/src/config/chakra.config";
import { store } from "@/src/store";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import {IconContext } from 'react-icons'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <IconContext.Provider  value={{
          style: { verticalAlign: 'middle' }
        }}>
          <Component {...pageProps} />
        </IconContext.Provider>
      </ChakraProvider>
    </Provider>
  );
}
