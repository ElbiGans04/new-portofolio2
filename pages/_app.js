import theme from "@/src/config/chakra.config";
import { store } from "@/src/store";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import {IconContext } from 'react-icons'
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <IconContext.Provider  value={{
          style: { verticalAlign: 'middle' }
        }}>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </IconContext.Provider>
      </ChakraProvider>
    </Provider>
  );
}
