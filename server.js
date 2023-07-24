require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const menuRoutes = require("./router/menuRouter");
const authRoutes = require("./router/authRouter");
// express app
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

// auth routes
app.use("/auth", authRoutes);

// menu routes
app.use("/menu", menuRoutes);

// connect to database
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("listenning to port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
