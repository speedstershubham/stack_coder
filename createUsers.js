import createUser from "./createUser.js";

const createUsers = (number) => {
  const users = [];
  for (let i = 0; i <= number; i++) {
    const user = createUser();
    users.push(user);
  }
  return users;
};

export default createUsers;
