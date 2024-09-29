import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../style/list_benh.css";

const GridBenh = () => {
    
    // khởi tạo biến
    const img = [
        "https://cdn.vovbacsi24.com/VOVBACSI24/uploads/masters/disease/20220224_1645692332.png?AWSAccessKeyId=s3user10042&Expires=1727873072&Signature=8eB54peqvEciOm6vSvcnxr5x2P0%3D",
        "https://cdn.vovbacsi24.com/VOVBACSI24/uploads/masters/disease/Icon_nhom_benh/NhiKhoa.png?AWSAccessKeyId=s3user10042&Expires=1727873072&Signature=7kWOUKPOffZ8klMqsUzuz9jNuR0%3D",
        "https://cdn.vovbacsi24.com/VOVBACSI24/uploads/masters/disease/Icon_nhom_benh/ViemGanTieuHoa.png?AWSAccessKeyId=s3user10042&Expires=1727873072&Signature=Jy2pSns8KCQLZ3eY2t5%2FAZcOd4U%3D",
        "https://cdn.vovbacsi24.com/VOVBACSI24/uploads/masters/disease/Icon_nhom_benh/DaLieu.png?AWSAccessKeyId=s3user10042&Expires=1727873072&Signature=1QuSN2qUnZ3S7fT%2F9FjwZJ82kqk%3D",
        "https://cdn.vovbacsi24.com/VOVBACSI24/uploads/masters/disease/Icon_nhom_benh/CoXuongKhop.png?AWSAccessKeyId=s3user10042&Expires=1727873072&Signature=mDJVCrs%2BbEEXxhknBhaYLVAWUaU%3D",
        "https://cdn.vovbacsi24.com/VOVBACSI24/uploads/masters/disease/Icon_nhom_benh/SanPhuKhoa.png?AWSAccessKeyId=s3user10042&Expires=1727873072&Signature=OnFLrcKeRibCN2pvrP1lpbODVsE%3D",
        "https://cdn.vovbacsi24.com/VOVBACSI24/uploads/masters/disease/Icon_nhom_benh/ThanTietNieu.png?AWSAccessKeyId=s3user10042&Expires=1727873072&Signature=T%2Bw4QORq%2Fc97Qk3rntik9IKwGyY%3D",
        "https://cdn.vovbacsi24.com/VOVBACSI24/uploads/masters/disease/Icon_nhom_benh/BenhLao.png?AWSAccessKeyId=s3user10042&Expires=1727873072&Signature=JuwdJVWxV3TCWm8HQ6bGzPnrx1o%3D"
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