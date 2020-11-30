import { v4 as uuidv4 } from "uuid";
import fs from "fs";

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

  const saveUser = () => {
    let path = "text.txt";
    fs.writeFile(path, userDb, { flag: "a" }, (err) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log("data is written");
      }
    });
  };
  saveUser();
};

export { createUser };
