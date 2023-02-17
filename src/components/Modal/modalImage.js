import indexModuleScss from "@/src/styles/index.module.scss";
import {
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import Image from "next/image";

export default function ModalImage({ onClose, isOpen, judul, url }) {
  return (
    <Modal onClose={onClose} size="full" isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{judul}</ModalHeader>
        <ModalCloseButton />
        <ModalBody
          display={["grid"]}
          gridTemplateColumns={["1fr"]}
          gridTemplateRows={["1fr"]}
        >
          <HStack w={["100%"]} h={["100%"]} position={["relative"]}>
            <Image
              src={`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${url}`}
              alt="Project"
              fill
              sizes={`90vw`}
              className={indexModuleScss.objectFit}
            />
          </HStack>
        </ModalBody>
        <ModalFooter>
          <Button variant="brand" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
