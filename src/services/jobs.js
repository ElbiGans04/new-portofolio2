import GetServiceBuilder from "@/src/helpers/getServiceBuilder";

const getServiceBuilder = new GetServiceBuilder("jobs");

export async function getJobs(
  fields = ["*"],
  populate = true,
  filters = false
) {
  return await getServiceBuilder.request({}, fields, populate, filters);
}