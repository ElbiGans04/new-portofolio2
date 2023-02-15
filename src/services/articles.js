import GetServiceBuilder from "@/src/helpers/getServiceBuilder";

const getServiceBuilder = new GetServiceBuilder("articles");

export async function getArticles(
  fields = ["*"],
  populate = true,
  filters = false
) {
  return await getServiceBuilder.request({}, fields, populate, filters);
}
