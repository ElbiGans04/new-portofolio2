class GetServiceBuilder {
  model = String;
  constructor(model) {
    this.model = model;
  }

  generateUrl(fields, populate, filters) {
    return `${process.env.NEXT_PUBLIC_STRAPI_BASE_API_URL}/${this.model}${
      !!fields || !!populate || !!filters ? "?" : ""
    }${this.generateSectionUrlPopulate(
      populate
    )}${this.generateSectionUrlFields(
      fields,
      !populate
    )}${this.generateSectionUrlFilters(filters, (!populate && !fields))}`;
  }

  generateNestedUrl(candidate, key, preventAppendAndSymbol = false) {
    return candidate.reduce((prev, value, index) => {
      return `${prev}${
        (preventAppendAndSymbol && index === 0) 
          ? ""
          : "&"
      }${key}${value.conditional.reduce((prev, current) => {
        return `${prev}[${current}]`;
      }, "")}=${value.value}`;
    }, "");
  }

  generateSectionUrlFields(fields, preventAppendAndSymbol = false) {
    return !fields
      ? ""
      : fields.reduce(
          (prev, current, index) =>
            `${prev}${
              (preventAppendAndSymbol && index === 0) ? "" : "&"
            }fields[${index}]=${current}`,
          ""
        );
  }

  generateSectionUrlFilters(filters, preventAppendAndSymbol = false) {
    return !filters
      ? ""
      : this.generateNestedUrl(filters, "filters", preventAppendAndSymbol);
  }

  generateSectionUrlPopulate(populate) {
    if (populate === true) return "populate=*";
    return !populate ? "" : this.generateNestedUrl(populate, "populate");
  }

  async request(options = {}, fields, populate, filters) {
    return await (
      await fetch(this.generateUrl(fields, populate, filters), options)
    ).json();
  }
}

export default GetServiceBuilder;
