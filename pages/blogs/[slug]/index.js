import Berlangganan from "@/src/components/Berlangganan";
import { breakpoints } from "@/src/config/chakra.config";
import getFormatDateArticle from "@/src/helpers/getFormatDateArticle";
import getHtmlFromMd from "@/src/helpers/getHtmlFromMd";
import getReadingTime from "@/src/helpers/getReadingTime";
import getTextFromMd from "@/src/helpers/getTextFromMd";
import { getArticles } from "@/src/services/articles";
import { getTags } from "@/src/services/tags";
import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Link,
  Stack,
  Text,
  useMediaQuery,
  VStack,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import Head from "next/head";
import NextImage from "next/image";
import NextLink from "next/link";
import {
  // AiOutlineComment,
  // AiOutlineHeart,
  AiOutlineLink,
} from "react-icons/ai";
import urls from "@/src/constants/url";
import slugCssModule from "@/src/styles/blogs/slug.module.scss";
import { useState } from "react";
import TagBlog from "@/src/components/Tags";
import ModalImage from "@/src/components/Modal/modalImage";

export async function getStaticProps({ params }) {
  const { data } = await getArticles(["*"], true, [
    {
      conditional: ["slug", "$eq"],
      value: params.slug,
    },
  ]);

  if (!Array.isArray(data) || (Array.isArray(data) && data.length === 0)) {
    return {
      notFound: true,
    };
  }

  const { data: data2 } = await getArticles(
    ["*"],
    true,
    data[0].attributes.tags.data.map((candidate) => ({
      conditional: ["tags", "id", "$in"],
      value: candidate.id,
    }))
  );

  const { data: data3 } = await getTags(
    ["*"],
    false,
    data[0].attributes.tags.data.map((candidate) => ({
      conditional: ["id", "$notIn"],
      value: candidate.id,
    }))
  );

  return {
    props: {
      data: data[0],
      plainText: data[0] && getTextFromMd(data[0].attributes.isi).value,
      htmlConverter: data[0] && getHtmlFromMd(data[0].attributes.isi).value,
      articlesLainnya:
        Array.isArray(data2) &&
        data2
          .filter((candidate) => candidate.attributes.slug !== params.slug)
          .map((value) => ({
            ...value,
            attributes: {
              ...value.attributes,
              plainText: getTextFromMd(value.attributes.isi).value,
            },
          })),
      tagsLainnya: data3,
    },
  };
}

export async function getStaticPaths() {
  const { data } = await getArticles(["id"], false);

  return {
    paths: Array.isArray(data)
      ? data.map((candidate) => ({
          params: { slug: candidate.id + "" },
        }))
      : [],
    fallback: "blocking",
  };
}

