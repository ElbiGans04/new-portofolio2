import {
  Container,
  Flex,
  HStack,
  Stack,
  Switch,
  Text,
  Link,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <HStack
      w={["100%"]}
      h={["100%"]}
      justifyContent={["center"]}
      backgroundColor={["white"]}
      borderTopColor={["rgba(0,0,0, 0.2)"]}
      borderTopWidth={["1px"]}
      marginTop={['50px']}
      padding={['20px']}
    >
      <Container paddingY={["16px"]} maxW="container.xl">
        <Flex justifyContent="center" align={["center"]}>
          <Text fontSize={['xl']}>Build with ❤ By Elbi</Text>
        </Flex>
      </Container>
    </HStack>
  );
}
