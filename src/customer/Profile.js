import "../style/trangchu.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

const Profile = () => {
  const [name, setName] = useState("");
  const [password, setPass] = useState("");
  const [avatar, setAvatar] = useState("");
  const [email, setEmail] = useState(""); 
  const [previewAvatar, setPreviewAvatar] = useState(null);
  const userId = Cookies.get('userId');

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const fetchUserData = async () => {
      if (!userId) return;

      try {
        const response = await axios.get(
          `http://localhost:3000/users/${userId}`
        );
        const user = response.data;
        setEmail(user.email);
        setAvatar(user.avatar);
        setName(user.name);
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };

    fetchUserData();
  }, [userId]);


  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("password", password);   
    if (avatar) {
      formData.append("avatar", avatar);
    }

    try {
      const response = await axios.put(
        `http://localhost:3000/users/${userId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", 
          },
        }
      );
      console.log(response.data);
      enqueueSnackbar("Cập nhật thông tin thành công", { variant: "success" });
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Có lỗi xảy ra";
      enqueueSnackbar(errorMessage, { variant: "error" });
    }
  };
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewAvatar(null);
    }
  };

  return (
    <>
      <Header></Header>
      <div className="container mt-5">
        <h2 className="text-center">Thay Đổi Thông Tin Cá Nhân</h2>
        <form onSubmit={handleUpdateProfile}>
          {avatar && !previewAvatar && (
            <div className="form-group">
              <label>Ảnh đại diện hiện tại:</label>
              <img
                src={`data:image/jpeg;base64,${avatar}`}
                alt="Avatar"
                style={{ width: "150px", height: "150px", borderRadius: "50%" }}
              />
            </div>
          )}

          {previewAvatar && (
            <div className="form-group">
              <label>Ảnh đại diện mới:</label>
              <img
                src={previewAvatar}
                alt="Avatar Preview"
                style={{ width: "150px", height: "150px", borderRadius: "50%" }}
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="avatar">Thay đổi avatar</label>
            <input
              type="file"
              className="form-control"
              id="avatar"
              onChange={handleAvatarChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Tên người dùng</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Nhập tên người dùng"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              disabled
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mật khẩu mới</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Nhập mật khẩu mới"
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary mt-3">
              Lưu Thay Đổi
            </button>
          </div>
        </form>
      </div>

      <Footer></Footer>
    </>
  );
};
export default Profile;
