import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Link,
  Text,
  VStack,
  useMediaQuery,
  Stack,
} from "@chakra-ui/react";
import Head from "next/head";
import Berlangganan from "@/src/components/Berlangganan";
import NextLink from "next/link";
import { breakpoints } from "@/src/config/chakra.config";

export default function Blog() {
  const [isLg] = useMediaQuery(`(min-width: ${breakpoints.lg})`, {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  });
  return (
    <>
      <Head>
        <title>Blog detail</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VStack w={["100%"]} alignItems={["flex-start"]} position={["relative"]}>
        <Grid
          w={["100%"]}
          height={["100%"]}
          templateColumns={["repeat(1, 1fr)", null, null, "repeat(10, 1fr)"]}
          // templateRows="repeat(2, 1fr)"
          paddingY={["20px"]}
          gap={["50px 0px", null, null, "0 50px"]}
        >
          {/* Left */}
          <GridItem
            borderRightWidth={[0, null, null, "1px"]}
            borderRightColor={["rgba(0,0,0, 0.2)"]}
            paddingX={[0, null, null, "20px"]}
            height={["100%"]}
            paddingTop={["0", null, null, "20px"]}
            paddingBottom={["0", null, null, "100px"]}
            position={["static", null, null, "sticky"]}
            top={["105px"]}
            left={["0"]}
            bottom={["0"]}
            order={[2, null, null, 1]}
          >
            <Stack
              w={["100%"]}
              height={["100%"]}
              alignItems={["center"]}
              direction={['column', 'row', 'column']}
              spacing={["16px", null, null, "48px"]}
            >
              <Button w={["100%", null, null, "inherit"]}>❤ {!isLg && 'Suka'}</Button>
              <Button w={["100%", null, null, "inherit"]}>✉ {!isLg && 'Komentar'}</Button>
              <Button w={["100%", null, null, "inherit"]}>✈ {!isLg && 'Share'}</Button>
            </Stack>
          </GridItem>

          {/* Mid */}
          <GridItem
            order={[1, null, null, 2]}
            colSpan={[null, null, null, 6]}
            rowSpan={[null, null, null, 2]}
          >
            <VStack
              w={["100%"]}
              h={["100%"]}
              alignItems={["flex-start"]}
              spacing={["30px"]}
            >
              {/* Header */}
              <Link as={NextLink} href="/" width={["100%"]}>
                <Box
                  w={["100%"]}
                  height={["200px", "350px"]}
                  backgroundColor={["#D9D9D9"]}
                  flexShrink={[0]}
                />
              </Link>

              {/* Body */}

              <VStack
                w={["100%"]}
                height={["100%"]}
                alignItems={["flex-start"]}
                spacing={["40px"]}
              >
                <VStack
                  w={["100%"]}
                  height={["100%"]}
                  alignItems={["flex-start"]}
                >
                  <Text
                    as="h1"
                    fontSize={["3xl", "4xl", "5xl"]}
                    lineHeight={["1.2em"]}
                    fontWeight={["bold"]}
                  >
                    Membuat sesuatu yang bermanfaat
                  </Text>

                  <Text fontSize={["md", "lg","xl"]}>
                    Desember 04, 2022 - 3 Minutes Reading
                  </Text>
                  <HStack
                    w={["100%"]}
                    height={["100%"]}
                    alignItems={["flex-start"]}
                  >
                    <Link
                      as={NextLink}
                      href="/"
                      fontWeight={["bold"]}
                      color="brand.50"
                      fontSize={["md", "lg","xl"]}
                    >
                      #SELF IMPROVEMENT
                    </Link>
                    <Link
                      as={NextLink}
                      href="/"
                      fontWeight={["bold"]}
                      color="brand.50"
                      fontSize={["md", "lg","xl"]}
                    >
                      #BISNIS
                    </Link>
                  </HStack>
                </VStack>
                <VStack w={["100%"]} alignItems={["flex-start"]}>
                  <Text fontSize={["lg", "xl", "2xl"]}>
                    Membuat sesuatu yang bermanfaat bertujuan agar kita dapat
                    memanfaatkan sesuatu yang mungkin akan kita butuhkan dimasa
                    depan. Sesuatu yang bermanfaat bagi diri kita sendiri
                    benarkan ? Membuat sesuatu yang bermanfaat bertujuan agar
                    kita dapat memanfaatkan sesuatu yang mungkin akan kita
                    butuhkan dimasa depan. Sesuatu yang bermanfaat bagi diri
                    kita sendiri benarkan ? Membuat sesuatu yang bermanfaat
                    bertujuan agar kita dapat memanfaatkan sesuatu yang mungkin
                    akan kita butuhkan dimasa depan. Sesuatu yang bermanfaat
                    bagi diri kita sendiri benarkan ?
                  </Text>

                  <Text fontSize={["2xl", "3xl", "4xl"]} fontWeight={["bold"]}>
                    Heading 1
                  </Text>
                  <Text fontSize={["xl", "2xl", "3xl"]} fontWeight={["bold"]}>
                    Heading 2
                  </Text>
                  <Text fontSize={["lg", "xl", "2xl"]} fontWeight={["bold"]}>
                    Heading 3
                  </Text>
                  <Text fontSize={["md", "lg", "xl"]} fontWeight={["bold"]}>
                    Heading 4
                  </Text>
                  <Text fontSize={["lg", "xl", "2xl"]}>
                    Membuat sesuatu yang bermanfaat bertujuan agar kita dapat
                    memanfaatkan sesuatu yang mungkin akan kita butuhkan dimasa
                    depan. Sesuatu yang bermanfaat bagi diri kita sendiri
                    benarkan ? Membuat sesuatu yang bermanfaat bertujuan agar
                    kita dapat memanfaatkan sesuatu yang mungkin akan kita
                    butuhkan dimasa depan. Sesuatu yang bermanfaat bagi diri
                    kita sendiri benarkan ? Membuat sesuatu yang bermanfaat
                    bertujuan agar kita dapat memanfaatkan sesuatu yang mungkin
                    akan kita butuhkan dimasa depan. Sesuatu yang bermanfaat
                    bagi diri kita sendiri benarkan ?
                  </Text>
                  <Text fontSize={["lg", "xl", "2xl"]}>
                    Membuat sesuatu yang bermanfaat bertujuan agar kita dapat
                    memanfaatkan sesuatu yang mungkin akan kita butuhkan dimasa
                    depan. Sesuatu yang bermanfaat bagi diri kita sendiri
                    benarkan ? Membuat sesuatu yang bermanfaat bertujuan agar
                    kita dapat memanfaatkan sesuatu yang mungkin akan kita
                    butuhkan dimasa depan. Sesuatu yang bermanfaat bagi diri
                    kita sendiri benarkan ? Membuat sesuatu yang bermanfaat
                    bertujuan agar kita dapat memanfaatkan sesuatu yang mungkin
                    akan kita butuhkan dimasa depan. Sesuatu yang bermanfaat
                    bagi diri kita sendiri benarkan ?
                  </Text>
                </VStack>
              </VStack>

              {isLg && <Berlangganan />}
            </VStack>
          </GridItem>

          {!isLg && 
            <GridItem height={['100%']} order={[3]}>
              <Berlangganan />
            </GridItem>
          }

          {/* Right */}
          <GridItem
            colSpan={[null, null, null, 3]}
            position={["static", null, null, "sticky"]}
            top={["105px"]}
            left={["0"]}
            bottom={["0"]}
            paddingTop={["20px"]}
            order={[4]}
          >
            <VStack
              w={["100%"]}
              h={["100%"]}
              alignItems={["flex-start"]}
              spacing={["100px"]}
            >
              {/* Card */}
              <VStack
                w={["100%"]}
                h={["max-content"]}
                alignItems={["flex-start"]}
                spacing={["64px"]}
              >
                {/* Other Article */}
                <VStack
                  w={["100%"]}
                  height={["max-content"]}
                  alignItems={["flex-start"]}
                  spacing={["32px"]}
                >
                  <Text
                    as="h2"
                    color="brand.50"
                    fontSize={["xl", "2xl", "3xl"]}
                    fontWeight={["bold"]}
                    lineHeight={["1.2em"]}
                  >
                    Rekomendasi artikel dengan tag yang sama
                  </Text>

                  <VStack
                    w={["100%"]}
                    height={["100%"]}
                    alignItems={["flex-start"]}
                    spacing={["10px"]}
                  >
                    <VStack w={["100%"]} alignItems={["flex-start"]}>
                      <Link
                        fontSize={["lg", "xl","2xl"]}
                        fontWeight={["bold"]}
                        as={NextLink}
                        href="/"
                      >
                        Cara membuat sesuatu
                      </Link>
                      <Text fontSize={["md", "lg","xl"]}>
                        Desember 04, 2022 - 3 Minutes Reading
                      </Text>
                      <HStack
                        w={["100%"]}
                        height={["100%"]}
                        alignItems={["flex-start"]}
                      >
                        <Link
                          as={NextLink}
                          href="/"
                          fontWeight={["bold"]}
                          color="brand.50"
                          fontSize={["md", "lg","xl"]}
                        >
                          #SELF IMPROVEMENT
                        </Link>
                        <Link
                          as={NextLink}
                          href="/"
                          fontWeight={["bold"]}
                          color="brand.50"
                          fontSize={["md", "lg","xl"]}
                        >
                          #BISNIS
                        </Link>
                      </HStack>
                    </VStack>
                    <VStack w={["100%"]} alignItems={["flex-start"]}>
                      <Link
                         fontSize={["lg", "xl","2xl"]}
                        fontWeight={["bold"]}
                        as={NextLink}
                        href="/"
                      >
                        Cara membuat sesuatu
                      </Link>
                      <Text fontSize={["md", "lg","xl"]}>
                        Desember 04, 2022 - 3 Minutes Reading
                      </Text>
                      <HStack
                        w={["100%"]}
                        height={["100%"]}
                        alignItems={["flex-start"]}
                      >
                        <Link
                          as={NextLink}
                          href="/"
                          fontWeight={["bold"]}
                          color="brand.50"
                          fontSize={["md", "lg","xl"]}
                        >
                          #SELF IMPROVEMENT
                        </Link>
                        <Link
                          as={NextLink}
                          href="/"
                          fontWeight={["bold"]}
                          color="brand.50"
                          fontSize={["md", "lg","xl"]}
                        >
                          #BISNIS
                        </Link>
                      </HStack>
                    </VStack>
                    <VStack w={["100%"]} alignItems={["flex-start"]}>
                      <Link
                         fontSize={["lg", "xl","2xl"]}
                        fontWeight={["bold"]}
                        as={NextLink}
                        href="/"
                      >
                        Cara membuat sesuatu
                      </Link>
                      <Text fontSize={["md", "lg","xl"]}>
                        Desember 04, 2022 - 3 Minutes Reading
                      </Text>
                      <HStack
                        w={["100%"]}
                        height={["100%"]}
                        alignItems={["flex-start"]}
                      >
                        <Link
                          as={NextLink}
                          href="/"
                          fontWeight={["bold"]}
                          color="brand.50"
                          fontSize={["md", "lg","xl"]}
                        >
                          #SELF IMPROVEMENT
                        </Link>
                        <Link
                          as={NextLink}
                          href="/"
                          fontWeight={["bold"]}
                          color="brand.50"
                          fontSize={["md", "lg","xl"]}
                        >
                          #BISNIS
                        </Link>
                      </HStack>
                    </VStack>
                  </VStack>
                </VStack>

                {/* Tags */}
                <VStack
                  w={["100%"]}
                  height={["max-content"]}
                  alignItems={["flex-start"]}
                  spacing={["24px","32px"]}
                >
                  <Text
                    as="h2"
                    color="brand.50"
                    fontSize={["xl", "2xl", "3xl"]}
                    fontWeight={["bold"]}
                    lineHeight={["1.2em"]}
                  >
                    Tags lainnya
                  </Text>

                  <VStack
                    w={["100%"]}
                    height={["100%"]}
                    alignItems={["flex-start"]}
                    spacing={["10px"]}
                  >
                    <Link
                      as={NextLink}
                      href="/"
                      fontWeight={["bold"]}
                      color="brand.50"
                      fontSize={["md", "lg","xl"]}
                    >
                      #SELF IMPROVEMENT
                    </Link>
                    <Link
                      as={NextLink}
                      href="/"
                      fontWeight={["bold"]}
                      color="brand.50"
                      fontSize={["md", "lg","xl"]}
                    >
                      #SELF MOVEMENT
                    </Link>
                    <Link
                      as={NextLink}
                      href="/"
                      fontWeight={["bold"]}
                      color="brand.50"
                      fontSize={["md", "lg","xl"]}
                    >
                      #SELF INDIVIDUALIS
                    </Link>
                  </VStack>
                </VStack>
              </VStack>
              {/* End Of Card */}
            </VStack>
          </GridItem>
        </Grid>
      </VStack>
    </>
  );
}
