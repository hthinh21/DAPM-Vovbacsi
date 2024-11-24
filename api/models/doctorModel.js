const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DoctorSchema = new Schema(
  {
    name: { type: String, required: true },
    sao: { type: Number, required: true },
    khoa: { type: String, required: true },
    chuyenkhoa: { type: String, required: true },
    chuyenmon: { type: String, required: true },
    donvi: { type: String, required: true },
    namsinh: { type: String, required: true },
    phikham: { type: Number, required: true },
    role: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: "",
    },
  },
  { collection: "doctors" }
);

// Export mô hình
module.exports =
  mongoose.models.doctors || mongoose.model("doctors", DoctorSchema);
