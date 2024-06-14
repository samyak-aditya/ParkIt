import Driver from "../model/Valet.js";
import bcrypt from "bcrypt";
import dontenv from "dotenv";
import jwt from "jsonwebtoken"
dontenv.config();
export const valetRegister = async (req, res) => {
  try {
    const { email, number, name, password } = req.body;
    let user = await Driver.findOne({ email:email });
    if (user) {
      return res
        .status(400)
        .json({ error: "User with this email already exists" });
    }
    user = await Driver.findOne({ number });
    if (user) {
      return res
        .status(400)
        .json({ error: "User with this email already exists" });
    }
    const hashedpassword = await bcrypt.hash(password, 10);
    const newDriver = new Driver({
      name,
      password: hashedpassword,
      number,
      email,
    });
    await newDriver.save();
    const payload = {
      user: {
        id: newDriver._id,
      },
    };
    const token = jwt.sign(payload, process.env.JWTSECRET);
    res.status(200).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

export const valetLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await Driver.findOne({ email:email });
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

export const getallvaletreq = async(req,res)=>{
  try{

  }
  catch{
    res.status(500).send("Internal Server Error")
  }
}

export const valetaccept = async(req,res) =>{
  try{

  }
  catch{

  }
}