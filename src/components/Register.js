import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
// css
import "../style/register.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import Login from "./Login";

// const Register = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const { enqueueSnackbar } = useSnackbar();

//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post("http://localhost:3000/register", { name, email, password })
//       .then((result) => {
//         console.log(result);
//         enqueueSnackbar("Đăng ký thành công", { variant: "success" });
//         navigate("/login");
//       })
//       .catch((err) => console.log(err));
//   };

  function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const { enqueueSnackbar } = useSnackbar(); // Khai báo enqueueSnackbar
    const navigate = useNavigate();
    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:3000/register', { email, password, name })
        .then(response => {
          console.log("Đăng ký thành công!", response.data);
          enqueueSnackbar("Đăng ký thành công!", {variant: "success"});
          navigate("/login");
        })
        .catch(error => {
          if (error.response) {
            console.error("Lỗi:", error.response.data.message);
            enqueueSnackbar(error.response.data.message, {variant: "error"});
          } else {
            console.error("Lỗi không xác định:", error.message);
            enqueueSnackbar("Đã xảy ra lỗi không xác định.", {variant: "error"});
          }
        });
    }
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
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    // id="email"
                    placeholder="Tên"
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    // id="confirm_password"
                    placeholder="Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    // id="password"
                    placeholder="Mật khẩu"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <button type="submit">Đăng ký</button>
                </div>
              </form>
              <div className="link">
                <Link to="/login">Đăng ký tài khoản</Link>
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
