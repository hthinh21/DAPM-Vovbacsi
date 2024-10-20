// import "../style/header.css";
// import "../style/allstyle.css";
import "../style/trangchu.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import List from "./List";
import GridExample from "./GridExample";
import ListBenh from "./ListBenh";
import Footer from "./Footer";


const TrangChu = () => {
  return (
    <>
      <Header />
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://vovbacsi24.com/img/img_skin/banner-03.jpg"
              className="d-block w-100"
              alt="banner1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://vovbacsi24.com/img/img_skin/banner-04.jpg"
              className="d-block w-100"
              alt="banner2"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* search bv */}

      <div className="search-home">
        <div className="container-search">
          <div className="row row-default">
            <div className="search container-md">
              <div className="col-md-12">
                <div className="row ">
                  <div className="col">
                    <div className="input-name">
                      <input
                        className="form-control"
                        placeholder="Tên bác sĩ"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="select">
                      <select className="form-select">
                        <option selected>Tất cả bác sĩ</option>
                        <option value="1">Đang nhận khám</option>
                        <option value="2">Tạm nghỉ</option>
                        <option value="3">Không thể nhận khám</option>
                      </select>
                    </div>
                  </div>
                  <div className="col">
                    <div className="input-khoa">
                      <input
                        className="form-control"
                        placeholder="Tên chuyên khoa"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="input-khuvuc">
                      <input className="form-control" placeholder="Khu vực" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="select-phi">
                      <select className="form-select">
                        <option selected>Phí khám</option>
                        <option value="1">100.000đ - 200.000đ</option>
                        <option value="2">200.000đ - 300.000đ</option>
                        <option value="3">300.000đ - 400.000đ</option>
                        <option value="4">400.000đ - 500.000đ</option>
                        <option value="5">Lớn hơn 500.000đ</option>
                      </select>
                    </div>
                  </div>
                  <div className="col">
                    <select className="form-select">
                      <option selected>Số thứ tự chờ</option>
                    </select>
                  </div>
                  <div className="col">
                    <div className="btn btn-primary">Tìm kiếm</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* main-content */}

        {/* <div className="main-content">
          <div className="container">
            <div className="row row-default">
              <div className="col-md-9">
                <h5>BỆNH VIỆN</h5>

                <div className="bacsi-list">
                  <div id="bacsi-hospital">
                    <div className="container">
                      <GridExample/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <h2>Tin tức</h2>
              </div>
            </div>
          </div>
          <div className="link">link</div>
        </div> */}

        <div className="main-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                <h3>BỆNH VIỆN</h3>
                <List />
                <h3>BỆNH THƯỜNG GẶP</h3>
                <ListBenh />
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                Tin tức
              </div>
            </div>
          </div>
          {/* link tải app */}
          <div className="row-link">
            <div className="link-app">
              <div className="container-link">
                <div className="row row-app">
                  <div className="col-md-9">
                    <p className="slogan-footer">
                      <span className="slogan">Bác sĩ ơi!</span>
                      <br></br>
                      <text>"Đừng để kiến thức và kinh nghiệm uổng phí."</text>
                      <br></br>
                      <text>
                        "Hãy giúp chúng tôi - những bệnh nhân càng nhiều càng
                        tốt."
                      </text>
                    </p>
                  </div>
                  <div className="col-md-3">
                    <p className="download-title">TẢI ỨNG DỤNG CHO BỆNH NHÂN</p>
                    <div className="download-icon">
                      <p>
                        <a
                          href="https://apps.apple.com/vn/app/vov-bacsi24/id1202785310?ign-mpt=uo%3D4"
                          target="_blank"
                        >
                          <img src="https://vovbacsi24.com/img/img_skin/btn-appstore.png"></img>
                        </a>
                      </p>
                      <p>
                        <a
                          href="https://play.google.com/store/apps/details?id=com.vov.bacsi24.patient&pli=1"
                          target="_blank"
                        >
                          <img src="https://vovbacsi24.com/img/img_skin/btn-ggplay.png"></img>
                        </a>
                      </p>
                    </div>
                    <p className="download-title">TẢI ỨNG DỤNG CHO BÁC SĨ</p>
                    <div className="download-icon">
                      <p>
                        <a
                          href="https://apps.apple.com/vn/app/vov-bacsi24/id1202785310?ign-mpt=uo%3D4"
                          target="_blank"
                        >
                          <img src="https://vovbacsi24.com/img/img_skin/btn-appstore.png"></img>
                        </a>
                      </p>
                      <p>
                        <a
                          href="https://play.google.com/store/apps/details?id=com.vov.bacsi24.patient&pli=1"
                          target="_blank"
                        >
                          <img src="https://vovbacsi24.com/img/img_skin/btn-ggplay.png"></img>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer/>
      </div>
    </>
  );
};
export default TrangChu;
