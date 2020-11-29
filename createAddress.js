import faker from "faker";

const createAddress = (userId) => {
  const lineNo1 = faker.address.streetName();
  const lineNo2 = faker.address.streetAddress();
  const postalCode = faker.address.zipCode();
  const city = faker.address.city();
  const state = faker.address.state();
  const countryCode = faker.address.countryCode();
  const country = faker.address.county();
  const address = {
    lineNo1,
    lineNo2,
    postalCode,
    city,
    state,
    countryCode,
    country,
    userId,
  };
  return address;
};

export default createAddress;
