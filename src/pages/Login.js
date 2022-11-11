import { Button, Form, Image, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "./doc.svg";

const Login = () => {
  const onFinish = (values) => {
    console.log("Received ", values);
  };

  return (
    <div className="authentication">
      <div className="logo">
        <img src={Logo} />
      </div>
      <div className="authentication-form card p-3">
        <h1 style={{ textAlign: "center" }}>STAY HEALTHY</h1>
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
    </div>
  );
};

export default Login;
