const jwt = require("jsonwebtoken");
const user = require("../models/user");

 const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    

    if (!token) return res.status(403).json({ message: "Không xác thực" });

    const decodedData = jwt.verify(token, process.env.JWT_SEC);
    console.log("Decoded Data:", decodedData);
    if (!decodedData)
      return res.status(400).json({
        message: "Token hết hạn",
      });

      const foundUser = await user.findById(decodedData.id);
      console.log("Found User:", foundUser);
      if (!foundUser)
        return res.status(404).json({
          message: "Người dùng không tồn tại",
        });
    
    req.userId = decodedData.id;

    next();
  } catch (error) {
    res.status(500).json({
      
      message: "Vui lòng đăng nhập lại"
    });
  }
};

module.exports = authMiddleware;