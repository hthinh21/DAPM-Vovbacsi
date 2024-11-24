import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineBell } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import Cookies from "js-cookie";

const Navbar = () => {
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  const userId = Cookies.get("userId");

  const toggleAccountMenu = () => {
    setIsAccountMenuOpen(!isAccountMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3">
      {/* Logo */}
      <Link to="/doctors/home" className="navbar-brand">
        Bác sĩ
      </Link>

      {/* Mobile Toggle Button */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navbar Items */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Trang Chủ
            </Link>
          </li>
          
          
        </ul>

        {/* Notification and Account Section */}
        <div className="d-flex align-items-center">
        

          {/* Account Dropdown */}
          <div className="dropdown">
            <button
              className="btn btn-link text-white dropdown-toggle d-flex align-items-center"
              onClick={toggleAccountMenu}
              type="button"
              id="dropdownAccountMenu"
              data-bs-toggle="dropdown"
              aria-expanded={isAccountMenuOpen}
            >
              <FaUserCircle size={24} className="me-2" />
              <span className="d-none d-lg-inline">Tài khoản</span>
            </button>
            <ul
              className={`dropdown-menu dropdown-menu-end ${
                isAccountMenuOpen ? "show" : ""
              }`}
              aria-labelledby="dropdownAccountMenu"
            >
              <li>
                <Link to={`/users/${userId}`} className="dropdown-item">
                  Thông tin cá nhân
                </Link>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => alert("Đăng xuất thành công!")}
                >
                  Đăng xuất
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
