import style from "@/src/constants/styles";
import {
  Container,
  Flex,
  HStack,
  Link,
  Stack,
  Switch,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  useMediaQuery,
  Button,
  forwardRef,
  useColorMode,
  Progress,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { breakpoints } from "@/src/config/chakra.config";
import urls from "@/src/constants/url";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const ButtonCustomMenu = forwardRef(({ isActive, ...props }, ref) => (
  <Button
    _hover={{
      bgColor: ["brand.400"],
    }}
    _active={{
      bgColor: ["brand.500"],
    }}
    color={["white"]}
    bgColor={["brand.50"]}
    ref={ref}
    {...props}
  >
    {isActive ? <AiOutlineClose /> : <AiOutlineMenu />}
  </Button>
));

function ProgressBar() {
  const pathname = usePathname();
  const [enable, setEnable] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const startHandler = () => {
      setEnable(true);
    }

    const completeHandler = () => {
      setEnable(false);
    }
    router.events.on('routeChangeStart',  startHandler);
    router.events.on('routeChangeComplete',  completeHandler);

    return () => {
      router.events.off('routeChangeStart', startHandler);
      router.events.off('routeChangeComplete', completeHandler);
    };
  }, [router, setEnable]);

  return (
    <Progress
      w="100%"
      h="5px"
      size="md"
      colorScheme={"brand"}
      isIndeterminate={enable}
      backgroundColor="transparent"
    ></Progress>
  );
}

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();
  const [isHideMenu] = useMediaQuery(`(min-width: ${breakpoints.md})`, {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  });

  return (
    <VStack backgroundColor="bgLayer1" zIndex={1} position={["sticky"]} top={["0"]} left={["0"]} right="0" bottom="0">
      <ProgressBar></ProgressBar>
      <HStack
        w={["100%"]}
        h={["100%"]}
        justifyContent={["center"]}
        color="textLayer1"
        borderBottomColor={["borderLayer1"]}
        borderBottomWidth={["1px"]}
        zIndex={style.navbarZIndex}
        paddingY={["16px"]}
        paddingX={[0, null, null, null, "48px", "0"]}
        marginTop={`0!important`}
      >
        <Container maxW={style.maxWidthContent}>
          <Flex justifyContent="space-between" align={["center"]}>
            <Link
              color="brand.50"
              fontSize={["3xl", "5xl"]}
              fontWeight={["bold"]}
              href="/"
              as={NextLink}
            >
              Elbi
            </Link>
            {isHideMenu ? (
              <Stack
                direction={["row"]}
                spacing={["32px"]}
                alignItems={["center"]}
              >
                <Link
                  as={NextLink}
                  href="/"
                  fontWeight={["semibold"]}
                  color={router.pathname === "/" ? "brand.50" : "textLayer1"}
                  fontSize={["lg", "2xl"]}
                >
                  Home
                </Link>
                <Link
                  as={NextLink}
                  href={urls.blogs.url}
                  fontWeight={["semibold"]}
                  color={
                    router.pathname === urls.blogs.url
                      ? "brand.50"
                      : "textLayer1"
                  }
                  fontSize={["lg", "2xl"]}
                >
                  Blog
                </Link>
                <HStack
                  alignItems={["center"]}
                  justifyContent={["space-between"]}
                  spacing={["10px"]}
                >
                  <BsSunFill />
                  <Switch
                    isChecked={colorMode !== "light"}
                    variant={"brand"}
                    onChange={toggleColorMode}
                  />
                  <BsFillMoonFill />
                </HStack>
              </Stack>
            ) : (
              <Menu closeOnSelect={false}>
                {({ isOpen }) => (
                  <>
                    <MenuButton isActive={isOpen} as={ButtonCustomMenu} />
                    <MenuList>
                      <MenuGroup title="Page">
                        <MenuItem
                          as={NextLink}
                          href="/"
                          _hover={{
                            backgroundColor: ["brand.100"],
                          }}
                          _active={{
                            backgroundColor: ["brand.200"],
                          }}
                        >
                          Home
                        </MenuItem>
                        <MenuItem
                          as={NextLink}
                          href={urls.blogs.url}
                          _hover={{
                            backgroundColor: ["brand.100"],
                          }}
                          _active={{
                            backgroundColor: ["brand.200"],
                          }}
                        >
                          Blog
                        </MenuItem>
                      </MenuGroup>
                      <MenuDivider />
                      <MenuOptionGroup
                        onChange={toggleColorMode}
                        value={colorMode}
                        title="Mode"
                        type="radio"
                      >
                        <MenuItemOption
                          _hover={{
                            backgroundColor: ["brand.100"],
                          }}
                          _active={{
                            backgroundColor: ["brand.200"],
                          }}
                          value="light"
                          icon={<BsSunFill />}
                        >
                          Light Mode
                        </MenuItemOption>
                        <MenuItemOption
                          _hover={{
                            backgroundColor: ["brand.100"],
                          }}
                          _active={{
                            backgroundColor: ["brand.200"],
                          }}
                          value="dark"
                          icon={<BsFillMoonFill />}
                        >
                          Dark Mode
                        </MenuItemOption>
                      </MenuOptionGroup>
                    </MenuList>
                  </>
                )}
              </Menu>
            )}
          </Flex>
        </Container>
      </HStack>
    </VStack>
  );
}
