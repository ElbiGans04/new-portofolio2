import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Grid,
  GridItem,
  Heading,
  HStack,
  Link,
  List,
  ListIcon,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  VStack,
  useMediaQuery,
  useColorModeValue,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineUp,
} from "react-icons/ai";
import { breakpoints } from "@/src/config/chakra.config";
import { getHome } from "@/src/services/home";
import getHtmlFromMd from "@/src/helpers/getHtmlFromMd";
import indexModuleScss from "@/src/styles/index.module.scss";
import { getJobs } from "@/src/services/jobs";
import React, { useMemo, useReducer, useEffect, useState } from "react";
import getFormatDateArticle from "@/src/helpers/getFormatDateArticle";
import { getProjects } from "@/src/services/projects";
import { getProjectTypes } from "@/src/services/projectTypes";
import { getProjectPlaform } from "@/src/services/projectPlatform";
import ModalImage from "@/src/components/Modal/modalImage";
import { motion, isValidMotionProp } from "framer-motion";
import ProfileImage from "@/src/assets/images/img.jpg";

export async function getStaticProps() {
  const { data } = await getHome();
  const { data: dataJobs } = await getJobs();
  const { data: dataProjects } = await getProjects();
  const { data: dataProjectTypes } = await getProjectTypes();
  const { data: dataProjectPlatform } = await getProjectPlaform();

  return {
    props: {
      data: !data
        ? null
        : {
            ...data,
            attributes: {
              ...data.attributes,
              tentangSaya: getHtmlFromMd(data.attributes.tentangSaya).value,
              kontak: getHtmlFromMd(data.attributes.kontak).value,
              projek: getHtmlFromMd(data.attributes.projek).value,
            },
          },
      dataJobs: [
        ...dataJobs
          ?.filter((candidate) => candidate?.attributes?.sampai)
          ?.sort(
            (a, b) => new Date(a.attributes.dari) - new Date(b.attributes.dari)
          ),
        ...dataJobs
          ?.filter((candidate) => !candidate?.attributes?.sampai)
          ?.sort(
            (a, b) => new Date(a.attributes.dari) - new Date(b.attributes.dari)
          ),
      ],
      dataProjects,
      dataProjectTypes,
      dataProjectPlatform,
    },
  };
}

const initialFiltersState = {
  selectedDataId: null,
  filterProjectActive: "ALL",
  filterProjectPlatformActive: "ALL",
};

function MainReducer(state, action) {
  switch (action.type) {
    case "filter-button-change": {
      return {
        ...state,
        filterProjectActive: action.payload.data,
      };
    }
    case "filter-platform-button-change": {
      return {
        ...state,
        filterProjectPlatformActive: action.payload.data,
      };
    }
    case "select-project-change": {
      return {
        ...state,
        selectedDataId: action.payload.data,
      };
    }
    default: {
      return state;
    }
  }
}

