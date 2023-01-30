import { Container, Flex, HStack, Text, Box } from "@chakra-ui/react";
import style from "@/src/constants/styles";

export default function Footer() {
  return (
    <HStack
      w={["100%"]}
      h={["100%"]}
      justifyContent={["center"]}
      backgroundColor={["white"]}
      borderTopColor={["rgba(0,0,0, 0.2)"]}
      borderTopWidth={["1px"]}
      marginTop={["100px"]}
      padding={["30px"]}
    >
      <Container maxW={style.maxWidthContent}>
        <Flex justifyContent="center" align={["center"]}>
          <Text fontSize={["xl"]}>
            Build with ❤{" "} By{" "} 
            <Box as="span" fontWeight={["bold"]} color={["brand.50"]}>
              Elbi
            </Box>
          </Text>
        </Flex>
      </Container>
    </HStack>
  );
}
