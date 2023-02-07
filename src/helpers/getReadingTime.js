export default function getReadingTime (value) {
  return Math.ceil(value.split(" ").length / 125);
}
