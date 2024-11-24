const { get } = require("mongoose");
const doctorModel = require("../models/doctorModel");
const generateToken = require("../utils/generateToken.js");
const Notify = require("../models/notifyModel");
const appointmentModel = require("../models/appointmentModel.js");

const DoctorLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const doctor = await doctorModel.findOne({ email: email });
    if (!doctor) {
      return res.status(404).json({ message: "Tài khoản không tồn tại" });
    }
    if (doctor.password !== password) {
      return res.status(400).json({ message: "Sai tài khoản hoặc mật khẩu" });
    }
    generateToken(doctor._id, res);
    return res.status(200).json({
      message: "Đăng nhập thành công",
      doctorId: doctor._id,
      doctor: { name: doctor.name, email: doctor.email },
    });
  } catch (error) {
    console.error("Error during login:", error);
    return res
      .status(500)
      .json({ message: "Đã có lỗi xảy ra", error: error.message });
  }
};

const getNotification = async (req, res) => {
  const { id } = req.params;

  try {
    const notifications = await Notify.find({ doctor: id })
      .populate("user") // Lấy thông tin người dùng
      .populate("appointment")
      .populate("doctor") // Lấy thông tin lịch hẹn
      .sort({ createdAt: -1 }); // Sắp xếp theo thời gian gần nhất

    res.status(200).json({ notifications });
  } catch (error) {
    console.error("Lỗi khi lấy danh sách thông báo:", error);
    res.status(500).json({ message: "Lỗi khi lấy danh sách thông báo." });
  }
};
const updateAppointmentStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!["accepted", "rejected"].includes(status)) {
    return res.status(400).json({ message: "Trạng thái không hợp lệ." });
  }

  try {
    const appointment = await appointmentModel.findByIdAndUpdate(
      id,
      { status:status },
      { new: true }
    );

    if (!appointment) {
      return res.status(404).json({ message: "Không tìm thấy thông báo." });
    }

    res.status(200).json({ appointment });
  } catch (error) {
    console.error("Lỗi khi cập nhật trạng thái thông báo:", error);
    res.status(500).json({ message: "Lỗi khi cập nhật trạng thái thông báo." });
  }
};
// Lấy tất cả bác sĩ
async function getAll() {
  try {
    const result = await doctorModel.find();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Lấy bác sĩ theo ID
async function getAllId(id) {
  try {
    const result = await doctorModel.findById(id);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
//them bac si
async function addDoctor(data) {
  try {
    const newDoctor = new doctorModel(data);
    await newDoctor.save();
    return { status: true, result: newDoctor };
  } catch (error) {
    console.error(error);
    return { status: false, message: "Lỗi thêm bác sĩ" };
  }
}

//xóa bác sĩ theo id
async function deleteDoctor(id) {
  try {
    const result = await doctorModel.findByIdAndDelete(id);
    if (result) {
      return { status: true, message: "Xóa bác sĩ thành công" };
    } else {
      return { status: false, message: "Không tìm thấy bác sĩ để xóa" };
    }
  } catch (error) {
    console.error(error);
    return { status: false, message: "Lỗi xóa bác sĩ" };
  }
}

//cap nhat bsi theo id
async function updateDoctor(id, data) {
  try {
    const result = await doctorModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    if (result) {
      return { status: true, result };
    } else {
      return {
        status: false,
        message: "Không tìm thấy bác sĩ để cập nhật",
      };
    }
  } catch (error) {
    console.error(error);
    return { status: false, message: "Lỗi cập nhật bác sĩ" };
  }
}

// Tìm kiếm bác sĩ theo tên hoặc chuyên khoa
async function searchDoctors(query) {
  if (!query) {
    throw new Error("Thiếu tham số tìm kiếm");
  }
  try {
    const result = await doctorModel.find({
      $or: [
        { name: { $regex: query, $options: "i" } }, // Tìm theo tên bác sĩ (không phân biệt chữ hoa/thường)
        { chuyenkhoa: { $regex: query, $options: "i" } }, // Tìm theo chuyên khoa
      ],
    });
    return result;
  } catch (error) {
    console.error(error);
    return { status: false, message: "Lỗi truy xuất dữ liệu bác sĩ" };
  }
}

// Xuất tất cả các hàm
module.exports = {
  getNotification,
  updateAppointmentStatus,
  DoctorLogin,
  getAll,
  getAllId,
  addDoctor,
  deleteDoctor,
  updateDoctor,
  searchDoctors,
};
