import fs from "fs";
import readline from "readline";

import { v4 as uuidv4 } from "uuid";

const user = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let path = "text.txt";

fs.readFile(path, "utf8", (err, name) => {
  if (err) throw err;
  console.log(name);
});

user.question("Who are you?", (name, id = uuidv4()) => {
  console.log(`Hey there ${(name, id)}!`);

  let userName = Buffer.from(name);

  console.log(id);
  let Data = userName + "  " + id;
  console.log(Data);

  fs.writeFileSync(path, Data, { flag: "a" }, (err) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log("data is written");
    }
  });

  user.close();
});
