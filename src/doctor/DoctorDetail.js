import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "../style/doctorDetail.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AppointmentDoctor from "./AppointmentDoctor";

const DoctorDetail = () => {
    const { doctorId } = useParams();
    const [doctor, setDoctor] = useState(null); 

    useEffect(() => {
        const fetchDoctorDetail = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/doctors/${doctorId}`);
                setDoctor(response.data); 
                const doctorData = response.data;
                if (!doctorData.feedbacks || doctorData.feedbacks.length === 0) {
                    doctorData.feedbacks = [
                        { name: "Đỗ Hoàng Thịnh", rating: 5, comment: "Bác sĩ rất tận tâm và chuyên nghiệp", avatar: null},
                        { name: "Dương Thị Ngọc Hương", rating: 5, comment: "Dịch vụ tuyệt vời, bác sĩ thân thiện", avatar: null },
                        { name: "Vũ Xuân Dương", rating: 5, comment: "Giải thích kỹ lưỡng và rất nhiệt tình", avatar: null },
                        { name: "Trần Thị Hoa", rating: 5, comment: "Bác sĩ rất chu đáo và chuyên nghiệp", avatar: null },
                        { name: "Bùi Thị Thu Hồng", rating: 5, comment: "Tư vấn rất chi tiết, cảm thấy rất an tâm", avatar: null },
                    ];
                }
            } catch (error) {
                console.error("Error fetching doctor details", error);
            }
        };

        fetchDoctorDetail();
    }, [doctorId]); 

    return (
        <>
            <Header />
            <div className="doctor-detail">
                {doctor ? (
                    <>
                        <div className="doctor-info">
                        <img src={`data:image/jpeg;base64,${doctor.avatar}`} alt={doctor.name} className="doctor-avatar" />
                            <h2>{doctor.name}</h2>
                            <p>Đánh giá: {doctor.sao} ⭐</p>
                            <p>Chuyên môn: {doctor.chuyenmon}</p>
                            <p>Chuyên khoa: {doctor.chuyenkhoa}</p>
                            <p>Đơn vị: {doctor.donvi}</p>
                            <p>Năm sinh/Thành lập: {doctor.namsinh}</p>
                            <p>Phí khám: {doctor.phikham} đ</p>
                            <Link to={`/AppointmentDoctor/${doctorId}`}><button className="btn-primary">Đăng ký khám</button></Link>
                            
                        </div>
                        <div className="doctor-feedback">
                            <h3>NHẬN XÉT CỦA BỆNH NHÂN</h3>
                            {doctor.feedbacks.map((feedback, index) => (
                                <div key={index} className="feedback">
                                    <div className="img-avatar pull-left">
                                        
                                    <img src={feedback.avatar || "https://cdn.vovbacsi24.com/VOVBACSI24/img/avatar-user-male-none.png?AWSAccessKeyId=s3user10042&Expires=1731336655&Signature=jDmN5dXGd9zIKJzH28GF9gm498I%3D"} alt={feedback.name} />
                                    </div>
                                    <div className="feedback-content">

                                        <p className="feedback-name">{feedback.name}</p>
                                        <p className="feedback-rating">{feedback.rating} ⭐</p>
                                        <p className="feedback-comment">{feedback.comment}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <p>Loading...</p> // Hiển thị thông báo đang tải nếu doctor là null
                )}
            </div>
            <Footer />
        </>
    );
};

export default DoctorDetail;
