import {
  Text,
  VStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Box,
  Heading,
  Button,
  useDisclosure
} from "@chakra-ui/react";
import InputWithButton from "@/src/components/Input/withButton";

export default function Berlangganan({maxContent = false}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <VStack
        w={["100%"]}
        height={[maxContent ? "max-content" : "100%"]}
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
          fontSize={["5xl", "6xl", "7xl"]}
        >
          Halo
        </Text>
        <Text as="p" fontWeight={["semibold"]} fontSize={["md","lg", "xl"]}>
          Ayo berlangganan agar tidak ketinggalan update apapun dari website ini
        </Text>
        <InputWithButton onClick={onOpen}>Berlangganan</InputWithButton>
        <Text fontSize={["sm", "md", "lg"]} fontWeight={["bold"]} color={["brand.50"]}>
          *Saya tidak akan mengirimkan email spam kepada anda*
        </Text>
      </VStack>
      <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="brand.50">Peringatan</ModalHeader>
          <ModalCloseButton color="brand.50" />
          <ModalBody>
            <VStack
              w={["100%"]}
              h={["100%"]}
              alignItems={["flex-start"]}
              spacing={["30px"]}
            >
              <Text fontSize={["md","lg", "xl"]}>
                Fitur belum tersedia
              </Text>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button variant="brand" onClick={onClose}>
              Tutup
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
