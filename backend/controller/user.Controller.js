import User from "../model/User.js";
import bcrypt from "bcrypt";
import dontenv from "dotenv";
import jwt from "jsonwebtoken"
dontenv.config();
export const userRegister = async (req, res) => {
  try {
    const { email, number, name, password } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ error: "User with this email already exists" });
    }
    user = await User.findOne({ number });
    if (user) {
      return res
        .status(400)
        .json({ error: "User with this email already exists" });
    }
    const hashedpassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      password: hashedpassword,
      number,
      email,
    });
    await newUser.save();
    const payload = {
      user: {
        id: newUser._id,
      },
    };
    const token = jwt.sign(payload, process.env.JWTSECRET);
    console.log(token);
    res.status(200).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email:email });
    if (!user) {
      return res
        .status(400)
        .json({ error: "User with this email does not exist" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.status(400).json({ err: "Wrong Password" });
    const payload = {
      user: {
        id: user._id,
      },
    };
    const token = jwt.sign(payload, process.env.JWTSECRET);
    res.status(200).json({token});
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};
