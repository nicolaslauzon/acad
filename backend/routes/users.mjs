import express from "express";
import db from "../bd/conn.mjs";

const router = express.Router();

router.get("/", async (req, res) => {
  let collection = db.collection("users");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

router.post("/", async (req, res) => {
  let collection = db.collection("users");
  let newDocument = req.body;
  newDocument.name = req.body.name;
  newDocument.email = req.body.email;
  newDocument.password = req.body.password;
  let result = await collection.insertOne(newDocument);
  newDocument.date = new Date();
  res.send(result).status(204);
});

export default router;
