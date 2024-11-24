import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Cookies from "js-cookie";
import Footer from "../components/Footer";
import Header from "../components/Header";

const DoctorHome = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);

  const doctorId = Cookies.get("userId"); 

  // Lấy danh sách thông báo
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/doctors/notifications/${doctorId}`)
      .then((response) => {
        setNotifications(response.data.notifications);
        console.log(response.data.notifications);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy danh sách thông báo:", error);
        setLoading(false);
      });
  }, [doctorId]);

  // Cập nhật trạng thái thông báo
  const updateAppointmentStatus = (appointmentId, status) => {
    axios
      .put(`http://localhost:3000/doctors/updateAppointment/${appointmentId}`, { status })
      .then((response) => {
        setNotifications(
          notifications.map((notification) =>
            notification.appointment._id === appointmentId
              ? { ...notification, appointment: { ...notification.appointment, status: response.data.appointment.status } }
              : notification
          )
        );
      })
      .catch((error) => {
        console.error("Lỗi khi cập nhật trạng thái cuộc hẹn:", error);
      });
  };

  return (
    <>
    
      <Navbar />
      <div className="mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-center w-full">
          Thông Báo
        </h1>
        {loading ? (
          <p>Đang tải...</p>
        ) : (
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">STT</th>
                <th className="border border-gray-300 px-4 py-2">ID</th>
                <th className="border border-gray-300 px-4 py-2">
                  Người Dùng
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Email
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Ngày Đặt Lịch
                </th>
                <th className="border border-gray-300 px-4 py-2">Bác sĩ</th>
                <th className="border border-gray-300 px-4 py-2">Trạng Thái</th>
                <th className="border border-gray-300 px-4 py-2">Thao Tác</th>
              </tr>
            </thead>
            <tbody>
              {notifications.map((notification, index) => (
                <tr key={notification._id}>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {index + 1}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {notification.appointment?._id || "N/A"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {notification.user?.name || "N/A"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {notification.user?.email || "N/A"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {notification.appointment?.datetime || "N/A"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {notification.doctor?.name || "N/A"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {notification.appointment?.status || "N/A"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <button
                      className="bg-green-500 text-white px-2 py-1 rounded-md mr-2"
                      onClick={() =>
                        updateAppointmentStatus(notification.appointment._id, "accepted")
                      }
                    >
                      Chấp Nhận
                    </button>
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded-md"
                      onClick={() =>
                        updateAppointmentStatus(notification.appointment._id, "rejected")
                      }
                    >
                      Từ Chối
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <Footer />
    </>
  );
};

export default DoctorHome;
