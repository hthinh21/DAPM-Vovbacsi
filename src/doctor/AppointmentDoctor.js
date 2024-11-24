  import Header from "../components/Header";
  import Footer from "../components/Footer";
  import "../style/appointmentDoctor.css"; 
  import { useState, useEffect } from "react";
  import { useParams } from 'react-router-dom';
  import Cookies from 'js-cookie';
  import axios from 'axios';
  import { useSnackbar } from "notistack";
  import { useNavigate } from "react-router-dom";

  const AppointmentDoctor = () => {
    const { doctorId } = useParams();
    const [description, setDescription] = useState("");
    const { enqueueSnackbar } = useSnackbar();
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();
    const userId = Cookies.get('userId');
    

    useEffect(() => {
      if (!userId) {
        navigate('/login');
      } else {
        checkExistingAppointment();
      }
    }, [userId, navigate]);
    const checkExistingAppointment = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/AppointmentDoctor/appointment/${doctorId}`,
          {
            
            withCredentials: true,
          }
        );
        console.log(response.data);
        const hasPendingAppointment = response.data.some(appointment => appointment.status === "pending");
          
          if (hasPendingAppointment) {
            setIsPending(true);
            enqueueSnackbar("Bạn đã đăng ký khám bác sĩ rồi", { variant: "error" });
          }
      } catch (error) {
        console.error("Error checking appointment status:", error);
        enqueueSnackbar("Đã xảy ra lỗi, vui lòng thử lại sau.", { variant: "error" });
      }
    };

    

    const handleSubmit = async (e) => {
      e.preventDefault();
      
      try {
        const response = await axios.post(
          `http://localhost:3000/AppointmentDoctor/${doctorId}`, 
          { 
            description, 
            user_id: userId, 
          },
          {  
            headers: {
              'Content-Type': 'application/json'
            },   
            withCredentials: true, 
          }
        );
        if (response.data) {
          enqueueSnackbar("Đăng ký khám thành công!", { variant: "success" });
          
          navigate(`/doctors/${doctorId}`); 
        }
      } catch (error) {
        console.error("Error:", error);
        enqueueSnackbar("Đã xảy ra lỗi, vui lòng thử lại sau.", { variant: "error" });
      }
    };

    return (
      <>
        <Header />
        <div className="container">
          <h2>ĐĂNG KÝ KHÁM</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Mô tả bệnh</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Bạn không cần nhập nếu như không muốn."
              ></textarea>
            </div>
            <div className="form-group">
              <p className="caption">
                Mọi thông tin bạn gửi đi sẽ là thông tin tham khảo tới bác sĩ.
                <br />
                Các nội dung khám không thể thay thế khám bệnh trực tiếp.
                <br />
                Khi khám, nếu có lời lẽ xúc phạm tới bác sĩ, cuộc khám lập tức bị hủy và phí khám không được hoàn lại.
              </p>
            </div>
            
            <button type="submit" disabled={isPending}>Đăng ký khám</button>
          </form>
        </div>
        <Footer />
      </>
    );
  };

  export default AppointmentDoctor;

