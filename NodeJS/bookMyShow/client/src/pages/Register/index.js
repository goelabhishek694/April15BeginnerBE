import React from "react";
import { Button, Form, Input, message } from "antd";
import { Link } from "react-router-dom";
import { RegisterUser } from "../../calls/users";
import Radio from "antd/es/radio/radio";
function Register() {
  const onFinish = async (values) => {
    try{
      const response = await RegisterUser(values);
      if(response.success){
        message.success(response.message);
      }else{
        message.error(response.message);
      }
    }catch(err){
      message.error(err.message);
    }
    
  };
  return (
    <>
      <header className="App-header">
        <main className="main-area mw-500 text-center px-3">
          <section className="left-section">
            <h1>Register to BookMyShow</h1>
          </section>
          <section className="right-section">
            <Form onFinish={onFinish} layout="vertical">
            <Form.Item
                label="Name"
                htmlFor="name"
                name="name"
                className="d-block"
                rules={[
                  { required: true, message: "Please input your name!" },
                ]}
              >
                <Input id="name" type="text" placeholder="Enter Your Name" />
              </Form.Item>

              <Form.Item
                label="Email"
                htmlFor="email"
                name="email"
                className="d-block"
                rules={[
                  { required: true, message: "Please input your Email!" },
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

              <Form.Item
                label="Register as Partner"
                name="role"
                htmlFor="role"
                className="d-block"
                initialValue={false}
                rules={[
                  { required: true, message: "Please select an option !" },
                ]}
              >
                <div className="d-flex justify-content-start">
                  <Radio.Group name='radiogroup' className="flex-start">
                    <Radio value={'partner'}>Yes</Radio>
                    <Radio value={'user'}>No</Radio>
                  </Radio.Group>
                </div>
              </Form.Item>

              <Form.Item className="d-block">
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ fontSize: "1rem", fontWeight: 600 }}
                >
                  Register
                </Button>
              </Form.Item>
            </Form>
            <div>
                <p>
                    Already a user ? <Link to="/login">Login</Link>
                </p>
            </div>
          </section>
        </main>
      </header>
    </>
  );
}

export default Register;
