import User from "../model/User.js";
import bcrypt from "bcrypt";
import dontenv from "dotenv";
import jwt from "jsonwebtoken";
dontenv.config();

export const createValetBook = async (req, res) => {
  try {
    const { userId, driverId, pickupLocation, destination, fare, vehicleType } =
      req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const newBooking = new Booking({
      user: userId,
      driver: driverId,
      pickupLocation: pickupLocation,
      destination: destination,
      fare,
      vehicleType: vehicleType,
      status: "pending",
    });
    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
