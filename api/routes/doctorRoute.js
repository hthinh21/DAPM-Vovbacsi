const doctorModel = require("../models/doctorModel");
const doctorController = require("../controllers/doctorControllers");
const { DoctorLogin,getNotification,updateAppointmentStatus } = require("../controllers/doctorControllers");
const express = require("express");
const router = express.Router();


router.post("/login",DoctorLogin);
router.get("/notifications/:id", getNotification);
router.put("/updateAppointment/:id", updateAppointmentStatus);
router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const doctor = await doctorModel.findById(id);

    return response.status(200).json(doctor);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});
// router.get("/:id", async (req, res) => {
//   const { doctorId } = req.params;
//   try {
//     const doctor = await doctorController.getById(doctorId);
//     return res.status(200).json(doctor);
//   } catch (error) {
//     console.error("Error fetching doctor details:", error);
//     return res.status(500).json({ status: false, message: "Lỗi hệ thống" });
//   }
// });


//lấy ds bác sĩ
router.get("/", async (req, res) => {
  try {
    const result = await doctorController.getAll();
    return res.status(200).json({ status: true, result });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: false, message: "Lỗi hệ thống" });
  }
});

//Route tìm kiếm bác sĩ
router.get("/search", async (req, res) => {
  const query = req.query.q; // Lấy query từ tham số URL
  if (!query) {
    return res
      .status(400)
      .json({ status: false, message: "Thiếu tham số tìm kiếm" });
  }
  try {
    const result = await doctorController.searchDoctors(query);
    return res.status(200).json({ status: true, result });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: false, message: "Lỗi hệ thống" });
  }
});

//lấy id bác sĩ
router.get("/:id", async (req, res) => {
    try {
      const result = await doctorController.getAllId(req.params.id);
      if (result) {
        return res.status(200).json({ status: true, result });
      } else {
        return res
          .status(404)
          .json({ status: false, message: "Không tìm thấy bác sĩ" });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ status: false, message: "Lỗi hệ thống" });
    }
  });
  //Thêm bác sĩ theo id
  router.post("/", async (req, res) => {
    try {
      const result = await doctorController.addDoctor(req.body);
      if (result.status) {
        return res.status(201).json({ status: true, result: result.result });
      } else {
        return res.status(400).json({ status: false, message: result.message });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ status: false, message: "Lỗi hệ thống" });
    }
  });
  //Xóa bác sĩ theo id
  router.delete("/:id", async (req, res) => {
    try {
      const result = await doctorController.deleteDoctor(req.params.id);
      if (result.status) {
        return res.status(200).json({ status: true, message: result.message });
      } else {
        return res.status(400).json({ status: false, message: result.message });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ status: false, message: "Lỗi hệ thống" });
    }
  });
  
  //Cập nhật bác sĩ theo id
  router.put("/:id", async (req, res) => {
    try {
      const result = await doctorController.updateDoctor(req.params.id, req.body);
      if (result.status) {
        return res.status(200).json({ status: true, result: result.result });
      } else {
        return res.status(404).json({ status: false, message: result.message });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ status: false, message: "Lỗi hệ thống" });
    }
  });

  
module.exports = router;
