const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  post: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.signupUser = async function (name, post, email, password) {
  // validation
  if (!name || !password || !email) {
    throw new Error("all fields must be filled!");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid!");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Please provide a strong password!");
  }

  const exist = await this.findOne({ email });
  if (exist) {
    throw Error("email already in use!");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  console.log(hash);

  const user = await this.create({ name, post, email, password: hash });

  return user;
};

userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Invalid email!");
  }

  // const match = await bcrypt.compare(password, user.password);

  // if (!match) {
  //   throw Error("Invalid password!");
  // }

  return user;
};

module.exports = mongoose.model("User", userSchema);
