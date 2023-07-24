const express = require("express");
const {
  getMenu,
  getSingleData,
  addMenu,
  deleteMenu,
  updateMenu,
} = require("../controllers/menuControllers");

const router = express.Router();

// get route
router.get("/", getMenu);

// get a single menu route
router.get("/:id", getSingleData);

// post route
router.post("/", addMenu);

// delete route
router.delete("/:id", deleteMenu);

// patch route
router.patch("/:id", updateMenu);

module.exports = router;
