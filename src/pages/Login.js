import { Button, Form, Input } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./doc.jpg";
import toast from "react-hot-toast";
import axios from "axios";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../redux/alertsSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const URL = "https://stayhealthy-backend.onrender.com";
  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      const response = await axios.post(`${URL}/api/user/login`, values);
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        localStorage.setItem("token", response.data.data);
        navigate("/home");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="authentication">
      <h1 className="stay-healthy" style={{ textAlign: "center" }}>
        STAY HEALTHY
      </h1>

      <div className="logos">
        <img src={Logo} alt="logo" width="800px" height="600px" />
      </div>
      <div className="authentication-form card p-3 ">
        {/* <h1 style={{ textAlign: "center" }}>STAY HEALTHY</h1> */}
        <h1 className="card-title">Login Here</h1>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Email" name="email">
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input placeholder="Password" type="password" />
          </Form.Item>

          <Button
            className="primary-button my-2 full-width-button"
            htmlType="submit"
          >
            Login
          </Button>

          <Link to="/register" className="anchor mt-3">
            CLICK HERE TO REGISTER
          </Link>
        </Form>
      </div>
      <footer>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Back to Main Page
        </button>
      </footer>
    </div>
  );
};

export default Login;
