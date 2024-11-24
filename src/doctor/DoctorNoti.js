import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

const DoctorNoti = () => {
  return (
    <>
      <Header />
      <div className="container">
        <h1>Thông báo</h1>
      </div>
      <Footer />
    </>
  );
};

export default DoctorNoti;
