import dayjs from "dayjs";
export default function getFormatDateArticle (value) {
    return dayjs(value).format(
        "MMMM DD, YYYY"
      )
}