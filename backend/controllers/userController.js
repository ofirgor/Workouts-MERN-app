const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "1d" });
};
//login user
const loginUser = async (req, res) => {
  res.json({ msg: "login user" });
};

//signup user

const signupUser = async function (req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);
    //create token
    const token = createToken(user._id);

    res.status(201).json({ email, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { loginUser, signupUser };
