export async function getArticles() {
  return await (
    await fetch(`${process.env.STRAPI_BASE_API_URL}/articles?populate=*`)
  ).json();
}
