import express from "express";
const router = express.Router();
import fs from "fs";
import bodyParser from "body-parser";
import { v4 as uuidv4 } from "uuid";
const app = express();
app.use(bodyParser.json());
router.get("/", (req, res) => {
  fs.readFile("text.txt", "utf8", (err, data) => {
    res.writeHead(200, { "const-type": "text/plain" });
    res.write(data);
    res.end();
  });
});
router.post("/", (req, res, next) => {
  req.body.id = uuidv4();
  let name = JSON.stringify(req.body);
  console.log(name);
  let path = "text.txt";
  fs.writeFile(path, name, { flag: "a" }, (err) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log("data is written");
    }
  });
  res.status(201).json({
    message: "Thing created successfully!",
  });
  next();
});
app.listen(3001, () => console.log("server is running"));
