import "../style/header.css";
import "../style/allstyle.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo) {
      setLoggedInUser(userInfo); 
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userInfo"); 
    setLoggedInUser(null); 
    navigate("/")
  };

  return (
    <>
      <div className="header">
        <div className="nav-bar">
          <img
            src="https://vovbacsi24.com/img/img_skin/logo_new.png"
            alt="#"
            height="58px"
          />
          <ul className="navbar-left">
            <li className="trChu">
              <a href="/">TRANG CHỦ</a>
            </li>
            <li className="capCuu">
              <a href="sos">CẤP CỨU</a>
            </li>
            <li className="gioiThieu">
              <a
                href="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="true"
              >
                GIỚI THIỆU<span className="caret"></span>
              </a>
            </li>
          </ul>
          <ul className="navbar-right">
          {loggedInUser ? (
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {loggedInUser.name} {/* Hiển thị tên người dùng */}
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/profile">Thông tin tài khoản</Link></li>
                  <li><button className="dropdown-item" onClick={handleLogout}>Đăng xuất</button></li>
                </ul>
              </li>
            ) : (
              // Hiển thị nút Đăng ký và Đăng nhập nếu chưa đăng nhập
              <>
                <li className="dKy">
                  <Link to="/register">ĐĂNG KÝ</Link>
                </li>
                <li className="dNhap">
                  <Link to="/login">ĐĂNG NHẬP</Link>
                </li>
              </>
            )}
          </ul>
            
          
        </div>
      </div>
    </>
  );
};

export default Header;
