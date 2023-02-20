import { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import { configuration } from '@/src/config/chakra.config'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <ColorModeScript initialColorMode={configuration.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
