import "../style/header.css";
import "../style/allstyle.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const [user, setUser] = useState(null);

  // Kiểm tra xem có thông tin người dùng trong localStorage hay không
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user"); // Xóa thông tin người dùng khi logout
    setUser(null); // Cập nhật trạng thái user về null
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
            {user ? (
              // Hiển thị tên người dùng và nút Logout nếu đã đăng nhập
              <>
                <li className="account-name">
                  Xin chào, {user.name}
                </li>
                <li className="logout">
                  <button onClick={handleLogout}>ĐĂNG XUẤT</button>
                </li>
              </>
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
