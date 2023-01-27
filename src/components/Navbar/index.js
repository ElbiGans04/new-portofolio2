import { Container, Flex, HStack, Stack, Switch, Text } from "@chakra-ui/react";

export default function Navbar() {
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
      zIndex={["100"]}
    >
      <Container paddingY={["16px"]} maxW="container.xl">
        <Flex justifyContent="space-between" align={["center"]}>
          <Text color="brand.50" fontSize={["5xl"]} fontWeight={["bold"]}>
            Elbi
          </Text>
          <Stack direction={["row"]} spacing={["32px"]} alignItems={["center"]}>
            <Text fontWeight={["semibold"]} color="" fontSize={["2xl"]}>
              About
            </Text>
            <Text fontWeight={["semibold"]} color="brand.50" fontSize={["2xl"]}>
              Blog
            </Text>
            <HStack
              alignItems={["center"]}
              justifyContent={["space-between"]}
              spacing={["10px"]}
            >
              <Text>🌞</Text>
              <Switch></Switch>
              <Text>🌙</Text>
            </HStack>
          </Stack>
        </Flex>
      </Container>
    </HStack>
  );
}
