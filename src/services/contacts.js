import GetServiceBuilder from "@/src/helpers/getServiceBuilder";

const getServiceBuilder = new GetServiceBuilder("contacts");

export async function getContact(
  fields = ["*"],
  populate = true,
  filters = false
) {
  return await getServiceBuilder.request({}, fields, populate, filters);
}