const express = require("express");
const usermodels = require("./models/user.js");
const cors = require("cors");
const { default: mongoose } = require("mongoose");

const app = express();
app.use(express.json());
// app.use(cors());
app.use(cors({
  origin: 'http://localhost:3001', // Cho phép frontend từ localhost:3001
  methods: ['GET', 'POST'],
}));
mongoose.connect("mongodb://127.0.0.1:27017/account");

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  usermodels.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password) {         
          res.json({ message: "Đăng nhập thành công", user: { name: user.name, email: user.email } });
        } else {
          res.json({ message: "Sai tài khoản hoặc mật khẩu" });
        }
      } else {
        res.json({ message: "Tài khoản không tồn tại" });
      }
    })
    .catch(err => res.status(500).json({ message: "Lỗi server" }));
});

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