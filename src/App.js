import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

// import './App.css';
import "./style/header.css";
import "./style/allstyle.css";

import "bootstrap/dist/css/bootstrap.min.css";
import TrangChu from "./components/TrangChu";
import Register from "./components/Register";
import Login from "./components/Login";
import CapCuu from "./components/CapCuu";
import ChiTietCapCuu from "./components/ChiTietCapCuu";
import GioiThieu from "./components/GioiThieu";
import ChitietGioiThieu from "./components/ChiTietGioiThieu";
import QuyCheHoatDong from "./components/QuyCheHoatDong";
import ChinhSach from "./components/ChinhSach";
import CoChe from "./components/CoChe";
import HuongDanSD from "./components/HuongDanSD";
import ChiTietHD from "./components/ChiTietHD";

// import TrangChu from './components/TrangChu';

function App() {
  
 


  return (
    <>
      <Routes>
        <Route path="/" element={<TrangChu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sos" element={<CapCuu />} />
        <Route path="/sos/sos-detail" element={<ChiTietCapCuu/>}/>
        <Route path="/gioithieu" element={<GioiThieu/>}/>
        <Route path="/gioithieu/gioithieu-detail" element={<ChitietGioiThieu/>}/>
        <Route path="/quyche" element={<QuyCheHoatDong/>}/>
        <Route path="/chinhsach" element={<ChinhSach/>}/>
        <Route path="/coche" element={<CoChe/>}/>
        <Route path="/huongdan" element={<HuongDanSD/>}/>
        <Route path="/guideline/guideline-detail" element={<ChiTietHD />} />
      </Routes>
    </>
  );
}

export default App;
