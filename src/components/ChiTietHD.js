import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

import "../style/chitiethd.css";

const ChiTietHD = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const guidelineId = queryParams.get("guideline_id");

  // Kiểm tra giá trị guidelineId
  console.log("Guideline ID:", guidelineId);

  const huongdanData = {
    28: {
      title: "CHI TIẾT HƯỚNG DẪN SỬ DỤNG",
      content: (
        <div className="capcuu-detail">
          <div className="content">
            <div className="caption">
              <p>
                Ứng dụng VOV BACSI24 là ứng dụng dành cho Bệnh nhân, sử dụng
                trong hệ thống Tư vấn khám chữa bệnh trực tuyến VOV BACSI24, cho
                phép bệnh nhân có thể tìm kiếm bác sĩ nổi tiếng và đăng ký tư
                vấn khám chữa bệnh bằng video call từ bác sĩ ở mọi lúc mọi nơi.
                Ứng dụng này là một kênh quan trọng để bệnh nhân có thể tìm đến
                bác sĩ, nhận tư vấn từ bác sĩ mà không tốn nhiều công sức hoặc
                thời gian xếp hàng chờ đợi ở bệnh viện.
                <br />
                &nbsp;
                <br />
                (*) ƯU ĐIỂM NỔI BẬT:
                <br />
                - Dễ dàng tìm kiếm đến các bác sĩ hàng đầu
                <br />
                - Đăng ký tư vấn khám chữa bệnh mọi lúc mọi nơi.
                <br />
                - Thanh toán chi phí tư vấn khám dễ dàng nhanh chóng
                <br />
                - Nạp tiền vào tài khoản dễ dàng qua thẻ cào, các dịch vụ nạp
                tiền của các ngân hàng.
                <br />
                <br />
                (*) ĐIỀU KIỆN SỬ DỤNG:
                <br />
                Bệnh nhân cần kiểm tra kết nối internet để đảm bảo bác sĩ có thể
                gọi video call đến bất cứ lúc nào.
                <br />
                &nbsp;
              </p>
            </div>
          </div>
        </div>
      ),
    },
    29: {
      title: "CHI TIẾT HƯỚNG DẪN SỬ DỤNG",
      content: (
        <>
          <div className="caption">
            <p>
              Bệnh nhân có thể cài đặt ứng dụng VOV BACSI24 từ App Store (cho
              máy iPhone, iPad) và Google Play (cho máy Android). Với máy
              iPhone, cần hệ điều hành OS từ phiên bản 12.0 trở lên. Với máy
              Android, cần hệ điều hành OS từ phiên bản 8.0 trở lên.
              <br />
              <br />
              <strong>(*) VỚI MÁY IPHONE/IPAD:</strong>
              <br />
              1. Trên thiết bị, mở ứng dụng <strong>App Store</strong> và chọn
              menu <strong>Search</strong>.
              <br />
              2. Ấn ô nhập từ tìm kiếm phía trên, gõ chữ{" "}
              <strong>VOV BACSI24</strong> và ấn nút <strong>Search</strong>.
              <br />
              3. Trong danh sách kết quả tìm kiếm, ấn vào ảnh có chữ{" "}
              <strong>VOV BACSI24</strong>.
              <br />
              4. Ấn nút <strong>GET</strong> để tải ứng dụng về.
              <br />
              5. Sau khi tải ứng dụng về, nút <strong>GET</strong> sẽ chuyển
              thành <strong>INSTALL</strong>. Bệnh nhân hãy ấn nút{" "}
              <strong>INSTALL</strong> và cài đặt ứng dụng như các ứng dụng khác
              theo hướng dẫn.
              <br />
              6. Sau khi cài đặt xong, nút <strong>INSTALL</strong> sẽ chuyển
              thành nút <strong>OPEN</strong>. Bệnh nhân ấn nút{" "}
              <strong>OPEN</strong> để mở ứng dụng VOV BACSI24.
              <br />
              <br />
              <em>Ghi chú:</em> Để tải được app về máy thì bệnh nhân cần phải có
              tài khoản trên App Store. Nếu bệnh nhân chưa có tài khoản này,
              bệnh nhân sẽ phải tạo tài khoản này trước khi cài đặt ứng dụng VOV
              BACSI24.
              <br />
              <br />
              <strong>(*) VỚI MÁY ANDROID:</strong>
              <br />
              1. Trên thiết bị, mở ứng dụng <strong>CH Play</strong> hoặc{" "}
              <strong>Play Store</strong>.
              <br />
              2. Ấn ô nhập từ tìm kiếm phía trên, gõ chữ{" "}
              <strong>VOV BACSI24</strong> và ấn nút <strong>Search</strong>.
              <br />
              3. Trong danh sách kết quả tìm kiếm, ấn vào ảnh có chữ{" "}
              <strong>VOV BACSI24</strong>.
              <br />
              4. Ấn nút <strong>INSTALL</strong> để tải ứng dụng về và cài đặt.
              <br />
              5. Màn hình hiển thị danh sách các chức năng mà ứng dụng này được
              phép truy cập trên thiết bị, bệnh nhân hãy chọn nút{" "}
              <strong>ACCEPT</strong>. Quá trình cài đặt sẽ bắt đầu sau đó.
              <br />
              6. Sau khi cài đặt xong, nút <strong>INSTALL</strong> sẽ chuyển
              thành nút <strong>OPEN</strong>. Bệnh nhân ấn nút{" "}
              <strong>OPEN</strong> để mở ứng dụng VOV BACSI24.
              <br />
              <br />
              <em>Ghi chú:</em> Để tải được app về máy thì bệnh nhân cần phải có
              tài khoản trên CH Play hoặc Play Store. Nếu bệnh nhân chưa có tài
              khoản này, bệnh nhân sẽ phải tạo tài khoản này trước khi cài đặt
              ứng dụng VOV BACSI24. Tài khoản này chính là tài khoản gmail của
              bệnh nhân.
            </p>
          </div>
        </>
      ),
    },
    30: {
      title: "CHI TIẾT HƯỚNG DẪN SỬ DỤNG",
      content: (
        <>
          <div className="caption">
            <p>
              Sau khi đã tải và cài đặt ứng dụng VOV BACSI24, nếu bệnh nhân đã
              có tài khoản truy cập thì bệnh nhân có thể đăng nhập vào ứng dụng
              bằng tài khoản đó.
              <br />
              Nếu bệnh nhân chưa có tài khoản, bệnh nhân có thể đăng ký tài
              khoản mới để sử dụng ứng dụng.
              <br />
              <br />
              <strong>(*) ĐĂNG KÝ TÀI KHOẢN MỚI:</strong>
              <br />
              &nbsp;+ Bật&nbsp;app và chọn menu <strong>[Cài đặt]</strong> ở góc
              dưới bên phải màn hình.
              <br />
              &nbsp;+ Chọn mục <strong>[Đăng nhập]</strong> dưới danh sách.
              <br />
              &nbsp;+ Chọn mục <strong>[Đăng ký tài khoản]</strong> dưới màn
              hình.
              <br />
              &nbsp;+ Đọc nội dung <strong>[Điều khoản sử dụng]</strong> và nếu
              đồng ý, ấn nút <strong>[Tôi đồng ý]</strong>.
              <br />
              &nbsp;+ Nhập tên dùng để đăng nhập vào app (viết liền, bao gồm chữ
              hoặc số), số điện thoại hay sử dụng nhất, mật khẩu truy cập (tối
              thiểu có 6 chữ số) để đăng ký tài khoản.
              <br />
              &nbsp;+ Nếu có mã giới thiệu đã nhận được từ người quen qua tin
              nhắn giới thiệu ứng dụng, bạn có thể nhập mã này. Còn nếu không có
              thì để trống.
              <br />
              &nbsp;+ Ấn nút <strong>[Đăng ký]</strong> để hoàn thành.
              <br />
              <br />
              Sau khi đăng ký thành công thì sẽ tự động đăng nhập vào app và sẽ
              hiển thị đầy đủ các chức năng mà người bệnh có thể sử dụng.
              <br />
              <br />
              <strong>Chú ý:</strong> Sau khi đăng nhập vào app thì bệnh nhân
              cần nhập đầy đủ Thông tin cá nhân (tham khảo hướng dẫn trong mục{" "}
              <strong>[Quản lý thông tin cá nhân]</strong>) và nạp tiền vào tài
              khoản (tham khảo hướng dẫn trong mục{" "}
              <strong>[Cách nạp tiền vào tài khoản]</strong>) để có thể đăng ký
              tư vấn khám với các bác sĩ hàng đầu.
              <br />
              <br />
              <strong>(*) SỬ DỤNG VOV BACSI24 TRÊN MÁY TÍNH:</strong>
              <br />
              Nếu bệnh nhân không dùng smartphone, thì bệnh nhân có thể dùng hệ
              thống trên máy tính. Bệnh nhân có thể truy cập vào trang web{" "}
              <a href="https://vovbacsi24.com/">https://vovbacsi24.com/</a>.
            </p>
          </div>
        </>
      ),
    },
    31: {
      title: "CHI TIẾT HƯỚNG DẪN SỬ DỤNG",
      content: (
        <>
          <div className="caption">
            <p>
              <strong>(*) ĐĂNG NHẬP:</strong>
              <br />
              Để đăng nhập, bệnh nhân cần nhập chính xác{" "}
              <strong>[Tên đăng nhập]</strong> và <strong>[Mật khẩu]</strong>{" "}
              tài khoản của mình và ấn nút <strong>[Đăng nhập]</strong>.
              <br />
              <br />
              Bệnh nhân chỉ có thể truy cập cùng một lúc trên 1 thiết bị hoặc
              máy tính. Nếu bệnh nhân đang đăng nhập trên 1 thiết bị, mà thực
              hiện đăng nhập tài khoản trên 1 thiết bị khác (smartphone hoặc máy
              tính) thì việc đăng nhập và sử dụng trên thiết bị trước đó sẽ bị
              vô hiệu hoá. Chúng tôi khuyến nghị bệnh nhân không nên truy cập
              vào thiết bị khác nếu đang được bác sĩ tư vấn khám bằng video call
              trên thiết bị đang dùng.
              <br />
              <br />
              <strong>(*) ĐĂNG XUẤT:</strong>
              <br />
              1. Vào menu <strong>[Cài đặt]</strong> và bấm mục{" "}
              <strong>[Đăng xuất]</strong>.
              <br />
              2. Nhấn nút <strong>[Hủy]</strong> để hủy bỏ đăng xuất. Nhấn nút{" "}
              <strong>[Đồng ý]</strong> để đăng xuất.
            </p>
          </div>
        </>
      ),
    },
    32: {
      title: "CHI TIẾT HƯỚNG DẪN SỬ DỤNG",
      content: (
        <>
          <div className="caption">
            <p>
              Ứng dụng VOV BACSI24 có sử dụng chức năng video call khi bác sĩ tư
              vấn khám chữa bệnh với bệnh nhân. Để chức năng này hoạt động tốt,
              đòi hỏi phải có thiết bị và máy tính cấu hình cao.
              <br />
              <br />
              <strong>(*) VỚI MÁY IPHONE</strong>
              <br />
              Yêu cầu thiết bị từ iPhone 5s trở lên. Phiên bản OS từ 8.0 trở
              lên.
              <br />
              Với thiết bị iPad, bệnh nhân vẫn có thể cài được ứng dụng VOV
              BACSI24. Máy cần từ Ipad4 trở lên.
              <br />
              <br />
              <strong>(*) VỚI MÁY ANDROID:</strong>
              <br />
              Yêu cầu thiết bị từ Android OS phiên bản 5.0 trở lên.
              <br />
              Bộ nhớ trong (RAM) tối thiểu từ 2Gb trở lên.
              <br />
              Dung lượng ổ còn trống: từ 100Mb trở lên.
              <br />
              Camera phía trước: từ 3.0 MP trở lên.
              <br />
              <br />
              <strong>(*) VỚI MÁY TÍNH CÁ NHÂN:</strong>
              <br />
              Với máy tính, chúng tôi yêu cầu máy tính có cấu hình mạnh và có
              đầy đủ camera (từ 3.0 MP trở lên) và microphone có kết nối với máy
              tính.
              <br />
              Bệnh nhân cần sử dụng các loại browser sau khi truy cập trang web
              vovbacsi24.com.
              <br />
              + Chrome từ phiên bản 55.0 trở lên.
              <br />
              + Firefox từ phiên bản 50.0 trở lên.
              <br />
              Ghi chú: Chúng tôi chưa hỗ trợ các loại browser khác như Internet
              Explorer, Safari, Opera….
            </p>
          </div>
        </>
      ),
    },

    33: {
      title: "CHI TIẾT HƯỚNG DẪN SỬ DỤNG",
      content: (
        <>
          <div className="caption">
            <p>
              Bệnh nhân có thể vào thay đổi thông tin cá nhân bằng cách vào màn
              hình Cài đặt mục Thông tin cá nhân. Bệnh nhân nên đăng ký đầy đủ
              các thông tin cá nhân để có thể đăng ký tư vấn khám được cũng như
              cung cấp thông tin về tiền sử bệnh để bác sĩ có thể chẩn đoán bệnh
              tốt hơn.
              <br />
              <br />
              <strong>(*) ĐỔI MẬT KHẨU:</strong>
              <br />
              Chúng tôi cũng khuyến nghị bệnh nhân nên thay đổi mật khẩu định kỳ
              (ví dụ: 3 tháng một lần).
              <br />
              Để đổi mật khẩu, bệnh nhân chọn menu [Cài đặt] và chọn danh mục
              [Đổi mật khẩu]. Trong màn hình này, bệnh nhân nhập mật khẩu cũ và
              mật khẩu mới (2 lần) như trên màn hình và ấn nút [Cập nhật].
              <br />
              <br />
              <strong>(*) THAY ẢNH ĐẠI DIỆN:</strong>
              <br />
              Nếu bệnh nhân chưa thêm ảnh đại diện, thì hệ thống sẽ dùng ảnh đại
              diện sẵn có trong hệ thống của chúng tôi (nhiều bệnh nhân có thể
              sẽ có chung ảnh đại diện). Việc cập nhật ảnh đại diện là không bắt
              buộc.
              <br />
              <br />
              <strong>Thay ảnh đại diện trên ứng dụng:</strong>
              <br />
              1. Chọn menu [Cài đặt].
              <br />
              2. Ấn vào hình tròn ảnh đại diện hiện tại phía trên và chọn ảnh từ
              thiết bị, sau đó ấn nút [Chọn].
              <br />
              <br />
              <strong>Thay ảnh đại diện trên máy tính:</strong>
              <br />
              1. Chọn menu [Tài khoản], sau đó chọn menu con [Thông tin cá
              nhân].
              <br />
              2. Ấn vào dòng chữ [Thay đổi ảnh] hoặc ấn vào hình tròn ảnh đại
              diện và chọn ảnh từ thiết bị, sau đó ấn nút [Chọn].
            </p>
          </div>
        </>
      ),
    },
    34: {
      title: "CHI TIẾT HƯỚNG DẪN SỬ DỤNG",
      content: (
        <>
          <div className="content">
            {/* <p className="title"></p> */}
            <div className="caption">
              <div data-oembed-url="https://www.youtube.com/watch?v=n4ohGO-0khc&amp;t=235s">
                <div style={{ maxWidth: "320px", margin: "auto" }}>
                  <div
                    style={{
                      left: 0,
                      width: "100%",
                      height: 0,
                      position: "relative",
                      paddingBottom: "56.25%",
                    }}
                  >
                    <iframe
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      scrolling="no"
                      src="https://www.youtube.com/embed/n4ohGO-0khc?rel=0&amp;start=235"
                      style={{
                        border: 0,
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                      }}
                      tabIndex="-1"
                    ></iframe>
                  </div>
                </div>
              </div>

              <p>
                Bệnh nhân có thể đăng ký tư vấn khám với bác sĩ trên ứng dụng
                VOV BACSI24 hoặc trên trang web{" "}
                <a href="https://vovbacsi24.com/">https://vovbacsi24.com/</a>.
                <br />
                <br />
                <strong>(*) Tìm kiếm bác sĩ</strong>
                <br />
                - Bệnh nhân có thể tìm kiếm bác sĩ theo loại bệnh thường gặp
                bằng cách nhấn vào các mục bệnh thường gặp ở màn hình trang chủ
                của app.
                <br />
                - Nếu bệnh nhân đã biết tên bác sĩ hoặc muốn tìm kiếm các bác sĩ
                theo từng chuyên khoa thì bệnh nhân có thể nhấn vào màn hình Tìm
                kiếm.
                <br />
                Ở màn hình Tìm kiếm, bệnh nhân có thể nhập:
                <br />+ Tên bác sĩ để tìm bác sĩ theo tên,
                <br />+ Chọn chuyên khoa để tìm bác sĩ trong các chuyên khoa,
                <br />+ Nhập mức chi phí tư vấn khám để tìm kiếm bác sĩ theo chi
                phí
                <br />+ Nhập số thứ tự chờ để tìm các bác sĩ có số bệnh nhân chờ
                tư vấn thấp hoặc cao
                <br />+ Chọn tình trạng của bác sĩ trên hệ thống.
                <br />
                <br />
                <strong>(*) Đăng ký tư vấn khám</strong>
                <br />
                - Sau khi tìm kiếm được bác sĩ thì bệnh nhân nhấn chọn bác sĩ đó
                để vào xem Thông tin của bác sĩ. Ở màn hình Thông tin của bác sĩ
                bệnh nhân hãy làm theo các bước sau:
                <br />+ Bước 1: nhấn vào nút [Đăng ký tư vấn khám].
                <br />+ Bước 2: hiển thị màn hình yêu cầu bệnh nhân nhập mô tả
                về bệnh và hình ảnh chụp chiếu về bệnh nếu có (phần mô tả này có
                thể không nhập cũng được).
                <br />+ Bước 3: Bệnh nhân tiếp tục nhấn vào nút [Đăng ký tư vấn
                khám].
                <br />+ Bước 4: Ở màn hình xác nhận đăng ký khám, bệnh nhân nhấn
                vào nút [Đồng ý] để gửi yêu cầu tư vấn tới bác sĩ, hoặc nhấn nút
                [Hủy] để hủy yêu cầu.
                <br />
                - Sau khi gửi đăng ký tư vấn khám thành công thì bệnh nhân sẽ
                nhận được thông báo Đồng ý tư vấn hoặc Từ chối tư vấn từ phía
                bác sĩ gửi sang. Nếu sau 5 phút mà không nhân được thông báo gì
                từ phía bác sĩ thì đăng ký của bệnh nhân không được đăng ký do
                bác sĩ bận và bệnh nhân có thể gửi lại đăng ký khám.
                <br />
                <br />
                <strong>Chú ý:</strong>
                <br />+ Chỉ khi bệnh nhân nhận được thông báo đã đồng ý tiếp
                nhận đăng ký tư vấn khám từ bác sĩ sau bước 4 ở trên, thì mới bị
                trừ tiền trong tài khoản.
                <br />+ Nếu bệnh nhân không nhận được thông báo đồng ý từ bác sĩ
                hoặc nhận được thông báo từ chối từ phía bác sĩ thì sẽ không bị
                trừ tiền trong tài khoản.
                <br />+ Sau khi bác sĩ đồng ý nhận đăng ký tư vấn khám, bệnh
                nhân có thể phải chờ bác sĩ gọi lại khám ngay lập tức hoặc tối
                đa phải chờ 6 tiếng vì có thể bác sĩ đang bận chưa vào khám được
                ngay.
              </p>
            </div>
          </div>
        </>
      ),
    },
    35: {
      title: "CHI TIẾT HƯỚNG DẪN SỬ DỤNG",
      content: (
        <>
          <div className="caption">
            <p>
              Sau khi đăng ký khám thành công, bệnh nhân sẽ đợi để bác sĩ gọi
              tới. Khi bác sĩ gọi tới thì bệnh nhân sẽ nhận cuộc gọi và sẽ bắt
              đầu cuộc tư vấn với bác sĩ. Thời gian giới hạn của một lượt tư vấn
              là có hạn, và lượt khám có thể dừng trước thời gian trên nếu bác
              sĩ đã tư vấn xong và bệnh nhân không còn gì phải thắc mắc. Bác sĩ
              sẽ là người nhấn kết thúc lượt khám.
              <br />
              <br />
              <strong>(*) Chú ý:</strong>
              <br />
              - Trong quá trình gọi video mà bệnh nhân nhấn nút [Quay lại] trên
              màn hình video thì sẽ hiển thị thông báo xác nhận bệnh nhân có
              chắc chắn muốn thoát khỏi cuộc tư vấn. Nếu bệnh nhân nhấn nút
              [Đồng ý] thì sẽ thoát khỏi cuộc tư vấn, còn nếu nhấn nút [Hủy bỏ]
              thì sẽ vẫn ở màn hình video và tiếp tục cuộc gọi.
              <br />
              <br />
              - Trong quá trình chờ bác sĩ gọi tới, nếu bệnh nhân đợi lâu và
              muốn xem số thứ tự khám của mình thì có thể làm theo cách sau:
              <br />+ Bước 1: vào menu Cài đặt.
              <br />+ Bước 2: Ở màn hình cài đặt nhấn chọn Lịch sử tư vấn, tiếp
              theo là chọn vào mục có bác sĩ mà bệnh nhân đã đăng ký và đang chờ
              tư vấn để di chuyển đến màn hình Hồ sơ bệnh án. Ở màn hình này,
              bệnh nhân nhấn vào nút [Xem số thứ tự chờ hiện tại] để xem số thứ
              tự chờ tư vấn của mình. Hoặc nếu đợi lâu chưa đến lượt tư vấn thì
              nhấn nút [Gửi yêu cầu tới bác sĩ khi bạn đợi quá lâu].
              <br />
            </p>
          </div>
        </>
      ),
    },
    36: {
      title: "CHI TIẾT HƯỚNG DẪN SỬ DỤNG",
      content: (
        <>
          <div className="caption">
            <p>
              Bệnh nhân có thể xem lịch sử tư vấn khám với bác sĩ từ trước đến
              nay trên cả ứng dụng VOV BACSI24 và trên trang{" "}
              <a href="https://vovbacsi24.com/">https://vovbacsi24.com/</a>.
              <br />
              <br />
              1.&nbsp;&nbsp;&nbsp; Chọn menu [Cài đặt].
              <br />
              2.&nbsp;&nbsp;&nbsp; Chọn [Lịch sử tư vấn] sẽ hiển thị danh sách
              bác sĩ đã tư vấn từ mới đến cũ.
              <br />
              3.&nbsp;&nbsp;&nbsp; Muốn xem thông tin về cuộc tư vấn thì bệnh
              nhân nhấn vào bác sĩ đó để di chuyển sang màn hình Hồ sơ bệnh án.
              Ở màn hình này bệnh nhân có thể xem thông tin như thời gian khám,
              nghe lại ghi âm của cuộc khám.
            </p>
          </div>
        </>
      ),
    },
    37: {
      title: "CHI TIẾT HƯỚNG DẪN SỬ DỤNG",
      content: (
        <>
          <div className="capcuu-detail">
            <div className="content">
              <div className="caption">
                <h3>
                  <strong>HƯỚNG DẪN THANH TOÁN VNPAY TRÊN APP</strong>
                </h3>
                <p>
                  Cổng thanh toán VNPAY-QR là giải pháp thanh toán do Công ty Cổ
                  phần Giải pháp Thanh toán Việt Nam (VNPAY) phát triển. Khách
                  hàng sử dụng thẻ/tài khoản ngân hàng, tính năng QR
                  Pay/VNPAY-QR được tích hợp sẵn trên ứng dụng Mobile Banking
                  của các ngân hàng hoặc Ví điện tử liên kết để thanh toán các
                  giao dịch và nhập mã giảm giá (nếu có).
                </p>
                <p>
                  Quét mã VNPAY-QR trên 35+ Ứng dụng Mobile Banking và 15+ Ví
                  điện tử liên kết
                </p>
                <p>
                  <img
                    src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXfOh1k5H-_qOQ2e49tUW9zkbbzxjXDQy3bXJn7Zm0P410F7BNhHl8TFPlVbmGKKLtcJCGbRomuBy-5skAsqtc11I4zdJ87pLaAlfo2GXsHBxtSEbRahWFqwxKpHczaGoxWEe3bb22sjjuARht5RYGYcw4We?key=HxSj_CHkwftiQCkxqHsMqQ"
                    alt=""
                    style={{
                      height: "361px",
                      marginTop: "0px",
                      width: "613px",
                    }}
                  />
                </p>
                <p>40+ Thẻ ATM/nội địa/tài khoản ngân hàng</p>
                <p>
                  <img
                    src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXe75dZ-nDInkBlSiyQHd1g36GJgA9Y2J-NIpsg8uWZraMmoKWerekP2gUFJ91YZbcyPh0IKLiMWSARSqrPBz6RRyrqQeFkNUOCqGr7r5tjvP4tM1jRxHIpJJmkVSJacYmSi2P2SiQTuhnBq3833_9TOePFC?key=HxSj_CHkwftiQCkxqHsMqQ"
                    alt=""
                    style={{
                      height: "231px",
                      marginTop: "0px",
                      width: "613px",
                    }}
                  />
                </p>
                <p>4 Thẻ thanh toán quốc tế</p>
                <p>
                  <img
                    src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXcdQ4vp9cRwKLEC24xOV_SGFPojhDzZ-eCT_B5sVl4yNKY8Zvcuk0ZYl4Fj1lKcYokd8uMNK2oICBxEdVX-nz9ja9PRiwE4o3I-BIj2BmC6_rH-D_nCe9G4XpV_ABnAEwP0auc44Wyp0WCscj65wOKsR2QW?key=HxSj_CHkwftiQCkxqHsMqQ"
                    alt=""
                    style={{ height: "41px", marginTop: "0px", width: "332px" }}
                  />
                </p>
                <p>Các phương thức thanh toán qua VNPAY</p>
                <p>
                  <img
                    src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXcGP89h4_7qFmmWaqp100Zc9LiMdbi0AIC866tDxPXzUOm5VBrPtbeJNIsh3mD_4IUvXnnZF8x4-YwSwD02C_S5FxoitbQT4p0OocZ42pdPvgmAQKPQA9Ly2F8D4_NJ5_xkIpk20JhvyBbQ9q-KOnMrz31_?key=HxSj_CHkwftiQCkxqHsMqQ"
                    alt=""
                    style={{
                      height: "407px",
                      marginTop: "0px",
                      width: "343px",
                    }}
                  />
                </p>

                <h4>
                  1. Phương thức thanh toán qua “Ứng dụng thanh toán hỗ trợ
                  VNPAY-QR”
                </h4>
                <p>
                  Bước 1: Quý khách lựa chọn sản phẩm, dịch vụ và chọn Thanh
                  toán ngay hoặc Đặt hàng
                  <br />
                  Tại trang thanh toán, vui lòng kiểm tra lại sản phẩm đã đặt,
                  điền đầy đủ thông tin người nhận hàng, chọn phương thức thanh
                  toán VNPAY và nhấn nút “Đặt hàng ngay”.
                </p>
                <p>
                  Bước 2: Màn hình thanh toán chuyển sang giao diện cổng thanh
                  toán VNPAY. Chọn phương thức “Ứng dụng thanh toán hỗ trợ
                  VNPAY-QR”.
                </p>
                <p>
                  Bước 3: Chọn Ứng dụng ngân hàng hoặc ví điện tử có liên kết
                  thanh toán trong danh sách.
                </p>
                <p>
                  *Lưu ý: Mã QR có hiệu lực trong 15 phút.
                  <br />
                  - Trường hợp 1: Ứng dụng tự động chuyển sang ứng dụng ngân
                  hàng hoặc ví điện tử thanh toán.
                  <br />
                  ✤ Đăng nhập ứng dụng ngân hàng hoặc ví điện tử, màn hình
                  chuyển sang thông tin thanh toán.
                  <br />✤ Kiểm tra thông tin, nhập mã giảm giá (nếu có) và hoàn
                  tất thanh toán.
                </p>
                <p>
                  - Trường hợp 2: Ứng dụng hiện thông báo “Quý khách vui lòng sử
                  dụng trình duyệt mặc định của thiết bị”.
                  <br />
                  ✤ Tại màn hình hiển thị mã QR, chọn “Tải mã thanh toán” hoặc
                  chụp màn hình mã QR thanh toán.
                  <br />
                  ✤ Đăng nhập Ứng dụng ngân hàng hoặc Ví điện tử, chọn tính năng
                  quét mã QR.
                  <br />
                  ✤ Tải ảnh mã QR từ thư viện ảnh trong điện thoại, màn hình
                  chuyển ngay sang thông tin thanh toán.
                  <br />✤ Kiểm tra thông tin, nhập mã giảm giá (nếu có) và hoàn
                  tất thanh toán.
                </p>
                <p>
                  <img
                    src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXeJ-4D87XrkV0MxH1dTE6oXXghWvGKxznlu2gWOKlbUevD6znxf5S5UKGlihyhnOqCA_026f2Ryh2AK8L0wrKDgJnJY3c1BKsCIs3ktXLAuJv6YEDX0Vu5YiHwZPfrRu94V3_1E5UaCqXES3kmYsUL5AKol?key=HxSj_CHkwftiQCkxqHsMqQ"
                    alt=""
                    style={{
                      height: "248px",
                      marginTop: "0px",
                      width: "613px",
                    }}
                  />
                </p>
                <p>
                  Hướng dẫn thanh toán qua tính năng QR Pay/VNPAY-QR trường hợp
                  2
                </p>
                <p>
                  Bước 4: Khi thực hiện thanh toán hoàn tất, màn hình quay về
                  ứng dụng ban đầu & thông báo xác nhận đặt hàng thành công tại
                  app.
                  <br />
                  2. Phương thức thanh toán qua “Thẻ nội địa và tài khoản ngân
                  hàng”
                  <br />
                  Bước 1: Quý khách lựa chọn sản phẩm, dịch vụ và chọn Thanh
                  toán ngay hoặc Đặt hàng
                  <br />
                  Tại trang thanh toán, vui lòng kiểm tra lại sản phẩm đã đặt,
                  điền đầy đủ thông tin người nhận hàng, chọn phương thức thanh
                  toán VNPAY và nhấn nút “Đặt hàng ngay”.
                </p>
                <p>
                  Bước 2: Màn hình thanh toán chuyển sang giao diện cổng thanh
                  toán VNPAY. Chọn phương thức “Thẻ nội địa và tài khoản ngân
                  hàng” và chọn ngân hàng muốn thanh toán thẻ trong danh sách.
                </p>
                <p>
                  Bước 3: Quý khách vui lòng thực hiện nhập các thông tin
                  thẻ/tài khoản theo yêu cầu và chọn “Xác thực”. Mã OTP sẽ được
                  gửi về điện thoại đăng ký, nhập mã OTP để hoàn tất giao dịch.
                </p>
                <p>*Lưu ý: Giao dịch sẽ hết hạn sau 15 phút</p>
                <p>
                  <img
                    src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXc2a9_Kzmm0nj_9MUd04hxInQ0KFhMakDNDE2rHKFiGKgS1b31Tz_ZmGbUw3TDMyqoczGc__tIAAGtFIaCf-JNZ9g3EDweZazqKxR2O8tVZKyLzNzlbpJdDkaRGC9Xmd9tV4zL9yRdsdcpT7hgQ_CFIHtjj?key=HxSj_CHkwftiQCkxqHsMqQ"
                    alt=""
                    style={{
                      height: "290px",
                      marginTop: "0px",
                      width: "369px",
                    }}
                  />
                </p>
                <div className="payment-methods">
                  <p>
                    Giao diện thanh toán qua “Thẻ nội địa và tài khoản ngân
                    hàng”
                    <br />
                    Bước 4: Khi thực hiện thanh toán hoàn tất, Quý khách sẽ nhận
                    được thông báo xác nhận đơn hàng đặt hàng thành công tại
                    app.
                  </p>
                  <p>
                    3. Phương thức thanh toán qua “Thẻ quốc tế (Visa,
                    MasterCard, JCB, UnionPay)”
                    <br />
                    Tương tự như phương thức thanh toán “Thẻ nội địa và tài
                    khoản ngân hàng”
                  </p>
                  <p>4. Phương thức thanh toán qua “Ví điện tử VNPAY”</p>
                  <p>
                    Tương tự như phương thức thanh toán “Ứng dụng thanh toán hỗ
                    trợ VNPAY-QR”
                  </p>
                  <h3>
                    <strong>HƯỚNG DẪN THANH TOÁN VNPAY TRÊN WEBSITE</strong>
                  </h3>
                  <p>
                    Cổng thanh toán VNPAY là giải pháp thanh toán do Công ty Cổ
                    phần Giải pháp Thanh toán Việt Nam (VNPAY) phát triển. Khách
                    hàng sử dụng thẻ/tài khoản ngân hàng, tính năng QR
                    Pay/VNPAY-QR được tích hợp sẵn trên ứng dụng Mobile Banking
                    của các ngân hàng hoặc Ví điện tử liên kết để thanh toán các
                    giao dịch và nhập mã giảm giá (nếu có).
                  </p>
                  <p>
                    Quét mã VNPAY-QR trên 35+ Ứng dụng Mobile Banking và 15+ Ví
                    điện tử liên kết
                  </p>
                  <p>
                    <img
                      src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXe0P79q1I1TasXc4wnl5YGxD8uMnTCYUgWtpnf-HFMDPuoBdKApwRlyw5Q9D6oJ-7L1sX6cuvHlaUwEBqUjqv6EHfrQVFmgKA2pGCxqx4oTB1OuQAF69Wm7XJfi0mfPfXz1gGNd1t57Y0WXaUBsziSURw?key=vhsRucGD4F_NtwUL4_ePPQ"
                      alt=""
                      style={{
                        height: "361px",
                        marginTop: "0px",
                        width: "613px",
                      }}
                    />
                  </p>
                  <p>40+ Thẻ ATM/nội địa/tài khoản ngân hàng&nbsp;</p>
                  <p>
                    <img
                      src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXfSOtPEfseGqVELSxgzrofy4Etv-kDHLpzh0sS8RTKjYREIi1136OJy0UeeSF7ye06YwO30hpTTm40sG2j4EFHxUY2K2bGEwEKfK_SGR0cxdC3S_TcDFBtPRrZAOLX01h5uhVs2Vf5JxspQBkKlhGnNFwm3?key=vhsRucGD4F_NtwUL4_ePPQ"
                      alt=""
                      style={{
                        height: "231px",
                        marginTop: "0px",
                        width: "613px",
                      }}
                    />
                  </p>
                  <p>4 Thẻ thanh toán quốc tế</p>
                  <p>
                    <img
                      src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXdh9dlA5_F3Q5myy4Fg85yrZ3E936WWa3ledeLxKT4a5mgSfegtFRN_XQ7PgRmKjwjlJEvqEPubmWGO3T6IowvdLkNkRbxm5aF3Ml9aC4BKLHTUYC1yXdN31vmCaDAAQowXowcIXnMKvS5-qzJke0pUyC4?key=vhsRucGD4F_NtwUL4_ePPQ"
                      alt=""
                      style={{
                        height: "41px",
                        marginTop: "0px",
                        width: "332px",
                      }}
                    />
                  </p>
                  <p>Các phương thức thanh toán qua VNPAY</p>
                </div>
                <div className="payment-guide">
                  <p>
                    <img
                      src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXchKEns5afCmzju017PEs2LoSGJtaOInIXFdbwfYNPK9stxjOAvJqUgKxCAlU23EEXndXc8aIhSj3weGyLmmuzUvefTHv71VCPqqvXg67TnATL2XZlVzl71JXixJkeDrHqDaZGYv8TWKnH1EcBMLtpZpld3?key=vhsRucGD4F_NtwUL4_ePPQ"
                      style={{
                        height: "391px",
                        marginTop: "0px",
                        width: "487px",
                      }}
                    />
                  </p>
                  <p>
                    <br />
                    1. Phương thức thanh toán qua “Ứng dụng thanh toán hỗ trợ
                    VNPAY-QR”
                  </p>
                  <p>
                    Bước 1: Quý khách lựa chọn sản phẩm, dịch vụ và chọn Thanh
                    toán ngay hoặc Đặt hàng
                    <br />
                    Tại trang thanh toán, vui lòng kiểm tra lại sản phẩm đã đặt,
                    điền đầy đủ thông tin người nhận hàng, chọn phương thức
                    thanh toán VNPAY và nhấn nút “Đặt hàng ngay”.
                    <br />
                    Bước 2: Màn hình thanh toán chuyển sang giao diện cổng thanh
                    toán VNPAY. Chọn phương thức “Ứng dụng thanh toán hỗ trợ
                    VNPAY-QR”
                  </p>
                  <p>
                    Bước 3: Hệ thống hiển thị mã QR cùng với số tiền cần thanh
                    toán, Quý khách kiểm tra lại số tiền này. Sử dụng ứng dụng
                    ngân hàng (theo danh sách liệt kê), chọn “Quét Mã” và tiến
                    hành quét mã QR trên màn hình thanh toán website.
                  </p>
                  <p>
                    *Lưu ý: Mã QR có hiệu lực trong 15 phút
                    <br />
                    Để quá trình thanh toán thành công, khách hàng vui lòng tham
                    khảo trước các điều kiện và thao tác quét mã trên điện thoại
                    để sẵn sàng, tránh sự cố hết thời gian ảnh hưởng đến thanh
                    toán và mã khuyến mại của quý khách.
                  </p>
                  <p>
                    Bước 4: Kiểm tra thông tin, nhập mã giảm giá (nếu có) và
                    hoàn tất thanh toán
                    <br />
                    Khi thực hiện thanh toán hoàn tất Quý khách sẽ nhận được
                    thông báo xác nhận đơn hàng đặt hàng thành công tại website
                    <br />
                    &nbsp;
                  </p>
                  <p>
                    <img
                      src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXfai5ghubHf0jeAC8TqWhzM77UoUoeXuafKrJd8g3meSIRlfXEI1dfn9Mk9CFjyV-syikLlANLv-RCaieJiHEWiCvkk0-1o7doczQ4f_OWjWrVgEftIRR6TPdnuDUPsgN-jXnRLr21nHguQ2MT6ug2A6KPA?key=vhsRucGD4F_NtwUL4_ePPQ"
                      style={{
                        height: "284px",
                        marginTop: "0px",
                        width: "613px",
                      }}
                    />
                    <br />
                    Hướng dẫn thanh toán qua tính năng QR Pay/VNPAY-QR
                  </p>
                  <p>
                    <br />
                    2. Phương thức thanh toán qua “Thẻ nội địa và tài khoản ngân
                    hàng”
                  </p>
                  <p>
                    Bước 1: Quý khách lựa chọn sản phẩm, dịch vụ và chọn Thanh
                    toán ngay hoặc Đặt hàng
                    <br />
                    Tại trang thanh toán, vui lòng kiểm tra lại sản phẩm đã đặt,
                    điền đầy đủ thông tin người nhận hàng, chọn phương thức
                    thanh toán VNPAY và nhấn nút “Đặt hàng ngay”.
                  </p>
                  <p>
                    Bước 2: Màn hình thanh toán chuyển sang giao diện cổng thanh
                    toán VNPAY. Chọn phương thức “Thẻ nội địa và tài khoản ngân
                    hàng” và chọn ngân hàng muốn thanh toán thẻ trong danh
                    sách&nbsp;
                  </p>
                  <p>
                    Bước 3: Quý khách vui lòng thực hiện nhập các thông tin
                    thẻ/tài khoản theo yêu cầu và chọn “Tiếp tục”. Mã OTP sẽ
                    được gửi về điện thoại đăng ký, nhập mã OTP để hoàn tất giao
                    dịch&nbsp;
                  </p>
                </div>
                <div className="payment-notice">
                  <p>*Lưu ý: Giao dịch sẽ hết hạn sau 15 phút&nbsp;</p>
                  <p>
                    Bước 4: Khi thực hiện thanh toán hoàn tất Quý khách sẽ nhận
                    được thông báo xác nhận đơn hàng đặt hàng thành công tại
                    website
                  </p>
                  <p>
                    <img
                      src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXfGlLuamvoZYjkVaLy9qjGfuRXZ1boO_AqzcX8oKYeWjMBKLsDIWKrSwOroVNB_ScKLXMW9-hB-jnUY2VLSua2vUknU1G7KlczjZGXYFB03qu9_ZyA86Q8c7W8dQ0d2G4UDC8avYPzNihbKSxZNaf3UeFM?key=vhsRucGD4F_NtwUL4_ePPQ"
                      style={{
                        height: "208px",
                        marginTop: "0px",
                        width: "613px",
                      }}
                    />
                  </p>
                  <p>
                    Giao diện thanh toán qua “Thẻ nội địa và tài khoản ngân
                    hàng”
                  </p>
                  <p>
                    3. Phương thức thanh toán qua “Thẻ thanh toán quốc tế (Visa,
                    MasterCard, JCB, UnionPay)”
                    <br />
                    Tương tự như phương thức thanh toán “Thẻ nội địa và tài
                    khoản ngân hàng”
                  </p>
                  <p>4. Phương thức thanh toán qua “Ví điện tử VNPAY”</p>
                  <p>
                    Tương tự như phương thức thanh toán “Ứng dụng thanh toán hỗ
                    trợ VNPAY-QR”
                  </p>
                  <p>
                    ---------------------
                    <br />
                    KÊNH HỖ TRỢ VNPAY
                    <br />- Tổng đài: *3388 hoặc 1900 55 55 77&nbsp;
                  </p>
                  <p>
                    - Zalo OA:{" "}
                    <a href="https://zalo.me/4134983655549474109">
                      zalo.me/4134983655549474109
                    </a>
                  </p>
                  <p>
                    - Email: <a href="mailto:hotro@vnpay.vn">hotro@vnpay.vn</a>
                  </p>
                  <p>
                    - Fanpage:{" "}
                    <a href="https://www.facebook.com/VNPAYQR.vn">
                      facebook.com/VNPAYQR.vn
                    </a>
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
    38: {
      title: "CHI TIẾT HƯỚNG DẪN SỬ DỤNG",
      content: (
        <>
          <div className="caption">
            <p>
              Bệnh nhân có thể giới thiệu app với bạn bè bằng chức năng Chia sẻ
              với bạn bè.
              <br />
              Chọn menu [Cài đặt]
              <br />
              Chọn [Chia sẻ với bạn bè]
              <br />
              Có 2 cách thức chia sẻ:
              <br />
              + Nhấn vào [Tin nhắn] để chia sẻ qua tin nhắn điện thoại bằng cách
              nhập số điện thoại của người nhận và gửi đi.
              <br />+ Nhấn vào [Email] để chia sẻ qua email bằng cách nhập địa
              chỉ email và gửi đi.
            </p>
          </div>
        </>
      ),
    },
    39: {
      title: "CHI TIẾT HƯỚNG DẪN SỬ DỤNG",
      content: (
        <>
          <div className="caption">
            <p>
              Trong trường hợp bệnh nhân đăng ký tư vấn khám với một bác sĩ nào
              đó, nhưng không thể đăng ký được thì sẽ có các nguyên nhân sau
              đây.
              <br />
              <br />
              Nguyên nhân 1: Do tình trạng nhận tư vấn khám của bác sĩ lúc đó là
              [Không thể nhận tư vấn]
              <br />
              Nguyên nhân 2: Bác sĩ đột nhiên bận không sử dụng được ứng dụng để
              chấp nhận đăng ký tư vấn khám mà chưa kịp thay đổi tình trạng nhận
              tư vấn khám trên ứng dụng.
              <br />
              Nguyên nhân 3: Đường truyền internet trên máy của bệnh nhân/bác sĩ
              không ổn định nên đăng ký khám của bệnh nhân không đến được với
              bác sĩ.
              <br />
              <br />
              Trên ứng dụng, bác sĩ có 3 loại tình trạng nhận tư vấn khám như
              sau:
              <br />
              <br />
              1. KHÔNG THỂ NHẬN TƯ VẤN (màu đỏ): tức là bác sĩ đang không truy
              cập vào tài khoản của mình trên ứng dụng
              <br />
              2. TẠM NGHỈ, XIN TƯ VẤN KHI THẬT CẦN THIẾT (màu vàng): tức là bác
              sĩ đang truy cập vào tài khoản của mình trên ứng dụng, nhưng đặt
              chế độ TẠM NGHỈ. Khi này bác sĩ vẫn nhận được thông báo đăng ký tư
              vấn khám của bệnh nhân nhưng có thể TỪ CHỐI hoặc KHÔNG TRẢ LỜI
              LẠI.
              <br />
              3. ĐANG TƯ VẤN (màu xanh): tức là bác sĩ đang truy cập vào tài
              khoản của mình và đang tiếp nhận đăng ký tư vấn khám.
            </p>
          </div>
        </>
      ),
    },
    40: {
      title: "CHI TIẾT HƯỚNG DẪN SỬ DỤNG",
      content: (
        <>
          <div className="caption">
            <p>
              Khi bạn nạp tiền vào tài khoản không được thì thông thường sẽ gặp
              các tình huống sau.
              <br />
              <br />
              Tình huống 1: Nhận được thông báo như dưới.
              <br />
              "Giao dịch không thành công. Ngân hàng từ chối giao dịch"
              <br />
              <br />
              Trường hợp này, thẻ ATM hoặc Credit của bạn có vấn đề.
              <br />
              Bạn cần liên hệ với ngân hàng chỗ bạn làm thẻ để kiểm tra lại và
              yêu cầu xử lý.
              <br />
              <br />
              Tình huống 2: Ngân lượng trả về thông báo kết quả giao dịch thành
              công, nhưng tài khoản trên ứng dụng của bạn không được nạp tiền.
              <br />
              <br />
              Trường hợp này, bạn hãy liên hệ số điện thoại 19001289&nbsp;hoặc
              0948 214001 (chăm sóc khách hàng) của chúng tôi.
            </p>
          </div>
        </>
      ),
    },
  };

  const guide = huongdanData[guidelineId] || null; // Tìm hướng dẫn theo ID

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
                    <a href="/">Trang chủ</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Hướng dẫn chi tiết
                  </li>
                </ol>
                {guide ? (
                  <>
                    <h2>{guide.title}</h2>
                    {guide.content}
                  </>
                ) : (
                  <p>Hướng dẫn không tìm thấy.</p>
                )}
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

export default ChiTietHD;
