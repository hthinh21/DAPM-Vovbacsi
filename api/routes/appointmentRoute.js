const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const appointmentController = require("../controllers/appointmentControllers");
const { createAppointment } = require("../controllers/appointmentControllers");
const authMiddleware = require("../middleware/authMiddleware.js");

const { getAllApointment } = require("../controllers/appointmentControllers.js");

router.post("/:id", createAppointment);
router.get("/appointment/:id",getAllApointment);
// //Route to get all appointment
// router.get("/", async (req,res) => {
//     try {
//         const result = await appointmentController.getAllApointment();
//         return res.status(200).json({ status: true, result });
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({ status: false, message: "Lỗi hệ thống" });
//     }
// })

// Route để đặt lịch hẹn
// router.post("/", async (req, res) => {
//     const appointmentData = req.body; // Lấy dữ liệu lịch hẹn từ request body
//     try {
//       const result = await appointmentController.createAppointment(appointmentData);
//       return res.status(200).json(result);
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ status: false, message: "Lỗi hệ thống" });
//     }
//   });

module.exports=router;