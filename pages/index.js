import ProfileImage from "@/src/assets/images/img.jpg";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter, Grid,
  GridItem,
  Heading,
  HStack,
  Image as ChakraImage,
  Link,
  List,
  ListIcon,
  ListItem, Modal, ModalBody,
  ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure, VStack
} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Head>
        <title>Halo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VStack w={["100%"]} alignItems={["flex-start"]} position={["relative"]}>
        <VStack
          w={["100%"]}
          height={["100%"]}
          paddingX={["48px"]}
          spacing={["100px"]}
        >
          <Grid
            w={["100%"]}
            height={["100%"]}
            gridTemplateColumns={["repeat(2, 1fr)"]}
            paddingY={["64px"]}
          >
            <GridItem>
              <VStack
                w={["100%"]}
                height={["100%"]}
                alignItems={["flex-start"]}
                spacing={["10px"]}
                justifyContent={["center"]}
              >
                <Text
                  fontSize={["9xl"]}
                  as="h1"
                  fontWeight={["bold"]}
                  lineHeight={["1em"]}
                >
                  Halo Semua
                </Text>
                <Text fontSize={["4xl"]} lineHeight={["1.2em"]}>
                  Saya <Box as="span">Elbi</Box>
                  <br />
                  Saya adalah seorang{" "}
                  <Box
                    as="span"
                    color={["brand.50"]}
                    fontSize={["5xl"]}
                    fontWeight={["bold"]}
                  >
                    Fullstack developer
                  </Box>
                </Text>
              </VStack>
            </GridItem>

            <GridItem>
              <VStack w={["100%"]} height={["100%"]} spacing={["16px"]}>
                <Box
                  w={["450px"]}
                  height={["450px"]}
                  position={["relative"]}
                  borderWidth={["15px"]}
                  borderColor={["brand.50"]}
                  borderRadius={["50%"]}
                  overflow={["hidden"]}
                >
                  <Image src={ProfileImage} alt="profile-rhafael" placeholder="blur" fill />
                </Box>
              </VStack>
            </GridItem>
          </Grid>

          <VStack w={["100%"]} height={["100%"]} alignItems={["flex-start"]}>
            <Heading
              as="h1"
              color={["brand.50"]}
              fontWeight={["bold"]}
              fontSize={["5xl"]}
            >
              Tentang
            </Heading>
            <Text fontSize={["3xl"]}>
              Halo Semua, perkenalkan saya adalah seorang 
              {" "}
              <Box as="span" fontWeight={["bold"]} color="brand.50">
                Fullstack web developer
              </Box>
              {" "}
              dan saya adalah seseorang yang menyukai tantangan dan segala hal tentang teknologi
              <br></br>
              <br></br>
              Dan saat ini{" "}
              <Box as="span" fontWeight={["bold"]} color="brand.50">
                Javascript dan Typescript
              </Box>{" "}
              adalah bahasa pemrograman yang sering saya pakai, dan framework
              frontend seperti{" "}
              <Box as="span" fontWeight={["bold"]} color="brand.50">
                React dan Vue js
              </Box>{" "}
              sering saya gunakan dalam mengembangkan{" "}
              <Box as="span" fontWeight={["bold"]} color="brand.50">
                Web Aplikasi
              </Box>
              {"."}
            </Text>
            {/* Alasan komentar, karena itu merupakan hal yang bersifat pribadi, dan mungkin tidak perlu juga */}
            {/* <Text fontSize={["3xl"]}>
              Halo Semua, perkenalkan nama saya adalah{" "}
              <Box as="span" fontWeight={["bold"]} color="brand.50">
                Elbi
              </Box>{" "}
              dan saya berasal dari{" "}
              <Box as="span" fontWeight={["bold"]} color="brand.50">
                Tangerang
              </Box>{" "}
              yaitu salah satu kota yang berada didalam{" "}
              <Box as="span" fontWeight={["bold"]} color="brand.50">
                negara Indonesia
              </Box>
              {". "} Ketertarikan saya terhadap{" "}
              <Box as="span" fontWeight={["bold"]} color="brand.50">
                Programming
              </Box>{" "}
              berawal dari kesukaan saya dalam bermain permainan di{" "}
              <Box as="span" fontWeight={["bold"]} color="brand.50">
                Komputer, Playstation
              </Box>{" "}
              dan bahkan{" "}
              <Box as="span" fontWeight={["bold"]} color="brand.50">
                pada smartphone (android)
              </Box>
              {". "} Oleh sebab ketertarikan saya dalam bermain{" "}
              <Box as="span" fontWeight={["bold"]} color="brand.50">
                permainan
              </Box>
              {", "}
              saya kemudian mulai mencari tau bagaimana membuat game.{" "}
              <Box as="span" fontWeight={["bold"]} color="brand.50">
                Tetapi
              </Box>{" "}
              oleh karena keterbatasan sumber daya{" "}
              <Box as="span" fontWeight={["bold"]} color="brand.50">
                (Seperti: spesifikasi laptop/komputer yang belum memadai dan
                keterbatasan materi belajar yang gratis internet)
              </Box>
              {", "} saya memulai programming dengan{" "}
              <Box as="span" fontWeight={["bold"]} color="brand.50">
                belajar web developement.
              </Box>
              <br></br>
              <br></br>
              Dan saat ini{" "}
              <Box as="span" fontWeight={["bold"]} color="brand.50">
                Javascript dan Typescript
              </Box>{" "}
              adalah bahasa pemrograman yang sering saya pakai, dan framework
              frontend seperti{" "}
              <Box as="span" fontWeight={["bold"]} color="brand.50">
                React dan Vue js
              </Box>{" "}
              sering saya gunakan dalam mengembangkan{" "}
              <Box as="span" fontWeight={["bold"]} color="brand.50">
                Web Applikasi
              </Box>
              {"."}
            </Text> */}
          </VStack>

          <VStack w={["100%"]} height={["100%"]} alignItems={["flex-start"]}>
            <Heading
              as="h1"
              color={["brand.50"]}
              fontWeight={["bold"]}
              fontSize={["5xl"]}
            >
              Kontak
            </Heading>
            <VStack
              w={["100%"]}
              height={["100%"]}
              alignItems={["flex-start"]}
              spacing={["20px"]}
            >
              <Text fontSize={["3xl"]}>
                Tertarik untuk{" "}
                <Box as="span" fontWeight={["bold"]} color="brand.50">
                  merekrut saya
                </Box>{" "}
                atau{" "}
                <Box as="span" fontWeight={["bold"]} color="brand.50">
                  ingin membuat website
                </Box>{" "}
                sesuai{" "}
                <Box as="span" fontWeight={["bold"]} color="brand.50">
                  kebutuhan ? segera kirim saya pesan / email lewat beberapa
                  cara dibawah ini{" : "}
                </Box>{" "}
              </Text>
              <List spacing={3}>
                <ListItem>
                  <Link
                    href="https://github.com/ElbiGans04"
                    fontSize={["3xl"]}
                    verticalAlign={["middle"]}
                  >
                    <ListIcon as={AiFillGithub} />
                    ElbiGans04
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="mailto:rhafaelbijaksana04@gmail.com"
                    fontSize={["3xl"]}
                    verticalAlign={["middle"]}
                  >
                    <ListIcon as={AiFillMail} />
                    rhafaelbijaksana04@gmail.com
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="www.linkedin.com/in/rhafael-bijaksana"
                    fontSize={["3xl"]}
                    verticalAlign={["middle"]}
                  >
                    <ListIcon as={AiFillLinkedin} />
                    rhafael-bijaksana
                  </Link>
                </ListItem>
              </List>
            </VStack>
          </VStack>

          <VStack
            w={["100%"]}
            height={["100%"]}
            alignItems={["flex-start"]}
            spacing={["32px"]}
          >
            <Heading
              as="h1"
              color={["brand.50"]}
              fontWeight={["bold"]}
              fontSize={["5xl"]}
            >
              Riwayat pekerjaan
            </Heading>
            <Grid
              w={["100%"]}
              height={["100%"]}
              gridTemplateColumns={["repeat(6, 1fr)"]}
              gap={["50px 0"]}
            >
              <GridItem>
                <VStack w={["100%"]} height={["100%"]}>
                  <Box
                    w={["70px"]}
                    h={["70px"]}
                    backgroundColor={["brand.50"]}
                    borderRadius={["50%"]}
                    borderWidth={["7px"]}
                    flexShrink={[0]}
                  />
                  <Box
                    w={["10px"]}
                    h={["100%"]}
                    backgroundColor={["brand.50"]}
                  />
                </VStack>
              </GridItem>
              <GridItem colSpan={5}>
                <VStack
                  w={["100%"]}
                  h={["100%"]}
                  spacing={["32px"]}
                  alignItems={["flex-start"]}
                >
                  <VStack w={["100%"]} alignItems={["flex-start"]}>
                    <Text
                      fontSize={["3xl"]}
                      fontWeight={["bold"]}
                      lineHeight={["1.1em"]}
                    >
                      Pt. InArray Indonesia
                    </Text>
                    <Text fontSize={["2xl"]} lineHeight={["1.1em"]}>
                      Sebagai frontend developer
                    </Text>
                    <Text fontSize={["xl"]} lineHeight={["1.1em"]}>
                      Mar 20, 2020 - Des 04, 2029
                    </Text>
                  </VStack>
                  <VStack w={["100%"]} alignItems={["flex-start"]}>
                    <Text fontSize={["xl"]} lineHeight={["1.1em"]}>
                      Hello world Hello world Hello world Hello world Hello
                      world Hello world Hello world Hello world Hello world
                      Hello world Hello world Hello world Hello world Hello
                      world Hello world Hello world Hello world Hello world
                      Hello world Hello world Hello world Hello world Hello
                      world Hello world Hello world Hello world Hello world
                      Hello world Hello world Hello world
                    </Text>
                  </VStack>
                </VStack>
              </GridItem>
              <GridItem>
                <VStack w={["100%"]} height={["100%"]} position={["relative"]}>
                  <Box
                    w={["70px"]}
                    h={["70px"]}
                    backgroundColor={["brand.50"]}
                    borderRadius={["50%"]}
                    borderWidth={["7px"]}
                    flexShrink={[0]}
                  />
                  <Box
                    w={["10px"]}
                    h={["100%"]}
                    backgroundColor={["brand.50"]}
                  />
                </VStack>
              </GridItem>
              <GridItem colSpan={5}>
                <VStack
                  w={["100%"]}
                  h={["100%"]}
                  spacing={["32px"]}
                  alignItems={["flex-start"]}
                >
                  <VStack w={["100%"]} alignItems={["flex-start"]}>
                    <Text
                      fontSize={["3xl"]}
                      fontWeight={["bold"]}
                      lineHeight={["1.1em"]}
                    >
                      Pt. InArray Indonesia
                    </Text>
                    <Text fontSize={["2xl"]} lineHeight={["1.1em"]}>
                      Sebagai frontend developer
                    </Text>
                    <Text fontSize={["xl"]} lineHeight={["1.1em"]}>
                      Mar 20, 2020 - Des 04, 2029
                    </Text>
                  </VStack>
                  <VStack w={["100%"]} alignItems={["flex-start"]}>
                    <Text fontSize={["xl"]} lineHeight={["1.1em"]}>
                      Hello world Hello world Hello world Hello world Hello
                      world Hello world Hello world Hello world Hello world
                      Hello world Hello world Hello world Hello world Hello
                      world Hello world Hello world Hello world Hello world
                      Hello world Hello world Hello world Hello world Hello
                      world Hello world Hello world Hello world Hello world
                      Hello world Hello world Hello world
                    </Text>
                  </VStack>
                </VStack>
              </GridItem>
            </Grid>
          </VStack>

          <VStack
            w={["100%"]}
            height={["100%"]}
            alignItems={["flex-start"]}
            spacing={["50px"]}
          >
            <VStack w={["100%"]} height={["100%"]} alignItems={["flex-start"]}>
              <Text
                as="h1"
                color={["brand.50"]}
                fontWeight={["bold"]}
                fontSize={["5xl"]}
                lineHeight={["1.2em"]}
              >
                Riwayat projects yang pernah saya kerjakan
              </Text>
              <Text fontSize={["3xl"]}>
                Berikut merupakan projek-projek web apps yang{" "}
                <Box as="span" fontWeight={["bold"]} color="brand.50">
                  telah
                </Box>{" "}
                saya{" "}
                <Box as="span" fontWeight={["bold"]} color="brand.50">
                  kerjakan
                </Box>{" "}
                baik projek web individu{" "}
                <Box as="span" fontWeight={["bold"]} color="brand.50">
                  maupun
                </Box>{" "}
                projek pekerjaan saya
              </Text>

              {/* Action */}
              <HStack
                marginTop={["20px!important"]}
                w={["100%"]}
                h={["100%"]}
                alignItems={["flex-start"]}
              >
                <Button
                  variant={'brand'}
                >
                  Pribadi
                </Button>
                <Button
                  variant={'brandOutline'}
                >
                  Pekerjaan
                </Button>
              </HStack>
            </VStack>

            <Grid
              w={["100%"]}
              h={["100%"]}
              templateColumns={["repeat(3, 1fr)"]}
              gap={["60px 30px"]}
            >
              <GridItem>
                <Card w={["100%"]} cursor="pointer" onClick={onOpen}>
                  <CardBody>
                    <ChakraImage
                      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                    <Stack mt="6" spacing="3">
                      <Heading size={["xl"]} color={["brand.50"]}>
                        Living room Sofa
                      </Heading>
                      <Text fontSize={["lg"]}>
                        This sofa is perfect for modern tropical spaces, baroque
                        inspired spaces, earthy toned spaces and for people who
                        love a chic design with a sprinkle of vintage design.
                      </Text>
                    </Stack>
                  </CardBody>
                  <CardFooter>
                    <HStack
                      w={["100%"]}
                      height={["100%"]}
                      justifyContent={["flex-start"]}
                      flexWrap={["wrap"]}
                      spacing={[0]}
                    >
                      <Text
                        fontWeight={["bold"]}
                        color="brand.50"
                        fontSize={["md"]}
                      >
                        #SELF IMPROVEMENT #BISNIS #SELF IMPROVEMENT #BISNIS
                      </Text>
                    </HStack>
                  </CardFooter>
                </Card>
              </GridItem>
            </Grid>
          </VStack>
        </VStack>
      </VStack>

      <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="brand.50">Personal Project</ModalHeader>
          <ModalCloseButton color="brand.50" />
          <ModalBody>
            <VStack
              w={["100%"]}
              h={["100%"]}
              alignItems={["flex-start"]}
              spacing={["30px"]}
            >
              <Box w={["100%"]} h={["250px"]} bgColor={["brand.500"]} />
              <VStack w={["100%"]} h={["100%"]} alignItems={["flex-start"]}>
                <Heading
                  fontSize={["3xl"]}
                  fontWeight={["bold"]}
                  color={["brand.50"]}
                >
                  Nama Project
                </Heading>
                <Text title="proses pengembangan" fontSize={["xl"]}>
                  Des 04, 2022 - Jan 01, 2023
                </Text>
                <Text title="proses pengembangan" fontSize={["xl"]}>
                  Personal Project
                </Text>
                <Text title="proses pengembangan" fontSize={["xl"]}>
                  Node js, Sequelize
                </Text>
              </VStack>

              <Text fontSize={["xl"]}>
                Lorem Lorem lorem lorem lorem lorem Lorem Lorem lorem lorem
                lorem lorem Lorem Lorem lorem lorem lorem lorem Lorem Lorem
                lorem lorem lorem lorem Lorem Lorem lorem lorem lorem lorem
                Lorem Lorem lorem lorem lorem lorem Lorem Lorem lorem lorem
                lorem lorem Lorem Lorem lorem lorem lorem lorem Lorem Lorem
                lorem lorem lorem lorem Lorem Lorem lorem lorem lorem lorem
              </Text>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button
              bgColor={["brand.50"]}
              cursor={["pointer"]}
              color={["white"]}
              padding={["10px"]}
              _hover={{ backgroundColor: "brand.600" }}
              _active={{ backgroundColor: "brand.700" }}
              onClick={onClose}
            >
              Tutup
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
