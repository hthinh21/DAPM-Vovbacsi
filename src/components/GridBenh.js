import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../style/list_benh.css";

const GridBenh = () => {
    
    // khởi tạo biến
    const img = [
        "https://cdn.vovbacsi24.com/VOVBACSI24/uploads/masters/disease/20220224_1645692332.png?AWSAccessKeyId=s3user10042&Expires=1728407304&Signature=AbaiyxwKe6pBly2v5jfmXcuWKKc%3D",
        "https://cdn.vovbacsi24.com/VOVBACSI24/uploads/masters/disease/Icon_nhom_benh/NhiKhoa.png?AWSAccessKeyId=s3user10042&Expires=1728407304&Signature=ZgtG0yhbyi0k1kkOB%2FSCos6VRAU%3D",
        "https://cdn.vovbacsi24.com/VOVBACSI24/uploads/masters/disease/Icon_nhom_benh/ViemGanTieuHoa.png?AWSAccessKeyId=s3user10042&Expires=1728407304&Signature=SkaoRhex8K1hArrhVoROVM%2B2pjw%3D",
        "https://cdn.vovbacsi24.com/VOVBACSI24/uploads/masters/disease/Icon_nhom_benh/DaLieu.png?AWSAccessKeyId=s3user10042&Expires=1728407304&Signature=mQHqc46%2BXIT1I3HMtJ4NoL10058%3D",
        "https://cdn.vovbacsi24.com/VOVBACSI24/uploads/masters/disease/Icon_nhom_benh/CoXuongKhop.png?AWSAccessKeyId=s3user10042&Expires=1728407304&Signature=UmB2aEYIBkcTAX3HJP%2BVWl9ZDAY%3D",
        "https://cdn.vovbacsi24.com/VOVBACSI24/uploads/masters/disease/Icon_nhom_benh/SanPhuKhoa.png?AWSAccessKeyId=s3user10042&Expires=1728407304&Signature=61YrUE2gE77WnasPQ6NO3vavrTk%3D",
        "https://cdn.vovbacsi24.com/VOVBACSI24/uploads/masters/disease/Icon_nhom_benh/ThanTietNieu.png?AWSAccessKeyId=s3user10042&Expires=1728407304&Signature=oEzm2qSCRor6PuiMcffAMYPhuqo%3D",
        "https://cdn.vovbacsi24.com/VOVBACSI24/uploads/masters/disease/Icon_nhom_benh/BenhLao.png?AWSAccessKeyId=s3user10042&Expires=1728407304&Signature=DOrInztw4oVKINm5lU768mBvjsk%3D"
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