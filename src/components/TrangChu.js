// import "../style/header.css";
// import "../style/allstyle.css";
import "../style/trangchu.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import List from "./List";
import GridExample from "./GridExample";

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
                <text>BỆNH VIỆN</text>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                Tin tức
              </div>
            </div>
            <div className="row-listbv">
              <List />
            </div>
            <div className="row-listbenh">

              
            </div>
          </div>
        </div>
        <div className="list">Bệnh thường gặp</div>
        <div className="link">link</div>
        <div className="footer">footer</div>
      </div>
    </>
  );
};
export default TrangChu;
