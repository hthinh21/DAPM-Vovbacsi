import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
// css
import "../style/register.css";

const Register = () => {
  // useEffect(() => {
  //   document.body.classList.add("register-background");
  //   return () => {
  //     document.body.classList.remove("register-background");
  //   };
  // }, []);
  return (
    <>
      <Header />

      <div className="main-content-register">
        <section>
          <div className="container">
            <div className="register-container">
              <img
                src="https://vovbacsi24.com/img/img_skin/logo_new.png"
                alt="Logo"
              />
              <h2>Đăng ký</h2>
              <form
                action="/api/user/register"
                method="post"
                id="form_register"
              >
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
                  <input
                    type="password"
                    name="confirm_password"
                    id="confirm_password"
                    placeholder="Xác nhận mật khẩu"
                    required
                  />
                </div>
                <div className="form-group">
                  <button type="submit">Đăng ký</button>
                </div>
              </form>
              <div className="link">
                <a href="/public/login.html">Quay lại đăng nhập</a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};
export default Register;
