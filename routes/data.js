import express from "express";

const router = express.Router();

import { data } from "../controller/data.js";

router.get("/", data);

export default router;
