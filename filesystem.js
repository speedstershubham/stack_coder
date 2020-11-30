import fs from "fs";
import readline from "readline";

import { v4 as uuidv4 } from "uuid";
// import http from "http";
// const server = http
//   .createServer((req, res) => {
//     fs.readFile("text.txt", "utf8", (err, data) => {
//       res.writeHead(200, { "const-type": "text/plain" });

//       res.write(data);
//       res.end();
//     });
//   })
//   .listen(3000, () => console.log("server is running on port 3000"));

const user = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

user.question("Who are you?", (name, id = uuidv4()) => {
  console.log(`Hey there ${(name, id)}!`);

  let path = "text.txt";
  let userName = Buffer.from(name);
  let Id = id;
  console.log(Id);
  let Data = userName + "  " + Id;
  console.log(Data);

  fs.readFile(path, "utf8", (err, name) => {
    if (err) throw err;
    console.log(name);
  });

  fs.writeFileSync(path, Data, { flag: "a" }, (err) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log("data is written");
    }
  });

  user.close();
});
