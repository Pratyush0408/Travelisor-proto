import express from "express";
import { getUser, loginUser , registerUser,logoutUser } from "../controllers/user.controller.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { get } from "mongoose";

const router = express.Router();



router.get("/:username", getUser);
router.post("/auth/register", registerUser);
router.post("/auth/login", loginUser);
router.post("/auth/logout", logoutUser);


export default router;
