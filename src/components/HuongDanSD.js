import React from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";


import "../style/huongdansd.css";

const HuongDanSD = () => {
  // Thành phần cho mỗi mục hướng dẫn sử dụng
  const HuongDanItem = ({ id, title }) => (
    <div className="huongdan-01">
      <div className="content">
        <span className="glyphicon glyphicon-menu-right"></span>
        <Link to={`/guideline/guideline-detail?guideline_id=${id}`} className="title">
          {title}
        </Link>
      </div>
    </div>
  );

  const huongDanItems = [
    { id: 28, title: "Giới thiệu chung" },
    { id: 29, title: "Cài đặt và cách sử dụng ban đầu" },
    { id: 30, title: "Đăng ký mới tài khoản" },
    { id: 31, title: "Đăng nhập và đăng xuất tài khoản" },
    { id: 32, title: "Sử dụng ứng dụng tốt nhất trên thiết bị nào?" },
    { id:33, title: "Quản lý thông tin cá nhân" },
    { id: 34, title: "Cách đăng ký tư vấn khám" },
    { id: 35, title: "Thực hiện tư vấn khám với bác sĩ" },
    { id: 36, title: "Xem lịch sử tư vấn" },
    { id: 37, title: "Cách nạp tiền vào tài khoản" },
    { id: 38, title: "Chia sẻ với bạn bè về ứng dụng" },
    { id: 39, title: "Tại sao tôi đăng ký tư vấn khám với bác sĩ không được" },
    { id: 40, title: "Tại sao tôi nạp tiền vào tài khoản không được" },
  ];

  return (
    <>
      <Header />
      <div className="home">
        <div className="main-content">
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Trang chủ</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Hướng dẫn sử dụng
                  </li>
                </ol>
                <p className="title-main-content">HƯỚNG DẪN SỬ DỤNG</p>
                <div className="huongdan-list">
                  {huongDanItems.map((item) => (
                    <HuongDanItem key={item.id} id={item.id} title={item.title} />
                  ))}
                </div>
              </div>
              <div className="col-md-3 hidden-sm hidden-xs">
                <p>tin tức</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HuongDanSD;
