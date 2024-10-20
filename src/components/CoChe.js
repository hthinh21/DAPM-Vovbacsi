import React from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

const CoChe = () => {
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
                    Cơ chế
                  </li>
                </ol>
                <div className="about-area">
                  <div className="title" style={{ textAlign: "center" }}>
                    QUY TRÌNH HỖ TRỢ GIẢI QUYẾT KHIẾU NẠI/ PHẢN ÁNH
                  </div>

                  <p className="text_indent">
                    <a href="/">Vovbacsi24.com</a> và Người nhận tư vấn có trách
                    nhiệm tiếp nhận khiếu nại và hỗ trợ Người được tư vấn liên
                    quan đến giao dịch tại website{" "}
                    <a href="/">Vovbacsi24.com</a>.
                  </p>
                  <p className="text_indent">
                    Khi phát sinh tranh chấp, Công ty đề cao giải pháp thương
                    lượng, hòa giải giữa các bên nhằm duy trì sự tin cậy của
                    thành viên vào chất lượng dịch vụ của{" "}
                    <a href="/">Vovbacsi24.com</a> và thực hiện theo các bước
                    sau:
                  </p>

                  <ul style={{ paddingLeft: "40px", lineHeight: "27px" }}>
                    <li>
                      Bước 1:Thành viên Người được tư vấn khiếu nại về dịch vụ
                      của Người nhận tư vấn qua{" "}
                      <a href="mailto:cskh@vovbacsi24.com">
                        cskh@vovbacsi24.com
                      </a>
                      .
                    </li>
                    <li>
                      Bước 2: Bộ phận Chăm Sóc Khách Hàng của{" "}
                      <a href="/">Vovbacsi24.com</a> sẽ tiếp nhận các khiếu nại
                      của thành viên người mua, tùy theo tính chất và mức độ của
                      khiếu nại thì bên <a href="/">Vovbacsi24.com</a> sẽ có
                      những biện pháp cụ thể hỗ trợ Người được tư vấn để giải
                      quyết tranh chấp đó.
                    </li>
                    <li>
                      Bước 3: Trong trường hợp nằm ngoài khả năng và thẩm quyền
                      của <a href="/">Vovbacsi24.com</a> thì ban quản trị sẽ yêu
                      cầu Người được tư vấn đưa vụ việc này ra cơ quan nhà nước
                      có thẩm quyền giải quyết theo pháp luật.
                    </li>
                  </ul>

                  <p></p>
                  <p>
                    <b>
                      <i>Người mua gửi khiếu nại tại địa chỉ :</i>
                    </b>
                  </p>
                  <p>
                    <b>Công ty CP PT Mạng XH Việt Nam</b>
                  </p>
                  <p>
                    <b>Địa chỉ: Số 12, Ngõ 90, P Láng Hạ, Q Đống Đa, Hà Nội</b>
                  </p>
                  <p>
                    <b>Hotline: 19001289</b>
                  </p>
                  <p>
                    <b>
                      Email:{" "}
                      <a href="mailto:cskh@vovbacsi24.com">
                        cskh@vovbacsi24.com
                      </a>
                    </b>
                  </p>

                  <p className="text_indent">
                    Khách hàng có thể gửi thông tin khiếu nại trực tiếp theo
                    thông tin tại mục “Liên hệ”. Thông tin của khách hàng sẽ
                    được gửi đến ban quản trị <a href="/">Vovbacsi24.com</a>.
                    Trong thời gian sớm nhất có thể ban quản trị{" "}
                    <a href="/">Vovbacsi24.com</a> sẽ có email phản hồi lại ý
                    kiến phản ánh của khách hàng.
                  </p>

                  <p className="text_indent">
                    <a href="/">Vovbacsi24.com</a> tôn trọng và nghiêm túc thực
                    hiện các quy định của pháp luật về bảo vệ quyền lợi của
                    Người được tư vấn. Vì vậy, đề nghị các thành viên đăng tin
                    trên sàn cung cấp đầy đủ, chính xác, trung thực và chi tiết
                    các thông tin liên quan. Mọi hành vi lừa đảo, gian lận trong
                    kinh doanh đều bị lên án và phải chịu hoàn toàn trách nhiệm
                    trước pháp luật.
                  </p>

                  <p className="text_indent">
                    Các bên bao gồm Người nhận tư vấn, Người được tư vấn sẽ phải
                    có vai trò trách nhiệm trong việc tích cực giải quyết vấn
                    đề. Đối với Người nhận tư vấn cần có trách nhiệm cung cấp
                    văn bản giấy tờ chứng thực thông tin liên quan đến sự việc
                    đang gây mâu thuẫn cho khách hàng. Đối với{" "}
                    <a href="/">Vovbacsi24.com</a> sẽ có trách nhiệm cung cấp
                    những thông tin liên quan đến Người được tư vấn và Người
                    nhận tư vấn nếu được Người được tư vấn hoặc Người nhận tư
                    vấn (liên quan đến tranh chấp đó) yêu cầu.
                  </p>

                  <p className="text_indent">
                    Tùy theo mức độ vi phạm của Người nhận tư vấn, Ban quản trị
                    sẽ quyết định gỡ bỏ toàn bộ tin rao của Người nhận tư vấn
                    đó, đồng thời sẽ chấm dứt quyền thành viên.
                  </p>

                  <p className="text_indent">
                    Nếu thông qua hình thức thỏa thuận mà vẫn không thể giải
                    quyết được mâu thuẫn phát sinh từ giao dịch giữa 2 bên Người
                    được tư vấn, Người nhận tư vấn, thì một trong 2 bên Người
                    được tư vấn và Người nhận tư vấn sẽ có quyền nhờ đến cơ quan
                    pháp luật có thẩm quyền can thiệp nhằm đảm bảo lợi ích hợp
                    pháp của các bên, nhất là cho khách hàng.
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

export default CoChe;
