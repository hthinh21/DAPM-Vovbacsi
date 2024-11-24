import React, { useEffect, useState } from "react";
import axios from "axios";

const useFetchHospitals = () => {
  const [hospitals, setHospitals] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const apiUrl = `${process.env.REACT_APP_API_URL}/hospitals`;
        console.log("Đang gửi yêu cầu đến URL:", apiUrl);
        const response = await axios.get(apiUrl);
        setHospitals(response.data.result || []);
        console.log("Dữ liệu nhận được:", response.data.result);
      } catch (error) {
        console.error("Lỗi khi lấy danh sách bệnh viện:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchHospitals();
  }, []);

  return { hospitals, loading, error };
};

export default useFetchHospitals;
