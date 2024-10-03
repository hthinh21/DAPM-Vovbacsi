import {  Route, Routes } from "react-router-dom";

// import './App.css';
import "./style/header.css";
import "./style/allstyle.css";

import "bootstrap/dist/css/bootstrap.min.css";
import TrangChu from "./components/TrangChu";
import Register from "./components/Register";
import Login from "./components/Login";



// import TrangChu from './components/TrangChu';

function App() {
  return (
 

    <>
      <Routes>
        <Route path="/" element={<TrangChu/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />

        
      </Routes>
    </>
    
  );
}


export default App;
