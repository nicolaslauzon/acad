import express, { json } from "express";
import cors from "cors";
import users from "./routes/users.mjs";

const app = express();

app.use(json());
app.use(cors());
app.use("/users", users);

app.use((err, _req, res, _next) => {
  res.status(500).send({ error: err });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
