import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { useSnackbar } from "notistack";

// css
import "../style/login.css";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data.message === "Đăng nhập thành công") {
          const user = {
            name: result.data.user.name,
            email: result.data.user.email,
          };
          localStorage.setItem("user", JSON.stringify(user));
          enqueueSnackbar("Đăng nhập thành công", { variant: "success" });
          navigate("/");
        } else {
          enqueueSnackbar(result.data.message, { variant: "error" });
          setErrorMessage(result.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage("Đã xảy ra lỗi, vui lòng thử lại sau");
      });
  };
  //   const handleLogin = () => {
  //     axios
  //     .get(`http://localhost:1324/users/username/${username}`)
  //     .then((response) => {
  //         setUser(response.data);
  //         setLoading(false);
  //         if(!(password === user.password)){
  //             enqueueSnackbar('Sai mật khẩu', { variant: 'error' });
  //         }
  //         else{
  //             enqueueSnackbar('Đăng nhập thành công', { variant: 'success' });
  //             navigate('/users/list');
  //         }
  //     })
  //     .catch((error) => {
  //         enqueueSnackbar('Người dùng không tồn tại', { variant: 'error' });
  //     });
  // }

  useEffect(() => {
    document.body.classList.add("login-background");
    return () => {
      document.body.classList.remove("login-background");
    };
  }, []);
  return (
    <>
      {/* <Header /> */}
      <div className="login-container">
        <img
          src=" https://vovbacsi24.com/img/img_skin/logo_new.png"
          alt="Logo"
        />
        <h2>Đăng nhập</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              // id="email"
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
            <button type="submit">Đăng nhập</button>
          </div>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}{" "}
        {/* Hiển thị lỗi */}
        <div className="link">
          <a href="/user/forget-password">Quên mật khẩu?</a>
          <br />
          <Link to="/register" style={{ fontSize: "17px" }}>
            Đăng ký tài khoản
          </Link>
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
}
export default Login;
