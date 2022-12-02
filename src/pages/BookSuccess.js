import { Button } from "antd";
import React, { useEffect, useState } from "react";

import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function BookSuccess() {
  const navigate = useNavigate();
  useEffect(() => {
    toast.success("Booked successfully");
  }, []);
  return (
    <div className="row justify-content-center ">
      <div>
        <img
          className="w-50 rounded mx-auto d-block"
          src="https://cdn.dribbble.com/users/458522/screenshots/14007167/media/214f6fa81fbd40f3b65b2cb747393226.png"
        />
      </div>
      <Button className="primary-button" onClick={() => navigate("/")}>
        Return Home
      </Button>
    </div>
  );
}
