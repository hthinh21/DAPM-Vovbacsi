import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import Cookies from "js-cookie";
// css
import "../style/login.css";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3000/doctors/login",
        { email, password },
        { withCredentials: true }
      )
      .then((result) => {
        if (result.data.message === "Đăng nhập thành công") {
          const { doctorId } = result.data;
          const { token } = result.data;

          // localStorage.setItem("userInfo", JSON.stringify(user));
          Cookies.set("userId", doctorId, { expires: 1 / 24 });
          Cookies.set("token", token, { expires: 1 / 24 });
          console.log(result.data);

          enqueueSnackbar("Đăng nhập thành công", { variant: "success" });
          navigate("/doctors/home");
        } else {
          enqueueSnackbar(result.data.message, { variant: "error" });
        }
      })
      .catch((err) => {
        console.log(err);
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
      
      <div className="login-container">
        <img
          src=" https://vovbacsi24.com/img/img_skin/logo_new.png"
          alt="Logo"
        />
        <h2>BÁC SĨ</h2>
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
