const express = require("express");
const {
  addMenu,
  deleteMenu,
  updateMenu,
} = require("../controllers/adminRouteController");
// const confirmUser = require("../middlewares/confirmAuth");
// const isAdmin = require("../middlewares/isAdmin");

const router = express.Router();

// checking if user is valid and authorized
// router.use(confirmUser);

// admin verification
// router.use(isAdmin);

// post route
router.post("/menu", addMenu);

// delete route
router.delete("/menu/:id", deleteMenu);

// patch route
router.patch("/menu/:id", updateMenu);

module.exports = router;
