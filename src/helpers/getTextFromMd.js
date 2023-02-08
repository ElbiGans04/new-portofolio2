import remarkParse from "remark-parse";
import { unified } from "unified";
import remarkRetext from "remark-retext";
import retextStringify from "retext-stringify";
import retextEnglish from "retext-english";

export default function getTextFromMd(input) {
  return unified()
    .use(remarkParse)
    .use(remarkRetext, unified().use(retextEnglish), {
      // ignore: ["heading"],
    })
    .use(retextStringify)
    .processSync(input);
}
