const Menu = require("../models/menuModel");

// getting all menu datas
const getMenu = async (req, res) => {
  try {
    const menus = await Menu.find();
    if (menus.ok) {
      throw "no menu yet!";
    }
    res.status(200).json(menus);
  } catch (error) {
    console.log(menus);
  }
};

// get a single menu data
const getSingleData = async (req, res) => {
  const { id } = req.params;

  try {
    const menu = Menu.findOne(id);
    if (menu.ok) {
      throw Error("no match found!");
    }
    res.status(200).json(menu);
  } catch (error) {
    res.status(401).json({ err: error.messsage });
  }
};

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
  getMenu,
  getSingleData,
  addMenu,
  deleteMenu,
  updateMenu,
};
