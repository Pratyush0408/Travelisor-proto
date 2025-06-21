import express from "express";
import { test } from "../controllers/user.controller.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

const router = express.Router();

router.post("/create", async (req, res) => {
  const userInformation = req.body;

  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  console.log(userInformation);
  await User.create({
    displayName: req.body.displayName,
    username: req.body.username,
    email: req.body.email,
    hashedPassword: hashedPassword,
  });

  res.json("User created successfully!");
});

router.delete("/", async (req, res) => {
  const deletedUsers = await User.deleteOne({ username: "test" }, req.body);

  res.json(deletedUsers);
});

router.get("/test", test);

export default router;
