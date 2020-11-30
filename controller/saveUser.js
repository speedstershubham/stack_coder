import fs from "fs";

const saveUser = (userDb) => {
  // let userData = JSON.stringify({ userDb });
  let path = "text.txt";
  fs.writeFile(path, userDb, { flag: "a" }, (err) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log("data is written");
    }
  });
  return "Thing created successfully!";
};

export { saveUser };
