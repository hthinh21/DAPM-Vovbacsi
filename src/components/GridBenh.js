import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../style/list_benh.css";

const GridBenh = () => {
    
    // khởi tạo biến
    const img = [
        "https://cdn.vovbacsi24.com/VOVBACSI24/uploads/masters/disease/20220224_1645692332.png?AWSAccessKeyId=s3user10042&Expires=1729010285&Signature=ohfpLPcd43Ktst1g3SHEGNiQFso%3D",
        "https://cdn.vovbacsi24.com/VOVBACSI24/uploads/masters/disease/Icon_nhom_benh/NhiKhoa.png?AWSAccessKeyId=s3user10042&Expires=1729010285&Signature=9V%2FuqRj2F5JExplxWSuFIftV270%3D",
        "https://cdn.vovbacsi24.com/VOVBACSI24/uploads/masters/disease/Icon_nhom_benh/ViemGanTieuHoa.png?AWSAccessKeyId=s3user10042&Expires=1729010285&Signature=oe2eXN0IsyetPHJRYU7aGY3JL90%3D",
        "https://cdn.vovbacsi24.com/VOVBACSI24/uploads/masters/disease/Icon_nhom_benh/DaLieu.png?AWSAccessKeyId=s3user10042&Expires=1729010285&Signature=HTqUAP8EJH6UBSVDyYNTZ3IxeOg%3D",
        "https://cdn.vovbacsi24.com/VOVBACSI24/uploads/masters/disease/Icon_nhom_benh/CoXuongKhop.png?AWSAccessKeyId=s3user10042&Expires=1729010285&Signature=Bcqfg4%2BvAUyskRSlH9HYiRHouXY%3D",
        "https://cdn.vovbacsi24.com/VOVBACSI24/uploads/masters/disease/Icon_nhom_benh/SanPhuKhoa.png?AWSAccessKeyId=s3user10042&Expires=1729010285&Signature=ysIMQoejY%2FeGfk1u%2B%2BBefLeVUfQ%3D",
        "https://cdn.vovbacsi24.com/VOVBACSI24/uploads/masters/disease/Icon_nhom_benh/ThanTietNieu.png?AWSAccessKeyId=s3user10042&Expires=1729010285&Signature=Muz6TUfrscb1uHdtNj8TX8dpp4A%3D",
        "https://cdn.vovbacsi24.com/VOVBACSI24/uploads/masters/disease/Icon_nhom_benh/BenhLao.png?AWSAccessKeyId=s3user10042&Expires=1729010285&Signature=EwKGrMK3aPey3AntrpoHsd1Sm2c%3D"
    ];
    const title = [
        "Covid - Hậu Covid 19",
        "Nhi Khoa",
        "Viêm Gan - Tiêu Hóa",
        "Da Liễu",
        "Cơ - Xương - Khớp",
        "Sản - Phụ Khoa",
        "Thận - Tiết Niệu",
        "Lao"
    ];

    return (
        <>
             <Row xs={1} sm={2} md={3} lg={4} className="g-4">
              {/* {Array.from({ length: 4 }).map((_, idx) => ( */}
              {img.map((img, idx) => (
                <Col key={idx} className="col-cus">
                  <Card className="card">
                    <Card.Img variant="top" src={img} className="img-cus" />
                    <Card.Body>
                      <Card.Title>{title[idx]}</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

        </>
    )
}
export default GridBenh;