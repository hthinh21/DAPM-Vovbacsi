import React, { useEffect } from "react";

// css
import "../style/login.css";

const Login = () => {
  useEffect(() => {
    document.body.classList.add("login-background");
    return () => {
      document.body.classList.remove("login-background");
    };
  }, []);
  return (
    <>
      <div className="login-container">
        <img
          src=" https://vovbacsi24.com/img/img_skin/logo_new.png"
          alt="Logo"
        />
        <h2>Đăng nhập</h2>
        <form action="/api/user/login-ver2" method="post" id="form_regist">
          <div className="form-group">
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Số điện thoại"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Mật khẩu"
              required
            />
          </div>
          <div className="form-group">
            <button type="submit">Đăng nhập</button>
          </div>
        </form>
        <div className="link">
          <a href="/user/forget-password">Quên mật khẩu?</a>
          <br />
          <a href="/public/register.html" style={{ fontSize: "17px" }}>
            Đăng ký tài khoản
          </a>
        </div>
        <div className="instructions">
          * Bạn cần sử dụng trình duyệt Firefox, Chrome version mới nhất (Khuyến
          nghị sử dụng Chrome).
          <br />
          * Hãy chắc chắn bạn đang có camera, microphone và loa.
          <br />* Máy tính cần phải được kết nối đường truyền internet tốc độ
          cao và ổn định cho chức năng Video call.
        </div>
      </div>
    </>
  );
};
export default Login;
