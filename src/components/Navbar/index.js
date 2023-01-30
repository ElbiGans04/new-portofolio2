import style from "@/src/constants/styles";
import {
  Container,
  Flex,
  HStack, Link, Stack,
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
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BsFillMoonFill, BsSunFill } from 'react-icons/bs';
import { breakpoints } from "@/src/config/chakra.config";

const ButtonCustomMenu = forwardRef(({isActive, ...props}, ref) => (
  <Button _hover={{
    bgColor : ['brand.400']
  }}
  _active={{
    bgColor: ['brand.500']
  }}
  color={['white']} bgColor={['brand.50']} ref={ref} {...props}>{isActive ? <AiOutlineClose /> : <AiOutlineMenu /> }</Button>
))

export default function Navbar() {
  const router = useRouter();
  const [isHideMenu] = useMediaQuery(`(min-width: ${breakpoints.md})`, {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  });

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
      zIndex={style.navbarZIndex}
      paddingY={["16px"]}
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
          {
            isHideMenu ? (
            <Stack direction={["row"]} spacing={["32px"]} alignItems={["center"]}>
              <Link
                as={NextLink}
                href="/"
                fontWeight={["semibold"]}
                color={router.pathname === "/" ? "brand.50" : "black"}
                fontSize={["lg", "2xl"]}
              >
                Home
              </Link>
              <Link
                as={NextLink}
                href="/blogs"
                fontWeight={["semibold"]}
                color={router.pathname === "/blogs" ? "brand.50" : "black"}
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
                <Switch colorScheme={"brand"} />
                <BsFillMoonFill />
              </HStack>
            </Stack>) : (
              <Menu closeOnSelect={false}>
              {({ isOpen }) => (
                <>
                  <MenuButton isActive={isOpen} as={ButtonCustomMenu} />
                  <MenuList>
                    <MenuGroup title="Halaman">
                      <MenuItem _hover={{
                        backgroundColor: ['brand.100']
                      }}
                      _active={{
                        backgroundColor: ['brand.200']
                      }}
                      >Blog</MenuItem>
                    </MenuGroup>
                    <MenuDivider />
                    <MenuOptionGroup defaultValue='light' title='Tampilan' type='radio'>
                      <MenuItemOption _hover={{
                        backgroundColor: ['brand.100']
                      }}
                      _active={{
                        backgroundColor: ['brand.200']
                      }} value='light'>Mode Terang</MenuItemOption>
                      <MenuItemOption _hover={{
                        backgroundColor: ['brand.100']
                      }}
                      _active={{
                        backgroundColor: ['brand.200']
                      }} value='dark'>Mode Gelap</MenuItemOption>
                    </MenuOptionGroup>
                  </MenuList>
                </>
              )}
            </Menu>
            )
          }
        </Flex>
      </Container>
    </HStack>
  );
}
