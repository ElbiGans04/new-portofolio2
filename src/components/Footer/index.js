import { Container, HStack, Text, Box } from "@chakra-ui/react";
import style from "@/src/constants/styles";
import { BsSuitHeartFill } from "react-icons/bs";
export default function Footer() {
  return (
    <HStack
      w={["100%"]}
      h={["100%"]}
      justifyContent={["center"]}
      backgroundColor="bgLayer1" color="textLayer1"
      borderTopColor={["borderLayer1"]}
      borderTopWidth={["1px"]}
      padding={["30px"]}
    >
      <Container  maxW={style.maxWidthContent}>
        <HStack justifyContent="center" align={["center"]} color={["brand.50"]} spacing={['7px']}>
          <Text color="textLayer1" fontSize={["xl"]}>
            Made With
          </Text>
          <BsSuitHeartFill />
          <Text color="textLayer1" fontSize={["xl"]}>
            By{" "}
            <Box as="span" fontWeight={["bold"]} color={["brand.50"]}>
              Elbi
            </Box>
          </Text>
        </HStack>
      </Container>
    </HStack>
  );
}
