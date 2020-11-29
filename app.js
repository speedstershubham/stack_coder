import express from "express";
const app = express();
import bodyParser from "body-parser";

import Data from "./routes/data.js";
import User from "./routes/users.js";

app.use(express.json());

app.use(bodyParser.json());

const port = process.env.PORT || 2000;

app.use("/", Data);
app.use("/", User);

app.listen(port, () => {
  console.log(`server is started on port ${port}`);
});
