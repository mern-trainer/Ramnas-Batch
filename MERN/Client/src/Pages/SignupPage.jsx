import { api } from "../axios";
import {jwtDecode} from "jwt-decode";
import { useState } from "react";
import {
  Form,
  Button,
  Container,
  Alert,
  Card,
  Row,
  Col,
  FloatingLabel,
} from "react-bootstrap";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import cookie from "../lib/cookie.js"

const SignupPage = () => {
  const [form, setForm] = useState({ name: "", username: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const { data, status } = await api.post("/auth", form);
      if (status !== 201) throw new Error(data.message);
      cookie.set(data.token)
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 shadow-lg" style={{ width: "28rem", backgroundColor: "#f8f9fa" }}>
        <Card.Title className="text-center mb-4">
          <FaUser className="me-2" />
          Create Your Account
        </Card.Title>
        {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
        <Form onSubmit={handleSignup}>
          <Row className="g-3">
            <Col md>
              <FloatingLabel controlId="formName" label="Full Name">
                <Form.Control
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="formUsername" label="Username">
                <Form.Control
                  type="text"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  required
                  placeholder="johndoe"
                />
              </FloatingLabel>
            </Col>
          </Row>
          <FloatingLabel controlId="formEmail" label="Email address" className="mt-3">
            <Form.Control
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="johndoe@example.com"
            />
          </FloatingLabel>
          <FloatingLabel controlId="formPassword" label="Password" className="mt-3">
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </FloatingLabel>
          <Button
            variant="dark"
            type="submit"
            className="mt-3 w-100"
          >
            <FaLock className="me-2" />
            Signup
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default SignupPage;

