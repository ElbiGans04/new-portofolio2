import GetServiceBuilder from "@/src/helpers/getServiceBuilder";

const getServiceBuilder = new GetServiceBuilder("tags");

export async function getTags(
  fields = ["*"],
  populate = true,
  filters = false
) {
  return await getServiceBuilder.request({}, fields, populate, filters);
}