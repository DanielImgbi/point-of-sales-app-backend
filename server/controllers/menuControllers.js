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

module.exports = {
  getMenu,
  getSingleData,
};
