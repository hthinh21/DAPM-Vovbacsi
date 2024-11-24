import React, { useEffect, useState } from "react";
import axios from "axios";

const useFetchBenh = () => {
  const [benh, setBenh] = useState([]); // Lưu danh sách bệnh
  const [error, setError] = useState(null); // Lưu lỗi nếu có
  const [loading, setLoading] = useState(true); // Trạng thái loading

  useEffect(() => {
    const fetchBenh = async () => {
      try {
        const apiUrl = `${process.env.REACT_APP_API_URL}/chuyenkhoa`; // API URL
        console.log("Đang gửi yêu cầu đến URL:", apiUrl);
        const response = await axios.get(apiUrl);

        // Kiểm tra phản hồi và lưu dữ liệu
        setBenh(response.data.result || []); 
        console.log("Dữ liệu nhận được:", response.data.result);
      } catch (error) {
        console.error("Lỗi khi lấy danh sách bệnh:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBenh();
  }, []);

  return { benh, loading, error }; // Trả về các giá trị cần thiết
};

export default useFetchBenh;
