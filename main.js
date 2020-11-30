import express from "express";
const router = express.Router();
import bodyParser from "body-parser";
import { v4 as uuidv4 } from "uuid";
const app = express();
app.use(bodyParser.json());

app.listen(3001, () => console.log("server is running"));

module.exports = router;
