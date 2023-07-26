const express = require("express");
const { getMenu, getSingleData } = require("../controllers/menuControllers");

const router = express.Router();

// get route
router.get("/", getMenu);

// get a single menu route
router.get("/:id", getSingleData);

module.exports = router;
