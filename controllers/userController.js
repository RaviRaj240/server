import User from "../models/user.js";

export const userRegister = async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    await user.save();
    res.status(201).json({ message: "User Registered!" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      if (password === user.password) {
        res.status(200).json({ message: "User logged in!" });
      } else {
        res.status(401).json({ message: "Invalid password!" });
      }
    } else {
      res.status(404).json({ message: "User not Found!" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
