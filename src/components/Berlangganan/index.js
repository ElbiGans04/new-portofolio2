import InputWithButton from "@/src/components/Input/withButton";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

export default function Berlangganan({ maxContent = false }) {
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
          Hi
        </Text>
        <Text as="p" fontWeight={["semibold"]} fontSize={["md", "lg", "xl"]}>
          Come on, subscribe so you don`t miss any updates from this website
        </Text>
        <InputWithButton onClick={onOpen}>Subscribe</InputWithButton>
        <Text
          fontSize={["sm", "md", "lg"]}
          fontWeight={["bold"]}
          color={["brand.50"]}
        >
          *I will not send spam emails to you*
        </Text>
      </VStack>
      <Modal size="xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Warning</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack
              w={["100%"]}
              h={["100%"]}
              alignItems={["flex-start"]}
              spacing={["30px"]}
            >
              <Text fontSize={["md", "lg", "xl"]}>
                Features not yet available
              </Text>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button variant="brand" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
