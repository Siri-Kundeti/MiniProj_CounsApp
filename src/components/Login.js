import axios from 'axios';
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login.css';
import { useAuth } from '../context/Auth';

const Login = () => {
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (uname === "admin" && password === "admin") {
      navigate("/admin");
      return;
    }
    else if (uname === "faculty" && password === "123") {
      navigate("/faculty");
      return;
    }
    else if (uname === "student" && password === "1234") {
      navigate("/student");
      return;
    }

    try {
      const res = await axios.post("/api/auth/login", {//here sql
        uname,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <section id="contact" className="block contact-block">
        <Container fluid>
          <Container className="login-container">
            <Row className="justify-content-center">
              <Col md={10} className="login-form" style={{ marginTop: '1cm' }}>
                <h2 style={{ paddingLeft: '100px', paddingBottom: '30px' }}>SignIn</h2>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formUsername">
                    <Form.Label>UserName</Form.Label>
                    <Form.Control
                      type="name"
                      placeholder="Enter UserName"
                      name="name"
                      value={uname}
                      onChange={(e) => setUname(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formPassword">
                    <Form.Label style={{ marginTop: '0.5cm' }}>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter Password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <div className="text-center" style={{ marginTop: '1.3cm' }}>
                    <Button variant="primary" type="submit">
                      Login
                    </Button>
                  </div>
                </Form>
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
    </div>
  );
};

export default Login;