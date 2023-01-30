import {
  Container,
  Flex,
  HStack,
  Stack,
  Switch,
  Text,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import style from "@/src/constants/styles";
import {BsFillMoonFill, BsSunFill} from 'react-icons/bs'
export default function Navbar() {
  const router = useRouter();

  return (
    <HStack
      w={["100%"]}
      h={["100%"]}
      justifyContent={["center"]}
      position={["sticky"]}
      top={["0"]}
      left={["0"]}
      right="0"
      bottom="0"
      backgroundColor={["white"]}
      borderBottomColor={["rgba(0,0,0, 0.2)"]}
      borderBottomWidth={["1px"]}
      zIndex={style.navbarZIndex}
      paddingY={["16px"]}
    >
      <Container maxW={style.maxWidthContent}>
        <Flex justifyContent="space-between" align={["center"]}>
          <Link
            color="brand.50"
            fontSize={["5xl"]}
            fontWeight={["bold"]}
            href="/"
            as={NextLink}
          >
            Elbi
          </Link>
          <Stack direction={["row"]} spacing={["32px"]} alignItems={["center"]}>
            <Link
              as={NextLink}
              href="/"
              fontWeight={["semibold"]}
              color={router.pathname === "/" ? "brand.50" : "black"}
              fontSize={["2xl"]}
            >
              Home
            </Link>
            <Link
              as={NextLink}
              href="/blogs"
              fontWeight={["semibold"]}
              color={router.pathname === "/blogs" ? "brand.50" : "black"}
              fontSize={["2xl"]}
            >
              Blog
            </Link>
            <HStack
              alignItems={["center"]}
              justifyContent={["space-between"]}
              spacing={["10px"]}
            >
              <BsSunFill />
              <Switch colorScheme={"brand"} />
              <BsFillMoonFill />
            </HStack>
          </Stack>
        </Flex>
      </Container>
    </HStack>
  );
}
