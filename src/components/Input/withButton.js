import { Button, HStack, Input } from "@chakra-ui/react";

export default function InputWithButton({children, onClick, onChange, value}) {
  return (
    <HStack
      w={["100%"]}
      borderRadius={["8px"]}
      h={["100%"]}
      spacing={[0]}
    >
      <Input
        data-peer=""
        w={["70%"]}
        borderRightRadius={["0"]}
        borderLeftRadius={["8px"]}
        value={value}
        onInput={onChange}
      ></Input>
      <Button
        w={["30%"]}
        height={["100%"]}
        colorScheme={'brand'}
        borderRadius={[0]}
        borderRightRadius={["8px"]}
        borderLeftRadius={["0px"]}
        onClick={onClick}
      >
        {children}
      </Button>
    </HStack>
  );
}
