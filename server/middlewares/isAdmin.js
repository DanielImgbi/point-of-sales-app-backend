const isAdmin = (req, res, next) => {
  const user = req.user;

  // admin authentication
  if (!user) {
    return res
      .status(404)
      .json({ err: "please ensure a proper login process!" });
  }

  const post = user.post;
  if (!(post && post === "administrator")) {
    return res
      .status(404)
      .json("Access denied. only administrator is allowed!");
  }
  next();
};

module.exports = isAdmin;
