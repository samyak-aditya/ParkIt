import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    pickupLocation: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "started", "completed", "cancelled"],
      default: "pending",
    },
    startTime:{
      type:String,
    },
    parkingCost: {
      type: Number,
      required: true,
    },
    vehicleType: {
      type: String,
      enum: ["sedan", "SUV", "van", "motorcycle", "bike"],
    },
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
