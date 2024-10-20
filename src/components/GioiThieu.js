import React from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import "../style/gioithieu.css";

const GioiThieu = () => {
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
                    Giới thiệu
                  </li>
                </ol>
                <p className="title-main-content">GIỚI THIỆU KÊNH VOV – FM89MHz</p>
                <div className="about-area">
                  <p>
                    VOV - FM89MHz là một kênh chuyên biệt của Đài Tiếng nói Việt Nam được phủ sóng trên tần số FM89MHz. Vùng phủ sóng rộng bao gồm Hà Nội – Đồng bằng Bắc bộ, Đà Nẵng – Trung Trung Bộ, Thành phố Hồ Chí Minh – Đông Nam Bộ, và Cần Thơ – Tây Nam Bộ. Thời lượng phát 24h/24h.
                  </p>
                  <p>
                    <strong>Nội dung VOV - FM89:</strong> Là một kênh chuyên biệt về các vấn đề của xã hội được quan tâm: Sức khoẻ - Môi trường – Vệ sinh an toàn thực phẩm, chính vì vậy nội dung của kênh sẽ đi sâu khai thác các vấn đề trên.
                  </p>
                  <p>
                    <strong>Tôn chỉ VOV – FM89:</strong> Góp phần xây dựng xã hội phát triển an toàn và bền vững.
                  </p>
                  <ul>
                    <li>- Phản ánh trung thực và đầy đủ các vấn đề được toàn xã hội quan tâm trong lĩnh vực Sức khỏe - Môi trường - Vệ sinh an toàn thực phẩm.</li>
                    <li>- Cung cấp kịp thời các chủ trương, chính sách của nhà nước liên quan tới các lĩnh vực trên.</li>
                    <li>- Là một tác nhân giúp các tổ chức phát triển bền vững và lớn mạnh.</li>
                  </ul>
                  <p>
                    <strong>Mục tiêu VOV - FM89:</strong>
                  </p>
                  <p>
                    Hướng tới là một kênh truyền thông quan trọng của chính phủ, các bộ ban ngành và các tổ chức liên quan về các lĩnh vực Sức khoẻ - Môi trường – Vệ sinh an toàn thực phẩm. Là một kênh được đông đảo nhân dân, các tầng lớp xã hội theo dõi.
                  </p>
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

export default GioiThieu;
