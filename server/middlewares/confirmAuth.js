const jwt = require("jsonwebtoken");
const User = require("../models/authModel");

const confirmAuth = async (req, res, next) => {
  const { authorization } = req.headers;

  // verify authentication
  if (!authorization) {
    return res.status(404).json("access denied. request is not authorized!");
  }
  const token = authorization.split(" ")[1];

  try {
    const verifiedToken = jwt.verify(token, process.env.SECRET);
    const { _id } = verifiedToken;

    const user = await User.findOne({ _id }).select("_id post");
    req.user = user;
    next();
  } catch (error) {
    res.status(403).json({ err: error.message });
  }
};

module.exports = confirmAuth;
