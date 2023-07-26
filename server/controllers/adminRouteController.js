const Menu = require("../models/menuModel");

// adding data
const addMenu = async (req, res) => {
  const menu = req.body;
  try {
    if (!menu) {
      throw Error("please enter a menu!");
    }
    const response = await Menu.create(menu);
    res.status(200).json(response);
  } catch (error) {
    res.status(401).json({ err: error.messsage });
  }
};

// deleting data
const deleteMenu = async (req, res) => {
  res.status(200).json({ mssg: req.path, method: req.method });
};

// updating data
const updateMenu = async (req, res) => {
  res.status(200).json({ mssg: req.path, method: req.method });
};

module.exports = {
  addMenu,
  deleteMenu,
  updateMenu,
};
