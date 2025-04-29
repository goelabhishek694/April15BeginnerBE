import React, {useEffect} from "react";
import { Button, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { LoginUser } from "../../calls/users";
function Login() {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try{
      const response = await LoginUser(values);
      console.log(typeof response);
      
      if(response.success){
        console.log("in onFinish login", JSON.stringify(response));
        message.success(response.message);
        localStorage.setItem("token", response.data);
        navigate("/");
      }else{
        message.error(response.message);
      }
    }catch(err){
      message.error(err.message);
    }
    
  };
  useEffect(() => {
      if (localStorage.getItem("token")) {
        navigate("/");
      }
    }, []);
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
