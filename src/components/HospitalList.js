

// HospitalList.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../style/list_hospital.css";
import useFetchHospitals from "../hooks/useFetchHospitals";

const HospitalList = () => {
  const { hospitals, loading, error } = useFetchHospitals();

  // Chia dữ liệu bệnh viện thành các nhóm
  const itemsPerSlide = 8; // 3 cột x 2 hàng = 6 bệnh viện
  const hospitalChunks = [];

  for (let i = 0; i < hospitals.length; i += itemsPerSlide) {
    hospitalChunks.push(hospitals.slice(i, i + itemsPerSlide));
  }

  if (loading) {
    return <p>Đang tải dữ liệu...</p>;
  }

  if (error) {
    return <p>Lỗi khi tải dữ liệu: {error.message}</p>;
  }

  return (
    <Carousel interval={null}>
      {hospitalChunks.map((chunk, index) => (
        <Carousel.Item key={index}>
          <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {chunk.map((hospital) => (
              <Col key={hospital._id} className="col-custom">
                <Card className="card-custom">
                  <Card.Img
                    variant="top"
                    src={hospital.imgUrl || "https://via.placeholder.com/150"}
                    className="img-custom"
                  />
                  <Card.Body>
                    <Card.Title>{hospital.name}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      ))}

      {/* Nếu không có dữ liệu bệnh viện */}
      {hospitals.length === 0 && (
        <Carousel.Item>
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Không có dữ liệu bệnh viện</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
      )}
    </Carousel>
  );
};

export default HospitalList;
