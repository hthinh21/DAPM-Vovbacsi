const appointmentModel = require("../models/appointmentModel");
const Notify = require("../models/notifyModel");
const User = require("../models/user");
//lay tat ca lich hen

const getAllApointment = async (req, res) => {
  const id = req.cookies.userId;
  try {
    const appointments = await appointmentModel
      .find({ user_id:id })
      .populate("doctor_id")
      .populate("user_id");

    if (!appointments || appointments.length === 0) {
      return res.status(404).json({ message: "Không có lịch hẹn nào." });
    }   
    return res.status(200).json(appointments);
  } catch (error) {
    console.error("Error getting appointments:", error);
    return res
      .status(500)
      .json({ message: "Đã xảy ra lỗi, vui lòng thử lại sau." });
  }
};

const createAppointment = async (req, res) => {
  const { id } = req.params;

  const { user_id, description } = req.body;

  try {
    const appointment = await appointmentModel.create({
      doctor_id: id,
      user_id,
      description,
    });

    // Tạo thông báo sau khi lịch hẹn được tạo thành công
    const notification = await Notify.create({
      user: user_id,
      doctor: id,
      appointment: appointment._id,
      type: "appointment", // Loại thông báo: đặt lịch hẹn
    });

    return res.status(200).json({
      appointment,
      notification,
    });
  } catch (error) {
    console.error("Error creating appointment:", error);
    return res.status(500).json({ status: false, message: "Lỗi hệ thống" });
  }
};

module.exports = {
  getAllApointment,
  createAppointment,
};
