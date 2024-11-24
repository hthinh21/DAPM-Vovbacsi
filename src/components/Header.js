import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import { useSnackbar } from "notistack";
import "../style/header.css";
import "../style/allstyle.css";


const Header = () => {
  const [name, setName] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const userId = Cookies.get("userId");

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      if (!userId) return;

      try {
        const response = await axios.get(
          `http://localhost:3000/users/${userId}`
        );

        const user = response.data;
        setName(user.name);
        setLoggedInUser(user);
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };

    fetchUserData();
  }, [userId]);

  const handleLogout = () => {
    Cookies.remove("userId");
    enqueueSnackbar("Đăng xuất thành công", { variant: "success" });
    navigate("/");
  };

  return (
    <div className="header">
      <div className="nav-bar">
        <img
          src="https://vovbacsi24.com/img/img_skin/logo_new.png"
          alt="#"
          height="58px"
        />

        <ul className="navbar-left">
          <li className="trChu">
            <Link to="/">TRANG CHỦ</Link>
          </li>
          <li className="capCuu">
            <Link to="/sos">CẤP CỨU</Link>
          </li>
          <li className="gioiThieu">
            <button
              className="dropdown-toggle"
              onClick={toggleDropdown}
              aria-expanded={isDropdownOpen}
            >
              GIỚI THIỆU <span className="caret"></span>
            </button>
            {isDropdownOpen && (
              <ul className="dropdown-menu show">
                <li>
                  <Link to="/gioithieu">Giới thiệu chung</Link>
                </li>
                <li>
                  <Link to="/huongdan">Hướng dẫn sử dụng</Link>
                </li>
                <li>
                  <Link to="/quyche">Quy chế hoạt động</Link>
                </li>
                <li>
                  <Link to="/chinhsach">Chính sách bảo mật thông tin</Link>
                </li>
                <li>
                  <Link to="/coche">Cơ chế giải quyết tranh chấp</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>

        <ul className="navbar-right">
          {loggedInUser ? (
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {name}
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to={`/users/${userId}`}>
                    Thông tin tài khoản
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/notifications">
                    Thông báo
                  </Link>
                </li>
                <li>
                  <button className="dropdown-item" onClick={handleLogout}>
                    Đăng xuất
                  </button>
                </li>
              </ul>
            </li>
          ) : (
            <>
              <li className="dKy">
                <Link to="/register">ĐĂNG KÝ</Link>
              </li>
              <li className="dNhap">
                <Link to="/login">ĐĂNG NHẬP</Link>
              </li>
              <li className="link-bsi">
                <Link to="/doctor/login">DÀNH CHO BÁC SĨ</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
