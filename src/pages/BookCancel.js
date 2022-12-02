import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function BookCancel() {
  const navigate = useNavigate();
  return (
    <div className="container ">
      <h1 className="">Booking Cancelled</h1>

      <Button className="primary-button" onClick={() => navigate("/")}>
        Return Home
      </Button>
    </div>
  );
}