export default function Home({
  data,
  dataJobs,
  dataProjects,
  dataProjectTypes,
  dataProjectPlatform,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();
  const [isLg] = useMediaQuery(`(min-width: ${breakpoints.lg})`, {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  });
  const [state, dispatch] = useReducer(MainReducer, initialFiltersState);

  const filteredData = useMemo(() => {
    if (!Array.isArray(dataProjects)) return [];
    return dataProjects
      .filter(({ attributes }) => {
        if (state.filterProjectActive === "ALL") return true;
        if (!attributes?.project_type?.data) return false;

        return (
          parseInt(state.filterProjectActive) ===
          parseInt(attributes.project_type.data.id)
        );
      })
      .filter(({ attributes }) => {
        if (state.filterProjectPlatformActive === "ALL") return true;
        if (!attributes?.project_platform?.data) return false;

        return (
          parseInt(state.filterProjectPlatformActive) ===
          parseInt(attributes.project_platform.data.id)
        );
      });
  }, [
    state.filterProjectActive,
    state.filterProjectPlatformActive,
    dataProjects,
  ]);

  const filteredDataModal = useMemo(() => {
    if (!Array.isArray(dataProjects)) return null;
    return dataProjects.find(({ id }) => {
      return parseInt(state.selectedDataId) === parseInt(id);
    });
  }, [state.selectedDataId, dataProjects]);

  const isImageHaveToShow = useMemo(
    () => process.env.NEXT_PUBLIC_EXPORT_MODE != "false",
    []
  );

  const cardItem = useColorModeValue(
    {
      hover: "blackAlpha.50",
      active: "blackAlpha.100",
      borderColor: "gray.100",
    },
    {
      hover: "bgLayer2",
      active: "bgLayer1",
      borderColor: "bgLayer3",
    }
  );

  return (
    <>
      <Head>
        <title>Halo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VStack
        w={["100%"]}
        height={["100%"]}
        spacing={["50px", "100px"]}
        paddingX={[0, null, null, null, "48px", "0"]}
        backgroundColor="bgLayer2"
        color="textLayer1"
        paddingBottom={["100px"]}
        overflowX="hidden"
      >
        {data && (
          <Section>
            <Grid
              w={["100%"]}
              height={["100%"]}
              gridTemplateColumns={["1fr", "repeat(2, 1fr)"]}
              paddingY={["64px"]}
              gap={["30px"]}
              alignItems={["center"]}
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
                    fontSize={["6xl", "8xl", "9xl"]}
                    as="h1"
                    fontWeight={["bold"]}
                    lineHeight={["1em"]}
                  >
                    {data && data.attributes.haloHeader}
                  </Text>
                  <Text fontSize={["xl", "3xl", "4xl"]}>
                    Im <Box as="span">{data && data.attributes.nama}</Box>
                    <br />
                    Im a{" "}
                    <Box
                      as="span"
                      color={["brand.50"]}
                      fontSize={["2xl", "4xl", "5xl"]}
                      fontWeight={["bold"]}
                      whiteSpace={["nowrap"]}
                    >
                      {data && data.attributes.job}
                    </Box>
                  </Text>
                </VStack>
              </GridItem>

              {isLg && !!data && (
                <GridItem>
                  <VStack w={["100%"]} height={["100%"]} spacing={["16px"]}>
                    <Box
                      w={["0", null, null, "400px", "450px"]}
                      height={["0", null, null, "400px", "450px"]}
                      position={["relative"]}
                      borderWidth={["5px", "15px"]}
                      borderColor={["brand.50"]}
                      borderRadius={["50%"]}
                      overflow={["hidden"]}
                    >
                      <Image
                        src={
                          !isImageHaveToShow
                            ? ProfileImage
                            : `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${data?.attributes?.profile?.data?.attributes?.url}`
                        }
                        alt="profile-rhafael"
                        fill
                        sizes={`(min-width: ${breakpoints.lg}) 400px, (min-width: ${breakpoints.xl}) 450px`}
                        priority
                      />
                    </Box>
                  </VStack>
                </GridItem>
              )}
            </Grid>
          </Section>
        )}

        {data && (
          <Section title={data.attributes.tentangSayaHeader || "Tentang Saya"}>
            <Box
              fontSize={["lg", "xl", "2xl", "3xl"]}
              dangerouslySetInnerHTML={{ __html: data.attributes.tentangSaya }}
              className={indexModuleScss.content}
            />
          </Section>
        )}

        {data && (
          <Section title={data.attributes.kontakHeader || "Kontak Saya"}>
            <VStack
              w={["100%"]}
              height={["100%"]}
              alignItems={["flex-start"]}
              spacing={["20px"]}
            >
              {data && (
                <Box
                  fontSize={["lg", "xl", "2xl", "3xl"]}
                  dangerouslySetInnerHTML={{ __html: data.attributes.kontak }}
                  className={indexModuleScss.content}
                />
              )}
              <List spacing={3}>
                <ListItem>
                  <Link
                    href={data.attributes.github}
                    fontSize={["lg", "xl", "2xl", "3xl"]}
                    verticalAlign={["middle"]}
                    textDecoration={"underline"}
                    _hover={{
                      textDecoration: "none",
                    }}
                  >
                    <ListIcon as={AiFillGithub} />
                    Github
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href={"mailto:" + data.attributes.email}
                    fontSize={["lg", "xl", "2xl", "3xl"]}
                    verticalAlign={["middle"]}
                    textDecoration={"underline"}
                    _hover={{
                      textDecoration: "none",
                    }}
                  >
                    <ListIcon as={AiFillMail} />
                    Email
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href={data.attributes.linkedin}
                    fontSize={["lg", "xl", "2xl", "3xl"]}
                    verticalAlign={["middle"]}
                    textDecoration={"underline"}
                    _hover={{
                      textDecoration: "none",
                    }}
                  >
                    <ListIcon as={AiFillLinkedin} />
                    Linkedin
                  </Link>
                </ListItem>
              </List>
            </VStack>
          </Section>
        )}

        {data && Array.isArray(dataJobs) && (
          <Section
            title={
              data.attributes.riwayatPekerjaanHeader || "Riwayat Pekerjaan"
            }
            containerProps={{
              spacing: ["32px"],
            }}
          >
            <Grid
              w={["100%"]}
              height={["100%"]}
              gridTemplateColumns={["repeat(6, 1fr)"]}
              gap={["50px 0"]}
            >
              {dataJobs.map(({ id, attributes }, index) => {
                return (
                  <RiwayatPekerjaanItem
                    key={id}
                    attributes={attributes}
                    isLg={isLg}
                    index={index}
                  ></RiwayatPekerjaanItem>
                );
              })}
            </Grid>
          </Section>
        )}

        <VStack
          w={["100%"]}
          height={["100%"]}
          alignItems={["flex-start"]}
          spacing={["50px"]}
        >
          {data && Array.isArray(dataJobs) && (
            <Section title={data.attributes.riwayatProjek || "Riwayat Projek"}>
              <Box
                fontSize={["lg", "xl", "2xl", "3xl"]}
                dangerouslySetInnerHTML={{ __html: data.attributes.projek }}
                className={indexModuleScss.content}
              />
              {/* Action */}
              <HStack
                marginTop={["20px!important"]}
                w={["100%"]}
                h={["100%"]}
                alignItems={["flex-start"]}
              >
                <Button
                  onClick={() =>
                    dispatch({
                      type: "filter-button-change",
                      payload: { data: "ALL" },
                    })
                  }
                  variant={
                    state.filterProjectActive === "ALL"
                      ? "brand"
                      : "brandOutline"
                  }
                >
                  All
                </Button>
                {Array.isArray(dataProjectTypes) &&
                  dataProjectTypes.map(({ id, attributes }) => {
                    return (
                      <Button
                        key={id}
                        onClick={() =>
                          dispatch({
                            type: "filter-button-change",
                            payload: { data: id },
                          })
                        }
                        variant={
                          state.filterProjectActive === id
                            ? "brand"
                            : "brandOutline"
                        }
                      >
                        {attributes.judul}
                      </Button>
                    );
                  })}
              </HStack>
              {/* Action */}
              <HStack
                marginTop={["20px!important"]}
                w={["100%"]}
                h={["100%"]}
                alignItems={["flex-start"]}
              >
                <Button
                  onClick={() =>
                    dispatch({
                      type: "filter-platform-button-change",
                      payload: { data: "ALL" },
                    })
                  }
                  variant={
                    state.filterProjectPlatformActive === "ALL"
                      ? "brand"
                      : "brandOutline"
                  }
                >
                  All
                </Button>
                {Array.isArray(dataProjectPlatform) &&
                  dataProjectPlatform.map(({ id, attributes }) => {
                    return (
                      <Button
                        key={id}
                        onClick={() =>
                          dispatch({
                            type: "filter-platform-button-change",
                            payload: { data: id },
                          })
                        }
                        variant={
                          state.filterProjectPlatformActive === id
                            ? "brand"
                            : "brandOutline"
                        }
                      >
                        {attributes.platform_name}
                      </Button>
                    );
                  })}
              </HStack>
            </Section>
          )}

          {/* Data Portfolio List Item */}
          {Array.isArray(filteredData) && filteredData.length > 0 && (
            <Section>
              <Grid
                w={["100%"]}
                h={["100%"]}
                templateColumns={[
                  "repeat(1, 1fr)",
                  null,
                  "repeat(2, 1fr)",
                  null,
                  "repeat(3, 1fr)",
                ]}
                gap={["60px 30px"]}
              >
                {filteredData.map(({ id, attributes }) => {
                  return (
                    <GridItem key={id}>
                      <Card
                        shadow="xl"
                        bgColor={["bgLayer3"]}
                        _hover={{
                          backgroundColor: cardItem.hover,
                        }}
                        _active={{
                          backgroundColor: cardItem.active,
                        }}
                        borderColor={cardItem.borderColor}
                        borderWidth={["1px"]}
                        w={["100%"]}
                        h={["100%"]}
                        cursor="pointer"
                        onClick={() => {
                          dispatch({
                            type: "select-project-change",
                            payload: { data: id },
                          });
                          onOpen();
                        }}
                      >
                        <CardBody>
                          <Stack h={["100%"]} mt="6" spacing="3">
                            <Heading size={["xl"]} color={["brand.50"]}>
                              {attributes.judul}
                            </Heading>
                            <Text fontSize={["lg"]} color={["textLayer1"]}>
                              {attributes.deskripsiSingkat}
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
                              {attributes.project_tools.data.map(
                                ({ id, attributes }) => {
                                  return (
                                    <React.Fragment key={id}>
                                      #{attributes.judul}{" "}
                                    </React.Fragment>
                                  );
                                }
                              )}
                            </Text>
                          </HStack>
                        </CardFooter>
                      </Card>
                    </GridItem>
                  );
                })}
              </Grid>
            </Section>
          )}
        </VStack>
      </VStack>

      <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="brand.50">
            Project{" "}
            {
              filteredDataModal?.attributes?.project_type?.data?.attributes
                ?.judul
            }
          </ModalHeader>
          <ModalCloseButton color="brand.50" />
          <ModalBody>
            <VStack
              w={["100%"]}
              h={["100%"]}
              alignItems={["flex-start"]}
              spacing={["30px"]}
            >
              {isImageHaveToShow && (
                <Box
                  w={["100%"]}
                  h={["250px"]}
                  bgColor={["brand.500"]}
                  position={["relative"]}
                  cursor={["pointer"]}
                  onClick={onOpen2}
                >
                  {filteredDataModal && (
                    <Image
                      src={`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${filteredDataModal?.attributes?.gambarProjek?.data?.attributes?.url}`}
                      alt={`Image-Of-Project-${
                        filteredDataModal &&
                        filteredDataModal?.attributes?.judul
                      }`}
                      fill
                      objectFit="contain"
                      sizes={`90vw, (min-width: ${breakpoints.sm}) 90vw, (min-width: ${breakpoints.md}) 80vw, (min-width: ${breakpoints.lg}) 60vw, (min-width: ${breakpoints.xl}) 40vw`}
                    />
                  )}
                </Box>
              )}
              <VStack w={["100%"]} h={["100%"]} alignItems={["flex-start"]}>
                <Heading
                  fontSize={["lg", "xl", "2xl", "3xl"]}
                  fontWeight={["bold"]}
                  color={["brand.50"]}
                >
                  {filteredDataModal && filteredDataModal?.attributes?.judul}
                </Heading>
                <Text title="proses pengembangan" fontSize={["xl"]}>
                  {getFormatDateArticle(
                    filteredDataModal &&
                      filteredDataModal?.attributes?.waktuMulaiDevelop
                  )}{" "}
                  -{" "}
                  {getFormatDateArticle(
                    filteredDataModal &&
                      filteredDataModal?.attributes?.waktuSelesaiDevelop
                  )}
                </Text>
                <Text title="proses pengembangan" fontSize={["xl"]}>
                  Project Type :{" "}
                  {filteredDataModal &&
                    filteredDataModal?.attributes?.project_type?.data &&
                    filteredDataModal?.attributes?.project_type?.data
                      ?.attributes?.judul}
                </Text>
                <Text title="proses pengembangan" fontSize={["xl"]}>
                  Technology Used :{" "}
                  {filteredDataModal &&
                    filteredDataModal?.attributes?.project_tools?.data?.map(
                      ({ id, attributes }, index, arrayy) => {
                        return (
                          <React.Fragment key={id}>
                            {attributes?.judul}
                            {index < arrayy.length - 1 && ", "}
                          </React.Fragment>
                        );
                      }
                    )}
                </Text>
              </VStack>

              <Text fontSize={["xl"]}>
                {filteredDataModal &&
                  filteredDataModal?.attributes?.deskripsiPanjang}
              </Text>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <HStack w={["100%"]} justifyContent={["flex-end"]}>
              {filteredDataModal && filteredDataModal?.attributes?.tautan && (
                <Button
                  variant="brand"
                  onClick={onClose}
                  as={Link}
                  href={filteredDataModal?.attributes?.tautan}
                >
                  Check out this app
                </Button>
              )}
              <Button variant="brandOutline" onClick={onClose}>
                Close
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {filteredDataModal && (
        <ModalImage
          judul={filteredDataModal?.attributes?.judul}
          url={
            filteredDataModal?.attributes?.gambarProjek?.data?.attributes?.url
          }
          isOpen={isOpen2}
          onClose={onClose2}
        />
      )}
    </>
  );
}

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const cardVariants = {
  offscreen: {
    opacity: 0,
    x: 500,
    transition: {
      duration: 1,
    },
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

function Section({ title = "", children, containerProps = {} }) {
  return (
    <ChakraBox
      w={["100%"]}
      h={["100%"]}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: "some" }}
    >
      <ChakraBox w={["100%"]} h={["100%"]} variants={cardVariants}>
        <VStack
          w={["100%"]}
          height={["100%"]}
          alignItems={["flex-start"]}
          {...containerProps}
        >
          {title && (
            <Heading
              as="h1"
              color={["brand.50"]}
              fontWeight={["bold"]}
              fontSize={["2xl", "3xl", "4xl", "5xl"]}
            >
              {title}
            </Heading>
          )}
          {children}
        </VStack>
      </ChakraBox>
    </ChakraBox>
  );
}

function RiwayatPekerjaanItem({ attributes, isLg, index }) {
  const [isOpen, setIsOpen] = useState(() => index == 0);
  const memo = useMemo(() => {
    if (!isLg) return true;
    return isOpen;
  }, [isOpen, isLg]);
  return (
    <React.Fragment>
      {isLg && (
        <GridItem>
          <VStack w={["100%"]} height={["100%"]}>
            <Box
              w={["70px"]}
              h={["70px"]}
              backgroundColor={["brand.50"]}
              borderRadius={["50%"]}
              borderWidth={["7px"]}
              flexShrink={[0]}
              display="flex"
              justifyContent={["center"]}
              alignItems={["center"]}
              fontSize={["md"]}
              color={["white"]}
              fontWeight={["bold"]}
              as="button"
              onClick={() => setIsOpen((state) => !state)}
              transform={[memo ? "" : "rotate(180deg)"]}
              transition={["0.3s"]}
              title={`${!memo ? "Open" : "Close"} Section`}
            >
              <AiOutlineUp />
            </Box>
            {memo && (
              <Box w={["10px"]} h={["100%"]} backgroundColor={["brand.50"]} />
            )}
          </VStack>
        </GridItem>
      )}
      <GridItem colSpan={[6, 5]}>
        <VStack
          w={["100%"]}
          h={["100%"]}
          spacing={["32px"]}
          alignItems={["flex-start"]}
        >
          <VStack w={["100%"]} alignItems={["flex-start"]}>
            {attributes.tautan ? (
              <Link
                fontSize={["xl", "2xl", "3xl"]}
                fontWeight={["bold"]}
                lineHeight={["1.1em"]}
                href={attributes.tautan}
                textDecoration={"underline"}
                _hover={{
                  textDecoration: "none",
                }}
              >
                {attributes.namaPerusahaan}
              </Link>
            ) : (
              <Text
                fontSize={["xl", "2xl", "3xl"]}
                fontWeight={["bold"]}
                lineHeight={["1.1em"]}
              >
                {attributes.namaPerusahaan}
              </Text>
            )}
            <Text fontSize={["lg", "xl", "2xl"]} lineHeight={["1.1em"]}>
              As {attributes.jabatan}
            </Text>
            {memo && (
              <Text fontSize={["lg", "xl", "xl"]} lineHeight={["1.1em"]}>
                {getFormatDateArticle(attributes.dari)} -{" "}
                {attributes.sampai
                  ? getFormatDateArticle(attributes.sampai)
                  : "Now"}
              </Text>
            )}
          </VStack>
          {memo && (
            <VStack w={["100%"]} alignItems={["flex-start"]}>
              <Text
                fontSize={["lg", "xl"]}
                lineHeight={["1.5em", null, null, null, "1.3em"]}
              >
                {attributes.deskripsi}
              </Text>
            </VStack>
          )}
        </VStack>
      </GridItem>
    </React.Fragment>
  );
}
