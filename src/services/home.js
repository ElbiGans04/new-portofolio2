import GetServiceBuilder from "@/src/helpers/getServiceBuilder";

const getServiceBuilder = new GetServiceBuilder("home");

export async function getHome(
  fields = ["*"],
  populate = true,
  filters = false
) {
  return await getServiceBuilder.request({}, fields, populate, filters);
}