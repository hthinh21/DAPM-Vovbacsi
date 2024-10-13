import React from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import "../style/capcuu.css";

const CapCuu = () => {
  // Thành phần cho mỗi mục cấp cứu
  const CapCuuItem = ({ id, title }) => (
    <div className="capcuu-01">
      <div className="content">
        <span className="glyphicon glyphicon-menu-right"></span>
        {/* <a href={`/sos/sos-detail?sos_id=${id}`} className="title">
          {title}
        </a> */}
        <Link to={`/sos/sos-detail?sos_id=${id}`} className="title">
        {title}
      </Link>
        
      </div>
    </div>
  );

  const capCuuItems = [
    { id: 1, title: "Cấp cứu bệnh nhân tai biến mạch máu não" },
    { id: 2, title: "Cấp cứu bệnh nhân sốc phản vệ do dị ứng thuốc" },
    { id: 3, title: "Cấp cứu người bị đột quỵ" },
    { id: 4, title: "Sơ cứu xử lý đúng cách khi trẻ bị hóc dị vật" },
    { id: 5, title: "Cách sơ cứu khi bị kiến ba khoang đốt" },
  ];
  return (
    <>
      <Header />
      <div className="home">
        <div className="main-content">
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <Link to="/">Trang chủ</Link>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Cấp cứu
                  </li>
                </ol>
                <p className="title-main-content">CẤP CỨU</p>
                <div className="capcuu-list">
                  {capCuuItems.map((item) => (
                    <CapCuuItem key={item.id} id={item.id} title={item.title} />
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

export default CapCuu;
