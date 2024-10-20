import React from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

const ChinhSach = () => {
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
                <div className="about-area">
                  <div className="title" style={{ textAlign: "center" }}>
                    CHÍNH SÁCH BẢO MẬT THÔNG TIN -{" "}
                    <a href="/">WWW.VOVBACSI24.COM</a>
                  </div>
                  <p>
                    <b>
                      <i>1. Mục đích và phạm vi thu thập</i>
                    </b>
                  </p>
                  <p className="text_indent">
                    Việc thu thập dữ liệu chủ yếu trên Sàn giao dịch TMĐT{" "}
                    <a href="/">Vovbacsi24.com</a> bao gồm: email, điện thoại,
                    tên đăng nhập, mật khẩu đăng nhập, địa chỉ khách hàng (thành
                    viên). Đây là các thông tin mà{" "}
                    <a href="/">Vovbacsi24.com</a> cần thành viên cung cấp bắt
                    buộc khi đăng ký sử dụng dịch vụ và để{" "}
                    <a href="/">Vovbacsi24.com</a> liên hệ xác nhận khi khách
                    hàng đăng ký sử dụng dịch vụ trên website nhằm đảm bảo quyền
                    lợi cho cho người tiêu dùng.
                  </p>
                  <p className="text_indent">
                    Các thành viên sẽ tự chịu trách nhiệm về bảo mật và lưu giữ
                    mọi hoạt động sử dụng dịch vụ dưới tên đăng ký, mật khẩu và
                    hộp thư điện tử của mình. Ngoài ra, thành viên có trách
                    nhiệm thông báo kịp thời cho Sàn giao dịch TMĐT{" "}
                    <a href="/">Vovbacsi24.com</a> về những hành vi sử dụng trái
                    phép, lạm dụng, vi phạm bảo mật, lưu giữ tên đăng ký và mật
                    khẩu của bên thứ ba để có biện pháp giải quyết phù hợp.
                  </p>
                  <p>
                    <b>
                      <i>2. Phạm vi sử dụng thông tin</i>
                    </b>
                  </p>
                  <p className="text_indent">
                    {" "}
                    Sàn giao dịch TMĐT <a href="/">Vovbacsi24.com</a> sử dụng
                    thông tin thành viên cung cấp để:
                  </p>
                  <p className="text_indent">
                    - Cung cấp các dịch vụ đến Thành viên;
                  </p>
                  <p className="text_indent">
                    - Gửi các thông báo về các hoạt động trao đổi thông tin giữa
                    thành viên và Sàn giao dịch TMĐT{" "}
                    <a href="/">Vovbacsi24.com</a>;
                  </p>
                  <p className="text_indent">
                    - Ngăn ngừa các hoạt động phá hủy tài khoản người dùng của
                    thành viên hoặc các hoạt động giả mạo Thành viên;
                  </p>
                  <p className="text_indent">
                    - Liên lạc và giải quyết với thành viên trong những trường
                    hợp đặc biệt.
                  </p>
                  <p className="text_indent">
                    - Trong trường hợp có yêu cầu của pháp luật: Sàn giao dịch
                    TMĐT <a href="/">Vovbacsi24.com</a> có trách nhiệm hợp tác
                    cung cấp thông tin cá nhân thành viên khi có yêu cầu từ cơ
                    quan tư pháp bao gồm: Viện kiểm sát, tòa án, cơ quan công an
                    điều tra liên quan đến hành vi vi phạm pháp luật nào đó của
                    khách hàng. Ngoài ra, không ai có quyền xâm phạm vào thông
                    tin cá nhân của thành viên.
                  </p>

                  <p>
                    <b>
                      <i>3. Thời gian lưu trữ thông tin</i>
                    </b>
                  </p>
                  <p className="text_indent">
                    Dữ liệu cá nhân của Thành viên sẽ được lưu trữ cho đến khi
                    có yêu cầu hủy bỏ hoặc tự thành viên đăng nhập và thực hiện
                    hủy bỏ. Còn lại trong mọi trường hợp thông tin cá nhân thành
                    viên sẽ được bảo mật trên máy chủ của{" "}
                    <a href="/">Vovbacsi24.com</a>.
                  </p>

                  <p>
                    <b>
                      <i>
                        4. Địa chỉ của đơn vị thu thập và quản lý thông tin cá
                        nhân
                      </i>
                    </b>
                  </p>
                  <ul style={{ paddingLeft: "30px" }}>
                    <li>Công ty CP PT Mạng XH Việt Nam</li>
                    <li>
                      Trụ sở chính: Số 12, Ngõ 90, P Láng Hạ, Q Đống Đa, Hà Nội
                    </li>
                    <li>
                      Email:{" "}
                      <a href="mailto:cskh@vovbacsi24.com">
                        cskh@vovbacsi24.com
                      </a>
                    </li>
                  </ul>

                  <p>
                    <b>
                      <i>
                        5. Phương tiện và công cụ để người dùng tiếp cận và
                        chỉnh sửa dữ liệu cá nhân của mình.
                      </i>
                    </b>
                  </p>
                  <p className="text_indent">
                    Thành viên có quyền tự kiểm tra, cập nhật, điều chỉnh hoặc
                    hủy bỏ thông tin cá nhân của mình bằng cách đăng nhập vào
                    tài khoản và chỉnh sửa thông tin cá nhân hoặc yêu cầu{" "}
                    <a href="/">Vovbacsi24.com</a> thực hiện việc này.
                  </p>
                  <p className="text_indent">
                    {" "}
                    Thành viên có quyền gửi khiếu nại về việc lộ thông tin các
                    nhân cho bên thứ 3 đến Ban quản trị của Sàn giao dịch thương
                    mại điện tử <a href="/">Vovbacsi24.com</a>. Khi tiếp nhận
                    những phản hồi này, <a href="/">Vovbacsi24.com</a> sẽ xác
                    nhận lại thông tin, phải có trách nhiệm trả lời lý do và
                    hướng dẫn thành viên khôi phục và bảo mật lại thông tin.
                  </p>
                  <p className="text_indent">
                    {" "}
                    Email :{" "}
                    <a href="mailto:cskh@vovbacsi24.com">cskh@vovbacsi24.com</a>
                  </p>

                  <p>
                    <b>
                      <i>6. Cam kết bảo mật thông tin cá nhân khách hàng</i>
                    </b>
                  </p>
                  <p className="text_indent">
                    Thông tin cá nhân của thành viên trên{" "}
                    <a href="/">Vovbacsi24.com</a> được{" "}
                    <a href="/">Vovbacsi24.com</a> cam kết bảo mật tuyệt đối
                    theo chính sách bảo vệ thông tin cá nhân của{" "}
                    <a href="/">Vovbacsi24.com</a>. Việc thu thập và sử dụng
                    thông tin của mỗi thành viên chỉ được thực hiện khi có sự
                    đồng ý của khách hàng đó trừ những trường hợp pháp luật có
                    quy định khác.
                  </p>
                  <p className="text_indent">
                    Không sử dụng, không chuyển giao, cung cấp hay tiết lộ cho
                    bên thứ 3 nào về thông tin cá nhân của thành viên khi không
                    có sự cho phép đồng ý từ thành viên.
                  </p>
                  <p className="text_indent">
                    Trong trường hợp máy chủ lưu trữ thông tin bị hacker tấn
                    công dẫn đến mất mát dữ liệu cá nhân thành viên,{" "}
                    <a href="/">Vovbacsi24.com</a> sẽ có trách nhiệm thông báo
                    vụ việc cho cơ quan chức năng điều tra xử lý kịp thời và
                    thông báo cho thành viên được biết.
                  </p>
                  <p className="text_indent">
                    Ban quản lý <a href="/">Vovbacsi24.com</a> không chịu trách
                    nhiệm cũng như không giải quyết mọi khiếu nại có liên quan
                    đến quyền lợi của thành viên đó nếu xét thấy tất cả thông
                    tin cá nhân của thành viên đó cung cấp khi đăng ký ban đầu
                    là không chính xác.
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

export default ChinhSach;
