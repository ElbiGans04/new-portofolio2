import remarkParse from "remark-parse";
import { unified } from "unified";
import rehypeStringify from "rehype-stringify";
import remarkRehype from "remark-rehype";

export default function getHtmlFromMd(input) {
  return unified().use(remarkParse).use(remarkRehype).use(rehypeStringify).processSync(input);
}
