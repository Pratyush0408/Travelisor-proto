import express from "express";
import cors from "cors";
import userRouter from "./routes/user.route.js";
import pinRouter from "./routes/pin.route.js";
import commentRouter from "./routes/comment.route.js";
import boardRouter from "./routes/board.route.js";
import connectDB from "./utils/connectDB.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json()); // Middleware to parse JSON bodie

app.use(cors({origin:process.env.CLIENT_URL, credentials: true})) // Enable CORS for the specified origin

app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Root route works");
});

// ✅ Mount the router
app.use("/users", userRouter);
app.use("/pin", pinRouter);
app.use("/comment", commentRouter);
app.use("/board", boardRouter);

app.listen(3000, () => {
  connectDB();
  console.log("Server is running");
});
