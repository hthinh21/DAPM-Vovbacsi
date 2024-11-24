const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const appointmentSchema = new Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    doctor_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "doctors",
      required: true,
    },
    datetime: { type: Date, default: Date.now, required: true },
    status: { type: String, default: "pending", required: false },
    description: { type: String, require: false },
  },
  { collection: "appointments" }
);

module.exports =
  mongoose.models.appointment ||
  mongoose.model("appointment", appointmentSchema);
