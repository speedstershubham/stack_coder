import faker from "faker";

const createUser = () => {
  const name = faker.name.firstName();
  const _id = faker.random.uuid();
  const image = faker.image.people();
  const email = faker.internet.email();
  const password = faker.internet.password();
  const age = faker.random.number();
  const user = { _id, name, image, email, password, age };
  console.log(user);
  return user;
};

export default createUser;
