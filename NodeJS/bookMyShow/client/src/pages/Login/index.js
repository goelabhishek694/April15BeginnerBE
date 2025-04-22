import React from "react";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
function Login() {
  const onFinish = () => {
    console.log("form submitted");
    
  };
  return (
    <>
      <header className="App-header">
        <main className="main-area mw-500 text-center px-3">
          <section className="left-section">
            <h1>Login to BookMyShow</h1>
          </section>
          <section className="right-section">
            <Form onFinish={onFinish} layout="vertical">
              <Form.Item
                label="Email"
                htmlFor="email"
                name="email"
                className="d-block"
                rules={[
                  { required: true, message: "Please input your email!" },
                  { type: "email", message: "Please enter a valid email"}
                ]}
              >
                <Input id="email" type="text" placeholder="Enter Your Email" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                htmlFor="password"
                className="d-block"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                />
              </Form.Item>
              <Form.Item className="d-block">
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ fontSize: "1rem", fontWeight: 600 }}
                >
                  Login
                </Button>
              </Form.Item>
            </Form>
            <div>
                <p>
                    New user ? <Link to="/register">Register</Link>
                </p>
            </div>
          </section>
        </main>
      </header>
    </>
  );
}

export default Login;
