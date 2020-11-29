import createAddress from "./createAddress.js";
import createUsers from "./createUsers.js";

const createDummyData = () => {
  const users = createUsers(10);
  const userIds = users.map((item) => item._id);
  const newAddress = userIds.map((item) => {
    const address = createAddress(item);
    console.log(address);
    return address;
  });
};
export default createDummyData;
