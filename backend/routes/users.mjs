import express from "express";
import db from "../bd/conn.mjs";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Users route");
});

export default router;
