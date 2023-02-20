import theme from "@/src/config/chakra.config";
import { ChakraProvider, Container } from "@chakra-ui/react";
import { IconContext } from "react-icons";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import style from "@/src/constants/styles";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <IconContext.Provider
        value={{
          style: { verticalAlign: "middle" },
        }}
      >
        <Navbar />
        <Container maxW={style.maxWidthContent} backgroundColor="bgLayer2" color="textLayer1">
          <Component {...pageProps} />
        </Container>
        <Footer />
      </IconContext.Provider>
    </ChakraProvider>
  );
}
