const usermodels = require('../models/user.js');
const authMiddleware = require('../middleware/authMiddleware.js');
const generateToken = require('../utils/generateToken.js');
const Notify = require('../models/notifyModel');
// controllers/userControllers.js
    const updateUserProfile = async (req, res) => {
    try {
      const { id } = req.params;

      // Tìm kiếm người dùng theo ID
      const user = await usermodels.findById(id);
      if (!user) {
        return res.status(404).json({ message: "Không tìm thấy người dùng" });
      }

      // Cập nhật thông tin người dùng
      user.name = req.body.name || user.name;
      user.password = req.body.password || user.password;
      if (req.file) {
        user.avatar = req.file.buffer.toString('base64'); // Lưu avatar từ buffer
      }

      // Lưu lại người dùng đã cập nhật
      await user.save();

      return res.status(200).json({ message: "Cập nhật thông tin thành công", user });
    } catch (error) {
      console.error(error.message);
      return res.status(500).send({ message: error.message });
    }
    };

    const loginUser = async (req, res) => {
      const { email, password } = req.body;
    
      try {
        const user = await usermodels.findOne({ email: email });
    
        if (!user) {
          return res.status(404).json({ message: "Tài khoản không tồn tại" });
        }
    
        if (user.password !== password) {
          return res.status(400).json({ message: "Sai tài khoản hoặc mật khẩu" });
        }
    
        // Tạo và lưu token vào cookie
        generateToken(user._id, res);
    
        // Gửi phản hồi kèm thông tin người dùng và token
        return res.status(200).json({
          message: "Đăng nhập thành công",
          userId: user._id, // Bao gồm userId ở đây // Bao gồm token nếu cần
          user: { name: user.name, email: user.email },
        });
      } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({ message: "Đã có lỗi xảy ra", error: error.message });
      }
    };
    const getNotification = async (req, res) => {
      const { id } = req.params;
    
      try {
        const notifications = await Notify.find({ user: id })
          .populate("user") 
          .populate("appointment")
          .populate("doctor") 
          .sort({ createdAt: -1 }); 
    
        res.status(200).json({ notifications });
      } catch (error) {
        console.error("Lỗi khi lấy danh sách thông báo:", error);
        res.status(500).json({ message: "Lỗi khi lấy danh sách thông báo." });
      }
    };
    

module.exports ={
  updateUserProfile,
  loginUser,
  getNotification,
}

