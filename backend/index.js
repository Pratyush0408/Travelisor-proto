import express from "express";

const app = express();

app.use("/test", (req, res) => {
  return res.json("hello from backend api");
});

app.listen(3000, () => {
  console.log("Server is running");
});