export default function Blog({
  data,
  plainText,
  htmlConverter,
  articlesLainnya,
  tagsLainnya,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLg] = useMediaQuery(`(min-width: ${breakpoints.lg})`, {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  });

  return (
    <>
      <Head>
        <title>{data.attributes.judul}</title>
        <meta name="description" content={data.attributes.deskripsi} />
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
              direction={["column", "row", "column"]}
              spacing={["16px", null, null, "48px"]}
            >
              {/* <Tooltip hasArrow label="Sukai Blog" bg="brand.50" color="white">
                <Button
                  variant="brandOutline"
                  w={["100%", null, null, "inherit"]}
                >
                  <AiOutlineHeart style={!isLg && { marginRight: "10px" }} />{" "}
                  {!isLg && "Suka"}
                </Button>
              </Tooltip>
              <Tooltip
                hasArrow
                label="Tambahkan Komentar"
                bg="brand.50"
                color="white"
              >
                <Button
                  variant="brandOutline"
                  w={["100%", null, null, "inherit"]}
                >
                  <AiOutlineComment style={!isLg && { marginRight: "10px" }} />{" "}
                  {!isLg && "Komentar"}
                </Button>
              </Tooltip> */}
              <Salin />
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
              <Box
                w={["100%"]}
                height={["200px", "350px"]}
                backgroundColor={["#D9D9D9"]}
                flexShrink={[0]}
                position={["relative"]}
                onClick={onOpen}
                cursor={'pointer'}
              >
                {data &&
                  data.attributes.images &&
                  Array.isArray(data.attributes.images.data) &&
                  data.attributes.images.data[0] && (
                    <NextImage
                      src={`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${data.attributes.images.data[0].attributes.formats.large.url}`}
                      fill
                      alt={data.attributes.judul}
                      sizes={`90vw, (min-width: ${breakpoints.lg}) 50vw`}
                      priority
                    />
                  )}
              </Box>

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
                    {data && data.attributes.judul}
                  </Text>

                  <Text fontSize={["md", "lg", "xl"]}>
                    {getFormatDateArticle(
                      (data && data.attributes.createdAt) || new Date()
                    )}{" "}
                    - {getReadingTime(plainText || "")} Menit
                  </Text>
                  <HStack
                    w={["100%"]}
                    height={["100%"]}
                    alignItems={["flex-start"]}
                  >
                    {Array.isArray(data) &&
                      data.attributes.tags.data.map(({ id, attributes }) => {
                        return (
                          <TagBlog
                            link={`${urls.blogs.url}?${urls.blogs.params.tag}=${id}`}
                            key={id}
                          >
                            #{attributes.judul}
                          </TagBlog>
                        );
                      })}
                  </HStack>
                </VStack>
                <VStack w={["100%"]} alignItems={["flex-start"]}>
                  {htmlConverter && (
                    <Box
                      dangerouslySetInnerHTML={{ __html: htmlConverter }}
                      as="div"
                      fontSize={["lg", "xl", "2xl"]}
                      className={slugCssModule.content}
                    />
                  )}
                </VStack>
              </VStack>

              {isLg && <Berlangganan />}
            </VStack>
          </GridItem>

          {!isLg && (
            <GridItem height={["100%"]} order={[3]}>
              <Berlangganan />
            </GridItem>
          )}

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
                {Array.isArray(articlesLainnya) &&
                  articlesLainnya.length > 0 && (
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
                        {articlesLainnya
                          .slice(0, 3)
                          .map(({ id, attributes }) => {
                            return (
                              <VStack
                                w={["100%"]}
                                alignItems={["flex-start"]}
                                key={id}
                              >
                                <Link
                                  fontSize={["lg", "xl", "2xl"]}
                                  fontWeight={["bold"]}
                                  as={NextLink}
                                  href={`${urls.blogs.url}/${attributes.slug}`}
                                >
                                  {attributes.judul}
                                </Link>
                                <Text fontSize={["md", "lg", "xl"]}>
                                  {getFormatDateArticle(attributes.createdAt)} -
                                  {getReadingTime(attributes.plainText)} Menit
                                </Text>
                                <HStack
                                  w={["100%"]}
                                  height={["100%"]}
                                  alignItems={["flex-start"]}
                                >
                                  {attributes.tags.data.map(
                                    ({ id, attributes }) => {
                                      return (
                                        <Link
                                          as={NextLink}
                                          key={id}
                                          href={`${urls.blogs.url}?${urls.blogs.params.tag}=${id}`}
                                          fontWeight={["bold"]}
                                          color="brand.50"
                                          fontSize={["md", "lg", "xl"]}
                                        >
                                          #{attributes.judul}
                                        </Link>
                                      );
                                    }
                                  )}
                                </HStack>
                              </VStack>
                            );
                          })}
                      </VStack>
                    </VStack>
                  )}

                {/* Tags */}
                {Array.isArray(tagsLainnya) && tagsLainnya.length > 0 && (
                  <VStack
                    w={["100%"]}
                    height={["max-content"]}
                    alignItems={["flex-start"]}
                    spacing={["24px", "32px"]}
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
                      {tagsLainnya.slice(0, 5).map(({ id, attributes }) => {
                        return (
                          <Link
                            as={NextLink}
                            href={`${urls.blogs.url}?${urls.blogs.params.tag}=${id}`}
                            fontWeight={["bold"]}
                            color="brand.50"
                            fontSize={["md", "lg", "xl"]}
                            key={id}
                          >
                            #{attributes.judul}
                          </Link>
                        );
                      })}
                    </VStack>
                  </VStack>
                )}
              </VStack>
              {/* End Of Card */}
            </VStack>
          </GridItem>
        </Grid>

        {data && (
          <ModalImage
            judul={data.attributes.judul}
            url={
              data.attributes.images.data[0].attributes.formats
                .large.url
            }
            isOpen={isOpen}
            onClose={onClose}
          />
        )}
      </VStack>
    </>
  );
}

function Salin() {
  const [isLg] = useMediaQuery(`(min-width: ${breakpoints.lg})`, {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  });
  const [state, setState] = useState({
    isOpen: undefined,
    message: "Salin Tautan",
  });
  return (
    <Tooltip
      hasArrow
      label={state.message}
      bg="brand.50"
      color="white"
      isOpen={state.isOpen}
    >
      <Button
        variant="brandOutline"
        w={["100%", null, null, "inherit"]}
        onBlur={() => setState({ isOpen: undefined, message: "Salin Tautan" })}
        onClick={() => {
          navigator.permissions
            .query({ name: "clipboard-write" })
            .then((result) => {
              if (result.state === "granted" || result.state === "prompt") {
                navigator.clipboard
                  .writeText(window && window.location.href)
                  .then(() =>
                    setState({
                      isOpen: true,
                      message: "Berhasil Menyalin Tautan",
                    })
                  )
                  .catch(() =>
                    setState({ isOpen: true, message: "Gagal Menyalin Tautan" })
                  );
              }
            });
        }}
      >
        <AiOutlineLink style={!isLg && { marginRight: "10px" }} />{" "}
        {!isLg && "Salin"}
      </Button>
    </Tooltip>
  );
}
