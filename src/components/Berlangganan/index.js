import { Text, VStack } from "@chakra-ui/react";
import InputWithButton from "@/src/components/Input/withButton";

export default function Berlangganan() {
  return (
    <VStack
      w={["100%"]}
      height={["max-content"]}
      spacing={["10px"]}
      alignItems={["flex-start"]}
    >
      {/* <Box
          width={["150px"]}
          height={["150px"]}
          position={["relative"]}
          overflow={["hidden"]}
          borderRadius={["50%"]}
          borderWidth={["5px"]}
          borderColor={["brand.50"]}
          flexShrink={["0"]}
        >
          <Image
            src={ProfileImage}
            alt="profile picture"
            placeholder="blur"
            fill
          />
        </Box> */}
      <Text
        as="h1"
        color={["brand.50"]}
        fontWeight={["bold"]}
        fontSize={["7xl"]}
      >
        Halo
      </Text>
      <Text as="p" fontWeight={["semibold"]} fontSize={["xl"]}>
        Ayo berlangganan agar tidak ketinggalan update apapun dari website ini
      </Text>
      <InputWithButton>Berlangganan</InputWithButton>
      <Text fontSize={["lg"]} fontWeight={["bold"]} color={["brand.50"]}>
        *Saya tidak akan mengirimkan email spam kepada anda*
      </Text>
    </VStack>
  );
}
