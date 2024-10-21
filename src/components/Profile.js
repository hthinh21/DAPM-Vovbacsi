import "../style/trangchu.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { useNavigate } from 'react-router-dom';
import axios from "axios";


const Profile = () => {
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [name, setName] = useState("");
    const [password, setPass] = useState("");
    const { enqueueSnackbar } = useSnackbar();
    
    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        if (userInfo) {
            setLoggedInUser(userInfo);
        }
    }, []);

const handleUpdateProfile = async (e) => {
    e.preventDefault();

    if (!name || !password) {
        enqueueSnackbar("Vui lòng nhập đầy đủ thông tin", { variant: 'warning' });
        return;
    }

    try {
        // Lấy thông tin người dùng hiện tại từ localStorage
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));

        if (userInfo) {
            // Gửi yêu cầu PUT tới API để cập nhật thông tin người dùng
            const response = await axios.put('http://localhost:3000/profile', {
                name: name,
                password: password
            }, {
                headers: {
                    'Authorization': `Bearer ${userInfo.token}`, // Nếu bạn sử dụng JWT, gửi token qua header
                    'Content-Type': 'application/json'
                }
            });

            // Kiểm tra phản hồi từ server
            if (response.status === 200) {
                const updatedUserInfo = {
                    ...userInfo,
                    name: response.data.name // Cập nhật thông tin tên từ phản hồi
                };

                // Cập nhật lại thông tin người dùng trong localStorage
                localStorage.setItem('userInfo', JSON.stringify(updatedUserInfo));

                // Cập nhật lại state để hiển thị thông tin mới
                setLoggedInUser(updatedUserInfo);

                // Hiển thị thông báo thành công
                enqueueSnackbar("Cập nhật thông tin thành công!", { variant: 'success' });
            } else {
                enqueueSnackbar("Cập nhật không thành công", { variant: 'error' });
            }
        } else {
            enqueueSnackbar("Không tìm thấy thông tin người dùng", { variant: 'error' });
        }
    } catch (error) {
        console.error("Lỗi khi cập nhật thông tin:", error);
        enqueueSnackbar("Đã xảy ra lỗi khi cập nhật thông tin", { variant: 'error' });
    }
};

    return (
        <>
            <Header></Header>
            <div className="container mt-5">
                <h2 className="text-center">Thay Đổi Thông Tin Cá Nhân</h2>
                <form onSubmit={handleUpdateProfile}>
                    <div className="form-group">
                        <label htmlFor="username">Tên người dùng</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="Nhập tên người dùng"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={loggedInUser ? loggedInUser.email : ''}                            
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
                        <button type="submit" className="btn btn-primary mt-3" >Lưu Thay Đổi</button>
                    </div>
                    
                </form>
            </div>


            <Footer></Footer>
        </>
    );
};
export default Profile 