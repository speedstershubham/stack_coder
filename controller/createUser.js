import { v4 as uuidv4 } from "uuid";

import { saveUser } from "./saveUser.js";

const createUser = (req, res) => {
  let id = (req.body.id = uuidv4());
  let name = req.body.name;
  let bloodGroup = req.body.bloodGroup;
  let weight = req.body.weight;
  let height = req.body.height;
  let dateOfBirth = req.body.dob;
  let email = req.body.email;
  let phoneNo = req.body.phoneNo;
  let postalCode = req.body.postalCode;
  let userDb = JSON.stringify({
    bloodGroup,
    weight,
    height,
    dateOfBirth,
    email,
    phoneNo,
    postalCode,
    name,
    id,
  });

  console.log(userDb);
  saveUser(userDb);

  return userDb;
};

export { createUser };
