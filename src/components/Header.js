import React, { useState } from "react";

import "../style/header.css";
import "../style/allstyle.css";
import { Link } from "react-router-dom";



const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
    
  return (
    <>
      <div className="header">
        <div className="nav-bar">
          <img
            src="https://vovbacsi24.com/img/img_skin/logo_new.png "
            alt="#"
            height="58px"
          ></img>
          <ul className="navbar-left">
            <li className="trChu">
              {" "}
              <Link to="/">TRANG CHỦ</Link>
            </li>
            <li className="capCuu">
              {" "}
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
            <li className="dKy">
              <Link to="/register">ĐĂNG KÝ</Link>
            </li>
            <li className="dNhap">
              <Link to="/login">ĐĂNG NHẬP</Link>
            </li>
            <div className="link-bsi">
              <a href="/doctor">Dành cho bác sĩ</a>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;
