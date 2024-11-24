import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { SnackbarProvider } from 'notistack';
import "./style/header.css";
import "./style/allstyle.css";
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import TrangChu from "./components/TrangChu";
import Register from "./customer/Register";
import Login from "./customer/Login";
import CapCuu from "./components/CapCuu";
import ChiTietCapCuu from "./components/ChiTietCapCuu";
import Profile from "./customer/Profile";
import DoctorList from "./doctor/DoctorList";
import DoctorDetail from "./doctor/DoctorDetail";
import AppointmentDoctor from "./doctor/AppointmentDoctor";
import DoctorLogin from "./doctor/DoctorLogin"; 
import Notifications from "./customer/Notifications";
import DoctorHome from "./doctor/DoctorHome";
// import TrangChu from './components/TrangChu';

function App() {
  
  return (
    <SnackbarProvider maxSnack={3}> {/* Bọc ứng dụng bằng SnackbarProvider */}
      <Routes>
        <Route path="/" element={<TrangChu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sos" element={<CapCuu />} />
        <Route path="/sos/sos-detail" element={<ChiTietCapCuu />} />
        <Route path ="/users/:id" element={<Profile/>}/>
        <Route path="/doctor/login" element={<DoctorLogin />} />
        <Route path="/notifications" element={<Notifications />} />

        <Route path="/doctors/home" element={<DoctorHome />} />
        <Route path="/doctors" element={<DoctorList/>}  />
        <Route path="/doctors/:doctorId" element={<DoctorDetail />} />
        <Route path="/AppointmentDoctor/:doctorId" element={<AppointmentDoctor/>} />
      </Routes>
    </SnackbarProvider>
  );
}

export default App;
