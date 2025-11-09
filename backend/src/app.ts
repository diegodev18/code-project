import express from "express";

import { SERVER_PORT } from "@/config";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port ${SERVER_PORT.toString()}`);
});
