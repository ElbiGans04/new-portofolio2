/**
 * 
 * @param {Array<String>} fields 
 * @param {*} populate 
 * @param {*} filter 
 * @returns 
 */
export async function getProjectTypes(fields = ["*"], populate = "*", filters = false) {
  return await (
    await fetch(
      `${process.env.STRAPI_BASE_API_URL}/project-types?${
        !populate ? "" : `populate=*`
      }${fields.reduce(
        (prev, current, index) => `${prev}&fields[${index}]=${current}`,
        ""
      )}${!filters ? '' : filters.reduce((prev, value) => {
        return `${prev}&filters${value.conditional.reduce((prev, current) => {
          return `${prev}[${current}]`
        }, '')}=${value.value}`
      }, '')}`
    )
  ).json();
}