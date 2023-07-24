const { Administrator, Moderator } = require("../models/authModel");
const jwt = require("jsonwebtoken");

// create token
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRETE, { expires: "3d" });
};

// sign up user controller
const signupUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.signupUser(name, email, password);

    const token = createToken(user._id);
    res.status(200).json({ email, name, token });
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
};

// login user controller
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.loginUser(email, password);
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
};

module.exports = { loginUser, signupUser };
