import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function TagBlog({ link, children }) {
  return (
    <Link
      as={NextLink}
      href={link}
      fontWeight={["bold"]}
      color="brand.50"
      fontSize={["md", "lg", "xl"]}
    >
      {children}
    </Link>
  );
}
