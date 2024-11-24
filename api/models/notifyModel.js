const mongoose = require("mongoose");

const notifySchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "doctors",
      required: true,
    },
    appointment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "appointment",
      required: true,
    },
    type: {
      type: String,
      default: "appointment",
      required: true,
    },
  },
  { timestamps: true }
);
const Notify = mongoose.model("Notify", notifySchema);
module.exports = Notify;
