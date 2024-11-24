const userRoute = require("./routes/userRoute.js");
const doctorRoute = require("./routes/doctorRoute.js");
const appointmentRoute = require("./routes/appointmentRoute.js");
const express = require("express");
const usermodels = require("./models/user.js");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const { loginUser } = require("./controllers/userControllers.js");
require('dotenv').config();
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:3001', // Cho phép frontend từ localhost:3001
  methods: ['GET', 'POST', 'PUT'],
  credentials: true
}));

app.use(express.json());
app.use("/users", userRoute);
app.use("/doctors",doctorRoute);
app.use("/AppointmentDoctor", appointmentRoute);
// app.use("/login",loginUser);
// app.use(cors());

mongoose.connect("mongodb+srv://thinh:asd@dapm-vovbacsi.q1ehm.mongodb.net/vovbacsi?retryWrites=true&w=majority&appName=DAPM-Vovbacsi");

// app.use("/users",userRoute)

app.post("/login",loginUser);

// app.post("/register", (req, res) => {
//     usermodels
//       .create(req.body)
//       .then((users) => res.json(users))
//       .catch((err) => res.json(err));
  
//   });
app.post("/register", (req, res) => {
  const { email } = req.body;

  // Kiểm tra xem email đã tồn tại hay chưa
  usermodels.findOne({ email: email })
    .then(existingUser => {
      if (existingUser) {
        // Nếu email đã tồn tại, trả về thông báo lỗi
        return res.status(400).json({ message: "Email đã được đăng ký" });
      } else {
        // Nếu email chưa tồn tại, tiến hành tạo người dùng mới
        usermodels
          .create(req.body)
          .then((user) => res.status(201).json(user)) // Trả về thông tin người dùng mới tạo
          .catch((err) => res.status(500).json({ message: "Lỗi khi tạo tài khoản", error: err }));
      }
    })
    .catch(err => res.status(500).json({ message: "Lỗi server", error: err }));
});


const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });