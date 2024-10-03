import "../style/footer.css";

const Footer = () => {
  // khởi tạo biến

  return (
    <>
      <div className="row-footer">
        <div className="container-footer">
          <div className="row">
            <div className="col-md-4">
              <div className="inf">
                <div className="img-logo">
                  <a href="/">
                    <img src="https://vovbacsi24.com/img/img_skin/logo-vovfm89.png"></img>
                  </a>
                </div>
                <div className="info">
                  <p>
                    <span className="text">
                      Toà nhà CT1AB Mễ Trì Plaza
                      <br></br>
                      Nam Từ Liêm - Hà Nội
                    </span>
                  </p>
                  <p>
                    <span className="text">
                      Hotline:
                      <a href=" "> 1900 1289</a>
                      <br></br>
                      Hoặc:
                      <a href=" "> 093 447 8989</a>
                    </span>
                  </p>
                  <p>
                    <span className="text">
                      Email:
                      <a href=" "> cskh@vovbacsi24.com</a>
                    </span>
                  </p>
                  <p>Developed by Vinisoft</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-menu">
                <div className="title">
                  <p className="text-18">Dịch vụ</p>
                  <p className="border-bt-blue"></p>
                </div>
                <ul>
                  <li>
                    <a href="https://vovbacsi24.com/">
                      <span className="glyphicon-menu-right">Sức khỏe</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="footer-menu">
                <div className="title">
                  <p className="text-18">Giới thiệu</p>
                  <p className="border-bt-blue"></p>
                </div>
                <ul>
                  <li>
                    <a href="https://vovbacsi24.com/user/about">
                      <span className=" glyphicon-menu-right">Giới thiệu</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://vovbacsi24.com/guideline/operator-regulation">
                      <span className="glyphicon glyphicon-menu-right">
                        Quy chế hoạt động
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://vovbacsi24.com/guideline/privacy-policy">
                      <span className="glyphicon glyphicon-menu-right">
                        Chính sách bảo mật thông tin
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://vovbacsi24.com/guideline/dispute-settlement-mechanism">
                      <span className="glyphicon glyphicon-menu-right">
                        Cơ chế giải quyết tranh chấp
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
