import fs from "fs";

const saveUser = (userDb) => {
  console.log(userDb);
  let path = "text.txt";
  let promise = new Promise((resolve, reject) => {
    fs.writeFile(path, userDb, { flag: "a" }, (err) => {
      if (err) {
        console.log(err.message);
        reject();
      }
      console.log("data is written");
      resolve(true);
    });
  });
  return promise;
};

export default saveUser;
