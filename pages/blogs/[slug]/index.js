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
import {
  AiOutlineLink,
  AiOutlineComment,
  AiOutlineHeart,
} from "react-icons/ai";
import { getArticles } from "@/src/services/articles";
import getFormatDateArticle from "@/src/helpers/getFormatDateArticle";
import NextImage from "next/image";
import remarkParse from "remark-parse";
import { unified } from "unified";
import remarkReText from "remark-retext";
import retextEnglish from "retext-english";
import retextStringify from "retext-stringify";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import getReadingTime from "@/src/helpers/getReadingTime";
import { getTags } from "@/src/services/tags";

export async function getStaticProps({ params }) {
  const { data } = await getArticles(["*"], true, [
    {
      conditional: ["id", "$eq"],
      value: params.slug,
    },
  ]);

  const { data: data2 } = await getArticles(["*"], true, [
    {
      conditional: ["id", "$ne"],
      value: params.slug,
    },
  ]);

  const { data: data3 } = await getTags(
    ["*"],
    false,
    data[0].attributes.tags.data.map((candidate) => ({
      conditional: ["id", "$notIn"],
      value: candidate.id,
    }))
  );

  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify);
  const processor2 = unified()
    .use(remarkParse)
    .use(remarkReText, unified().use(retextEnglish), {
      // ignore: ["heading"],
    })
    .use(retextStringify);

  return {
    props: {
      data,
      plainText: processor2.processSync(data[0].attributes.isi).value,
      htmlConverter: processor.processSync(data[0].attributes.isi).value,
      articlesLainnya: data2.map(value => ({
        ...value,
        attributes: {
          ...value.attributes,
          plainText: processor2.processSync(value.attributes.isi).value
        }
      })),
      tagsLainnya: data3,
    },
  };
}

export async function getStaticPaths() {
  const { data } = await getArticles(["id"], false);

  return {
    paths: data.map((candidate) => ({
      params: { slug: candidate.id + "" },
    })),
    fallback: true,
  };
}

export default function Blog({
  data,
  plainText,
  htmlConverter,
  articlesLainnya,
  tagsLainnya,
}) {
  const [isLg] = useMediaQuery(`(min-width: ${breakpoints.lg})`, {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  });

  return (
    <>
      <Head>
        <title>{data[0].attributes.judul}</title>
        <meta name="description" content={data[0].attributes.deskripsi} />
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
              <Button
                variant="brandOutline"
                w={["100%", null, null, "inherit"]}
              >
                <AiOutlineHeart style={!isLg && { marginRight: "10px" }} />{" "}
                {!isLg && "Suka"}
              </Button>
              <Button
                variant="brandOutline"
                w={["100%", null, null, "inherit"]}
              >
                <AiOutlineComment style={!isLg && { marginRight: "10px" }} />{" "}
                {!isLg && "Komentar"}
              </Button>
              <Button
                variant="brandOutline"
                w={["100%", null, null, "inherit"]}
              >
                <AiOutlineLink style={!isLg && { marginRight: "10px" }} />{" "}
                {!isLg && "Share"}
              </Button>
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
                  position={["relative"]}
                >
                  {data[0].attributes.images &&
                    Array.isArray(data[0].attributes.images.data) &&
                    data[0].attributes.images.data[0] && (
                      <NextImage
                        src={`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${data[0].attributes.images.data[0].attributes.formats.large.url}`}
                        fill
                        alt={data[0].attributes.judul}
                      />
                    )}
                </Box>
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
                    {data[0].attributes.judul}
                  </Text>

                  <Text fontSize={["md", "lg", "xl"]}>
                    {getFormatDateArticle(data[0].attributes.createdAt)} -{" "}
                    {getReadingTime(plainText)} Menit
                  </Text>
                  <HStack
                    w={["100%"]}
                    height={["100%"]}
                    alignItems={["flex-start"]}
                  >
                    {data[0].attributes.tags.data.map(({ id, attributes }) => {
                      return (
                        <Link
                          as={NextLink}
                          href={`/blogs?tag=${id}`}
                          fontWeight={["bold"]}
                          color="brand.50"
                          fontSize={["md", "lg", "xl"]}
                          key={id}
                        >
                          #{attributes.title}
                        </Link>
                      );
                    })}
                  </HStack>
                </VStack>
                <VStack w={["100%"]} alignItems={["flex-start"]}>
                  <Box
                    dangerouslySetInnerHTML={{ __html: htmlConverter }}
                    as="div"
                    fontSize={["lg", "xl", "2xl"]}
                  />

                  {/* <Text fontSize={["2xl", "3xl", "4xl"]} fontWeight={["bold"]}>
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
                  </Text> */}
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
                                  href={`/blogs/${id}`}
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
                                          href={`/blogs?tag=${id}`}
                                          fontWeight={["bold"]}
                                          color="brand.50"
                                          fontSize={["md", "lg", "xl"]}
                                        >
                                          #{attributes.title}
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
                            href={`/blogs?tag=${id}`}
                            fontWeight={["bold"]}
                            color="brand.50"
                            fontSize={["md", "lg", "xl"]}
                            key={id}
                          >
                            #{attributes.title}
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
      </VStack>
    </>
  );
}
