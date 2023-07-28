require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const menuRoutes = require("./router/menuRouter");
const authRoutes = require("./router/authRouter");
const adminRoutes = require("./router/adminRoute");
const cors = require("cors");

// express app
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["http://localhost:5173", "https://danieldelicacy.onrender.com"],
  })
);
app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

// auth routes
app.use("/auth", authRoutes);

//admin routes
app.use("/admin", adminRoutes);

// menu routes
app.use("/menu", menuRoutes);

// connect to database
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT || 5173 || 4000, () => {
      console.log("listenning on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
