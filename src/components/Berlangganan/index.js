import InputWithButton from "@/src/components/Input/withButton";
import {
  Button, Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay, Text, useDisclosure, VStack
} from "@chakra-ui/react";

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
          <ModalHeader>Peringatan</ModalHeader>
          <ModalCloseButton />
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
