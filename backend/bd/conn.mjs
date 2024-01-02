import { MongoClient } from "mongodb";

import dotenv from "dotenv";

dotenv.config();
const uri = process.env.MONGO_URI || "";

const client = new MongoClient(uri);

let conn;
try {
  conn = await client.connect();
} catch (e) {
  console.error(e);
}

let db = conn.db("acad");
export default db;
