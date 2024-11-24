
import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../style/list_bsi.css"

const ListBacSi = () => {
  const doctors = [
    {
      id: 1,
      name: "Phó Giáo sư, Tiến sĩ Đinh Ngọc Sơn",
      image: "https://cdn.bookingcare.vn/fo/w256/2018/06/07/112614pho-giao-su-tien-si-dinh-ngoc-son.jpg",
      summary: "Bác sĩ có 25 năm kinh nghiệm về bệnh lý liên quan cột sống. Hiện là Trưởng khoa Phẫu thuật Cột sống, Bệnh viện Việt Đức. Bác sĩ nhận khám từ 7 tuổi trở lên.",
      location: "Hà Nội",
      fee: "150.000đ",
      department: "Cơ - Xương - Khớp",
      unit: "Việt Đức",
      link: "/dich-vu-y-te/kham-chuyen-khoa/pho-giao-su-tien-si-dinh-ngoc-son-i428?ck=1",
    },
    {
      id: 2,
      name: "Tiến sĩ, Bác sĩ Nguyễn Minh Hải",
      image: "https://cdn.bookingcare.vn/fo/w256/2020/06/05/133842bac-si-nguyen-minh-hai.jpg",
      summary: "Bác sĩ chuyên khoa về tim mạch với hơn 20 năm kinh nghiệm. Đang công tác tại Bệnh viện Đại học Y Hà Nội.",
      location: "Hà Nội",
      fee: "200.000đ",
      department: "Tim mạch",
      unit: "Đại học Y Hà Nội",
      link: "/dich-vu-y-te/kham-chuyen-khoa/ts-bac-si-nguyen-minh-hai-i530?ck=1",
    }
  ];

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col col-md-9 col-sm-12 col-xs-12">
            <ol className="breadcrumb">
              <li>
                <Link to="/">Trang chủ</Link>
              </li>
              <li className="active">Danh sách bác sĩ</li>
            </ol>

            <p className="title title-main-content">
              Danh sách bác sĩ <span className="border-bt"></span>
            </p>

            <div className="doctor-list">
              {doctors.map(doctor => (
                <div key={doctor.id} className="clinic-card">
                  <div className="clinic-card-container">
                    <div className="clinic-card-left">
                      <div className="clinic-image-container">
                        <a href={doctor.link} className="clinic-link">
                          <div className="clinic-image">
                            <img
                              src={doctor.image}
                              alt={doctor.name}
                            />
                          </div>
                        </a>
                        <a href={doctor.link} className="show-more-link">
                          <span className="show-more-text">Xem thêm</span>
                        </a>
                      </div>
                    </div>
                    <div className="clinic-card-right">
                      <a href={doctor.link} className="clinic-name">
                        <span className="clinic-title">{doctor.name}</span>
                      </a>
                      <div className="clinic-summary">
                        {doctor.summary}
                      </div>
                      <div className="clinic-location">
                        <svg className="location-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42">
                          <path fillRule="evenodd" d="M33 13.924C33 6.893 27.594 1 20.51 1S8 6.897 8 13.93C8 16.25 8.324 18 9.423 20h-.021l10.695 20.621c.402.551.824-.032.824-.032C20.56 41.13 31.616 20 31.616 20h-.009C32.695 18 33 16.246 33 13.924m-18.249-.396c0-3.317 2.579-6.004 5.759-6.004 3.179 0 5.76 2.687 5.76 6.004s-2.581 6.005-5.76 6.005c-3.18 0-5.759-2.687-5.759-6.005"></path>
                        </svg>
                        <div className="location-text">{doctor.location}</div>
                      </div>
                    </div>
                  </div>
                  <div className="clinic-card-footer">
                    <div className="clinic-address">
                      <div className="address-name">Khoa: {doctor.department}</div>
                      <div className="address-detail">Đơn vị: {doctor.unit}</div>
                    </div>
                    <div className="clinic-price">
                      <div className="price-header">
                        <span className="price-text">Phí khám: </span>
                        <span className="price-number">{doctor.fee}</span>
                      </div>
                      <button className="price-details-button">Xem chi tiết</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="col col-md-3 hidden-sm hidden-sm"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ListBacSi;
